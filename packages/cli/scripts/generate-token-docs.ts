#!/usr/bin/env bun
/**
 * Generates "Primitives" and "Semantics" pages inside a .fig document,
 * visualizing every variable in its "Primitives" and "Semantic" collections
 * (color swatches, spacing/font-size bars, radius/opacity swatches, font
 * weight/family/line-height samples, and semantic type-style specimens) with
 * live variable bindings, not literal copies.
 *
 * Assumes the base-ui-kit token taxonomy: Primitives holds top-level groups
 * color/spacing/font-size/radius/opacity/font-weight/line-height/font-family;
 * Semantic holds aliases grouped as color/{background,text,border,foreground,
 * ...}, font/<style>/{size,line-height,weight}, font-weight, radius, spacing,
 * state. A document with a differently-shaped token collection will produce
 * a partial or empty page rather than an error.
 *
 * Usage: bun run packages/cli/scripts/generate-token-docs.ts <file.fig>
 */
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { FigmaAPI, type FigmaFrameNode, type FigmaNodeProxy, type FigmaTextNode } from '@open-pencil/core/figma-api'
import { BUILTIN_IO_FORMATS, IORegistry } from '@open-pencil/core/io'
import { computeAllLayouts } from '@open-pencil/core/layout'
import type { SceneGraph, Variable, VariableType } from '@open-pencil/scene-graph'

import { loadDocument, populateWholeDocument } from '#cli/headless'

let figma: FigmaAPI

// ---------- palette ----------

const INK = '#0E0D26'
const SUBTLE = '#757590'
const FAINT = '#9A9CA8'
const CARD_BG = '#FFFFFF'
const CARD_BORDER = '#E5E6E7'
const PANEL_BG = '#F8F8F8'
const ACCENT = '#1971ED'

const WEIGHT_STYLE: Record<number, string> = {
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black'
}

// ---------- variable helpers ----------

interface VarEntry {
  id: string
  name: string
  leaf: string
  type: VariableType
}

interface ColorEntry extends VarEntry {
  hex: string
}

interface NumberEntry extends VarEntry {
  value: number
}

function hexFromColor(c: { r: number; g: number; b: number }): string {
  const toByte = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0').toUpperCase()
  return `#${toByte(c.r)}${toByte(c.g)}${toByte(c.b)}`
}

function resolveValue(variable: Variable): unknown {
  const modeId = Object.keys(variable.valuesByMode)[0]
  let value: unknown = variable.valuesByMode[modeId]
  const seen = new Set<string>()
  while (value && typeof value === 'object' && 'aliasId' in (value as Record<string, unknown>)) {
    const aliasId = (value as { aliasId: string }).aliasId
    if (seen.has(aliasId)) throw new Error(`Alias cycle at ${aliasId}`)
    seen.add(aliasId)
    const target = figma.getVariableById(aliasId)
    if (!target) throw new Error(`Missing alias target ${aliasId}`)
    value = target.valuesByMode[Object.keys(target.valuesByMode)[0]]
  }
  return value
}

function collectionVars(collectionName: string): Variable[] {
  const collection = figma
    .getLocalVariableCollections()
    .find((c) => c.name.toLowerCase() === collectionName.toLowerCase())
  if (!collection) return []
  return collection.variableIds
    .map((id) => figma.getVariableById(id))
    .filter((v): v is Variable => v !== null)
}

function groupByTop(vars: Variable[], top: string): Variable[] {
  return vars.filter((v) => v.name.split('/')[0] === top)
}

function toColorEntries(vars: Variable[]): ColorEntry[] {
  return vars.map((v) => ({
    id: v.id,
    name: v.name,
    leaf: v.name.split('/').slice(2).join('/'),
    type: v.type,
    hex: hexFromColor(resolveValue(v) as { r: number; g: number; b: number })
  }))
}

// .fig stores numeric variable values as float32; reading them back as
// float64 surfaces round-trip noise (e.g. 1.1 -> 1.0999999046325683).
// Round to 4 decimal places, well above real token precision (thousandths),
// to strip that noise from both the displayed text and the literal value
// set on nodes before binding takes over.
function roundFloat32Noise(n: number): number {
  return Math.round(n * 10000) / 10000
}

function toNumberEntries(vars: Variable[]): NumberEntry[] {
  return vars.map((v) => ({
    id: v.id,
    name: v.name,
    leaf: v.name.split('/').slice(1).join('/'),
    type: v.type,
    value: roundFloat32Noise(resolveValue(v) as number)
  }))
}

// ---------- node-building helpers ----------

function hexToColor(hex: string) {
  const h = hex.replace('#', '')
  return {
    r: Number.parseInt(h.substring(0, 2), 16) / 255,
    g: Number.parseInt(h.substring(2, 4), 16) / 255,
    b: Number.parseInt(h.substring(4, 6), 16) / 255,
    a: 1
  }
}

function makeFrame(parent: FigmaNodeProxy | null, name: string): FigmaFrameNode {
  const n = figma.createFrame()
  n.x = 0
  n.y = 0
  n.resize(10, 10)
  n.name = name
  if (parent) parent.appendChild(n)
  return n
}

interface AutoLayoutOpts {
  padding?: number
  paddingHorizontal?: number
  paddingVertical?: number
  align?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN'
  counterAlign?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE'
}

function autoLayout(n: FigmaFrameNode, dir: 'HORIZONTAL' | 'VERTICAL', spacing: number, opts: AutoLayoutOpts = {}) {
  n.layoutMode = dir
  n.primaryAxisSizingMode = 'AUTO'
  n.counterAxisSizingMode = 'AUTO'
  n.itemSpacing = spacing
  n.paddingTop = opts.paddingVertical ?? opts.padding ?? 0
  n.paddingBottom = opts.paddingVertical ?? opts.padding ?? 0
  n.paddingLeft = opts.paddingHorizontal ?? opts.padding ?? 0
  n.paddingRight = opts.paddingHorizontal ?? opts.padding ?? 0
  if (opts.align) n.primaryAxisAlignItems = opts.align
  if (opts.counterAlign) n.counterAxisAlignItems = opts.counterAlign
  return n
}

function fillSolid(n: FigmaNodeProxy, hex: string, opacity = 1) {
  n.fills = [{ type: 'SOLID', color: hexToColor(hex), opacity, visible: true }]
}

function strokeSolid(n: FigmaNodeProxy, hex: string, weight = 1) {
  n.strokes = [{ color: hexToColor(hex), weight, opacity: 1, visible: true, align: 'INSIDE' }]
}

function rect(parent: FigmaNodeProxy, w: number, h: number, name = 'Rectangle') {
  const n = figma.createRectangle()
  n.x = 0
  n.y = 0
  n.resize(Math.max(w, 1), Math.max(h, 1))
  n.name = name
  parent.appendChild(n)
  return n
}

interface TextOpts {
  size?: number
  style?: string
  color?: string
  width?: number
  name?: string
  lineHeight?: number
  autoResize?: 'NONE' | 'HEIGHT' | 'WIDTH_AND_HEIGHT' | 'TRUNCATE'
}

// 'WIDTH_AND_HEIGHT' auto-resize is never remeasured by this pipeline outside
// the live editor (a node stays at its placeholder box, wrapping every
// character onto its own line). 'HEIGHT' mode (fixed width, computed height)
// IS remeasured correctly, so every text node here uses a fixed width -
// explicit, or estimated from content length - and grows height only.
function text(parent: FigmaNodeProxy, content: string, opts: TextOpts = {}): FigmaTextNode {
  const n = figma.createText()
  n.x = 0
  n.y = 0
  const size = opts.size || 12
  const longestLine = content.split('\n').reduce((m, l) => Math.max(m, l.length), 0)
  const estWidth = Math.max(24, Math.ceil(longestLine * size * 0.62))
  const w = opts.width || estWidth
  n.resize(Math.max(w, 1), Math.max(Math.ceil(size * 1.4), 1))
  n.name = opts.name || 'Text'
  parent.appendChild(n)
  n.textAutoResize = opts.autoResize || 'HEIGHT'
  n.characters = content
  n.fontSize = size
  n.fontName = { family: 'Inter', style: opts.style || 'Regular' }
  fillSolid(n, opts.color || INK)
  if (opts.lineHeight !== undefined) (n as FigmaNodeProxy).lineHeight = opts.lineHeight
  return n
}

function sectionCard(parent: FigmaFrameNode, title: string, subtitle?: string) {
  const card = makeFrame(parent, title)
  autoLayout(card, 'VERTICAL', 20, { padding: 32 })
  fillSolid(card, CARD_BG)
  strokeSolid(card, CARD_BORDER, 1)
  card.cornerRadius = 16
  const head = makeFrame(card, 'Header')
  autoLayout(head, 'VERTICAL', 4)
  text(head, title, { size: 20, style: 'Bold', color: INK })
  if (subtitle) text(head, subtitle, { size: 12, style: 'Regular', color: SUBTLE })
  return card
}

// ---------- colors ----------

function buildColorSwatch(parent: FigmaNodeProxy, item: ColorEntry, cardW: number) {
  const card = makeFrame(parent, item.name)
  autoLayout(card, 'VERTICAL', 6, { counterAlign: 'CENTER' })
  const sw = rect(card, cardW, cardW, `${item.name} swatch`)
  sw.cornerRadius = 10
  fillSolid(sw, item.hex)
  strokeSolid(sw, CARD_BORDER, 1)
  figma.bindVariable(sw.id, 'fills/0/color', item.id)
  text(card, item.leaf, { size: 11, style: 'Medium', color: INK })
  text(card, item.hex, { size: 10, style: 'Regular', color: FAINT })
}

function buildColorGrid(
  parent: FigmaFrameNode,
  groups: Array<{ label: string; items: ColorEntry[] }>
) {
  const grid = makeFrame(parent, 'Color grid')
  autoLayout(grid, 'VERTICAL', 20)
  for (const g of groups) {
    if (!g.items.length) continue
    const row = makeFrame(grid, g.label)
    autoLayout(row, 'HORIZONTAL', 16, { counterAlign: 'CENTER' })
    const label = text(row, g.label, { size: 13, style: 'Bold', color: INK, width: 120 })
    label.layoutSizingHorizontal = 'FIXED'
    const swatches = makeFrame(row, `${g.label} swatches`)
    autoLayout(swatches, 'HORIZONTAL', 12)
    for (const item of g.items) buildColorSwatch(swatches, item, 64)
  }
}

function buildColorList(parent: FigmaNodeProxy, items: ColorEntry[]) {
  const grid = makeFrame(parent, 'Color list')
  autoLayout(grid, 'HORIZONTAL', 12)
  for (const item of items) buildColorSwatch(grid, item, 64)
}

// ---------- spacing / bars ----------

function buildBarRow(parent: FigmaNodeProxy, item: NumberEntry, color: string, barHeight: number) {
  const row = makeFrame(parent, item.name)
  autoLayout(row, 'HORIZONTAL', 16, { counterAlign: 'CENTER' })
  const label = text(row, item.leaf, { size: 12, style: 'Medium', color: INK, width: 110 })
  label.layoutSizingHorizontal = 'FIXED'
  const bar = rect(row, Math.max(item.value, 2), barHeight, `${item.name} bar`)
  bar.cornerRadius = 3
  fillSolid(bar, color)
  figma.bindVariable(bar.id, 'width', item.id)
  text(row, `${item.value}px`, { size: 11, style: 'Regular', color: SUBTLE })
}

function buildBarScale(parent: FigmaFrameNode, items: NumberEntry[], color: string, barHeight: number) {
  const list = makeFrame(parent, 'Scale')
  autoLayout(list, 'VERTICAL', 8)
  for (const item of items) buildBarRow(list, item, color, barHeight)
}

// ---------- radius ----------

function buildRadiusSwatch(parent: FigmaNodeProxy, item: NumberEntry) {
  const card = makeFrame(parent, item.name)
  autoLayout(card, 'VERTICAL', 6, { counterAlign: 'CENTER' })
  const sw = rect(card, 72, 72, `${item.name} swatch`)
  fillSolid(sw, PANEL_BG)
  strokeSolid(sw, CARD_BORDER, 1)
  sw.cornerRadius = item.value
  figma.bindVariable(sw.id, 'cornerRadius', item.id)
  text(card, item.leaf, { size: 11, style: 'Medium', color: INK })
  text(card, `${item.value}px`, { size: 10, style: 'Regular', color: FAINT })
}

function buildRadiusGrid(parent: FigmaFrameNode, items: NumberEntry[]) {
  const grid = makeFrame(parent, 'Radius grid')
  autoLayout(grid, 'HORIZONTAL', 16)
  grid.resize(900, 100)
  grid.primaryAxisSizingMode = 'FIXED'
  grid.counterAxisSizingMode = 'AUTO'
  grid.layoutWrap = 'WRAP'
  for (const item of items) buildRadiusSwatch(grid, item)
}

// ---------- opacity ----------

function buildOpacitySwatch(parent: FigmaNodeProxy, item: NumberEntry) {
  const card = makeFrame(parent, item.name)
  autoLayout(card, 'VERTICAL', 6, { counterAlign: 'CENTER' })
  const backdrop = rect(card, 72, 72, `${item.name} backdrop`)
  fillSolid(backdrop, PANEL_BG)
  strokeSolid(backdrop, CARD_BORDER, 1)
  backdrop.cornerRadius = 10
  const overlay = rect(backdrop, 72, 72, `${item.name} overlay`)
  overlay.x = 0
  overlay.y = 0
  fillSolid(overlay, ACCENT)
  overlay.opacity = item.value
  overlay.cornerRadius = 10
  overlay.layoutPositioning = 'ABSOLUTE'
  figma.bindVariable(overlay.id, 'opacity', item.id)
  text(card, item.leaf, { size: 11, style: 'Medium', color: INK })
  text(card, String(item.value), { size: 10, style: 'Regular', color: FAINT })
}

// ---------- font weight ----------

function buildWeightSample(parent: FigmaNodeProxy, item: NumberEntry) {
  const card = makeFrame(parent, item.name)
  autoLayout(card, 'VERTICAL', 6)
  const sample = text(card, `Ag ${item.value}`, { size: 22, style: WEIGHT_STYLE[item.value] || 'Regular', color: INK })
  sample.fontWeight = item.value
  text(card, item.leaf, { size: 11, style: 'Regular', color: SUBTLE })
}

// ---------- line height ----------

function buildLineHeightSample(parent: FigmaNodeProxy, item: NumberEntry) {
  const row = makeFrame(parent, item.name)
  autoLayout(row, 'HORIZONTAL', 16, { counterAlign: 'CENTER' })
  const label = text(row, `${item.leaf} · ${item.value}`, { size: 12, style: 'Medium', color: INK, width: 150 })
  label.layoutSizingHorizontal = 'FIXED'
  const sample = text(row, 'Line one of sample text\nLine two of sample text', {
    size: 14,
    style: 'Regular',
    color: INK,
    width: 320
  })
  sample.layoutSizingHorizontal = 'FIXED'
  ;(sample as FigmaNodeProxy).lineHeight = item.value
  figma.bindVariable(sample.id, 'lineHeight', item.id)
}

// ---------- font family ----------

function buildFontFamilySample(parent: FigmaNodeProxy, item: VarEntry & { value: string }) {
  const card = makeFrame(parent, item.name)
  autoLayout(card, 'VERTICAL', 6)
  const sample = text(card, `${item.value} — The quick brown fox jumps`, { size: 18, style: 'Regular', color: INK })
  sample.fontName = { family: item.value, style: 'Regular' }
  figma.bindVariable(sample.id, 'fontFamily', item.id)
  text(card, item.leaf, { size: 11, style: 'Regular', color: SUBTLE })
}

// ---------- font composite (semantic) ----------

interface FontGroup {
  group: string
  sizeId: string
  sizeValue: number
  lhId: string
  lhValue: number
  weightId: string
  weightValue: number
}

function buildFontGroupSample(parent: FigmaNodeProxy, g: FontGroup) {
  const row = makeFrame(parent, g.group)
  autoLayout(row, 'VERTICAL', Math.max(24, Math.round(g.sizeValue * 0.45)), { padding: 20 })
  fillSolid(row, PANEL_BG)
  row.cornerRadius = 12
  const sample = text(row, `Ag ${g.group}`, {
    size: g.sizeValue,
    style: WEIGHT_STYLE[g.weightValue] || 'Regular',
    color: INK,
    lineHeight: g.lhValue
  })
  sample.fontWeight = g.weightValue
  figma.bindVariable(sample.id, 'fontSize', g.sizeId)
  figma.bindVariable(sample.id, 'lineHeight', g.lhId)
  text(row, `font/${g.group} · ${g.sizeValue}px / lh ${g.lhValue} / weight ${g.weightValue}`, {
    size: 11,
    style: 'Regular',
    color: SUBTLE
  })
}

// ---------- data prep ----------

const PALETTE_ORDER = ['base', 'ocean', 'sky', 'mid', 'land', 'earth', 'error', 'berry', 'sun', 'grain']
const SEM_COLOR_GROUP_ORDER = ['background', 'text', 'border', 'foreground']
const FONT_GROUP_ORDER = [
  'heading-2xl',
  'heading-xl',
  'heading-lg',
  'heading-lg-light',
  'heading-md',
  'heading-sm',
  'heading-xs',
  'text-sm',
  'text-md',
  'text-md-strong'
]

function shadeSortKey(leaf: string): [number, number] {
  return leaf === 'white' ? [0, 0] : [1, Number.parseInt(leaf, 10)]
}

function byNumericValue(a: NumberEntry, b: NumberEntry) {
  return a.value - b.value
}

function buildPrimitivesPage(): string {
  const prims = collectionVars('Primitives')

  const colorPalettes = PALETTE_ORDER.map((palette) => ({
    label: palette,
    items: toColorEntries(groupByTop(prims, 'color').filter((v) => v.name.split('/')[1] === palette)).sort(
      (a, b) => {
        const [ta, na] = shadeSortKey(a.leaf)
        const [tb, nb] = shadeSortKey(b.leaf)
        return ta - tb || na - nb
      }
    )
  }))

  const spacing = toNumberEntries(groupByTop(prims, 'spacing')).sort(byNumericValue)
  const fontSize = toNumberEntries(groupByTop(prims, 'font-size')).sort(byNumericValue)
  const radius = toNumberEntries(groupByTop(prims, 'radius')).sort(byNumericValue)
  const lineHeight = toNumberEntries(groupByTop(prims, 'line-height')).sort(byNumericValue)
  const fontWeight = toNumberEntries(groupByTop(prims, 'font-weight')).sort(byNumericValue)
  const opacity = toNumberEntries(groupByTop(prims, 'opacity'))
  const fontFamily = groupByTop(prims, 'font-family').map((v) => ({
    id: v.id,
    name: v.name,
    leaf: v.name.split('/')[1],
    type: v.type,
    value: resolveValue(v) as string
  }))

  const page = figma.createPage()
  page.name = 'Primitives'
  const root = makeFrame(page, 'Primitives')
  autoLayout(root, 'VERTICAL', 40, { padding: 48 })
  fillSolid(root, PANEL_BG)

  text(root, 'Primitives', { size: 32, style: 'Bold', color: INK })
  text(root, 'Base UI Kit · raw design tokens — the source of truth every Semantic alias points back to.', {
    size: 13,
    color: SUBTLE
  })

  const colorCount = colorPalettes.reduce((n, g) => n + g.items.length, 0)
  buildColorGrid(sectionCard(root, 'Color', `${colorCount} swatches across ${colorPalettes.length} palettes`), colorPalettes)
  buildBarScale(sectionCard(root, 'Spacing', `${spacing.length} steps`), spacing, ACCENT, 16)
  buildBarScale(sectionCard(root, 'Font Size', `${fontSize.length} steps`), fontSize, '#00B35F', 10)
  buildRadiusGrid(sectionCard(root, 'Radius', `${radius.length} steps`), radius)

  const lineHeightCard = sectionCard(root, 'Line Height', `${lineHeight.length} steps`)
  const lhList = makeFrame(lineHeightCard, 'Line height list')
  autoLayout(lhList, 'VERTICAL', 10)
  for (const item of lineHeight) buildLineHeightSample(lhList, item)

  const weightCard = sectionCard(root, 'Font Weight', `${fontWeight.length} weights`)
  const weightRow = makeFrame(weightCard, 'Weights')
  autoLayout(weightRow, 'HORIZONTAL', 28)
  for (const item of fontWeight) buildWeightSample(weightRow, item)

  const familyCard = sectionCard(root, 'Font Family', `${fontFamily.length} families`)
  const familyList = makeFrame(familyCard, 'Families')
  autoLayout(familyList, 'VERTICAL', 12)
  for (const item of fontFamily) buildFontFamilySample(familyList, item)

  const opacityCard = sectionCard(root, 'Opacity', `${opacity.length} token`)
  const opRow = makeFrame(opacityCard, 'Opacity row')
  autoLayout(opRow, 'HORIZONTAL', 20)
  for (const item of opacity) buildOpacitySwatch(opRow, item)

  return page.id
}

function buildSemanticPage(): string {
  const sems = collectionVars('Semantic')
  const semColors = groupByTop(sems, 'color')

  const colorGroups = SEM_COLOR_GROUP_ORDER.map((group) => ({
    label: group,
    items: toColorEntries(
      semColors.filter((v) => {
        const parts = v.name.split('/')
        return parts.length >= 3 && parts[1] === group
      })
    )
      .map((e) => ({ ...e, leaf: e.name.split('/').slice(2).join('/') }))
      .sort((a, b) => a.leaf.localeCompare(b.leaf))
  }))

  const colorMisc = toColorEntries(
    semColors.filter((v) => v.name.split('/').length === 2)
  )
    .map((e) => ({ ...e, leaf: e.name.split('/')[1] }))
    .sort((a, b) => a.leaf.localeCompare(b.leaf))

  const radius = toNumberEntries(groupByTop(sems, 'radius')).sort(byNumericValue)
  const spacing = toNumberEntries(groupByTop(sems, 'spacing')).sort(byNumericValue)
  const fontWeight = toNumberEntries(groupByTop(sems, 'font-weight')).sort(byNumericValue)
  const state = toNumberEntries(groupByTop(sems, 'state'))

  const byName = new Map(sems.map((v) => [v.name, v]))
  const fontGroups: FontGroup[] = FONT_GROUP_ORDER.filter((g) => byName.has(`font/${g}/size`)).map((group) => {
    const size = byName.get(`font/${group}/size`)!
    const lh = byName.get(`font/${group}/line-height`)!
    const weight = byName.get(`font/${group}/weight`)!
    return {
      group,
      sizeId: size.id,
      sizeValue: roundFloat32Noise(resolveValue(size) as number),
      lhId: lh.id,
      lhValue: roundFloat32Noise(resolveValue(lh) as number),
      weightId: weight.id,
      weightValue: roundFloat32Noise(resolveValue(weight) as number)
    }
  })

  const page = figma.createPage()
  page.name = 'Semantics'
  const root = makeFrame(page, 'Semantics')
  autoLayout(root, 'VERTICAL', 40, { padding: 48 })
  fillSolid(root, PANEL_BG)

  text(root, 'Semantics', { size: 32, style: 'Bold', color: INK })
  text(root, 'Aliases into Primitives — rename the intent, the value stays wired to the source token.', {
    size: 13,
    color: SUBTLE
  })

  const colorCount = colorGroups.reduce((n, g) => n + g.items.length, 0) + colorMisc.length
  const colorCard = sectionCard(root, 'Color', `${colorCount} semantic colors`)
  buildColorGrid(colorCard, colorGroups)
  if (colorMisc.length) {
    const miscRow = makeFrame(colorCard, 'Misc')
    autoLayout(miscRow, 'HORIZONTAL', 16, { counterAlign: 'CENTER' })
    const label = text(miscRow, 'other', { size: 13, style: 'Bold', color: INK })
    label.layoutSizingHorizontal = 'FIXED'
    buildColorList(miscRow, colorMisc)
  }

  if (fontGroups.length) {
    const typeCard = sectionCard(root, 'Typography', `${fontGroups.length} text styles`)
    const typeGrid = makeFrame(typeCard, 'Type grid')
    autoLayout(typeGrid, 'VERTICAL', 12)
    for (const g of fontGroups) buildFontGroupSample(typeGrid, g)
  }

  if (fontWeight.length) {
    const weightCard = sectionCard(root, 'Font Weight', `${fontWeight.length} aliases`)
    const weightRow = makeFrame(weightCard, 'Weights')
    autoLayout(weightRow, 'HORIZONTAL', 28)
    for (const item of fontWeight) buildWeightSample(weightRow, item)
  }

  if (radius.length) buildRadiusGrid(sectionCard(root, 'Radius', `${radius.length} aliases`), radius)
  if (spacing.length) buildBarScale(sectionCard(root, 'Spacing', `${spacing.length} aliases`), spacing, ACCENT, 16)

  if (state.length) {
    const stateCard = sectionCard(root, 'State', `${state.length} token`)
    const stateRow = makeFrame(stateCard, 'State row')
    autoLayout(stateRow, 'HORIZONTAL', 20)
    for (const item of state) buildOpacitySwatch(stateRow, item)
  }

  return page.id
}

// ---------- entry point ----------

export function generateTokenDocs(graph: SceneGraph): {
  primitivesPageId: string
  semanticsPageId: string
} {
  figma = new FigmaAPI(graph)
  const primitivesPageId = buildPrimitivesPage()
  const semanticsPageId = buildSemanticPage()
  computeAllLayouts(graph)
  return { primitivesPageId, semanticsPageId }
}

async function main() {
  const file = process.argv[2]
  if (!file) {
    console.error('Usage: bun run packages/cli/scripts/generate-token-docs.ts <file.fig>')
    process.exit(1)
  }
  const filePath = resolve(file)
  const graph = await loadDocument(filePath)
  populateWholeDocument(graph)

  const { primitivesPageId, semanticsPageId } = generateTokenDocs(graph)

  const io = new IORegistry(BUILTIN_IO_FORMATS)
  const result = await io.writeDocument('fig', graph)
  await writeFile(filePath, result.data as Uint8Array)

  console.log(JSON.stringify({ primitivesPageId, semanticsPageId, written: filePath }, null, 2))
}

if (import.meta.main) main()

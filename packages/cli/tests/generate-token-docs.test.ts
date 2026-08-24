import { describe, expect, test } from 'bun:test'

import { FigmaAPI } from '@open-pencil/core/figma-api'
import { SceneGraph } from '@open-pencil/scene-graph'

import { generateTokenDocs } from '../scripts/generate-token-docs'

function seedTokens(graph: SceneGraph) {
  const api = new FigmaAPI(graph)

  const primitives = api.createVariableCollection('Primitives')
  const oceanColor = api.createVariable('color/ocean/500', 'COLOR', primitives.id, {
    r: 0.1,
    g: 0.2,
    b: 0.9,
    a: 1
  })
  const spacing = api.createVariable('spacing/4', 'FLOAT', primitives.id, 16)
  const fontSize = api.createVariable('font-size/2', 'FLOAT', primitives.id, 24)
  const radius = api.createVariable('radius/4', 'FLOAT', primitives.id, 8)
  // A value that has been through a float32 round-trip (as .fig binary storage
  // does), to catch precision noise creeping back into rendered/bound values.
  const noisyLineHeight = api.createVariable(
    'line-height/lh-noisy',
    'FLOAT',
    primitives.id,
    Math.fround(1.1)
  )
  const fontWeight = api.createVariable('font-weight/600', 'FLOAT', primitives.id, 600)
  const noisyOpacity = api.createVariable(
    'opacity/disabled',
    'FLOAT',
    primitives.id,
    Math.fround(0.4)
  )
  api.createVariable('font-family/sans', 'STRING', primitives.id, 'Inter')

  const semantic = api.createVariableCollection('Semantic')
  const backgroundPrimary = api.createVariable('color/background/primary', 'COLOR', semantic.id, {
    aliasId: oceanColor.id
  })
  api.createVariable('radius/md', 'FLOAT', semantic.id, { aliasId: radius.id })
  api.createVariable('spacing/sm', 'FLOAT', semantic.id, { aliasId: spacing.id })
  api.createVariable('font-weight/regular', 'FLOAT', semantic.id, { aliasId: fontWeight.id })
  api.createVariable('state/disabled-opacity', 'FLOAT', semantic.id, { aliasId: noisyOpacity.id })
  api.createVariable('font/heading-lg/size', 'FLOAT', semantic.id, { aliasId: fontSize.id })
  api.createVariable('font/heading-lg/line-height', 'FLOAT', semantic.id, {
    aliasId: noisyLineHeight.id
  })
  api.createVariable('font/heading-lg/weight', 'FLOAT', semantic.id, { aliasId: fontWeight.id })

  return { oceanColor, fontSize, noisyLineHeight, noisyOpacity, backgroundPrimary }
}

function textCharacters(graph: SceneGraph, pageId: string): string[] {
  const api = new FigmaAPI(graph)
  const page = api.getNodeById(pageId)
  if (!page) return []
  return page.findAll((node) => node.type === 'TEXT').map((node) => node.characters)
}

function boundTo(graph: SceneGraph, pageId: string, variableId: string): boolean {
  const api = new FigmaAPI(graph)
  const page = api.getNodeById(pageId)
  if (!page) return false
  return page
    .findAll()
    .some((node) => Object.values(graph.getNode(node.id)?.boundVariables ?? {}).includes(variableId))
}

describe('generateTokenDocs', () => {
  test('creates Primitives and Semantics pages with live variable bindings', () => {
    const graph = new SceneGraph()
    const { oceanColor, fontSize, backgroundPrimary } = seedTokens(graph)

    const { primitivesPageId, semanticsPageId } = generateTokenDocs(graph)

    const api = new FigmaAPI(graph)
    expect(api.getNodeById(primitivesPageId)?.name).toBe('Primitives')
    expect(api.getNodeById(semanticsPageId)?.name).toBe('Semantics')

    expect(boundTo(graph, primitivesPageId, oceanColor.id)).toBe(true)
    expect(boundTo(graph, primitivesPageId, fontSize.id)).toBe(true)
    expect(boundTo(graph, semanticsPageId, backgroundPrimary.id)).toBe(true)
  })

  test('rounds float32 round-trip noise out of displayed numeric values', () => {
    const graph = new SceneGraph()
    seedTokens(graph)

    const { primitivesPageId, semanticsPageId } = generateTokenDocs(graph)

    const primitivesText = textCharacters(graph, primitivesPageId)
    expect(primitivesText).toContain('lh-noisy · 1.1')
    expect(primitivesText).toContain('disabled')
    expect(primitivesText).not.toContain('0.4000000059604645')
    expect(primitivesText.some((text) => text.includes('1.0999999'))).toBe(false)

    const semanticsText = textCharacters(graph, semanticsPageId)
    expect(semanticsText.some((text) => text.includes('lh 1.1'))).toBe(true)
    expect(semanticsText.some((text) => text.includes('0.4000000059604645'))).toBe(false)
  })
})

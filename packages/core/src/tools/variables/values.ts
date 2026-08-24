import type { FigmaAPI } from '#core/figma-api'
import type { VariableType, VariableValue } from '@open-pencil/scene-graph'

import { parseColor } from '#core/color'
import { defineTool } from '#core/tools/schema'

function parseVariableValue(type: VariableType, value: string): VariableValue {
  if (type === 'COLOR') return parseColor(value)
  if (type === 'FLOAT') return Number(value)
  if (type === 'BOOLEAN') return value === 'true'
  return value
}

function resolveAliasTarget(
  figma: FigmaAPI,
  aliasId: string,
  expectedType: VariableType
): { aliasId: string } | { error: string } {
  const target = figma.getVariableById(aliasId)
  if (!target) return { error: `Variable "${aliasId}" not found` }
  if (target.type !== expectedType) {
    return { error: `Cannot alias ${expectedType} variable to ${target.type} variable "${aliasId}"` }
  }
  return { aliasId }
}

const ALIAS_PARAM = {
  type: 'string',
  description: 'Variable ID to alias instead of setting a literal value. Mutually exclusive with value.'
} as const

export const createVariable = defineTool({
  name: 'create_variable',
  mutates: true,
  description: 'Create a new variable in a collection.',
  params: {
    name: { type: 'string', description: 'Variable name', required: true },
    type: {
      type: 'string',
      description: 'Variable type',
      required: true,
      enum: ['COLOR', 'FLOAT', 'STRING', 'BOOLEAN']
    },
    collection_id: { type: 'string', description: 'Collection ID', required: true },
    value: { type: 'string', description: 'Initial value (hex for COLOR, number for FLOAT, etc.)' },
    alias_id: ALIAS_PARAM
  },
  execute: (figma, args) => {
    const type = args.type as VariableType
    if (args.value !== undefined && args.alias_id !== undefined) {
      return { error: 'Pass either value or alias_id, not both' }
    }
    let parsedValue: VariableValue | undefined
    if (args.alias_id !== undefined) {
      const resolved = resolveAliasTarget(figma, args.alias_id, type)
      if ('error' in resolved) return resolved
      parsedValue = resolved
    } else if (args.value !== undefined) {
      parsedValue = parseVariableValue(type, args.value)
    }
    return figma.createVariable(args.name, type, args.collection_id, parsedValue)
  }
})

export const setVariable = defineTool({
  name: 'set_variable',
  mutates: true,
  description: 'Set the value of a variable for a specific mode.',
  params: {
    id: { type: 'string', description: 'Variable ID', required: true },
    mode: { type: 'string', description: 'Mode ID', required: true },
    value: {
      type: 'string',
      description: 'Value (hex for COLOR, number for FLOAT, etc.)'
    },
    alias_id: ALIAS_PARAM
  },
  execute: (figma, args) => {
    const variable = figma.getVariableById(args.id)
    if (!variable) return { error: `Variable "${args.id}" not found` }
    if (args.value !== undefined && args.alias_id !== undefined) {
      return { error: 'Pass either value or alias_id, not both' }
    }
    let parsedValue: VariableValue
    if (args.alias_id !== undefined) {
      const resolved = resolveAliasTarget(figma, args.alias_id, variable.type)
      if ('error' in resolved) return resolved
      parsedValue = resolved
    } else if (args.value !== undefined) {
      parsedValue = parseVariableValue(variable.type, args.value)
    } else {
      return { error: 'Pass either value or alias_id' }
    }
    figma.setVariableValue(args.id, args.mode, parsedValue)
    return { id: args.id, mode: args.mode, value: parsedValue }
  }
})

export const deleteVariable = defineTool({
  name: 'delete_variable',
  mutates: true,
  description: 'Delete a variable.',
  params: {
    id: { type: 'string', description: 'Variable ID', required: true }
  },
  execute: (figma, { id }) => {
    figma.deleteVariable(id)
    return { deleted: id }
  }
})

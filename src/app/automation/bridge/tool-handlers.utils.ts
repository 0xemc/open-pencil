import type { SceneGraph } from '@open-pencil/scene-graph'

/**
 * Argument keys that conventionally name a target canvas node across the
 * MCP tool registry (single id, list of ids, or the variable-binding tools'
 * `node_id`). Used to scope the post-mutation layout recompute to just the
 * affected subtree(s) instead of the whole page.
 */
const NODE_ID_ARG_KEYS = ['id', 'node_id'] as const
const NODE_ID_LIST_ARG_KEY = 'ids'

function readArgNodeIds(args: Record<string, unknown>): string[] {
  const ids: string[] = []
  for (const key of NODE_ID_ARG_KEYS) {
    const value = args[key]
    if (typeof value === 'string') ids.push(value)
  }
  const list = args[NODE_ID_LIST_ARG_KEY]
  if (Array.isArray(list)) {
    for (const id of list) if (typeof id === 'string') ids.push(id)
  }
  return ids
}

/**
 * Snapshots the parent of each node a tool call targets, before the call
 * runs. A tool can delete, merge, or reparent its target nodes, leaving
 * nothing at that id to walk up from afterward — the old parent is what
 * still needs its layout (e.g. HUG sizing) recomputed in that case.
 */
export function captureParentIds(graph: SceneGraph, args: Record<string, unknown>): string[] {
  const parentIds: string[] = []
  for (const id of readArgNodeIds(args)) {
    const parentId = graph.getNode(id)?.parentId
    if (parentId) parentIds.push(parentId)
  }
  return parentIds
}

/**
 * Node ids whose layout subtree should be recomputed after a mutating tool
 * call, combining the call's own targets, their pre-call parents (see
 * captureParentIds), and any ids the tool reports in its result (e.g. newly
 * created nodes). Deduplicated; ids that no longer exist are harmless — the
 * caller's per-id recompute already no-ops on a missing node.
 */
export function collectLayoutScopeIds(
  args: Record<string, unknown>,
  priorParentIds: string[],
  resultIds: string[]
): string[] {
  return [...new Set([...readArgNodeIds(args), ...priorParentIds, ...resultIds])]
}

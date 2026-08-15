---
title: useSelectionState
description: Reaktiver State der aktuellen Selection, des primären Objekts und seines Type.
---

# useSelectionState

`useSelectionState()` liefert reaktive Informationen über die aktuelle Selection:

- ob ein Objekt ausgewählt ist;
- Anzahl der ausgewählten Objekte;
- primäres ausgewähltes Objekt;
- ob das primäre Objekt eine Instance, ein Component oder eine Group ist.

## Verwendung

```ts
import { useSelectionState } from '@open-pencil/vue'

const selection = useSelectionState()
```

## Beispiel

```vue
<script setup lang="ts">
import { useSelectionState } from '@open-pencil/vue'

const { hasSelection, selectedCount, isInstance } = useSelectionState()
</script>

<template>
  <div class="text-xs text-muted">
    <span v-if="!hasSelection">Nichts ausgewählt</span>
    <span v-else>
      {{ selectedCount }} ausgewählt
      <span v-if="isInstance">· Instance</span>
    </span>
  </div>
</template>
```

## Values

- `selectedIds`
- `hasSelection`
- `selectedNode`
- `selectedCount`
- `selectedNodeType`
- `isInstance`
- `isComponent`
- `isGroup`
- `canCreateComponentSet`

### Actions nur für Instances

```ts
const { isInstance } = useSelectionState()
```

### Component set erstellen

```ts
const { canCreateComponentSet } = useSelectionState()
```

## Siehe auch

- [useSelectionCapabilities](./use-selection-capabilities)
- [useEditorCommands](./use-editor-commands)
- [useEditor](./use-editor)

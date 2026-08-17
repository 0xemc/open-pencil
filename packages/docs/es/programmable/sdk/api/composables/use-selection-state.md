---
title: useSelectionState
description: State reactivo de la Selection actual, el objeto principal y su Type.
---

# useSelectionState

`useSelectionState()` proporciona información reactiva sobre la Selection:

- si hay algún objeto seleccionado;
- cantidad de objetos seleccionados;
- objeto seleccionado principal;
- si el objeto principal es una Instance, un Component o un Group.

## Uso

```ts
import { useSelectionState } from '@open-pencil/vue'

const selection = useSelectionState()
```

## Ejemplo

```vue
<script setup lang="ts">
import { useSelectionState } from '@open-pencil/vue'

const { hasSelection, selectedCount, isInstance } = useSelectionState()
</script>

<template>
  <div class="text-xs text-muted">
    <span v-if="!hasSelection">No hay Selection</span>
    <span v-else>
      {{ selectedCount }} seleccionados
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

### Actions solo para Instances

```ts
const { isInstance } = useSelectionState()
```

### Crear un Component set

```ts
const { canCreateComponentSet } = useSelectionState()
```

## Consulta también

- [useSelectionCapabilities](./use-selection-capabilities)
- [useEditorCommands](./use-editor-commands)
- [useEditor](./use-editor)

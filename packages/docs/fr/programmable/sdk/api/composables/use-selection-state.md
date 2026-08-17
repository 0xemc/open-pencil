---
title: useSelectionState
description: State réactif de la Selection actuelle, de l’objet principal et de son Type.
---

# useSelectionState

`useSelectionState()` fournit des informations réactives sur la Selection :

- présence d’un objet sélectionné ;
- nombre d’objets sélectionnés ;
- objet principal ;
- nature du principal objet : Instance, Component ou Group.

## Utilisation

```ts
import { useSelectionState } from '@open-pencil/vue'

const selection = useSelectionState()
```

## Exemple

```vue
<script setup lang="ts">
import { useSelectionState } from '@open-pencil/vue'

const { hasSelection, selectedCount, isInstance } = useSelectionState()
</script>

<template>
  <div class="text-xs text-muted">
    <span v-if="!hasSelection">Aucune Selection</span>
    <span v-else>
      {{ selectedCount }} sélectionné(s)
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

### Actions propres aux Instances

```ts
const { isInstance } = useSelectionState()
```

### Créer un Component set

```ts
const { canCreateComponentSet } = useSelectionState()
```

## Voir aussi

- [useSelectionCapabilities](./use-selection-capabilities)
- [useEditorCommands](./use-editor-commands)
- [useEditor](./use-editor)

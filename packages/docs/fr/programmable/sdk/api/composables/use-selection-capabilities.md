---
title: useSelectionCapabilities
description: Boolean values réactifs pour les Actions disponibles avec la Selection actuelle.
---

# useSelectionCapabilities

`useSelectionCapabilities()` renvoie des Boolean values indiquant si les Actions courantes de l’Editor sont disponibles pour la Selection actuelle.

Le composable convient aux :

- Menus ;
- Toolbars ;
- raccourcis ;
- Action buttons ;
- panneaux dépendant du Context.

## Utilisation

```ts
import { useSelectionCapabilities } from '@open-pencil/vue'

const caps = useSelectionCapabilities()
```

## Exemple

```vue
<script setup lang="ts">
import { useSelectionCapabilities } from '@open-pencil/vue'

const { canDelete, canDuplicate, canCreateComponent } = useSelectionCapabilities()
</script>

<template>
  <div class="flex gap-2">
    <button :disabled="!canDuplicate">Duplicate</button>
    <button :disabled="!canDelete">Delete</button>
    <button :disabled="!canCreateComponent">Create component</button>
  </div>
</template>
```

### Disponibilité des options du Menu

```ts
const { canMoveToPage, canGoToMainComponent } = useSelectionCapabilities()
```

### Zoom to selection

```ts
const { canZoomToSelection } = useSelectionCapabilities()
```

## Voir aussi

- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

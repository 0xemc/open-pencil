---
title: useSelectionCapabilities
description: Boolean values reactivos para las Actions disponibles con la Selection actual.
---

# useSelectionCapabilities

`useSelectionCapabilities()` devuelve Boolean values reactivos que indican si las Actions habituales del Editor están disponibles para la Selection actual.

El composable sirve para:

- Menús;
- Toolbars;
- Atajos;
- Action buttons;
- Paneles dependientes del Context.

## Uso

```ts
import { useSelectionCapabilities } from '@open-pencil/vue'

const caps = useSelectionCapabilities()
```

## Ejemplo

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

### Disponibilidad de opciones del menú

```ts
const { canMoveToPage, canGoToMainComponent } = useSelectionCapabilities()
```

### Zoom to selection

```ts
const { canZoomToSelection } = useSelectionCapabilities()
```

## Consulta también

- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

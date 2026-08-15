---
title: useSelectionCapabilities
description: Reaktywne boolean values określające dostępne operacje na selection.
---

# useSelectionCapabilities

`useSelectionCapabilities()` zwraca reaktywne boolean values informujące, czy najważniejsze operacje na bieżącym selection są dostępne.

Composable przydaje się w:

- menu;
- toolbars;
- obsłudze skrótów;
- przyciskach działań;
- panelach zależnych od context.

## Użycie

```ts
import { useSelectionCapabilities } from '@open-pencil/vue'

const caps = useSelectionCapabilities()
```

## Przykład

```vue
<script setup lang="ts">
import { useSelectionCapabilities } from '@open-pencil/vue'

const { canDelete, canDuplicate, canCreateComponent } = useSelectionCapabilities()
</script>

<template>
  <div class="flex gap-2">
    <button :disabled="!canDuplicate">Utwórz kopię</button>
    <button :disabled="!canDelete">Usuń</button>
    <button :disabled="!canCreateComponent">Utwórz component</button>
  </div>
</template>
```

### Dostępność pozycji menu

```ts
const { canMoveToPage, canGoToMainComponent } = useSelectionCapabilities()
```

### Zoom do selection

```ts
const { canZoomToSelection } = useSelectionCapabilities()
```

## Zobacz też

- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

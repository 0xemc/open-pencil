---
title: useSelectionState
description: Reaktywny state bieżącego selection, wybranego obiektu i jego type.
---

# useSelectionState

`useSelectionState()` udostępnia reaktywne informacje o bieżącym selection.

Pozwala ustalić:

- czy zaznaczono jakikolwiek obiekt;
- ile obiektów jest zaznaczonych;
- który obiekt jest główny;
- czy główny obiekt jest instance, component albo group.

## Użycie

```ts
import { useSelectionState } from '@open-pencil/vue'

const selection = useSelectionState()
```

## Przykład

```vue
<script setup lang="ts">
import { useSelectionState } from '@open-pencil/vue'

const { hasSelection, selectedCount, isInstance } = useSelectionState()
</script>

<template>
  <div class="text-xs text-muted">
    <span v-if="!hasSelection">Nic nie zaznaczono</span>
    <span v-else>
      Zaznaczono: {{ selectedCount }}
      <span v-if="isInstance">· instance</span>
    </span>
  </div>
</template>
```

## Zwracane wartości

- `selectedIds`
- `hasSelection`
- `selectedNode`
- `selectedCount`
- `selectedNodeType`
- `isInstance`
- `isComponent`
- `isGroup`
- `canCreateComponentSet`

### Operacje dostępne tylko dla instance

```ts
const { isInstance } = useSelectionState()
```

### Tworzenie component set

```ts
const { canCreateComponentSet } = useSelectionState()
```

## Zobacz też

- [useSelectionCapabilities](./use-selection-capabilities)
- [useEditorCommands](./use-editor-commands)
- [useEditor](./use-editor)

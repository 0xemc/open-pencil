---
title: useEditor
description: Acceder a la instancia de OpenPencil proporcionada por provideEditor.
---

# useEditor

`useEditor()` devuelve la instancia del Editor del Context `provideEditor()` más cercano.

Los composables y Headless components lo usan como acceso principal al Editor.

## Uso

Llama a `useEditor()` dentro de un Component tree donde se haya ejecutado `provideEditor(editor)`:

```ts
import { useEditor } from '@open-pencil/vue'

const editor = useEditor()
```

## Ejemplo

```vue
<script setup lang="ts">
import { computed } from 'vue'

import { useEditor } from '@open-pencil/vue'

const editor = useEditor()
const pageId = computed(() => editor.state.currentPageId)
</script>

<template>
  <div>Page actual: {{ pageId }}</div>
</template>
```

### Leer la Selection

```ts
const editor = useEditor()
const selected = editor.getSelectedNodes()
```

### Ejecutar Actions

```ts
const editor = useEditor()
editor.zoomToFit()
editor.undoAction()
```

## Context ausente

Si se llama fuera de un Provider tree válido, la Function lanza un error claro. Esto permite detectar una integración incompleta del Editor.

## Consulta también

- [provideEditor](./provide-editor)
- [useCanvas](./use-canvas)
- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

## Tipo

```ts
function useEditor(): Editor
```

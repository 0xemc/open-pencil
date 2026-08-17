---
title: useCanvas
description: Conectar el CanvasKit renderer con un elemento canvas y un Editor de OpenPencil.
---

# useCanvas

`useCanvas()` conecta una instancia del Editor con un elemento `<canvas>`.

El composable se ocupa de:

- inicializar CanvasKit;
- crear la Surface;
- programar el Rendering;
- gestionar Resize;
- mostrar Rulers opcionales;
- ejecutar un Callback cuando el Renderer está preparado.

## Uso

```ts
import { ref } from 'vue'

import { useCanvas, useEditor } from '@open-pencil/vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const editor = useEditor()

useCanvas(canvasRef, editor)
```

## Ejemplo

```vue
<script setup lang="ts">
import { ref } from 'vue'

import { useCanvas, useEditor } from '@open-pencil/vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const editor = useEditor()

useCanvas(canvasRef, editor, {
  showRulers: true,
  onReady: () => {
    console.log('Renderer ready')
  },
})
</script>

<template>
  <canvas ref="canvasRef" class="size-full" />
</template>
```

### Ocultar Rulers en un Preview integrado

```ts
useCanvas(canvasRef, editor, {
  showRulers: false,
})
```

### Conservar el Drawing buffer para Screenshots

```ts
useCanvas(canvasRef, editor, {
  preserveDrawingBuffer: true,
})
```

## Notas

- `useCanvas()` integra el Renderer y está pensado para Browser environments.
- Gestiona el canvas activo, no la apertura o el guardado de archivos.
- Normalmente se combina con `useCanvasInput()` para Pointer interactions.

## Consulta también

- [useEditor](./use-editor)
- [useCanvasInput](./use-canvas-input)
- [useTextEdit](./use-text-edit)

## Tipo

```ts
interface UseCanvasOptions {
  showRulers?: boolean
  preserveDrawingBuffer?: boolean
  onReady?: () => void
}

function useCanvas(
  canvasRef: Ref<HTMLCanvasElement | null>,
  editor: Editor,
  options?: UseCanvasOptions,
): void
```

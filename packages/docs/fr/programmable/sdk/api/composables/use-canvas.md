---
title: useCanvas
description: Connecter le CanvasKit renderer à un élément canvas et à un Editor OpenPencil.
---

# useCanvas

`useCanvas()` relie une instance Editor à un élément `<canvas>`.

Le composable prend en charge :

- l’initialisation de CanvasKit ;
- la création de la Surface ;
- la planification du Rendering ;
- la gestion du Resize ;
- des Rulers facultatives ;
- un Callback lorsque le Renderer est prêt.

## Utilisation

```ts
import { ref } from 'vue'

import { useCanvas, useEditor } from '@open-pencil/vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const editor = useEditor()

useCanvas(canvasRef, editor)
```

## Exemple

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

### Masquer les Rulers dans une Preview intégrée

```ts
useCanvas(canvasRef, editor, {
  showRulers: false,
})
```

### Conserver le Drawing buffer pour les Screenshots

```ts
useCanvas(canvasRef, editor, {
  preserveDrawingBuffer: true,
})
```

## Notes

- `useCanvas()` intègre le Renderer et cible les Browser environments.
- Il gère le canvas actif, pas l’ouverture ou l’enregistrement des fichiers.
- Il est généralement associé à `useCanvasInput()` pour les Pointer interactions.

## Voir aussi

- [useEditor](./use-editor)
- [useCanvasInput](./use-canvas-input)
- [useTextEdit](./use-text-edit)

## Type

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

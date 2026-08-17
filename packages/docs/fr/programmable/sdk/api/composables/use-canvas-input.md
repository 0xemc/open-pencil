---
title: useCanvasInput
description: Connecter Pointer input, Drag, Selection, Resize, Rotation et Tools au canvas.
---

# useCanvasInput

`useCanvasInput()` connecte les Pointer et Mouse interactions au canvas de l’Editor.

Il gère :

- Selection ;
- Drag ;
- Resize ;
- Rotation ;
- Pan ;
- dessin avec Pen tool ;
- Interactions du Text edit mode ;
- Hit testing tenant compte du Viewport.

## Utilisation

Ce composable s’utilise généralement avec `useCanvas()` et les Hit-test functions du Renderer :

```ts
useCanvasInput(
  canvasRef,
  editor,
  hitTestSectionTitle,
  hitTestComponentLabel,
  hitTestFrameTitle,
)
```

## Exemple

```ts
const canvas = useCanvas(canvasRef, editor)

useCanvasInput(
  canvasRef,
  editor,
  canvas.hitTestSectionTitle,
  canvas.hitTestComponentLabel,
  canvas.hitTestFrameTitle,
)
```

### Position du Pointer en Coordinates du canvas

```ts
useCanvasInput(
  canvasRef,
  editor,
  hitTestSectionTitle,
  hitTestComponentLabel,
  hitTestFrameTitle,
  (cx, cy) => {
    console.log(cx, cy)
  },
)
```

## Notes

Ce Low-level composable s’adresse principalement aux Components qui contiennent le canvas d’une interface d’édition personnalisée.

## Voir aussi

- [useCanvas](./use-canvas)
- [useEditor](./use-editor)

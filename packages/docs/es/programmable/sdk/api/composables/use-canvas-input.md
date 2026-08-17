---
title: useCanvasInput
description: Conectar Pointer input, Drag, Selection, Resize, Rotation y Tools con el canvas.
---

# useCanvasInput

`useCanvasInput()` conecta las Pointer y Mouse interactions con el Editor canvas.

Gestiona:

- Selection;
- Drag;
- Resize;
- Rotation;
- Pan;
- dibujo con Pen tool;
- Interactions del Text edit mode;
- Hit testing que tiene en cuenta el Viewport.

## Uso

Normalmente se utiliza junto con `useCanvas()` y las Hit-test functions del Renderer:

```ts
useCanvasInput(
  canvasRef,
  editor,
  hitTestSectionTitle,
  hitTestComponentLabel,
  hitTestFrameTitle,
)
```

## Ejemplo

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

### Position del Pointer en Coordinates del canvas

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

## Notas

Este Low-level composable está pensado principalmente para Components que contienen el canvas de una interfaz de edición propia.

## Consulta también

- [useCanvas](./use-canvas)
- [useEditor](./use-editor)

---
title: useCanvasInput
description: Pointer input, Drag, Selection, Resize, Rotation und Tools mit dem Canvas verbinden.
---

# useCanvasInput

`useCanvasInput()` verbindet Pointer und Mouse interactions mit dem Editor canvas.

Es behandelt:

- Selection;
- Drag;
- Resize;
- Rotation;
- Pan;
- Zeichnen mit dem Pen tool;
- Interactions im Text edit mode;
- Hit testing unter Berücksichtigung des Viewport.

## Verwendung

Das composable wird gewöhnlich zusammen mit `useCanvas()` und den Hit-test functions des Renderer verwendet:

```ts
useCanvasInput(
  canvasRef,
  editor,
  hitTestSectionTitle,
  hitTestComponentLabel,
  hitTestFrameTitle,
)
```

## Beispiel

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

### Pointer position in Canvas coordinates

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

## Hinweise

Dieses low-level composable ist vor allem für Components vorgesehen, die den Canvas einer eigenen Editor-Oberfläche enthalten.

## Siehe auch

- [useCanvas](./use-canvas)
- [useEditor](./use-editor)

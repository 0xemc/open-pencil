---
title: useCanvasInput
description: Podłączenie pointer input, drag, selection, resize, rotation i tools do obszaru roboczego.
---

# useCanvasInput

`useCanvasInput()` łączy pointer i mouse interactions z obszarem roboczym edytora.

Obsługuje:

- selection;
- drag;
- resize;
- rotation;
- przesuwanie widoku;
- rysowanie przez Pen tool;
- interakcje w trybie edycji tekstu;
- hit testing z uwzględnieniem viewport.

## Użycie

Composable jest zwykle używane razem z `useCanvas()` i functions hit testing zwracanymi przez renderer.

```ts
useCanvasInput(
  canvasRef,
  editor,
  hitTestSectionTitle,
  hitTestComponentLabel,
  hitTestFrameTitle,
)
```

## Przykład

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

### Położenie pointer w coordinates obszaru roboczego

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

## Uwagi

To low-level composable jest przeznaczone przede wszystkim dla components zawierających obszar roboczy i własnych interfejsów edytora.

## Zobacz też

- [useCanvas](./use-canvas)
- [useEditor](./use-editor)

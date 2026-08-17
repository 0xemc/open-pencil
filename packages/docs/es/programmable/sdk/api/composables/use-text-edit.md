---
title: useTextEdit
description: Gestionar DOM text input, IME, Formatting y sincronización de objetos de texto.
---

# useTextEdit

`useTextEdit()` conecta el DOM input con la edición de texto en el Editor canvas.

El composable coordina:

- entrada mediante `textarea`;
- IME;
- parpadeo del Caret;
- Delete y Backspace;
- Commands Bold, Italic y Underline;
- escritura de los cambios en SceneGraph.

## Uso

```ts
useTextEdit(canvasRef, editor)
```

Úsalo en el Component que contiene el canvas, normalmente junto con `useCanvas()` y `useCanvasInput()`.

## Atajos de Formatting

Mientras se edita texto, `useTextEdit()` procesa los Atajos de Bold, Italic y Underline.

## Sincronización

Durante la entrada, la Function actualiza el texto y los Style runs de SceneGraph.

## Notas

Este composable integra la edición de texto con el canvas. No está pensado para Fields de texto normales.

## Consulta también

- [useCanvas](./use-canvas)
- [useCanvasInput](./use-canvas-input)

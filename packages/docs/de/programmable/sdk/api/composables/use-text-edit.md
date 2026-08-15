---
title: useTextEdit
description: DOM text input, IME, Formatting und Synchronisierung von Text objects verwalten.
---

# useTextEdit

`useTextEdit()` verbindet DOM input mit der Textbearbeitung auf dem Editor canvas.

Das composable koordiniert:

- Texteingabe über eine `textarea`;
- IME;
- blinkenden Caret;
- Delete und Backspace;
- Bold, Italic und Underline commands;
- Schreiben der Änderungen in den SceneGraph.

## Verwendung

```ts
useTextEdit(canvasRef, editor)
```

Das composable im Component verwenden, der den Canvas enthält, gewöhnlich zusammen mit `useCanvas()` und `useCanvasInput()`.

## Formatting shortcuts

Während Text bearbeitet wird, verarbeitet `useTextEdit()` Shortcuts für Bold, Italic und Underline.

## Synchronisierung

Bei der Eingabe aktualisiert die Function Text und Style runs im SceneGraph.

## Hinweise

Dieses composable integriert die Textbearbeitung mit dem Canvas. Es ist nicht für gewöhnliche Textfelder gedacht.

## Siehe auch

- [useCanvas](./use-canvas)
- [useCanvasInput](./use-canvas-input)

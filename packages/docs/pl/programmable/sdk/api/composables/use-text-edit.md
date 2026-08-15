---
title: useTextEdit
description: Obsługa DOM text input, IME, formatting i synchronizacji obiektów tekstowych.
---

# useTextEdit

`useTextEdit()` łączy DOM input z modelem edycji tekstu na obszarze roboczym.

Koordynuje:

- wprowadzanie tekstu przez `textarea`;
- IME;
- miganie caret;
- obsługę Delete i Backspace;
- polecenia bold, italic i underline;
- zapisywanie zmian do SceneGraph.

## Użycie

```ts
useTextEdit(canvasRef, editor)
```

Wywołaj composable w component zawierającym obszar roboczy, razem z `useCanvas()` i `useCanvasInput()`.

## Skróty formatting

Podczas edycji tekstu `useTextEdit()` obsługuje skróty bold, italic i underline.

## Synchronizacja tekstu

Podczas pisania function aktualizuje tekst i style runs w SceneGraph.

## Uwagi

To composable integruje edycję tekstu z obszarem roboczym. Nie jest przeznaczone dla zwykłych pól tekstowych.

## Zobacz też

- [useCanvas](./use-canvas)
- [useCanvasInput](./use-canvas-input)

---
title: useTextEdit
description: Gérer DOM text input, IME, Formatting et synchronisation des objets texte.
---

# useTextEdit

`useTextEdit()` connecte le DOM input à l’édition de texte du canvas de l’Editor.

Le composable coordonne :

- la saisie via `textarea` ;
- les IME ;
- le clignotement du Caret ;
- Delete et Backspace ;
- les Commands Bold, Italic et Underline ;
- l’écriture des modifications dans SceneGraph.

## Utilisation

```ts
useTextEdit(canvasRef, editor)
```

Utilisez-le dans le Component qui contient le canvas, généralement avec `useCanvas()` et `useCanvasInput()`.

## Raccourcis de Formatting

Pendant l’édition de texte, `useTextEdit()` traite les raccourcis Bold, Italic et Underline.

## Synchronisation

Pendant la saisie, la Function met à jour le texte et les Style runs dans SceneGraph.

## Notes

Ce composable intègre l’édition de texte au canvas. Il ne s’adresse pas aux Fields texte ordinaires.

## Voir aussi

- [useCanvas](./use-canvas)
- [useCanvasInput](./use-canvas-input)

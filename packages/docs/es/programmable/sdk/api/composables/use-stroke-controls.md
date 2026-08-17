---
title: useStrokeControls
description: Gestionar Stroke alignment, Sides y Weights en el panel Properties.
---

# useStrokeControls

`useStrokeControls()` proporciona a un panel Strokes:

- Options de Stroke alignment;
- selección de All, Top, Bottom, Left, Right o una combinación libre;
- Default value de un nuevo Stroke;
- Functions para Stroke weights independientes por lado.

## Uso

```ts
import { useStrokeControls } from '@open-pencil/vue'

const strokes = useStrokeControls()
```

## Ejemplo

```ts
const { alignOptions, sideOptions, currentAlign, currentSides, selectSide } = useStrokeControls()
```

### Stroke dentro del límite

```ts
strokes.updateAlign('INSIDE', activeNode)
```

### Stroke solo en Top

```ts
strokes.selectSide('TOP', activeNode)
```

## Consulta también

- [PropertyListRoot](../components/property-list-root)

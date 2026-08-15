---
title: useStrokeControls
description: Konfiguracja położenia i grubości stroke w panelu właściwości.
---

# useStrokeControls

`useStrokeControls()` udostępnia panelowi strokes:

- warianty stroke alignment;
- wybór boków: wszystkie, Top, Bottom, Left, Right albo dowolna kombinacja;
- domyślną wartość nowego stroke;
- functions zmiany stroke weight na poszczególnych bokach.

## Użycie

```ts
import { useStrokeControls } from '@open-pencil/vue'

const strokes = useStrokeControls()
```

## Przykład

```ts
const { alignOptions, sideOptions, currentAlign, currentSides, selectSide } = useStrokeControls()
```

### Stroke wewnątrz granicy

```ts
strokes.updateAlign('INSIDE', activeNode)
```

### Stroke tylko na górnym boku

```ts
strokes.selectSide('TOP', activeNode)
```

## Zobacz też

- [PropertyListRoot](../components/property-list-root)

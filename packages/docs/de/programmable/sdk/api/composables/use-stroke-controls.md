---
title: useStrokeControls
description: Stroke alignment, Sides und Weights im Properties-Panel verwalten.
---

# useStrokeControls

`useStrokeControls()` stellt einem Stroke-Panel bereit:

- Optionen für Stroke alignment;
- Auswahl von All, Top, Bottom, Left, Right oder einer freien Kombination;
- Default value für einen neuen Stroke;
- Functions für separate Stroke weights pro Seite.

## Verwendung

```ts
import { useStrokeControls } from '@open-pencil/vue'

const strokes = useStrokeControls()
```

## Beispiel

```ts
const { alignOptions, sideOptions, currentAlign, currentSides, selectSide } = useStrokeControls()
```

### Stroke innerhalb der Grenze

```ts
strokes.updateAlign('INSIDE', activeNode)
```

### Stroke nur oben

```ts
strokes.selectSide('TOP', activeNode)
```

## Siehe auch

- [PropertyListRoot](../components/property-list-root)

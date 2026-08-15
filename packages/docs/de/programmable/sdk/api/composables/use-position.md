---
title: usePosition
description: Position, Size, Rotation, Alignment und Flip der ausgewählten Objekte lesen und ändern.
---

# usePosition

`usePosition()` stellt Panels für Position und Size folgende Values bereit:

- `x`
- `y`
- `width`
- `height`
- `rotation`

Dazu kommen Actions für Alignment, Flip, Rotation sowie Preview und Commit numerischer Properties.

## Verwendung

```ts
import { usePosition } from '@open-pencil/vue'

const position = usePosition()
```

## Beispiel

```ts
const { x, y, width, height, rotation, updateProp, commitProp } = usePosition()
```

### Alignment

```ts
position.align('horizontal', 'center')
position.align('vertical', 'min')
```

### Flip

```ts
position.flip('horizontal')
position.flip('vertical')
```

### Rotation

```ts
position.rotate(90)
```

## Siehe auch

- [useLayout](./use-layout)
- [useAppearance](./use-appearance)

---
title: usePosition
description: Odczytywanie i zmiana position, size, rotation, alignment i flip zaznaczonego obiektu.
---

# usePosition

`usePosition()` udostępnia panelom położenia i rozmiaru wartości wybranego obiektu:

- `x`
- `y`
- `width`
- `height`
- `rotation`

oraz actions:

- alignment;
- flip;
- rotation;
- preview i commit numeric properties.

## Użycie

```ts
import { usePosition } from '@open-pencil/vue'

const position = usePosition()
```

## Przykład

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

## Zobacz też

- [useLayout](./use-layout)
- [useAppearance](./use-appearance)

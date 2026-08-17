---
title: usePosition
description: Leer y modificar Position, Size, Rotation, Alignment y Flip de los objetos seleccionados.
---

# usePosition

`usePosition()` proporciona a los paneles de Position y Size estos Values:

- `x`
- `y`
- `width`
- `height`
- `rotation`

También incluye Actions para Alignment, Flip, Rotation y para Preview y Commit de Properties numéricas.

## Uso

```ts
import { usePosition } from '@open-pencil/vue'

const position = usePosition()
```

## Ejemplo

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

## Consulta también

- [useLayout](./use-layout)
- [useAppearance](./use-appearance)

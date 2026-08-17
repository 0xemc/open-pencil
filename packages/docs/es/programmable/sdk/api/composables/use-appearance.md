---
title: useAppearance
description: Gestionar Visibility, Opacity y Corner radius de la Selection actual.
---

# useAppearance

`useAppearance()` proporciona State y Actions para la Appearance de los objetos seleccionados:

- Visibility;
- Opacity;
- Corner radius;
- Corner radii independientes.

## Uso

```ts
import { useAppearance } from '@open-pencil/vue'

const appearance = useAppearance()
```

## Ejemplo

```ts
const {
  visibilityState,
  opacityPercent,
  cornerRadiusValue,
  toggleVisibility,
  toggleIndependentCorners,
} = useAppearance()
```

### Cambiar Visibility

```ts
appearance.toggleVisibility()
```

### Modificar Corner radii independientes

```ts
appearance.updateCornerProp('topLeftRadius', 12)
appearance.commitCornerProp('topLeftRadius', 12, 8)
```

## Consulta también

- [Referencia del API](../)
- [useLayout](./use-layout)
- [useTypography](./use-typography)

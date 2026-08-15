---
title: useAppearance
description: Zarządzanie visibility, opacity i corner radius bieżącego selection.
---

# useAppearance

`useAppearance()` udostępnia panelom właściwości state i actions związane z wyglądem zaznaczonych obiektów:

- visibility;
- opacity;
- corner radius;
- niezależne corner radii.

## Użycie

```ts
import { useAppearance } from '@open-pencil/vue'

const appearance = useAppearance()
```

## Przykład

```ts
const {
  visibilityState,
  opacityPercent,
  cornerRadiusValue,
  toggleVisibility,
  toggleIndependentCorners,
} = useAppearance()
```

### Visibility selection

```ts
appearance.toggleVisibility()
```

### Osobne corner radii

```ts
appearance.updateCornerProp('topLeftRadius', 12)
appearance.commitCornerProp('topLeftRadius', 12, 8)
```

## Zobacz też

- [Dokumentacja API](../)
- [useLayout](./use-layout)
- [useTypography](./use-typography)

---
title: useAppearance
description: Visibility, Opacity und Corner radius der aktuellen Selection verwalten.
---

# useAppearance

`useAppearance()` stellt Properties-Panels State und Actions für die Appearance der ausgewählten Objekte bereit:

- Visibility;
- Opacity;
- Corner radius;
- separate Corner radii.

## Verwendung

```ts
import { useAppearance } from '@open-pencil/vue'

const appearance = useAppearance()
```

## Beispiel

```ts
const {
  visibilityState,
  opacityPercent,
  cornerRadiusValue,
  toggleVisibility,
  toggleIndependentCorners,
} = useAppearance()
```

### Visibility umschalten

```ts
appearance.toggleVisibility()
```

### Einzelne Corner radii ändern

```ts
appearance.updateCornerProp('topLeftRadius', 12)
appearance.commitCornerProp('topLeftRadius', 12, 8)
```

## Siehe auch

- [API-Übersicht](../)
- [useLayout](./use-layout)
- [useTypography](./use-typography)

---
title: useAppearance
description: Gérer Visibility, Opacity et Corner radius de la Selection actuelle.
---

# useAppearance

`useAppearance()` fournit State et Actions pour l’Appearance des objets sélectionnés :

- Visibility ;
- Opacity ;
- Corner radius ;
- Corner radii indépendants.

## Utilisation

```ts
import { useAppearance } from '@open-pencil/vue'

const appearance = useAppearance()
```

## Exemple

```ts
const {
  visibilityState,
  opacityPercent,
  cornerRadiusValue,
  toggleVisibility,
  toggleIndependentCorners,
} = useAppearance()
```

### Modifier Visibility

```ts
appearance.toggleVisibility()
```

### Modifier les Corner radii indépendants

```ts
appearance.updateCornerProp('topLeftRadius', 12)
appearance.commitCornerProp('topLeftRadius', 12, 8)
```

## Voir aussi

- [Référence API](../)
- [useLayout](./use-layout)
- [useTypography](./use-typography)

---
title: useLayout
description: Gérer Auto layout, Sizing, Padding, Alignment et Grid tracks.
---

# useLayout

`useLayout()` fournit State et Actions pour les panneaux de Layout :

- Flex ou Grid ;
- Width et Height sizing ;
- Padding ;
- Alignment ;
- Grid template tracks.

## Utilisation

```ts
import { useLayout } from '@open-pencil/vue'

const layout = useLayout()
```

## Exemple

```ts
const {
  isGrid,
  isFlex,
  widthSizing,
  heightSizing,
  setAxisSizing,
  updateAxisSize,
  commitAxisSize,
} = useLayout()
```

### Padding commun ou par côté

```ts
layout.toggleIndividualPadding()
```

### Grid tracks

```ts
layout.updateGridTrack('gridTemplateColumns', 0, { sizing: 'FIXED', value: 240 })
layout.addTrack('gridTemplateRows')
```

### Alignment

```ts
layout.setAlignment('CENTER', 'MAX')
```

## Voir aussi

- [usePosition](./use-position)
- [useEditor](./use-editor)

---
title: useLayout
description: Auto Layout, Sizing, Padding, Alignment und Grid tracks bearbeiten.
---

# useLayout

`useLayout()` stellt State und Actions für Layout-Panels bereit:

- Flex oder Grid;
- Width und Height sizing;
- Padding;
- Alignment;
- Grid template tracks.

## Verwendung

```ts
import { useLayout } from '@open-pencil/vue'

const layout = useLayout()
```

## Beispiel

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

### Gemeinsames oder separates Padding

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

## Siehe auch

- [usePosition](./use-position)
- [useEditor](./use-editor)

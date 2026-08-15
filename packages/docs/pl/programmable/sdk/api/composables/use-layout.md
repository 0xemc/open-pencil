---
title: useLayout
description: Zarządzanie Auto layout, rozmiarem, padding, alignment i grid tracks.
---

# useLayout

`useLayout()` udostępnia state i actions dla paneli układu:

- wybór flex lub grid;
- tryby width i height;
- padding;
- alignment;
- zmianę grid template tracks.

## Użycie

```ts
import { useLayout } from '@open-pencil/vue'

const layout = useLayout()
```

## Przykład

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

### Wspólny i osobny padding

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

## Zobacz też

- [usePosition](./use-position)
- [useEditor](./use-editor)

---
title: useLayout
description: Gestionar Auto layout, Sizing, Padding, Alignment y Grid tracks.
---

# useLayout

`useLayout()` proporciona State y Actions para paneles de Layout:

- Flex o Grid;
- Width y Height sizing;
- Padding;
- Alignment;
- Grid template tracks.

## Uso

```ts
import { useLayout } from '@open-pencil/vue'

const layout = useLayout()
```

## Ejemplo

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

### Padding común o por lado

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

## Consulta también

- [usePosition](./use-position)
- [useEditor](./use-editor)

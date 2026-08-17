---
title: useExport
description: Gestionar Scale y Format del Export de la Selection actual.
---

# useExport

`useExport()` proporciona State y Actions para un panel Export:

- Export settings;
- IDs de los objetos seleccionados;
- Name del Output file;
- Scales y Formats disponibles.

## Uso

```ts
import { useExport } from '@open-pencil/vue'

const exportState = useExport()
```

## Ejemplo

```ts
const {
  settings,
  nodeName,
  scales,
  formats,
  addSetting,
  updateScale,
  updateFormat,
} = useExport()
```

### Añadir otro Export setting

```ts
exportState.addSetting()
```

### WEBP con Scale 2×

```ts
exportState.updateScale(0, 2)
exportState.updateFormat(0, 'WEBP')
```

## Consulta también

- [useSelectionState](./use-selection-state)
- [useEditor](./use-editor)

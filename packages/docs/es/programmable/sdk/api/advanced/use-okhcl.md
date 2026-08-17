---
title: useOkHCL
description: Gestionar Color models RGBA y OkHCL para Fills y Strokes.
---

# useOkHCL

`useOkHCL()` lee y cambia el Color model utilizado por Fills y Strokes. El API permite activar o desactivar OkHCL y actualizar sus Values.

Usa el composable en un Color picker avanzado compatible con RGBA y con el modelo perceptual OkHCL.

## Uso

```ts
import { useOkHCL } from '@open-pencil/vue'

const okhcl = useOkHCL()
```

## Values

- `getFillColorModel()`
- `getStrokeColorModel()`
- `getFillOkHCLColor()`
- `getStrokeOkHCLColor()`
- `enableFillOkHCL()`
- `disableFillOkHCL()`
- `enableStrokeOkHCL()`
- `disableStrokeOkHCL()`
- `updateFillOkHCL()`
- `updateStrokeOkHCL()`
- `modelOptions`

## Consulta también

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [ColorPickerRoot](../components/color-picker-root)

---
title: useOkHCL
description: RGBA- und OkHCL-Color models für Fills und Strokes verwalten.
---

# useOkHCL

`useOkHCL()` liest und ändert das Color model von Fills und Strokes. Das API kann OkHCL aktivieren oder deaktivieren und seine Values aktualisieren.

Das composable eignet sich für einen erweiterten Color picker, der RGBA und das wahrnehmungsbezogene OkHCL model unterstützt.

## Verwendung

```ts
import { useOkHCL } from '@open-pencil/vue'

const okhcl = useOkHCL()
```

## Rückgabewerte

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

## Siehe auch

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [ColorPickerRoot](../components/color-picker-root)

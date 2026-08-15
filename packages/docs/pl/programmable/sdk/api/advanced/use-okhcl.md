---
title: useOkHCL
description: Obsługa modeli color RGBA i OkHCL dla fills oraz strokes.
---

# useOkHCL

`useOkHCL()` odczytuje i zmienia model color używany przez fills oraz strokes. Pozwala włączyć albo wyłączyć OkHCL i aktualizować jego wartości.

Użyj composable w zaawansowanym color picker obsługującym zarówno RGBA, jak i percepcyjny model OkHCL.

## Użycie

```ts
import { useOkHCL } from '@open-pencil/vue'

const okhcl = useOkHCL()
```

## Zwracane API

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

## Zobacz też

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [ColorPickerRoot](../components/color-picker-root)

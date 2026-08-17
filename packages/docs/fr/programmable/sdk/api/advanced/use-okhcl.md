---
title: useOkHCL
description: Gérer les Color models RGBA et OkHCL pour Fills et Strokes.
---

# useOkHCL

`useOkHCL()` lit et change le Color model utilisé par Fills et Strokes. L’API permet d’activer ou désactiver OkHCL et de modifier ses Values.

Utilisez le composable dans un Color picker avancé prenant en charge RGBA et le modèle perceptuel OkHCL.

## Utilisation

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

## Voir aussi

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [ColorPickerRoot](../components/color-picker-root)

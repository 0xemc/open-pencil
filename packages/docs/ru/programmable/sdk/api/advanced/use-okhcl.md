---
title: useOkHCL
description: Сохранение OkHCL intent для fills и strokes выбранных объектов.
---

# useOkHCL

`useOkHCL()` — adapter между editor и OkHCL metadata fills и strokes. Он читает сохранённый color intent, обновляет объекты с поддержкой Undo, сообщает gamut preview и запоминает выбранный format для каждого fill или stroke.

Для преобразования colors, изменения channels и отображения sliders без зависимости от editor используйте [`useColorModel()`](/programmable/sdk/api/composables/use-color-model). `useOkHCL()` нужен только там, где результат должен сохраняться в OpenPencil editor.

## Использование

```ts
import { useOkHCL } from '@open-pencil/vue'

const okhcl = useOkHCL()

const color = okhcl.getFillOkHCLColor(node, 0)
okhcl.updateFillOkHCL(node, 0, { c: 0.2 })
```

## Format state

```ts
const format = okhcl.getFieldFormat(node, 0, 'fill')
okhcl.setFillFieldFormat(node, 0, 'okhcl')
```

При выборе `okhcl` intent инициализируется из текущего RGBA color fill или stroke. `fieldOptions` можно использовать для selector формата.

## Preview

```ts
const preview = okhcl.getFillPreviewInfo(node, 0)
// { previewColorSpace, clipped }
```

Preview учитывает render color space документа и сообщает, потребовал ли сохранённый OkHCL intent gamut mapping.

## Возвращаемое API

- `getFillOkHCLColor()` / `getStrokeOkHCLColor()`
- `getFillPreviewInfo()` / `getStrokePreviewInfo()`
- `getFieldFormat()`
- `setFillFieldFormat()` / `setStrokeFieldFormat()`
- `updateFillOkHCL()` / `updateStrokeOkHCL()`
- `fieldOptions`

## См. также

- [useColorModel](/programmable/sdk/api/composables/use-color-model)
- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [ColorPickerRoot](../components/color-picker-root)

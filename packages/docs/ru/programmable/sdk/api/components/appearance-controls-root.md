---
title: AppearanceControlsRoot
description: Headless root для opacity, visibility, blend mode, corner radius и smoothing.
---

<script setup lang="ts">
import { data } from '#docs-api/components/appearance-controls-root.data'
</script>

# AppearanceControlsRoot

`AppearanceControlsRoot` предоставляет contract `useAppearance()` через slots структурного component. Он подходит для переиспользуемых appearance controls с собственным интерфейсом.

Root самостоятельно вычисляет presentation state из selection, в том числе `showIndependentCorners`. Этот state включается, если выбранный объект явно использует независимые углы или imported object содержит разные corner values при устаревшем uniform flag. Интерфейс должен использовать этот state, а не хранить отдельный локальный `ref` для раскрытия controls.

`cornerSmoothingPercent` представляет нормализованное значение SceneGraph как диапазон `0…100` или `MIXED`. Corner actions принимают нормализованные значения `0…1`.

Переключение независимых углов для нескольких объектов, изменение smoothing и сохранение отдельных corner values объединяются в одну Undo entry, при этом исходное значение каждого объекта сохраняется.

## Сгенерированный справочник API

Таблицы извлекаются из Vue source и JSDoc во время сборки документации.

<SdkComponentAPI :components="data.components" />

## См. также

- [useAppearance](../composables/use-appearance)
- [Панели свойств](../../guides/property-panels)

---
title: ColorPickerRoot
description: Headless color picker на основе popover с events жизненного цикла interaction.
---

<script setup lang="ts">
import { data } from '#docs-api/components/color-picker-root.data'
</script>

# ColorPickerRoot

`ColorPickerRoot` объединяет trigger с color swatch и surface popover, а сам интерфейс редактирования оставляет slots. Slot `trigger` получает текущий style swatch, slot по умолчанию — текущий `Color` из SceneGraph.

Event `openChange` сообщает полную границу interaction с picker. `cancel` вызывается перед закрытием по Escape, поэтому пользователь `BindableValue` может одной операцией отменить detach variable и изменение paint. Простое открытие picker или получение focus не вызывает update color.

```vue twoslash
<script setup lang="ts">
import { ref } from 'vue'
import type { Color } from '@open-pencil/scene-graph'
import { ColorPickerRoot } from '@open-pencil/vue'

const color = ref<Color>({ r: 0.2, g: 0.5, b: 0.9, a: 1 })
</script>

<template>
  <ColorPickerRoot
    :color="color"
    @update="color = $event"
    @open-change="open => console.log(open)"
    @cancel="console.log('cancel')"
  >
    <template #trigger="{ style }">
      <button :style="style" aria-label="Изменить цвет" />
    </template>
    <template #default="{ color: currentColor }">
      <output>{{ currentColor.r }}, {{ currentColor.g }}, {{ currentColor.b }}</output>
    </template>
  </ColorPickerRoot>
</template>
```

## Сгенерированный справочник API

<SdkComponentAPI :components="data.components" />

## См. также

- [ColorInputRoot](./color-input-root)
- [useColorModel](/programmable/sdk/api/composables/use-color-model)
- [BindableValue](/programmable/sdk/api/components/bindable-value)

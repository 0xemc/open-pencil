---
title: GradientEditorStop
description: Accessible component выбранного или перетаскиваемого gradient stop.
---

<script setup lang="ts">
import { data } from '#docs-api/components/gradient-editor-stop.data'
</script>

# GradientEditorStop

`GradientEditorStop` создаёт polymorphic gradient stop и сообщает state selection и dragging. Interactive stop использует ARIA role `slider` и передаёт position в процентах через ARIA attributes.

Размещайте interactive stops на gradient bar. Стрелки изменяют position на `positionStep`, а с <kbd>Shift</kbd> — с шагом в 10 раз больше. <kbd>Home</kbd> и <kbd>End</kbd> перемещают stop к границам. <kbd>Delete</kbd> и <kbd>Backspace</kbd> вызывают `remove`, если stop разрешено удалить.

Обработанные keys не распространяются выше, поэтому editor shortcuts удаления и перемещения не запускаются. <kbd>Tab</kbd> последовательно переводит focus между stops.

Установите `interactive="false"`, если component используется как wrapper сложной строки stop. Slot actions и attributes `data-selected` и `data-dragging` сохраняются, но строка не попадает в tab order sliders.

```vue twoslash
<script setup lang="ts">
import type { GradientStop } from '@open-pencil/scene-graph'
import { GradientEditorStop } from '@open-pencil/vue'

const stop: GradientStop = {
  color: { r: 0.4, g: 0.2, b: 0.9, a: 1 },
  position: 0.5
}
</script>

<template>
  <GradientEditorStop
    :stop="stop"
    :index="0"
    active
    label="Средний gradient stop"
    @update-position="(_index, position) => console.log(position)"
  />
</template>
```

## Сгенерированный справочник API

<SdkComponentAPI :components="data.components" />

## См. также

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorBar](./gradient-editor-bar)
- [useColorModel](/programmable/sdk/api/composables/use-color-model)

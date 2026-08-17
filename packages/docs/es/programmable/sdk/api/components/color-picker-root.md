---
title: ColorPickerRoot
description: Headless component para crear un Color picker.
---

<script setup lang="ts">
import { data } from '#docs-api/components/color-picker-root.data'
</script>

# ColorPickerRoot

`ColorPickerRoot` proporciona los Slots necesarios para un Color picker:

- `trigger` con el Style del Color swatch;
- Default trigger si la aplicación no proporciona uno;
- `default` con el `color` actual y la Function `update()`.

## Ejemplo

```vue
<ColorPickerRoot :color="color" @update="color = $event">
  <template #trigger="{ style }">
    <button class="size-6 rounded border" :style="style" />
  </template>

  <template #default="{ color, update }">
    <MyColorEditor :color="color" @change="update" />
  </template>
</ColorPickerRoot>
```

<SdkComponentAPI :components="data.components" />

## Consulta también

- [ColorInputRoot](./color-input-root)

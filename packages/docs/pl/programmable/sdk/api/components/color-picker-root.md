---
title: ColorPickerRoot
description: Component headless do zbudowania color picker.
---

<script setup lang="ts">
import { data } from '#docs-api/components/color-picker-root.data'
</script>

# ColorPickerRoot

`ColorPickerRoot` udostępnia slots potrzebne do zbudowania color picker:

- `trigger` ze style próbki koloru;
- domyślny trigger, jeśli aplikacja nie przekaże własnego;
- `default` z bieżącym `color` i function `update()`.

## Przykład

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

<ComponentApi :meta="data" />

## Zobacz też

- [ColorInputRoot](./color-input-root)

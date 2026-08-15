---
title: ColorPickerRoot
description: Headless component zum Aufbau eines Color picker.
---

<script setup lang="ts">
import { data } from '#docs-api/components/color-picker-root.data'
</script>

# ColorPickerRoot

`ColorPickerRoot` stellt die Slots für einen Color picker bereit:

- `trigger` mit dem Style des Color swatch;
- Default trigger, falls die Anwendung keinen eigenen übergibt;
- `default` mit dem aktuellen `color` und der Function `update()`.

## Beispiel

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

## Siehe auch

- [ColorInputRoot](./color-input-root)

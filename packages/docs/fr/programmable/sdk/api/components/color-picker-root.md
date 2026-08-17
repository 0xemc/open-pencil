---
title: ColorPickerRoot
description: Headless component pour créer un Color picker.
---

<script setup lang="ts">
import { data } from '#docs-api/components/color-picker-root.data'
</script>

# ColorPickerRoot

`ColorPickerRoot` fournit les Slots nécessaires à un Color picker :

- `trigger` avec le Style du Color swatch ;
- un Default trigger si l’application n’en fournit pas ;
- `default` avec le `color` actuel et la Function `update()`.

## Exemple

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

## Voir aussi

- [ColorInputRoot](./color-input-root)

---
title: FontPickerRoot
description: Font picker z wyszukiwaniem oparty na Reka UI Combobox.
---

# FontPickerRoot

`FontPickerRoot` udostępnia font picker z asynchroniczną listą font families i wyszukiwaniem. Component korzysta z Reka UI Combobox, ale pozwala zastąpić trigger, search input, items, selection indicator i empty state przez slots.

## Przykład

```vue
<FontPickerRoot v-model="fontFamily" :list-families="listFamilies">
  <template #trigger="{ value }">
    <button class="w-full truncate">{{ value }}</button>
  </template>
</FontPickerRoot>
```


## Zobacz też

- [useTypography](../composables/use-typography)

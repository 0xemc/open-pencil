---
title: ColorInputRoot
description: Parsowanie wartości hex i aktualizacja color w polu koloru.
---

# ColorInputRoot

`ColorInputRoot` przekształca bieżący color na wartość hex i udostępnia functions aktualizacji z hex albo pełnej wartości `Color`.

Aplikacja renderuje własne pole przez domyślny slot.

## Przykład

```vue
<ColorInputRoot :color="color" @update="color = $event" v-slot="{ hex, updateFromHex }">
  <input :value="hex" @input="updateFromHex(($event.target as HTMLInputElement).value)" />
</ColorInputRoot>
```


## Zobacz też

- [ColorPickerRoot](./color-picker-root)

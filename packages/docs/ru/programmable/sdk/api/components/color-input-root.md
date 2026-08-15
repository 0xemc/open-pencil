---
title: ColorInputRoot
description: Headless color input с parsing hex и functions обновления.
---

# ColorInputRoot

`ColorInputRoot` предоставляет state и functions для собственного интерфейса ввода цвета.

Component вычисляет hex из `Color` и позволяет обновить значение как через hex, так и через полный объект `Color`.

## Props

<SdkPropsTable
  :rows="[
    { name: 'color', type: 'Color', description: 'Текущее значение color.', required: true },
    { name: 'editable', type: 'boolean | undefined', description: 'Следует ли показывать value как доступное для редактирования.' }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'color: Color', description: 'Вызывается после изменения color.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'default', props: '{ color: Color, editable: boolean, hex: string, updateFromHex: (value: string) => void, updateColor: (color: Color) => void }', description: 'Contract для интерфейса color input.' }
  ]"
/>

## Пример

```vue
<ColorInputRoot :color="color" @update="color = $event" v-slot="{ hex, updateFromHex }">
  <input :value="hex" @input="updateFromHex(($event.target as HTMLInputElement).value)" />
</ColorInputRoot>
```

## См. также

- [ColorPickerRoot](./color-picker-root)

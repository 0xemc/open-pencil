---
title: GradientEditorRoot
description: Headless root для редактирования gradient stops.
---

# GradientEditorRoot

`GradientEditorRoot` предоставляет state и actions gradient editor без встроенного интерфейса.

Component управляет:

- active stop;
- переключением gradient subtype;
- добавлением, удалением и изменением stops;
- color active stop;
- вычислением background для gradient bar.

## Props

<SdkPropsTable
  :rows="[
    { name: 'fill', type: 'Fill', description: 'Текущий gradient fill.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'fill: Fill', description: 'Вызывается после изменения gradient fill.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'default', props: 'editor state + handlers', description: 'Полный contract для интерфейса gradient editor.' }
  ]"
/>

### Props slot по умолчанию

```ts
{
  stops: GradientStop[]
  subtype: GradientSubtype
  subtypes: Array<{ value: GradientSubtype; label: string }>
  activeStopIndex: number
  activeColor: Color
  barBackground: string
  setSubtype: (type: GradientSubtype) => void
  selectStop: (index: number) => void
  addStop: () => void
  removeStop: (index: number) => void
  updateStopPosition: (index: number, position: number) => void
  updateStopColor: (index: number, hex: string) => void
  updateStopOpacity: (index: number, opacity: number) => void
  updateActiveColor: (color: Color) => void
  dragStop: (index: number, position: number) => void
}
```

## Пример

```vue
<GradientEditorRoot :fill="fill" @update="fill = $event" v-slot="ctx">
  <MyGradientUI v-bind="ctx" />
</GradientEditorRoot>
```

## См. также

- [GradientEditorBar](./gradient-editor-bar)
- [GradientEditorStop](./gradient-editor-stop)

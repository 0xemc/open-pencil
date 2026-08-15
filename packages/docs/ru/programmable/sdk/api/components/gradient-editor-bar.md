---
title: GradientEditorBar
description: Headless draggable bar для gradient stops.
---

# GradientEditorBar

`GradientEditorBar` предоставляет state и pointer handlers перетаскиваемой bar внутри gradient editor.

## Props

<SdkPropsTable
  :rows="[
    { name: 'stops', type: 'GradientStop[]', description: 'Текущие gradient stops.', required: true },
    { name: 'activeStopIndex', type: 'number', description: 'Index active stop.', required: true },
    { name: 'barBackground', type: 'string', description: 'CSS background для bar.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'selectStop', payload: 'index: number', description: 'Вызывается после выбора stop.' },
    { name: 'dragStop', payload: 'index: number, position: number', description: 'Вызывается во время перетаскивания stop.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'default', props: 'bar state + drag handlers', description: 'Полный contract gradient bar.' }
  ]"
/>

### Props slot по умолчанию

```ts
{
  stops: GradientStop[]
  activeStopIndex: number
  barBackground: string
  barRef: (el: unknown) => void
  onStopPointerDown: (index: number, event: PointerEvent) => void
  onPointerMove: (event: PointerEvent) => void
  onPointerUp: () => void
  draggingIndex: number | null
}
```

## Пример

```vue
<GradientEditorBar
  :stops="stops"
  :active-stop-index="activeStopIndex"
  :bar-background="barBackground"
  @select-stop="selectStop"
  @drag-stop="dragStop"
  v-slot="ctx"
>
  <MyGradientBar v-bind="ctx" />
</GradientEditorBar>
```

## См. также

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorStop](./gradient-editor-stop)

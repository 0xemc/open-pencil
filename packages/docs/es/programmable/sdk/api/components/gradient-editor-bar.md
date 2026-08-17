---
title: GradientEditorBar
description: Gradient bar interactivo para seleccionar y arrastrar Stops.
---

# GradientEditorBar

`GradientEditorBar` proporciona State y Pointer handlers para renderizar un Gradient bar. El Component gestiona Selection y Drag de los Stops.

## Props

<SdkPropsTable
  :rows="[
    { name: 'stops', type: 'GradientStop[]', description: 'Gradient stops actuales.', required: true },
    { name: 'activeStopIndex', type: 'number', description: 'Índice del Active stop.', required: true },
    { name: 'barBackground', type: 'string', description: 'CSS background del Bar.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'selectStop', payload: 'index: number', description: 'Se emite al seleccionar un Stop.' },
    { name: 'dragStop', payload: 'index: number, position: number', description: 'Se emite durante el Drag de un Stop.' }
  ]"
/>

## Ejemplo

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

## Consulta también

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorStop](./gradient-editor-stop)

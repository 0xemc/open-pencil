---
title: GradientEditorBar
description: Gradient bar interactif pour sélectionner et déplacer des Stops.
---

# GradientEditorBar

`GradientEditorBar` fournit State et Pointer handlers pour rendre un Gradient bar. Le Component gère Selection et Drag des Stops.

## Props

<SdkPropsTable
  :rows="[
    { name: 'stops', type: 'GradientStop[]', description: 'Gradient stops actuels.', required: true },
    { name: 'activeStopIndex', type: 'number', description: 'Index de l’Active stop.', required: true },
    { name: 'barBackground', type: 'string', description: 'CSS background du Bar.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'selectStop', payload: 'index: number', description: 'Émis lors de la sélection d’un Stop.' },
    { name: 'dragStop', payload: 'index: number, position: number', description: 'Émis pendant le Drag d’un Stop.' }
  ]"
/>

## Exemple

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

## Voir aussi

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorStop](./gradient-editor-stop)

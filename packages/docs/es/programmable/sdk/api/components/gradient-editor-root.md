---
title: GradientEditorRoot
description: State y Actions para editar Gradient stops.
---

# GradientEditorRoot

`GradientEditorRoot` gestiona:

- Active gradient stop;
- Gradient subtype;
- creación, eliminación y actualización de Stops;
- Color del Active stop;
- Background del Gradient bar.

El Default slot recibe el API completo necesario para crear un Gradient editor propio.

## Props

<SdkPropsTable
  :rows="[
    { name: 'fill', type: 'Fill', description: 'Gradient fill actual.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'fill: Fill', description: 'Se emite cuando cambia el Gradient fill.' }
  ]"
/>

## Ejemplo

```vue
<GradientEditorRoot :fill="fill" @update="fill = $event" v-slot="ctx">
  <MyGradientUI v-bind="ctx" />
</GradientEditorRoot>
```

## Consulta también

- [GradientEditorBar](./gradient-editor-bar)
- [GradientEditorStop](./gradient-editor-stop)

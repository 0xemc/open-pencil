---
title: GradientEditorRoot
description: State et Actions pour modifier des Gradient stops.
---

# GradientEditorRoot

`GradientEditorRoot` gère :

- l’Active gradient stop ;
- le Gradient subtype ;
- l’ajout, la suppression et la mise à jour des Stops ;
- la Color de l’Active stop ;
- le Background du Gradient bar.

Le Default slot reçoit l’API complète nécessaire à un Gradient editor personnalisé.

## Props

<SdkPropsTable
  :rows="[
    { name: 'fill', type: 'Fill', description: 'Gradient fill actuel.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'fill: Fill', description: 'Émis lorsque le Gradient fill change.' }
  ]"
/>

## Exemple

```vue
<GradientEditorRoot :fill="fill" @update="fill = $event" v-slot="ctx">
  <MyGradientUI v-bind="ctx" />
</GradientEditorRoot>
```

## Voir aussi

- [GradientEditorBar](./gradient-editor-bar)
- [GradientEditorStop](./gradient-editor-stop)

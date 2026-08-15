---
title: GradientEditorRoot
description: State und Actions zum Bearbeiten von Gradient stops.
---

# GradientEditorRoot

`GradientEditorRoot` verwaltet:

- Active gradient stop;
- Gradient subtype;
- Hinzufügen, Entfernen und Aktualisieren von Stops;
- Color des Active stop;
- Background des Gradient bar.

Der Default slot erhält das vollständige API zum Aufbau eines eigenen Gradient editor.

## Props

<SdkPropsTable
  :rows="[
    { name: 'fill', type: 'Fill', description: 'Aktueller Gradient fill.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'fill: Fill', description: 'Wird ausgegeben, wenn sich der Gradient fill ändert.' }
  ]"
/>

## Beispiel

```vue
<GradientEditorRoot :fill="fill" @update="fill = $event" v-slot="ctx">
  <MyGradientUI v-bind="ctx" />
</GradientEditorRoot>
```

## Siehe auch

- [GradientEditorBar](./gradient-editor-bar)
- [GradientEditorStop](./gradient-editor-stop)

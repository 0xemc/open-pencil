---
title: ColorInputRoot
description: Hex value et Color updates pour un Color input personnalisé.
---

# ColorInputRoot

`ColorInputRoot` convertit le Color value actuel en Hex et fournit des Functions de mise à jour via un Hex string ou un objet `Color` complet.

L’application rend l’Input via le Default slot.

## Props

<SdkPropsTable
  :rows="[
    { name: 'color', type: 'Color', description: 'Color value actuel.', required: true },
    { name: 'editable', type: 'boolean | undefined', description: 'Indique si l’application doit présenter le Value comme modifiable.' }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'color: Color', description: 'Émis lorsque le Color value change.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'default', props: '{ color: Color, editable: boolean, hex: string, updateFromHex: (value: string) => void, updateColor: (color: Color) => void }', description: 'State et Actions pour rendre le Color input.' }
  ]"
/>

## Exemple

```vue
<ColorInputRoot :color="color" @update="color = $event" v-slot="{ hex, updateFromHex }">
  <input :value="hex" @input="updateFromHex(($event.target as HTMLInputElement).value)" />
</ColorInputRoot>
```

## Voir aussi

- [ColorPickerRoot](./color-picker-root)

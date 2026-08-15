---
title: ColorInputRoot
description: Hex value und Color updates für ein eigenes Color input.
---

# ColorInputRoot

`ColorInputRoot` wandelt den aktuellen Color value in Hex um und stellt Functions bereit, um ihn über einen Hex string oder ein vollständiges `Color` object zu aktualisieren.

Die Anwendung rendert das Input über den Default slot.

## Props

<SdkPropsTable
  :rows="[
    { name: 'color', type: 'Color', description: 'Aktueller Color value.', required: true },
    { name: 'editable', type: 'boolean | undefined', description: 'Gibt an, ob die Anwendung den Wert editierbar darstellen soll.' }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'color: Color', description: 'Wird ausgegeben, wenn sich der Color value ändert.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'default', props: '{ color: Color, editable: boolean, hex: string, updateFromHex: (value: string) => void, updateColor: (color: Color) => void }', description: 'State und Actions zum Rendern des Color input.' }
  ]"
/>

## Beispiel

```vue
<ColorInputRoot :color="color" @update="color = $event" v-slot="{ hex, updateFromHex }">
  <input :value="hex" @input="updateFromHex(($event.target as HTMLInputElement).value)" />
</ColorInputRoot>
```

## Siehe auch

- [ColorPickerRoot](./color-picker-root)

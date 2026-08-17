---
title: ColorInputRoot
description: Hex value y Color updates para un Color input propio.
---

# ColorInputRoot

`ColorInputRoot` convierte el Color value actual a Hex y proporciona Functions para actualizarlo mediante un Hex string o un objeto `Color` completo.

La aplicación renderiza el Input mediante el Default slot.

## Props

<SdkPropsTable
  :rows="[
    { name: 'color', type: 'Color', description: 'Color value actual.', required: true },
    { name: 'editable', type: 'boolean | undefined', description: 'Indica si la aplicación debe mostrar el Value como editable.' }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'update', payload: 'color: Color', description: 'Se emite cuando cambia el Color value.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'default', props: '{ color: Color, editable: boolean, hex: string, updateFromHex: (value: string) => void, updateColor: (color: Color) => void }', description: 'State y Actions para renderizar el Color input.' }
  ]"
/>

## Ejemplo

```vue
<ColorInputRoot :color="color" @update="color = $event" v-slot="{ hex, updateFromHex }">
  <input :value="hex" @input="updateFromHex(($event.target as HTMLInputElement).value)" />
</ColorInputRoot>
```

## Consulta también

- [ColorPickerRoot](./color-picker-root)

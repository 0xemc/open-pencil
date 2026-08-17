---
title: FontPickerRoot
description: Font picker con Search basado en Reka UI Combobox.
---

# FontPickerRoot

`FontPickerRoot` proporciona un Font picker con lista asíncrona de Font families y Search. Usa Reka UI Combobox, pero permite sustituir Trigger, Search input, Items, Selection indicator y Empty state mediante Slots.

## Props

<SdkPropsTable
  :rows="[
    { name: 'listFamilies', type: '() => Promise<string[]>', description: 'Fuente asíncrona de Font families disponibles.', required: true },
    { name: 'triggerClass', type: 'string | undefined', description: 'Class opcional del Default trigger.' },
    { name: 'contentClass', type: 'string | undefined', description: 'Class opcional del Dropdown content.' },
    { name: 'itemClass', type: 'string | undefined', description: 'Class opcional de los Default items.' },
    { name: 'searchClass', type: 'string | undefined', description: 'Class opcional del Search input.' },
    { name: 'viewportClass', type: 'string | undefined', description: 'Class opcional del Viewport con Scroll.' },
    { name: 'emptyClass', type: 'string | undefined', description: 'Class opcional del Empty state.' },
    { name: 'emptySearchText', type: 'string | undefined', description: 'Text cuando Search no encuentra ninguna Family.' },
    { name: 'emptyFontsText', type: 'string | undefined', description: 'Text cuando no hay Fonts disponibles.' },
    { name: 'emptyFontsHint', type: 'string | undefined', description: 'Hint opcional si faltan Fonts.' }
  ]"
/>

## Model

<SdkPropsTable
  :rows="[
    { name: 'v-model', type: 'string', description: 'Font family seleccionada.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'select', payload: 'family: string', description: 'Se emite después de elegir una Font family.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'trigger', props: '{ value: string, open: boolean }', description: 'Trigger content propio.' },
    { name: 'search', props: '{ searchTerm: string, setInputRef: (el: HTMLInputElement | null) => void }', description: 'Search input propio.' },
    { name: 'item', props: '{ family: string, selected: boolean }', description: 'Render propio de un Item.' },
    { name: 'indicator', props: '{ selected: boolean }', description: 'Selection indicator propio.' },
    { name: 'empty', description: 'Se muestra cuando no hay Fonts disponibles.' }
  ]"
/>

## Ejemplo

```vue
<FontPickerRoot v-model="fontFamily" :list-families="listFamilies">
  <template #trigger="{ value }">
    <button class="w-full truncate">{{ value }}</button>
  </template>
</FontPickerRoot>
```

## Consulta también

- [useTypography](../composables/use-typography)

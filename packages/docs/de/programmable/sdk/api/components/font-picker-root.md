---
title: FontPickerRoot
description: Font picker mit Search auf Grundlage von Reka UI Combobox.
---

# FontPickerRoot

`FontPickerRoot` stellt einen Font picker mit asynchron geladener Liste von Font families und Search bereit. Der Component verwendet Reka UI Combobox. Trigger, Search input, Items, Selection indicator und Empty state können über Slots ersetzt werden.

## Props

<SdkPropsTable
  :rows="[
    { name: 'listFamilies', type: '() => Promise<string[]>', description: 'Asynchrone Quelle verfügbarer Font families.', required: true },
    { name: 'triggerClass', type: 'string | undefined', description: 'Optionale Class des Default trigger.' },
    { name: 'contentClass', type: 'string | undefined', description: 'Optionale Class des Dropdown content.' },
    { name: 'itemClass', type: 'string | undefined', description: 'Optionale Class der Default items.' },
    { name: 'searchClass', type: 'string | undefined', description: 'Optionale Class des Search input.' },
    { name: 'viewportClass', type: 'string | undefined', description: 'Optionale Class des scrollbaren Viewport.' },
    { name: 'emptyClass', type: 'string | undefined', description: 'Optionale Class des Empty state.' },
    { name: 'emptySearchText', type: 'string | undefined', description: 'Text, wenn Search keine Font family findet.' },
    { name: 'emptyFontsText', type: 'string | undefined', description: 'Text, wenn keine Fonts verfügbar sind.' },
    { name: 'emptyFontsHint', type: 'string | undefined', description: 'Optionaler Hinweis bei fehlenden Fonts.' }
  ]"
/>

## Model

<SdkPropsTable
  :rows="[
    { name: 'v-model', type: 'string', description: 'Ausgewählte Font family.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'select', payload: 'family: string', description: 'Wird nach Auswahl einer Font family ausgegeben.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'trigger', props: '{ value: string, open: boolean }', description: 'Eigener Trigger content.' },
    { name: 'search', props: '{ searchTerm: string, setInputRef: (el: HTMLInputElement | null) => void }', description: 'Eigenes Search input.' },
    { name: 'item', props: '{ family: string, selected: boolean }', description: 'Eigene Darstellung eines Item.' },
    { name: 'indicator', props: '{ selected: boolean }', description: 'Eigener Selection indicator.' },
    { name: 'empty', description: 'Wird ohne verfügbare Fonts angezeigt.' }
  ]"
/>

## Beispiel

```vue
<FontPickerRoot v-model="fontFamily" :list-families="listFamilies">
  <template #trigger="{ value }">
    <button class="w-full truncate">{{ value }}</button>
  </template>
</FontPickerRoot>
```

## Siehe auch

- [useTypography](../composables/use-typography)

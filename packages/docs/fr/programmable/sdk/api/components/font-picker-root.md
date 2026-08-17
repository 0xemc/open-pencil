---
title: FontPickerRoot
description: Font picker avec Search basé sur Reka UI Combobox.
---

# FontPickerRoot

`FontPickerRoot` fournit un Font picker avec liste asynchrone de Font families et Search. Il utilise Reka UI Combobox, mais Trigger, Search input, Items, Selection indicator et Empty state peuvent être remplacés via Slots.

## Props

<SdkPropsTable
  :rows="[
    { name: 'listFamilies', type: '() => Promise<string[]>', description: 'Source asynchrone des Font families disponibles.', required: true },
    { name: 'triggerClass', type: 'string | undefined', description: 'Class facultative du Default trigger.' },
    { name: 'contentClass', type: 'string | undefined', description: 'Class facultative du Dropdown content.' },
    { name: 'itemClass', type: 'string | undefined', description: 'Class facultative des Default items.' },
    { name: 'searchClass', type: 'string | undefined', description: 'Class facultative du Search input.' },
    { name: 'viewportClass', type: 'string | undefined', description: 'Class facultative du Viewport avec Scroll.' },
    { name: 'emptyClass', type: 'string | undefined', description: 'Class facultative de l’Empty state.' },
    { name: 'emptySearchText', type: 'string | undefined', description: 'Text lorsque Search ne trouve aucune Family.' },
    { name: 'emptyFontsText', type: 'string | undefined', description: 'Text lorsqu’aucun Font n’est disponible.' },
    { name: 'emptyFontsHint', type: 'string | undefined', description: 'Hint facultatif si les Fonts manquent.' }
  ]"
/>

## Model

<SdkPropsTable
  :rows="[
    { name: 'v-model', type: 'string', description: 'Font family sélectionnée.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'select', payload: 'family: string', description: 'Émis après la sélection d’une Font family.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'trigger', props: '{ value: string, open: boolean }', description: 'Trigger content personnalisé.' },
    { name: 'search', props: '{ searchTerm: string, setInputRef: (el: HTMLInputElement | null) => void }', description: 'Search input personnalisé.' },
    { name: 'item', props: '{ family: string, selected: boolean }', description: 'Rendu personnalisé d’un Item.' },
    { name: 'indicator', props: '{ selected: boolean }', description: 'Selection indicator personnalisé.' },
    { name: 'empty', description: 'Affiché lorsqu’aucun Font n’est disponible.' }
  ]"
/>

## Exemple

```vue
<FontPickerRoot v-model="fontFamily" :list-families="listFamilies">
  <template #trigger="{ value }">
    <button class="w-full truncate">{{ value }}</button>
  </template>
</FontPickerRoot>
```

## Voir aussi

- [useTypography](../composables/use-typography)

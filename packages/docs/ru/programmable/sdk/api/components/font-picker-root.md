---
title: FontPickerRoot
description: Headless font picker с search на основе Reka UI Combobox.
---

# FontPickerRoot

`FontPickerRoot` — searchable font picker без встроенного оформления, построенный из components Reka UI Combobox.

## Props

<SdkPropsTable
  :rows="[
    { name: 'listFamilies', type: '() => Promise<string[]>', description: 'Async source доступных font families.', required: true },
    { name: 'triggerClass', type: 'string | undefined', description: 'Необязательный class стандартного trigger.' },
    { name: 'contentClass', type: 'string | undefined', description: 'Необязательный class содержимого dropdown.' },
    { name: 'itemClass', type: 'string | undefined', description: 'Необязательный class стандартных items.' },
    { name: 'searchClass', type: 'string | undefined', description: 'Необязательный class search input.' },
    { name: 'viewportClass', type: 'string | undefined', description: 'Необязательный class scroll viewport.' },
    { name: 'emptyClass', type: 'string | undefined', description: 'Необязательный class empty states.' },
    { name: 'emptySearchText', type: 'string | undefined', description: 'Текст, когда search не нашёл fonts.' },
    { name: 'emptyFontsText', type: 'string | undefined', description: 'Текст, когда fonts недоступны.' },
    { name: 'emptyFontsHint', type: 'string | undefined', description: 'Дополнительная подсказка для empty-fonts state.' }
  ]"
/>

## Model

<SdkPropsTable
  :rows="[
    { name: 'v-model', type: 'string', description: 'Выбранный font family.', required: true }
  ]"
/>

## Events

<SdkEventsTable
  :rows="[
    { name: 'select', payload: 'family: string', description: 'Вызывается после выбора font family.' }
  ]"
/>

## Slots

<SdkSlotsTable
  :rows="[
    { name: 'trigger', props: '{ value: string, open: boolean }', description: 'Собственное содержимое trigger.' },
    { name: 'search', props: '{ searchTerm: string, setInputRef: (el: HTMLInputElement | null) => void }', description: 'Собственный search input.' },
    { name: 'item', props: '{ family: string, selected: boolean }', description: 'Собственное представление item.' },
    { name: 'indicator', props: '{ selected: boolean }', description: 'Собственный indicator выбранного item.' },
    { name: 'empty', description: 'Показывается, когда fonts недоступны.' }
  ]"
/>

## Пример

```vue
<FontPickerRoot v-model="fontFamily" :list-families="listFamilies">
  <template #trigger="{ value }">
    <button class="w-full truncate">{{ value }}</button>
  </template>
</FontPickerRoot>
```

## См. также

- [useTypography](../composables/use-typography)

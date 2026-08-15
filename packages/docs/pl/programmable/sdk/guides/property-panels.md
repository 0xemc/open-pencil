---
title: Panele właściwości
description: Tworzenie paneli właściwości za pomocą composables i komponentów headless dla list.
---

# Panele właściwości

Panele właściwości w `@open-pencil/vue` są budowane przede wszystkim za pomocą composables.

Jeśli panel potrzebuje wartości obliczonych z selection i operacji do ich zmiany, użyj composable. Jeśli ważna jest struktura tablicy lub listy przeznaczona do ponownego użycia, wybierz komponent headless, na przykład `PropertyListRoot`.

## Główne composables

Do zwykłych sekcji panelu właściwości służą:

- `usePosition()`
- `useLayout()`
- `useAppearance()`
- `useTypography()`
- `useExport()`

Do properties przedstawianych jako listy:

- `useFillControls()`
- `useStrokeControls()`
- `useEffectsControls()`

## Pola powiązane ze zmiennymi

Jeśli wartość pola można powiązać z variable albo zewnętrznym design token, umieść pole wewnątrz `BindableValueRoot`. Komponent nie określa wyglądu pola, ale interfejs nie powinien niszczyć istniejącego binding podczas zwykłego uzyskania focus:

- Gdy pole nie jest edytowane, pokazuj nazwę variable. Obliczoną wartość można wyświetlić w elemencie pomocniczym, na przykład tooltip.
- Uzyskanie focus i otwarcie variable picker nie powinny usuwać binding.
- Stosuj `detach-on-edit`, `readonly-when-bound` albo `edit-variable` dopiero po rzeczywistej zmianie wartości przez użytkownika.
- Osobną operację usunięcia binding lepiej umieścić w picker niż w niebezpiecznej ikonie obok pola.
- Zmianę binding, jego usunięcie podczas edycji i zmianę wielu obiektów wykonuj w jednej batch operation provider.

Interfejs aplikacji OpenPencil pokazuje nazwę variable na fioletowym tle, gdy pole nie jest edytowane. Po rozpoczęciu edycji `NumberField` pokazuje obliczoną wartość liczbową. Własny interfejs może przedstawić ten sam headless state inaczej.

## Przykład: położenie i rozmiar

```vue
<script setup lang="ts">
import { usePosition } from '@open-pencil/vue'

const { x, y, width, height, updateProp, commitProp } = usePosition()
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <input :value="x" @input="updateProp('x', Number(($event.target as HTMLInputElement).value))" />
    <input :value="y" @input="updateProp('y', Number(($event.target as HTMLInputElement).value))" />
    <input :value="width" @input="updateProp('width', Number(($event.target as HTMLInputElement).value))" />
    <input :value="height" @input="updateProp('height', Number(($event.target as HTMLInputElement).value))" />
  </div>
</template>
```

## Przykład: lista fills

```vue
<script setup lang="ts">
import {
  PropertyListRoot,
  useEditorPropertyList,
  useFillControls
} from '@open-pencil/vue'

const fillControls = useFillControls()
const fills = useEditorPropertyList('fills')
</script>

<template>
  <PropertyListRoot
    prop-key="fills"
    :items="fills.items.value"
    :mixed="fills.isMixed.value"
    @add="fills.actions.add"
    @remove="fills.actions.remove"
    v-slot="{ items, actions }"
  >
    <div v-for="(fill, index) in items" :key="index">
      {{ fill.type }}
      <button @click="actions.remove(index)">Usuń</button>
    </div>

    <button @click="actions.add(fillControls.defaultFill)">Dodaj fill</button>
  </PropertyListRoot>
</template>
```

## Wybór API

- Używaj composables do state i actions.
- Używaj strukturalnych komponentów headless, gdy główną trudnością jest koordynacja powtarzających się list, drzew albo slots.

## Zobacz też

- [usePosition](../api/composables/use-position)
- [useLayout](../api/composables/use-layout)
- [useAppearance](../api/composables/use-appearance)
- [useTypography](../api/composables/use-typography)
- [useFillControls](../api/composables/use-fill-controls)
- [useStrokeControls](../api/composables/use-stroke-controls)
- [useEffectsControls](../api/composables/use-effects-controls)
- [PropertyListRoot](../api/components/property-list-root)

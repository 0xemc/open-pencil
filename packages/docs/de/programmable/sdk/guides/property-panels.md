---
title: Properties-Panels
description: Properties-Panels mit composables und headless list components entwickeln.
---

# Properties-Panels

`@open-pencil/vue` stellt für Properties-Panels vor allem composables bereit.

Benötigt ein Panel aus der Selection berechnete Values und Actions zur Aktualisierung, ist ein composable die passende Grundlage. Für wiederverwendbare Array- oder List structures eignet sich ein headless component wie `PropertyListRoot`.

## Composables

Für gewöhnliche Properties sections:

- `usePosition()`
- `useLayout()`
- `useAppearance()`
- `useTypography()`
- `useExport()`

Für Array properties:

- `useFillControls()`
- `useStrokeControls()`
- `useEffectsControls()`

## Variable bindings

Kann ein Feld an eine Variable oder ein externes Design token gebunden werden, sollte es in `BindableValueRoot` liegen.

- Im nicht editierten Zustand den Namen der Variable anzeigen; der berechnete Wert kann beispielsweise in einem Tooltip stehen.
- Focus oder das Öffnen des Variable picker darf ein bestehendes Binding nicht entfernen.
- `detach-on-edit`, `readonly-when-bound` oder `edit-variable` erst bei einer tatsächlichen Änderung anwenden.
- Eine ausdrückliche Action zum Entfernen des Binding gehört besser in den Picker als in einen leicht versehentlich auslösbaren Button neben dem Feld.
- Binding change, Detach während der Bearbeitung und Multi-selection updates in einer Provider batch operation zusammenfassen.

Die OpenPencil-App zeigt den Variablennamen im Ruhezustand violett an. Sobald die Bearbeitung beginnt, zeigt `NumberField` den berechneten numerischen Wert. Eine eigene Oberfläche kann denselben headless state anders darstellen.

## Beispiel: Position und Size

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

## Beispiel: Fills

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
      <button @click="actions.remove(index)">Entfernen</button>
    </div>

    <button @click="actions.add(fillControls.defaultFill)">Fill hinzufügen</button>
  </PropertyListRoot>
</template>
```

## Auswahl des API

- Composables für State und Actions verwenden.
- Headless structural components einsetzen, wenn die Koordination wiederkehrender Lists, Trees oder Slots im Mittelpunkt steht.

## Siehe auch

- [usePosition](../api/composables/use-position)
- [useLayout](../api/composables/use-layout)
- [useAppearance](../api/composables/use-appearance)
- [useTypography](../api/composables/use-typography)
- [useFillControls](../api/composables/use-fill-controls)
- [useStrokeControls](../api/composables/use-stroke-controls)
- [useEffectsControls](../api/composables/use-effects-controls)
- [PropertyListRoot](../api/components/property-list-root)

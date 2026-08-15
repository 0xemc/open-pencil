---
title: PropertyListRoot
description: Kontrolowana lista fills, strokes, effects albo innych array properties.
---

<script setup lang="ts">
import { data } from '#docs-api/components/property-list.data'
</script>

# PropertyListRoot

`PropertyListRoot` koordynuje interfejs właściwości przechowywanych jako array, na przykład fills, strokes i effects.

Otrzymuje values i mixed state przez props, emituje zmiany, a przez slot udostępnia:

- bieżące items;
- mixed state;
- actions dodawania, usuwania, zastępowania i częściowej aktualizacji;
- action zmiany visibility pojedynczego item.

## Przykład

```vue
<script setup lang="ts">
import { PropertyListRoot, useEditorPropertyList } from '@open-pencil/vue'

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
      <button @click="actions.remove(index)">Usuń</button>
    </div>
    <button @click="actions.add(defaultFill)">Dodaj fill</button>
  </PropertyListRoot>
</template>
```

<ComponentApi :meta="data" />

## Zobacz też

- [Dokumentacja API](../)

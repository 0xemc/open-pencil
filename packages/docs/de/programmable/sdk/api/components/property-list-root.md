---
title: PropertyListRoot
description: Controlled list für Fills, Strokes, Effects und andere Array properties.
---

# PropertyListRoot

`PropertyListRoot` koordiniert eine UI für Properties, die als Array gespeichert werden, beispielsweise Fills, Strokes und Effects.

Values und Mixed state werden über Props übergeben. Änderungen werden als Events ausgegeben. Der Slot erhält:

- aktuelle Items;
- Mixed state;
- Actions zum Hinzufügen, Entfernen, Ersetzen und partiellen Aktualisieren;
- Action zum Ändern der Visibility eines Item.

## Beispiel

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
      <button @click="actions.remove(index)">Entfernen</button>
    </div>
    <button @click="actions.add(defaultFill)">Fill hinzufügen</button>
  </PropertyListRoot>
</template>
```

## Siehe auch

- [API-Übersicht](../)

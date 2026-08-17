---
title: PropertyListRoot
description: Controlled list pour Fills, Strokes, Effects et autres Array properties.
---

<script setup lang="ts">
import { data } from '#docs-api/components/property-list.data'
</script>

# PropertyListRoot

`PropertyListRoot` coordonne une interface pour les Properties stockées sous forme d’Array, par exemple Fills, Strokes et Effects.

Values et Mixed state sont transmis via Props. Les modifications sont émises sous forme d’Events. Le Slot reçoit :

- les Items actuels ;
- le Mixed state ;
- les Actions pour ajouter, supprimer, remplacer et mettre à jour partiellement ;
- l’Action de modification de Visibility d’un Item.

## Exemple

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
      <button @click="actions.remove(index)">Supprimer</button>
    </div>
    <button @click="actions.add(defaultFill)">Ajouter un Fill</button>
  </PropertyListRoot>
</template>
```

<SdkComponentAPI :components="data.components" />

## Voir aussi

- [Référence API](../)

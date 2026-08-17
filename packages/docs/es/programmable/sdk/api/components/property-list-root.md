---
title: PropertyListRoot
description: Controlled list para Fills, Strokes, Effects y otras Array properties.
---

<script setup lang="ts">
import { data } from '#docs-api/components/property-list.data'
</script>

# PropertyListRoot

`PropertyListRoot` coordina una interfaz para Properties almacenadas como Array, por ejemplo Fills, Strokes y Effects.

Recibe Values y Mixed state mediante Props, emite los cambios y proporciona en el Slot:

- Items actuales;
- Mixed state;
- Actions para añadir, eliminar, sustituir y actualizar parcialmente;
- Action para cambiar Visibility de un Item.

## Ejemplo

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
      <button @click="actions.remove(index)">Eliminar</button>
    </div>
    <button @click="actions.add(defaultFill)">Añadir Fill</button>
  </PropertyListRoot>
</template>
```

<SdkComponentAPI :components="data.components" />

## Consulta también

- [Referencia del API](../)

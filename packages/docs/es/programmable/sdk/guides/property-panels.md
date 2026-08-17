---
title: Paneles Properties
description: Crear paneles Properties con composables y Headless list components.
---

# Paneles Properties

`@open-pencil/vue` ofrece principalmente composables para construir paneles Properties.

Si un panel necesita Values calculados a partir de la Selection y Actions para modificarlos, usa un composable. Si requiere una Structure reutilizable para Arrays o Lists, usa un Headless component como `PropertyListRoot`.

## Composables

Para secciones habituales:

- `usePosition()`
- `useLayout()`
- `useAppearance()`
- `useTypography()`
- `useExport()`

Para Array properties:

- `useFillControls()`
- `useStrokeControls()`
- `useEffectsControls()`

## Variable bindings

Cuando un Field pueda vincularse a una Variable o un Design token externo, colócalo dentro de `BindableValueRoot`.

- Sin edición activa, muestra el Name de la Variable; el Value calculado puede aparecer en un Tooltip.
- El Focus y la apertura del Variable picker no deben eliminar un Binding existente.
- Aplica `detach-on-edit`, `readonly-when-bound` o `edit-variable` solo después de una modificación real.
- Es preferible incluir una Action explícita para eliminar el Binding dentro del Picker que un Button fácil de pulsar por accidente junto al Field.
- Agrupa Binding changes, Detach durante la edición y Multi-selection updates en una sola Provider batch operation.

La aplicación de OpenPencil muestra el Name de la Variable en morado cuando el Field está inactivo. Al empezar a editar, `NumberField` muestra el Value numérico calculado. Una interfaz propia puede presentar el mismo Headless state de otra forma.

## Ejemplo: Position y Size

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

## Ejemplo: Fills

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
      <button @click="actions.remove(index)">Eliminar</button>
    </div>

    <button @click="actions.add(fillControls.defaultFill)">Añadir Fill</button>
  </PropertyListRoot>
</template>
```

## Elegir el API

- Composables para State y Actions.
- Headless structural components cuando lo principal sea coordinar Lists, Trees o Slots repetidos.

## Consulta también

- [usePosition](../api/composables/use-position)
- [useLayout](../api/composables/use-layout)
- [useAppearance](../api/composables/use-appearance)
- [useTypography](../api/composables/use-typography)
- [useFillControls](../api/composables/use-fill-controls)
- [useStrokeControls](../api/composables/use-stroke-controls)
- [useEffectsControls](../api/composables/use-effects-controls)
- [PropertyListRoot](../api/components/property-list-root)

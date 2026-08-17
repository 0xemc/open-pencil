---
title: Panneaux Properties
description: Créer des panneaux Properties avec des composables et des Headless list components.
---

# Panneaux Properties

`@open-pencil/vue` fournit principalement des composables pour les panneaux Properties.

Si un panneau utilise des Values calculés depuis la Selection et des Actions pour les modifier, choisissez un composable. Pour une Structure réutilisable d’Array ou de List, utilisez un Headless component comme `PropertyListRoot`.

## Composables

Pour les sections courantes :

- `usePosition()`
- `useLayout()`
- `useAppearance()`
- `useTypography()`
- `useExport()`

Pour les Array properties :

- `useFillControls()`
- `useStrokeControls()`
- `useEffectsControls()`

## Variable bindings

Lorsqu’un Field peut être lié à une Variable ou à un Design token externe, placez-le dans `BindableValueRoot`.

- Hors édition, affichez le Name de la Variable ; le Value calculé peut apparaître dans un Tooltip.
- Le Focus et l’ouverture du Variable picker ne doivent pas supprimer un Binding existant.
- N’appliquez `detach-on-edit`, `readonly-when-bound` ou `edit-variable` qu’après une modification réelle.
- Une Action explicite de suppression du Binding est préférable dans le Picker à un Button facile à déclencher par erreur près du Field.
- Regroupez Binding changes, Detach pendant l’édition et Multi-selection updates dans une seule Provider batch operation.

L’application OpenPencil affiche le Name de la Variable en violet lorsque le Field est inactif. Au début de l’édition, `NumberField` affiche le Value numérique calculé. Une interface personnalisée peut présenter le même Headless state différemment.

## Exemple : Position et Size

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

## Exemple : Fills

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
      <button @click="actions.remove(index)">Supprimer</button>
    </div>

    <button @click="actions.add(fillControls.defaultFill)">Ajouter un Fill</button>
  </PropertyListRoot>
</template>
```

## Choisir l’API

- Composables pour State et Actions.
- Headless structural components lorsque la coordination de Lists, Trees ou Slots répétitifs constitue l’essentiel du travail.

## Voir aussi

- [usePosition](../api/composables/use-position)
- [useLayout](../api/composables/use-layout)
- [useAppearance](../api/composables/use-appearance)
- [useTypography](../api/composables/use-typography)
- [useFillControls](../api/composables/use-fill-controls)
- [useStrokeControls](../api/composables/use-stroke-controls)
- [useEffectsControls](../api/composables/use-effects-controls)
- [PropertyListRoot](../api/components/property-list-root)

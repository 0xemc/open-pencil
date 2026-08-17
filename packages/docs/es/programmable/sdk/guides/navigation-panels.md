---
title: Paneles de navegación
description: Paneles laterales de Pages y Layers con PageListRoot, LayerTreeRoot y Selection state.
---

# Paneles de navegación

Un panel lateral de OpenPencil suele incluir una lista de Pages y el Tree de Layers. El SDK de Vue ofrece Headless components para ambas áreas.

## Pages

Usa `PageListRoot` o `usePageList()`:

```vue
<PageListRoot v-slot="{ pages, currentPageId, switchPage, addPage }">
  <div>
    <button v-for="page in pages" :key="page.id" @click="switchPage(page.id)">
      {{ page.name }}
    </button>
    <button @click="addPage()">Nueva Page</button>
  </div>
</PageListRoot>
```

## Layers

Usa `LayerTreeRoot` si quieres que el SDK gestione Tree structure e Interactions y que la aplicación defina el Markup y los Styles:

```vue
<LayerTreeRoot v-slot="{ items, selectedIds, select, toggleExpand, getKey, getChildren }">
  <TreeView
    :items="items"
    :selected-ids="selectedIds"
    :get-key="getKey"
    :get-children="getChildren"
    @select="select"
    @toggle-expand="toggleExpand"
  />
</LayerTreeRoot>
```

## Layout habitual

- Pages en la parte superior del panel;
- Layers debajo;
- detalles e Inline rename dentro de los Row components.

## Consulta también

- [usePageList](../api/composables/use-page-list)
- [PageListRoot](../api/components/page-list-root)
- [LayerTreeRoot](../api/components/layer-tree-root)
- [useSelectionState](../api/composables/use-selection-state)

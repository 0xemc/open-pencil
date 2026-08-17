---
title: Panneaux de navigation
description: Panneaux latéraux Pages et Layers avec PageListRoot, LayerTreeRoot et Selection state.
---

# Panneaux de navigation

Un panneau latéral OpenPencil contient souvent une Page list et le Layer tree. Le SDK Vue fournit des Headless components pour ces deux zones.

## Pages

Utilisez `PageListRoot` ou `usePageList()` :

```vue
<PageListRoot v-slot="{ pages, currentPageId, switchPage, addPage }">
  <div>
    <button v-for="page in pages" :key="page.id" @click="switchPage(page.id)">
      {{ page.name }}
    </button>
    <button @click="addPage()">Nouvelle Page</button>
  </div>
</PageListRoot>
```

## Layers

Utilisez `LayerTreeRoot` lorsque le SDK doit gérer Tree structure et Interactions tandis que l’application définit Markup et Styles :

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

## Layout courant

- Pages en haut du panneau ;
- Layers en dessous ;
- détails et Inline rename dans les Row components.

## Voir aussi

- [usePageList](../api/composables/use-page-list)
- [PageListRoot](../api/components/page-list-root)
- [LayerTreeRoot](../api/components/layer-tree-root)
- [useSelectionState](../api/composables/use-selection-state)

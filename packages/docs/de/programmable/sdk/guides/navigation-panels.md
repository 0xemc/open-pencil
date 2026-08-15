---
title: Navigations-Panels
description: Side panels für Pages und Layers mit PageListRoot, LayerTreeRoot und Selection state.
---

# Navigations-Panels

Ein OpenPencil-Side-panel enthält häufig eine Liste der Pages und den Tree der Layers. Das Vue SDK stellt für beide Bereiche headless components bereit.

## Pages

`PageListRoot` oder `usePageList()` verwenden:

```vue
<PageListRoot v-slot="{ pages, currentPageId, switchPage, addPage }">
  <div>
    <button v-for="page in pages" :key="page.id" @click="switchPage(page.id)">
      {{ page.name }}
    </button>
    <button @click="addPage()">Neue Seite</button>
  </div>
</PageListRoot>
```

## Layers

`LayerTreeRoot` verwenden, wenn das SDK die Tree structure und Interactions verwalten soll, während die Anwendung das Markup und Styling bestimmt:

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

## Typisches Layout

- Pages oben im Side panel;
- Layers darunter;
- Details und Inline rename direkt in den Row components.

## Siehe auch

- [usePageList](../api/composables/use-page-list)
- [PageListRoot](../api/components/page-list-root)
- [LayerTreeRoot](../api/components/layer-tree-root)
- [useSelectionState](../api/composables/use-selection-state)

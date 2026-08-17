---
title: Interface d’édition personnalisée
description: Créer une interface avec provideEditor, CanvasRoot, Menus, Panneaux et Toolbars.
---

# Interface d’édition personnalisée

Une application OpenPencil avec Vue comporte généralement trois couches :

1. `@open-pencil/core` crée l’Editor ;
2. `@open-pencil/vue` le relie à des composables Vue et des Headless components ;
3. l’application définit Layout, Styles et comportement propre au produit.

## Cas d’usage

L’application OpenPencil n’est qu’une interface possible. Le SDK permet de créer un Editor intégré à un autre produit, un Tool interne pour Assets, un Template editor, une Annotation UI ou un Editor spécialisé avec AI assistance.

## Structure recommandée

Une interface courante :

- exécute `provideEditor()` haut dans le Component tree ;
- place le canvas au centre ;
- affiche Pages et Layers dans un panneau latéral ;
- affiche Properties dans le panneau opposé ;
- pilote Menus et Toolbars avec des composables.

## Exemple

```vue
<script setup lang="ts">
import { createEditor } from '@open-pencil/core/editor'
import {
  provideEditor,
  CanvasRoot,
  CanvasSurface,
  ToolbarRoot,
  PageListRoot,
  LayerTreeRoot,
} from '@open-pencil/vue'

const editor = createEditor({ width: 1440, height: 900 })
provideEditor(editor)
</script>

<template>
  <div class="grid h-screen grid-cols-[240px_1fr_320px] grid-rows-[48px_1fr]">
    <ToolbarRoot v-slot="{ tools, activeTool, setTool }">
      <header class="col-span-3 flex items-center gap-2 border-b px-3">
        <button
          v-for="tool in tools"
          :key="tool.id"
          :data-active="activeTool === tool.id"
          @click="setTool(tool.id)"
        >
          {{ tool.label }}
        </button>
      </header>
    </ToolbarRoot>

    <aside class="border-r">
      <PageListRoot v-slot="{ pages, currentPageId, switchPage }">
        <nav>
          <button
            v-for="page in pages"
            :key="page.id"
            :data-active="page.id === currentPageId"
            @click="switchPage(page.id)"
          >
            {{ page.name }}
          </button>
        </nav>
      </PageListRoot>
    </aside>

    <main>
      <CanvasRoot>
        <CanvasSurface class="size-full" />
      </CanvasRoot>
    </main>

    <aside class="border-l">
      Panneau Properties
    </aside>
  </div>
</template>
```

## Responsabilités

- Le SDK gère l’intégration avec l’Editor et la Headless logic réutilisable.
- L’application contrôle Layout, Styles et Actions propres.
- Les composables fournissent les données des Menus et Panneaux sans imposer de Wrapper components supplémentaires.

## Voir aussi

- [provideEditor](../api/composables/provide-editor)
- [useCanvas](../api/composables/use-canvas)
- [ToolbarRoot](../api/components/toolbar-root)
- [PageListRoot](../api/components/page-list-root)
- [LayerTreeRoot](../api/components/layer-tree-root)

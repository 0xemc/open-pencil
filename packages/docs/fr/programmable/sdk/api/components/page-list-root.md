---
title: PageListRoot
description: Headless component pour les Pages et Actions d’une Page list.
---

# PageListRoot

`PageListRoot` fournit via son Slot :

- les Pages ;
- l’ID de la Page actuelle ;
- des informations sur les Separators ;
- les Actions pour créer, changer, renommer et supprimer des Pages.

L’application rend la List et définit ses Styles.

## Exemple

```vue
<PageListRoot v-slot="{ pages, currentPageId, switchPage }">
  <ul>
    <li v-for="page in pages" :key="page.id">
      <button
        :data-active="page.id === currentPageId"
        @click="switchPage(page.id)"
      >
        {{ page.name }}
      </button>
    </li>
  </ul>
</PageListRoot>
```

## Voir aussi

- [usePageList](../composables/use-page-list)

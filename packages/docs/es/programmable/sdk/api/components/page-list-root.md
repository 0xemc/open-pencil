---
title: PageListRoot
description: Headless component para Pages y Actions de una Page list.
---

# PageListRoot

`PageListRoot` proporciona mediante su Slot:

- Pages;
- ID de la Page actual;
- información sobre Separators;
- Actions para crear, cambiar, renombrar y eliminar Pages.

La aplicación renderiza la lista y define sus Styles.

## Ejemplo

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

## Consulta también

- [usePageList](../composables/use-page-list)

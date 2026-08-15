---
title: PageListRoot
description: Component headless udostępniający strony i actions listy stron.
---

# PageListRoot

`PageListRoot` przekazuje przez slot:

- strony;
- ID bieżącej strony;
- informacje o separators;
- actions dodawania, przełączania, przemianowywania i usuwania stron.

Aplikacja samodzielnie renderuje listę i określa jej wygląd.

## Przykład

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


## Zobacz też

- [usePageList](../composables/use-page-list)

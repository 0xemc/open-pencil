---
title: PageListRoot
description: Headless component для интерфейса списка страниц.
---

# PageListRoot

`PageListRoot` предоставляет структуру и actions списка страниц без встроенного оформления.

Props slot включают:

- список pages;
- ID текущей страницы;
- определение divider;
- добавление, переключение, переименование и удаление pages.

## Использование

Выберите `PageListRoot`, если SDK должен предоставить state и actions списка, а приложение — markup и оформление.

## Пример

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

## См. также

- [usePageList](../composables/use-page-list)

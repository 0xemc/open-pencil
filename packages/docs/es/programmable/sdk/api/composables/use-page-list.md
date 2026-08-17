---
title: usePageList
description: Leer, cambiar, crear, eliminar y renombrar Pages.
---

# usePageList

`usePageList()` proporciona State y Actions para una Page list:

- `pages`
- `currentPageId`
- `switchPage`
- `addPage`
- `deletePage`
- `renamePage`

## Uso

```ts
import { usePageList } from '@open-pencil/vue'

const pageList = usePageList()
```

## Ejemplo

```ts
const { pages, currentPageId, switchPage, addPage } = usePageList()
```

### Cambiar de Page

```ts
switchPage(pageId)
```

### Crear una Page

```ts
addPage()
```

## Consulta también

- [PageListRoot](../components/page-list-root)
- [useMenuModel](./use-menu-model)

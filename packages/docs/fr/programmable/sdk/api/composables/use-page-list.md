---
title: usePageList
description: Lire, changer, créer, supprimer et renommer des Pages.
---

# usePageList

`usePageList()` fournit State et Actions pour une Page list :

- `pages`
- `currentPageId`
- `switchPage`
- `addPage`
- `deletePage`
- `renamePage`

## Utilisation

```ts
import { usePageList } from '@open-pencil/vue'

const pageList = usePageList()
```

## Exemple

```ts
const { pages, currentPageId, switchPage, addPage } = usePageList()
```

### Changer de Page

```ts
switchPage(pageId)
```

### Créer une Page

```ts
addPage()
```

## Voir aussi

- [PageListRoot](../components/page-list-root)
- [useMenuModel](./use-menu-model)

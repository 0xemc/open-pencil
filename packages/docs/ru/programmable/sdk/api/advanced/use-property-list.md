---
title: usePropertyList
description: Доступ к context PropertyListRoot из дочернего component.
---

# usePropertyList

`usePropertyList()` возвращает локальный context, предоставленный `PropertyListRoot`.

Используйте composable в дочерних components, которым нужны controlled items, mixed state или row handlers для fills, strokes и effects. Сам composable не обращается к editor.

В панелях OpenPencil adapter component может вызвать `useEditorPropertyList(propKey)`, чтобы связать controlled component с selection, Undo batch и изменением нескольких объектов.

## См. также

- [PropertyListRoot](../components/property-list-root)
- [PropertyListItem](../components/property-list-item)

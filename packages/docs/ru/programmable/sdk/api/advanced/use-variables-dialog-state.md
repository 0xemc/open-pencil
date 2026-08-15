---
title: useVariablesDialogState
description: Editing state диалога variables поверх useVariables().
---

# useVariablesDialogState

`useVariablesDialogState()` дополняет `useVariables()` состоянием, необходимым диалогу для rename collections и управления focus.

Используйте composable в собственном variables dialog. Если нужен уже объединённый API редактора и таблицы, выберите `useVariablesEditor()`.

## Использование

```ts
import { useVariablesDialogState } from '@open-pencil/vue'

const variablesDialog = useVariablesDialogState()
```

## Дополнительное API

- `editingCollectionId`
- `setCollectionInputRef()`
- `startRenameCollection()`
- `commitRenameCollection()`

## См. также

- [useVariables](./use-variables)
- [useVariablesEditor](../composables/use-variables-editor)

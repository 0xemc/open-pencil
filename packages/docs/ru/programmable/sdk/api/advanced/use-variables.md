---
title: useVariables
description: Чтение и изменение variable collections, variables и values.
---

# useVariables

`useVariables()` — low-level composable, на котором основаны более высокоуровневые API variables editor.

Используйте его для прямого управления collections, active modes, filtering и CRUD operations без готовой table или dialog abstraction.

## Использование

```ts
import { useVariables } from '@open-pencil/vue'

const variables = useVariables()
```

## Возвращаемое API

- `collections`
- `activeCollectionId`
- `activeCollection`
- `activeModes`
- `variables`
- `searchTerm`
- `setSearchTerm()`
- `setActiveCollection()`
- `addCollection()`
- `renameCollection()`
- `addVariable()`
- `removeVariable()`
- `renameVariable()`
- `updateVariableValue()`
- `formatModeValue()`
- `parseVariableValue()`
- `shortName()`

## См. также

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariablesDialogState](./use-variables-dialog-state)
- [useVariablesTable](./use-variables-table)

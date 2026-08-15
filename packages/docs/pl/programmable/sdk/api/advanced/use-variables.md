---
title: useVariables
description: Odczytywanie i zmiana variable collections, variables, modes i values.
---

# useVariables

`useVariables()` udostępnia low-level state i actions edytora variables.

Użyj composable, jeśli potrzebujesz bezpośredniej kontroli nad collections, active modes, filtrowaniem i operacjami CRUD bez gotowej tabeli ani dialog.

## Użycie

```ts
import { useVariables } from '@open-pencil/vue'

const variables = useVariables()
```

## Zwracane API

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

## Zobacz też

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariablesDialogState](./use-variables-dialog-state)
- [useVariablesTable](./use-variables-table)

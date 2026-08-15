---
title: useVariables
description: Variable collections, Variables, Modes und Values lesen und ändern.
---

# useVariables

`useVariables()` stellt den low-level State und die Actions eines Variables editor bereit.

Das composable verwenden, wenn direkte Kontrolle über Collections, Active modes, Filter und CRUD operations ohne fertige Tabelle oder Dialog benötigt wird.

## Verwendung

```ts
import { useVariables } from '@open-pencil/vue'

const variables = useVariables()
```

## Rückgabewerte

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

## Siehe auch

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariablesDialogState](./use-variables-dialog-state)
- [useVariablesTable](./use-variables-table)

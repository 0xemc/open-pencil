---
title: useVariables
description: Lire et modifier Variable collections, Variables, Modes et Values.
---

# useVariables

`useVariables()` fournit le Low-level state et les Actions d’un Variables editor.

Utilisez le composable pour contrôler directement Collections, Active modes, filtres et CRUD operations sans Table ou Dialog préconfiguré.

## Utilisation

```ts
import { useVariables } from '@open-pencil/vue'

const variables = useVariables()
```

## Values

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

## Voir aussi

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariablesDialogState](./use-variables-dialog-state)
- [useVariablesTable](./use-variables-table)

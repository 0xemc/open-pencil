---
title: useVariables
description: Leer y modificar Variable collections, Variables, Modes y Values.
---

# useVariables

`useVariables()` proporciona el Low-level state y las Actions de un Variables editor.

Usa el composable cuando necesites control directo de Collections, Active modes, filtros y CRUD operations sin una Tabla o Dialog ya preparados.

## Uso

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

## Consulta también

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariablesDialogState](./use-variables-dialog-state)
- [useVariablesTable](./use-variables-table)

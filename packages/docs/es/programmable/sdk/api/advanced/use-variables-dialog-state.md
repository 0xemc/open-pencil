---
title: useVariablesDialogState
description: State para renombrar Collections y gestionar Focus en un Variables dialog.
---

# useVariablesDialogState

`useVariablesDialogState()` amplía `useVariables()` con el State necesario para Inline rename de una Collection y Focus management dentro de un Variables dialog.

Usa el composable para crear un Dialog propio en lugar de la integración completa `useVariablesEditor()`.

## Uso

```ts
import { useVariablesDialogState } from '@open-pencil/vue'

const variablesDialog = useVariablesDialogState()
```

## API adicional

- `editingCollectionId`
- `setCollectionInputRef()`
- `startRenameCollection()`
- `commitRenameCollection()`

## Consulta también

- [useVariables](./use-variables)
- [useVariablesEditor](../composables/use-variables-editor)

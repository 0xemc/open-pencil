---
title: useVariablesTable
description: Column definitions de TanStack Table para un Variables editor.
---

# useVariablesTable

`useVariablesTable(options)` devuelve Column definitions reactivas para la Variables table.

Usa el composable si necesitas el comportamiento del SDK, pero proporcionas la Table instance, Icons o Components por separado.

## Uso

```ts
import { useVariablesTable } from '@open-pencil/vue'

const { columns } = useVariablesTable(options)
```

## Notas

Para la mayoría de las aplicaciones, `useVariablesEditor()` es el punto de entrada más sencillo. `useVariablesTable()` permite controlar directamente la configuración de la Tabla.

## Consulta también

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariables](./use-variables)
- [useVariablesDialogState](./use-variables-dialog-state)

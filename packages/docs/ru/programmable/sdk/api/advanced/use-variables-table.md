---
title: useVariablesTable
description: Column definitions TanStack Table для variables UI.
---

# useVariablesTable

`useVariablesTable(options)` возвращает реактивные column definitions TanStack Table для редактора variables.

Используйте composable, если требуется поведение variable table из SDK, но table instance, icons или shell components предоставляет приложение.

## Использование

```ts
import { useVariablesTable } from '@open-pencil/vue'

const { columns } = useVariablesTable(options)
```

## Выбор API

Это специализированный integration API для table-based variables UI. В большинстве случаев удобнее начать с `useVariablesEditor()` и переходить к `useVariablesTable()` только при необходимости управлять таблицей напрямую.

## См. также

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariables](./use-variables)
- [useVariablesDialogState](./use-variables-dialog-state)

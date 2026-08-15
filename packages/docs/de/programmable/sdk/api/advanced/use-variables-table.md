---
title: useVariablesTable
description: Column definitions für eine Variables table mit TanStack Table.
---

# useVariablesTable

`useVariablesTable(options)` gibt reaktive Column definitions für die Variables table zurück.

Das composable verwenden, wenn das Verhalten des SDK benötigt wird, Table instance, Icons oder Components jedoch selbst bereitgestellt werden.

## Verwendung

```ts
import { useVariablesTable } from '@open-pencil/vue'

const { columns } = useVariablesTable(options)
```

## Hinweise

Für die meisten Anwendungen ist `useVariablesEditor()` der bequemere Einstieg. `useVariablesTable()` bietet direkte Kontrolle über die Konfiguration der Tabelle.

## Siehe auch

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariables](./use-variables)
- [useVariablesDialogState](./use-variables-dialog-state)

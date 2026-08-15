---
title: useVariablesTable
description: Definicje columns TanStack Table dla edytora variables.
---

# useVariablesTable

`useVariablesTable(options)` zwraca reaktywne definitions columns TanStack Table używane w tabeli variables.

Użyj composable, jeśli chcesz wykorzystać zachowanie SDK, ale samodzielnie tworzysz table instance albo przekazujesz własne icons i components.

## Użycie

```ts
import { useVariablesTable } from '@open-pencil/vue'

const { columns } = useVariablesTable(options)
```

## Uwagi

W większości przypadków wygodniejszym punktem wejścia jest `useVariablesEditor()`. Wybierz `useVariablesTable()`, gdy potrzebujesz bezpośredniej kontroli nad konfiguracją tabeli.

## Zobacz też

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariables](./use-variables)
- [useVariablesDialogState](./use-variables-dialog-state)

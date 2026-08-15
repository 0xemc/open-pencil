---
title: useVariablesDialogState
description: State zmiany nazw collections i zarządzanie focus w oknie variables.
---

# useVariablesDialogState

`useVariablesDialogState()` rozszerza `useVariables()` o state potrzebny w oknie variables do zmiany nazwy collection i zarządzania focus pola.

Użyj composable podczas tworzenia własnego dialog zamiast gotowej integracji `useVariablesEditor()`.

## Użycie

```ts
import { useVariablesDialogState } from '@open-pencil/vue'

const variablesDialog = useVariablesDialogState()
```

## Dodatkowe API

- `editingCollectionId`
- `setCollectionInputRef()`
- `startRenameCollection()`
- `commitRenameCollection()`

## Zobacz też

- [useVariables](./use-variables)
- [useVariablesEditor](../composables/use-variables-editor)

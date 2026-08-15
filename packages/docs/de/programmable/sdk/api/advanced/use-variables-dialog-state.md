---
title: useVariablesDialogState
description: State zum Umbenennen von Collections und Verwalten des Focus im Variables dialog.
---

# useVariablesDialogState

`useVariablesDialogState()` erweitert `useVariables()` um den State, den ein Variables dialog für Inline rename einer Collection und Focus management benötigt.

Das composable eignet sich für einen eigenen Dialog anstelle der fertigen Integration `useVariablesEditor()`.

## Verwendung

```ts
import { useVariablesDialogState } from '@open-pencil/vue'

const variablesDialog = useVariablesDialogState()
```

## Zusätzliches API

- `editingCollectionId`
- `setCollectionInputRef()`
- `startRenameCollection()`
- `commitRenameCollection()`

## Siehe auch

- [useVariables](./use-variables)
- [useVariablesEditor](../composables/use-variables-editor)

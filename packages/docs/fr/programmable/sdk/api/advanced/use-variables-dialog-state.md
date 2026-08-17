---
title: useVariablesDialogState
description: State pour renommer les Collections et gérer Focus dans un Variables dialog.
---

# useVariablesDialogState

`useVariablesDialogState()` complète `useVariables()` avec le State nécessaire à Inline rename d’une Collection et à Focus management dans un Variables dialog.

Utilisez le composable pour créer un Dialog personnalisé plutôt que l’intégration complète `useVariablesEditor()`.

## Utilisation

```ts
import { useVariablesDialogState } from '@open-pencil/vue'

const variablesDialog = useVariablesDialogState()
```

## API supplémentaire

- `editingCollectionId`
- `setCollectionInputRef()`
- `startRenameCollection()`
- `commitRenameCollection()`

## Voir aussi

- [useVariables](./use-variables)
- [useVariablesEditor](../composables/use-variables-editor)

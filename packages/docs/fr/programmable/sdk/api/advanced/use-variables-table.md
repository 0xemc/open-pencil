---
title: useVariablesTable
description: Column definitions TanStack Table pour un Variables editor.
---

# useVariablesTable

`useVariablesTable(options)` renvoie des Column definitions réactives pour la Variables table.

Utilisez le composable lorsque le comportement du SDK est souhaité, mais que Table instance, Icons ou Components sont fournis séparément.

## Utilisation

```ts
import { useVariablesTable } from '@open-pencil/vue'

const { columns } = useVariablesTable(options)
```

## Notes

Pour la plupart des applications, `useVariablesEditor()` constitue un point de départ plus simple. `useVariablesTable()` donne un contrôle direct sur la configuration du tableau.

## Voir aussi

- [useVariablesEditor](../composables/use-variables-editor)
- [useVariables](./use-variables)
- [useVariablesDialogState](./use-variables-dialog-state)

---
title: useVariablesEditor
description: Préparer le State d’un Variables dialog et de TanStack Table.
---

# useVariablesEditor

`useVariablesEditor()` relie les éléments nécessaires à un Variables dialog ou à un écran d’édition personnalisé :

- Dialog state ;
- Table columns ;
- intégration TanStack Vue Table ;
- Functions pour Collections et Modes.

## Utilisation

```ts
const variables = useVariablesEditor({
  colorInput: ColorInput,
  icons,
  fallbackIcon,
  deleteIcon,
})
```

## Values

Le résultat contient le Low-level state du Dialog et de la Table, ainsi que :

- `columns`
- `table`
- `hasCollections`

`useVariablesEditor()` convient lorsqu’un seul composable doit fournir la Table integration et les Action handlers.

## Voir aussi

- [Référence API](../)

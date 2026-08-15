---
title: useVariablesEditor
description: State eines Variables dialog und TanStack Table vorbereiten.
---

# useVariablesEditor

`useVariablesEditor()` verbindet die Teile, die für einen Variables dialog oder einen eigenen Variables editor benötigt werden:

- Dialog state;
- Table columns;
- Integration mit TanStack Vue Table;
- Functions für Collections und Modes.

## Verwendung

```ts
const variables = useVariablesEditor({
  colorInput: ColorInput,
  icons,
  fallbackIcon,
  deleteIcon,
})
```

## Rückgabewerte

Das Ergebnis enthält den low-level State für Dialog und Tabelle sowie:

- `columns`
- `table`
- `hasCollections`

`useVariablesEditor()` eignet sich, wenn ein einzelnes composable die Table integration und Action handlers bereitstellen soll.

## Siehe auch

- [API-Übersicht](../)

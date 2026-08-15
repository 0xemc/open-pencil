---
title: useVariablesEditor
description: Przygotowanie state okna variables i TanStack Table.
---

# useVariablesEditor

`useVariablesEditor()` łączy elementy potrzebne do utworzenia okna albo osobnego ekranu edycji variables:

- state okna;
- columns tabeli;
- podłączenie TanStack Vue Table;
- functions dla collections i modes.

## Użycie

```ts
const variables = useVariablesEditor({
  colorInput: ColorInput,
  icons,
  fallbackIcon,
  deleteIcon,
})
```

## Zwracane API

Wynik zawiera low-level state okna i tabeli oraz:

- `columns`
- `table`
- `hasCollections`

Użyj `useVariablesEditor()`, jeśli potrzebujesz jednego composable z podłączoną tabelą i handlers działań.

## Zobacz też

- [Dokumentacja API](../)

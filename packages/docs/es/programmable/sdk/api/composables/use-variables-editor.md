---
title: useVariablesEditor
description: Preparar el State de un Variables dialog y TanStack Table.
---

# useVariablesEditor

`useVariablesEditor()` conecta las partes necesarias para crear un Variables dialog o una pantalla de edición propia:

- Dialog state;
- Table columns;
- integración con TanStack Vue Table;
- Functions para Collections y Modes.

## Uso

```ts
const variables = useVariablesEditor({
  colorInput: ColorInput,
  icons,
  fallbackIcon,
  deleteIcon,
})
```

## Values

El resultado contiene el Low-level state del Dialog y la Tabla, además de:

- `columns`
- `table`
- `hasCollections`

`useVariablesEditor()` resulta adecuado cuando un solo composable debe proporcionar la Table integration y los Action handlers.

## Consulta también

- [Referencia del API](../)

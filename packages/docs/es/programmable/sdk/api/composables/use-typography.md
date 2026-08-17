---
title: useTypography
description: Leer y modificar Font family, Style, Size, Alignment y Formatting de objetos de texto.
---

# useTypography

`useTypography()` proporciona a los paneles de texto:

- Font family;
- Font style;
- Font size;
- Formatting activo;
- información sobre Fonts ausentes;
- Functions para cambiar Family, Style, Alignment y Decoration.

## Uso

```ts
import { useTypography } from '@open-pencil/vue'

const typography = useTypography()
```

## Ejemplo

```ts
const {
  fontFamily,
  fontWeight,
  fontSize,
  activeFormatting,
  setFamily,
  setWeight,
  setAlign,
} = useTypography()
```

### Cargar y seleccionar una Font family

```ts
const typography = useTypography({
  loadFont: async (family, style) => {
    await myFontLoader(family, style)
  },
})
```

### Formatting

```ts
typography.toggleBold()
typography.toggleItalic()
typography.toggleDecoration('UNDERLINE')
```

## Consulta también

- [useTextEdit](./use-text-edit)
- [useSelectionState](./use-selection-state)

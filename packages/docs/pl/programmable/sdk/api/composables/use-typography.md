---
title: useTypography
description: Odczytywanie i zmiana font family, style, size, alignment i formatting obiektów tekstowych.
---

# useTypography

`useTypography()` udostępnia panelom tekstu:

- font family;
- font style;
- font size;
- aktywne formatting;
- informacje o brakującym font;
- functions zmiany family, style, alignment i decoration.

## Użycie

```ts
import { useTypography } from '@open-pencil/vue'

const typography = useTypography()
```

## Przykład

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

### Załadowanie i wybranie font family

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

## Zobacz też

- [useTextEdit](./use-text-edit)
- [useSelectionState](./use-selection-state)

---
title: useTypography
description: Lire et modifier Font family, Style, Size, Alignment et Formatting des objets texte.
---

# useTypography

`useTypography()` fournit aux panneaux texte :

- Font family ;
- Font style ;
- Font size ;
- Formatting actif ;
- informations sur les Fonts manquants ;
- Functions pour modifier Family, Style, Alignment et Decoration.

## Utilisation

```ts
import { useTypography } from '@open-pencil/vue'

const typography = useTypography()
```

## Exemple

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

### Charger et sélectionner une Font family

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

## Voir aussi

- [useTextEdit](./use-text-edit)
- [useSelectionState](./use-selection-state)

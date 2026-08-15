---
title: useTypography
description: Чтение и обновление семейства шрифта, начертания, размера, выравнивания и форматирования для текстовых узлов.
---

# useTypography

`useTypography()` предоставляет панелям работы с текстом:

- font family;
- font style;
- размер шрифта;
- активное начертание;
- сведения об отсутствующем шрифте;
- функции для изменения family, style, выравнивания и оформления.

## Использование

```ts
import { useTypography } from '@open-pencil/vue'

const typography = useTypography()
```

## Базовый пример

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

## Практические примеры

### Загрузить и выбрать font family

```ts
const typography = useTypography({
  loadFont: async (family, style) => {
    await myFontLoader(family, style)
  },
})
```

### Изменить начертание

```ts
typography.toggleBold()
typography.toggleItalic()
typography.toggleDecoration('UNDERLINE')
```

## Связанные API

- [useTextEdit](./use-text-edit)
- [useSelectionState](./use-selection-state)

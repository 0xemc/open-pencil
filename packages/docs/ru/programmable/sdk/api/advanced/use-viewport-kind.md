---
title: useViewportKind
description: Mobile и desktop flags для responsive editor shell.
---

# useViewportKind

`useViewportKind()` возвращает простые responsive flags, используемые интерфейсом OpenPencil.

Выберите composable, если shell достаточно небольшой abstraction над breakpoints и прямое подключение `useBreakpoints()` не нужно.

## Использование

```ts
import { useViewportKind } from '@open-pencil/vue'

const { isMobile, isDesktop } = useViewportKind()
```

## Возвращаемое API

- `isMobile`
- `isDesktop`

## См. также

- [useCanvas](../composables/use-canvas)

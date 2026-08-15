---
title: useViewportKind
description: Reaktywne flags mobile i desktop dla własnego interfejsu edytora.
---

# useViewportKind

`useViewportKind()` zwraca uproszczoną informację o rozmiarze viewport używaną przez responsive UI OpenPencil.

Użyj composable, jeśli potrzebujesz jedynie podziału mobile/desktop zamiast bezpośredniej konfiguracji `useBreakpoints()`.

## Użycie

```ts
import { useViewportKind } from '@open-pencil/vue'

const { isMobile, isDesktop } = useViewportKind()
```

## Zwracane wartości

- `isMobile`
- `isDesktop`

## Zobacz też

- [useCanvas](../composables/use-canvas)

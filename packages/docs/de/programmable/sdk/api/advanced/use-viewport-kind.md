---
title: useViewportKind
description: Reaktive Mobile- und Desktop-Flags für eine eigene Editor-Oberfläche.
---

# useViewportKind

`useViewportKind()` gibt eine vereinfachte Einordnung der aktuellen Viewport size zurück, wie sie von der responsive UI in OpenPencil verwendet wird.

Das composable eignet sich, wenn nur zwischen Mobile und Desktop unterschieden werden muss und keine direkte Konfiguration von `useBreakpoints()` erforderlich ist.

## Verwendung

```ts
import { useViewportKind } from '@open-pencil/vue'

const { isMobile, isDesktop } = useViewportKind()
```

## Rückgabewerte

- `isMobile`
- `isDesktop`

## Siehe auch

- [useCanvas](../composables/use-canvas)

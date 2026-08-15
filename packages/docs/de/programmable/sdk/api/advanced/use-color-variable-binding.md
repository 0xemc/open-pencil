---
title: useColorVariableBinding
description: Fill oder Stroke color mit einer Variable verbinden.
---

# useColorVariableBinding

`useColorVariableBinding(kind)` stellt Functions zum Suchen, Setzen und Entfernen eines Binding für Color variables in Fills oder Strokes bereit.

Das composable eignet sich für Color controls mit Unterstützung für Design variables.

## Verwendung

```ts
import { useColorVariableBinding } from '@open-pencil/vue'

const fillBinding = useColorVariableBinding('fills')
const strokeBinding = useColorVariableBinding('strokes')
```

## Siehe auch

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [FillRoot](/programmable/sdk/api/components/fill-root)

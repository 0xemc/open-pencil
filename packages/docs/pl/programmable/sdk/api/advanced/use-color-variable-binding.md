---
title: useColorVariableBinding
description: Powiązanie fill albo stroke color z variable.
---

# useColorVariableBinding

`useColorVariableBinding(kind)` udostępnia functions wyszukiwania, ustawiania i usuwania binding dla color variables używanych przez fills albo strokes.

Użyj composable w color controls obsługujących design variables.

## Użycie

```ts
import { useColorVariableBinding } from '@open-pencil/vue'

const fillBinding = useColorVariableBinding('fills')
const strokeBinding = useColorVariableBinding('strokes')
```

## Zobacz też

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [FillRoot](/programmable/sdk/api/components/fill-root)

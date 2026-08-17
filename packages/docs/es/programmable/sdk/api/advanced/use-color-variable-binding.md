---
title: useColorVariableBinding
description: Vincular el Color de un Fill o Stroke con una Variable.
---

# useColorVariableBinding

`useColorVariableBinding(kind)` proporciona Functions para buscar, establecer y eliminar un Binding de Color variables en Fills o Strokes.

Usa el composable en Color controls compatibles con Design variables.

## Uso

```ts
import { useColorVariableBinding } from '@open-pencil/vue'

const fillBinding = useColorVariableBinding('fills')
const strokeBinding = useColorVariableBinding('strokes')
```

## Consulta también

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [FillRoot](/programmable/sdk/api/components/fill-root)

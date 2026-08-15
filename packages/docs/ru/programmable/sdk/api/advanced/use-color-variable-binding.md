---
title: useColorVariableBinding
description: Binding color variables в редакторах fill и stroke.
---

# useColorVariableBinding

`useColorVariableBinding(kind)` предоставляет search, bind и unbind для color variables, используемых редакторами fills и strokes.

Используйте composable, если color UI должен связывать fill или stroke с design variable.

## Использование

```ts
import { useColorVariableBinding } from '@open-pencil/vue'

const fillBinding = useColorVariableBinding('fills')
const strokeBinding = useColorVariableBinding('strokes')
```

## См. также

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [FillRoot](/programmable/sdk/api/components/fill-root)

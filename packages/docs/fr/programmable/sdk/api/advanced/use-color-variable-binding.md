---
title: useColorVariableBinding
description: Relier la Color d’un Fill ou Stroke à une Variable.
---

# useColorVariableBinding

`useColorVariableBinding(kind)` fournit les Functions pour rechercher, définir et supprimer un Binding de Color variables dans Fills ou Strokes.

Utilisez le composable dans des Color controls prenant en charge les Design variables.

## Utilisation

```ts
import { useColorVariableBinding } from '@open-pencil/vue'

const fillBinding = useColorVariableBinding('fills')
const strokeBinding = useColorVariableBinding('strokes')
```

## Voir aussi

- [useFillControls](../composables/use-fill-controls)
- [useStrokeControls](../composables/use-stroke-controls)
- [FillRoot](/programmable/sdk/api/components/fill-root)

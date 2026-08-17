---
title: useEffectsControls
description: Gérer Shadows et Blur effects dans un panneau Effects.
---

# useEffectsControls

`useEffectsControls()` fournit à un panneau Effects :

- des Default values pour les nouveaux Effects ;
- la configuration des Shadows et Blur effects ;
- le State des Items développés ;
- une Preview pendant Scrubbing ;
- le Commit du Value final ;
- la modification du Type et de la Color d’un Effect.

## Utilisation

```ts
import { useEffectsControls } from '@open-pencil/vue'

const effects = useEffectsControls()
```

## Exemple

```ts
const { effectOptions, createDefaultEffect, toggleExpand, scrubEffect, commitEffect } = useEffectsControls()
```

### Créer un Effect

```ts
const effect = effects.createDefaultEffect()
```

### Preview et Commit

```ts
effects.scrubEffect(node, index, { radius: 12 })
effects.commitEffect(node, index, { radius: 12 })
```

## Voir aussi

- [PropertyListRoot](../components/property-list-root)

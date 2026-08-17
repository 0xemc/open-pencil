---
title: useEffectsControls
description: Gestionar Shadows y Blur effects en un panel Effects.
---

# useEffectsControls

`useEffectsControls()` proporciona a un panel Effects:

- Default values para nuevos Effects;
- configuración de Shadows y Blur effects;
- State de Items expandidos;
- Preview durante Scrubbing;
- Commit del Value final;
- cambios de Type y Color de un Effect.

## Uso

```ts
import { useEffectsControls } from '@open-pencil/vue'

const effects = useEffectsControls()
```

## Ejemplo

```ts
const { effectOptions, createDefaultEffect, toggleExpand, scrubEffect, commitEffect } = useEffectsControls()
```

### Crear un Effect

```ts
const effect = effects.createDefaultEffect()
```

### Preview y Commit

```ts
effects.scrubEffect(node, index, { radius: 12 })
effects.commitEffect(node, index, { radius: 12 })
```

## Consulta también

- [PropertyListRoot](../components/property-list-root)

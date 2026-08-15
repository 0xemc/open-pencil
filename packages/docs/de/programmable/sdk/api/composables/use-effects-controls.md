---
title: useEffectsControls
description: Shadows und Blur effects in einem Effects-Panel verwalten.
---

# useEffectsControls

`useEffectsControls()` stellt einem Effects-Panel bereit:

- Default values für neue Effects;
- Konfiguration für Shadows und Blur effects;
- State aufgeklappter Items;
- Preview während Scrubbing;
- Commit des endgültigen Value;
- Änderung von Type und Color eines Effect.

## Verwendung

```ts
import { useEffectsControls } from '@open-pencil/vue'

const effects = useEffectsControls()
```

## Beispiel

```ts
const { effectOptions, createDefaultEffect, toggleExpand, scrubEffect, commitEffect } = useEffectsControls()
```

### Effect erstellen

```ts
const effect = effects.createDefaultEffect()
```

### Preview und Commit

```ts
effects.scrubEffect(node, index, { radius: 12 })
effects.commitEffect(node, index, { radius: 12 })
```

## Siehe auch

- [PropertyListRoot](../components/property-list-root)

---
title: useEffectsControls
description: Zarządzanie shadows i blur effects w panelu efektów.
---

# useEffectsControls

`useEffectsControls()` udostępnia panelowi efektów:

- wartości nowych effects;
- konfigurację shadows i blur effects;
- state rozwiniętych items;
- preview podczas przeciągania;
- commit końcowej wartości;
- zmianę type i color effect.

## Użycie

```ts
import { useEffectsControls } from '@open-pencil/vue'

const effects = useEffectsControls()
```

## Przykład

```ts
const { effectOptions, createDefaultEffect, toggleExpand, scrubEffect, commitEffect } = useEffectsControls()
```

### Nowy effect

```ts
const effect = effects.createDefaultEffect()
```

### Preview i commit

```ts
effects.scrubEffect(node, index, { radius: 12 })
effects.commitEffect(node, index, { radius: 12 })
```

## Zobacz też

- [PropertyListRoot](../components/property-list-root)

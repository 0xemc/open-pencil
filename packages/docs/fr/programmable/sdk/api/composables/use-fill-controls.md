---
title: useFillControls
description: Default value d’un nouveau Fill dans le panneau Properties.
---

# useFillControls

`useFillControls()` fournit le Default fill qu’un panneau utilise lors de l’ajout d’un Fill.

## Utilisation

```ts
import { useFillControls } from '@open-pencil/vue'

const fills = useFillControls()
```

## Value

- `defaultFill`

### Ajouter un Fill

```ts
propertyList.add(fills.defaultFill)
```

## Voir aussi

- [PropertyListRoot](../components/property-list-root)

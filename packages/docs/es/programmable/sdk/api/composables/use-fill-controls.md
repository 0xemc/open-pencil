---
title: useFillControls
description: Default value de un nuevo Fill en el panel Properties.
---

# useFillControls

`useFillControls()` proporciona el Default fill que un panel puede usar al añadir un nuevo Fill.

## Uso

```ts
import { useFillControls } from '@open-pencil/vue'

const fills = useFillControls()
```

## Value

- `defaultFill`

### Añadir un Fill

```ts
propertyList.add(fills.defaultFill)
```

## Consulta también

- [PropertyListRoot](../components/property-list-root)

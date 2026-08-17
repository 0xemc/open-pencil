---
title: usePosition
description: Lire et modifier Position, Size, Rotation, Alignment et Flip des objets sélectionnés.
---

# usePosition

`usePosition()` fournit aux panneaux Position et Size les Values suivants :

- `x`
- `y`
- `width`
- `height`
- `rotation`

Il inclut également des Actions pour Alignment, Flip, Rotation ainsi que Preview et Commit des Properties numériques.

## Utilisation

```ts
import { usePosition } from '@open-pencil/vue'

const position = usePosition()
```

## Exemple

```ts
const { x, y, width, height, rotation, updateProp, commitProp } = usePosition()
```

### Alignment

```ts
position.align('horizontal', 'center')
position.align('vertical', 'min')
```

### Flip

```ts
position.flip('horizontal')
position.flip('vertical')
```

### Rotation

```ts
position.rotate(90)
```

## Voir aussi

- [useLayout](./use-layout)
- [useAppearance](./use-appearance)

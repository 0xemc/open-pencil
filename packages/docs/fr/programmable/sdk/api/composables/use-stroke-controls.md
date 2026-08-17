---
title: useStrokeControls
description: Gérer Stroke alignment, Sides et Weights dans le panneau Properties.
---

# useStrokeControls

`useStrokeControls()` fournit à un panneau Strokes :

- les Options de Stroke alignment ;
- la sélection All, Top, Bottom, Left, Right ou une combinaison libre ;
- le Default value d’un nouveau Stroke ;
- des Functions pour des Stroke weights indépendants par côté.

## Utilisation

```ts
import { useStrokeControls } from '@open-pencil/vue'

const strokes = useStrokeControls()
```

## Exemple

```ts
const { alignOptions, sideOptions, currentAlign, currentSides, selectSide } = useStrokeControls()
```

### Stroke à l’intérieur de la limite

```ts
strokes.updateAlign('INSIDE', activeNode)
```

### Stroke uniquement en haut

```ts
strokes.selectSide('TOP', activeNode)
```

## Voir aussi

- [PropertyListRoot](../components/property-list-root)

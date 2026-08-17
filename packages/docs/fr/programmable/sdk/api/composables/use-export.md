---
title: useExport
description: Gérer Scale et Format de l’Export de la Selection actuelle.
---

# useExport

`useExport()` fournit State et Actions pour un panneau Export :

- Export settings ;
- IDs des objets sélectionnés ;
- Name du Output file ;
- Scales et Formats disponibles.

## Utilisation

```ts
import { useExport } from '@open-pencil/vue'

const exportState = useExport()
```

## Exemple

```ts
const {
  settings,
  nodeName,
  scales,
  formats,
  addSetting,
  updateScale,
  updateFormat,
} = useExport()
```

### Ajouter un Export setting

```ts
exportState.addSetting()
```

### WEBP à Scale 2×

```ts
exportState.updateScale(0, 2)
exportState.updateFormat(0, 'WEBP')
```

## Voir aussi

- [useSelectionState](./use-selection-state)
- [useEditor](./use-editor)

---
title: useMenuModel
description: Créer des modèles de Menu pour l’Application et le canvas à partir de l’Editor state.
---

# useMenuModel

`useMenuModel()` crée des Menus prêts à rendre à partir des Editor commands et de la Selection. Il évite de recomposer chaque Menu avec des Commands individuels.

## Utilisation

```ts
import { useMenuModel } from '@open-pencil/vue'

const { appMenu, canvasMenu, selectionLabelMenu } = useMenuModel()
```

## Exemple

```ts
const { canvasMenu } = useMenuModel()
```

Transmettez `canvasMenu.value` à un Component de Menu contextuel.

## Application menu

`appMenu` regroupe les Options dans :

- Edit ;
- View ;
- Object ;
- Arrange.

## Menu contextuel

`canvasMenu` contient des Options dépendant du State, par exemple Move to page avec les Pages disponibles.

## Labels de Selection

`selectionLabelMenu` renvoie la variante adaptée :

- Hide ou Show ;
- Lock ou Unlock.

## Voir aussi

- [useEditorCommands](./use-editor-commands)
- [useSelectionState](./use-selection-state)
- [useSelectionCapabilities](./use-selection-capabilities)

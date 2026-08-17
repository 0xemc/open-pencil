---
title: useMenuModel
description: Crear modelos de menú para la Application y el canvas a partir del Editor state.
---

# useMenuModel

`useMenuModel()` crea menús listos para renderizar a partir de Editor commands y la Selection. Evita tener que componer cada menú con Commands individuales.

## Uso

```ts
import { useMenuModel } from '@open-pencil/vue'

const { appMenu, canvasMenu, selectionLabelMenu } = useMenuModel()
```

## Ejemplo

```ts
const { canvasMenu } = useMenuModel()
```

Pasa `canvasMenu.value` a un Component de menú contextual.

## Application menu

`appMenu` agrupa Options en:

- Edit;
- View;
- Object;
- Arrange.

## Menú contextual

`canvasMenu` contiene Options dependientes del State, por ejemplo Move to page con las Pages disponibles.

## Labels de la Selection

`selectionLabelMenu` devuelve la variante adecuada:

- Hide o Show;
- Lock o Unlock.

## Consulta también

- [useEditorCommands](./use-editor-commands)
- [useSelectionState](./use-selection-state)
- [useSelectionCapabilities](./use-selection-capabilities)

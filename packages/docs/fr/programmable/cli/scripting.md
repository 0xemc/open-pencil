---
title: Scripts
description: Exécuter JavaScript avec une Figma-compatible Plugin API pour lire, modifier et générer des designs.
---

# Scripts

`openpencil eval` exécute JavaScript sur un document OpenPencil et fournit un objet global `figma` compatible avec Figma. La Command convient aux Batch edits, à l’Inspection, aux Fixtures et à l’automatisation sans Editor UI.

## Utilisation

```sh
openpencil eval design.fig -c "return figma.currentPage.children.length"
```

`-c` accepte JavaScript. Si le Code ne commence pas par `return`, OpenPencil l’exécute dans une Async function et renvoie son résultat lorsqu’il existe.

```sh
openpencil eval design.fig -c "
  const frame = figma.createFrame()
  frame.name = 'Card'
  frame.resize(300, 200)
  frame.layoutMode = 'VERTICAL'
  frame.itemSpacing = 12
  return { id: frame.id, name: frame.name }
"
```

## Interroger des Nodes

```sh
openpencil eval design.fig -c "
  return figma.currentPage
    .findAll((node) => node.type === 'FRAME' && node.name.includes('Button'))
    .map((button) => ({
      id: button.id,
      name: button.name,
      width: button.width,
      height: button.height
    }))
"
```

## Modifier et enregistrer

`--write` ou `-w` écrit dans le fichier d’entrée :

```sh
openpencil eval design.fig -c "
  figma.currentPage.children.forEach((node) => {
    node.opacity = 0.5
  })
" --write
```

`--output` ou `-o` crée un autre fichier :

```sh
openpencil eval design.fig -c "figma.currentPage.name = 'Updated'" -o updated.fig
```

## Script via stdin

```sh
cat transform.js | openpencil eval design.fig --stdin --write
```

## Document ouvert

Omettez le chemin pour exécuter le Script sur le document ouvert dans l’application de bureau :

```sh
openpencil eval -c "return figma.currentPage.name"
```

L’application doit être active et contenir un document.

## Output

Dans un environnement non interactif, `eval` utilise JSON par défaut. `--json` force explicitement ce format :

```sh
openpencil eval design.fig -c "return figma.currentPage.children.map((n) => n.name)" --json
```

`--quiet` ou `-q` masque l’Output lorsqu’il suffit d’écrire un fichier.

## API compatible

L’API s’inspire de Figma Plugin API, mais travaille avec SceneGraph et le format OpenPencil.

### Document et Pages

- `figma.root`
- `figma.currentPage`
- `figma.currentPage.selection`
- `figma.getNodeById(id)`
- `figma.createPage()`

### Créer des Nodes

- `figma.createFrame()`
- `figma.createRectangle()`
- `figma.createEllipse()`
- `figma.createText()`
- `figma.createLine()`
- `figma.createPolygon()`
- `figma.createStar()`
- `figma.createVector()`
- `figma.createComponent()`
- `figma.createSection()`

### Tree operations

- `node.children`
- `node.parent`
- `node.appendChild(child)`
- `node.insertChild(index, child)`
- `node.clone()`
- `node.remove()`
- `node.findAll(callback?)`
- `node.findOne(callback)`
- `node.findChild(callback)`
- `node.findChildren(callback?)`
- `figma.group(nodes, parent)`
- `figma.ungroup(node)`

### Components

- `figma.createComponentFromNode(node)`
- `component.createInstance()`
- `instance.mainComponent`

### Variables

- `figma.getLocalVariables(type?)`
- `figma.getVariableById(id)`
- `figma.getLocalVariableCollections()`
- `figma.getVariableCollectionById(id)`
- `figma.createVariable(name, type, collectionId, value?)`
- `figma.setVariableValue(variableId, modeId, value)`
- `figma.deleteVariable(id)`
- `figma.createVariableCollection(name)`
- `figma.deleteVariableCollection(id)`
- `figma.bindVariable(nodeId, field, variableId)`
- `figma.unbindVariable(nodeId, field)`

### Properties

Les Properties courantes sont lisibles et modifiables via le Proxy :

- Geometry : `x`, `y`, `width`, `height`, `rotation`, `resize(width, height)` ;
- Appearance : `fills`, `strokes`, `effects`, `opacity`, `visible`, `locked`, `blendMode`, `clipsContent` ;
- Radius : `cornerRadius`, `topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius` ;
- Text : `characters`, `fontSize`, `fontName`, `fontWeight`, Alignment, Line height, Letter spacing et Style-run helpers ;
- Auto layout : `layoutMode`, Alignment des deux Axes, `itemSpacing`, Padding, Sizing et Layout position ;
- Stroke : `strokeWeight`, `strokeAlign`, `dashPattern`.

### Utilities

- `figma.mixed`
- `figma.createImage(data)`
- `figma.loadFontAsync(fontName)` est un No-op car OpenPencil ne bloque pas les Text edits pendant le chargement d’un Font par un Plugin
- `figma.listAvailableFontsAsync()` renvoie les Host fonts disponibles
- `figma.notify(message)` écrit une Warning en Headless mode
- `figma.viewport`

## Pas encore compatible

Ces APIs Figma ne sont pas encore proposées sous forme de Helpers compatibles :

- `node.exportAsync()`
- `node.setBoundVariable(field, variable)`
- `node.detachInstance()`
- `figma.combineAsVariants(components, parent)`
- Style APIs comme `figma.createPaintStyle()` et `figma.createTextStyle()`
- parité complète des Vector boolean operations

Selon le besoin, utilisez CLI export, les Core tools ou les Helpers directs de SceneGraph.

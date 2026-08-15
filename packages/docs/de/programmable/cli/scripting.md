---
title: Scripts
description: JavaScript mit einer Figma-kompatiblen Plugin API ausführen, um Designs zu lesen, zu verändern und zu erzeugen.
---

# Scripts

`openpencil eval` führt JavaScript gegen ein OpenPencil-Dokument aus und stellt dabei ein Figma-kompatibles globales `figma` object bereit. Der Command eignet sich für Batch edits, Inspection, Fixtures und Automatisierung ohne Editor UI.

## Grundlagen

```sh
openpencil eval design.fig -c "return figma.currentPage.children.length"
```

`-c` akzeptiert JavaScript. Beginnt der Code nicht mit `return`, führt OpenPencil ihn in einer async function aus und gibt deren Ergebnis zurück, sofern eines vorhanden ist.

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

## Nodes abfragen

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

## Ändern und speichern

`--write` beziehungsweise `-w` schreibt in die Eingabedatei:

```sh
openpencil eval design.fig -c "
  figma.currentPage.children.forEach((node) => {
    node.opacity = 0.5
  })
" --write
```

`--output` beziehungsweise `-o` schreibt eine neue Datei:

```sh
openpencil eval design.fig -c "figma.currentPage.name = 'Updated'" -o updated.fig
```

## Script über stdin

```sh
cat transform.js | openpencil eval design.fig --stdin --write
```

## Live document

Ohne Dateipfad wird das aktuell geöffnete Dokument der Desktop-App verwendet:

```sh
openpencil eval -c "return figma.currentPage.name"
```

Die Desktop-App muss laufen und ein Dokument geöffnet haben.

## Output

Bei nicht interaktiver Ausgabe verwendet `eval` standardmäßig JSON. `--json` erzwingt das Format:

```sh
openpencil eval design.fig -c "return figma.currentPage.children.map((n) => n.name)" --json
```

`--quiet` oder `-q` unterdrückt die Ausgabe, wenn nur eine Datei geschrieben werden soll.

## Unterstützte API

Die API orientiert sich an der Figma Plugin API, arbeitet intern jedoch mit OpenPencils SceneGraph und Dateiformat.

### Dokument und Pages

- `figma.root`
- `figma.currentPage`
- `figma.currentPage.selection`
- `figma.getNodeById(id)`
- `figma.createPage()`

### Nodes erstellen

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

Häufige Properties können über den Proxy gelesen und geschrieben werden:

- Geometry: `x`, `y`, `width`, `height`, `rotation`, `resize(width, height)`;
- Appearance: `fills`, `strokes`, `effects`, `opacity`, `visible`, `locked`, `blendMode`, `clipsContent`;
- Radius: `cornerRadius`, `topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`;
- Text: `characters`, `fontSize`, `fontName`, `fontWeight`, Alignment, Line height, Letter spacing und Style-run helpers;
- Auto Layout: `layoutMode`, Axis alignment, `itemSpacing`, Padding, Sizing und Layout position;
- Stroke: `strokeWeight`, `strokeAlign`, `dashPattern`.

### Utilities

- `figma.mixed`
- `figma.createImage(data)`
- `figma.loadFontAsync(fontName)` ist ein No-op, da Plugin font loading Text edits in OpenPencil nicht blockiert
- `figma.listAvailableFontsAsync()` liefert verfügbare Host fonts
- `figma.notify(message)` schreibt im Headless mode eine Warning
- `figma.viewport`

## Noch nicht kompatibel

Folgende Figma APIs stehen noch nicht als kompatible Helpers zur Verfügung:

- `node.exportAsync()`
- `node.setBoundVariable(field, variable)`
- `node.detachInstance()`
- `figma.combineAsVariants(components, parent)`
- Style APIs wie `figma.createPaintStyle()` und `figma.createTextStyle()`
- vollständige Parität bei Vector boolean operations

Je nach Aufgabe können stattdessen CLI export, Core tools oder direkte SceneGraph helpers verwendet werden.

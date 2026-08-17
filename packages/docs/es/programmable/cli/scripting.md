---
title: Scripts
description: Ejecutar JavaScript con una Figma-compatible Plugin API para consultar, modificar y generar diseños.
---

# Scripts

`openpencil eval` ejecuta JavaScript sobre un documento de OpenPencil y proporciona un objeto global `figma` compatible con Figma. Sirve para Batch edits, Inspection, Fixtures y automatización sin abrir la Editor UI.

## Uso básico

```sh
openpencil eval design.fig -c "return figma.currentPage.children.length"
```

`-c` acepta JavaScript. Si el código no empieza por `return`, OpenPencil lo ejecuta dentro de una Async function y devuelve el resultado cuando existe.

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

## Consultar Nodes

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

## Modificar y guardar

`--write` o `-w` escribe en el archivo de entrada:

```sh
openpencil eval design.fig -c "
  figma.currentPage.children.forEach((node) => {
    node.opacity = 0.5
  })
" --write
```

`--output` o `-o` crea otro archivo:

```sh
openpencil eval design.fig -c "figma.currentPage.name = 'Updated'" -o updated.fig
```

## Script mediante stdin

```sh
cat transform.js | openpencil eval design.fig --stdin --write
```

## Documento abierto

Omite la ruta para ejecutar el Script sobre el documento abierto en la aplicación de escritorio:

```sh
openpencil eval -c "return figma.currentPage.name"
```

La aplicación debe estar abierta y contener un documento.

## Output

En un entorno no interactivo, `eval` usa JSON de forma predeterminada. `--json` lo fuerza explícitamente:

```sh
openpencil eval design.fig -c "return figma.currentPage.children.map((n) => n.name)" --json
```

`--quiet` o `-q` oculta el Output cuando solo se escribe un archivo.

## API compatible

El API se inspira en Figma Plugin API, pero opera sobre SceneGraph y el formato de OpenPencil.

### Documento y Pages

- `figma.root`
- `figma.currentPage`
- `figma.currentPage.selection`
- `figma.getNodeById(id)`
- `figma.createPage()`

### Crear Nodes

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

Las Properties habituales se leen y modifican mediante el Proxy:

- Geometry: `x`, `y`, `width`, `height`, `rotation`, `resize(width, height)`;
- Appearance: `fills`, `strokes`, `effects`, `opacity`, `visible`, `locked`, `blendMode`, `clipsContent`;
- Radius: `cornerRadius`, `topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`;
- Text: `characters`, `fontSize`, `fontName`, `fontWeight`, Alignment, Line height, Letter spacing y Style-run helpers;
- Auto layout: `layoutMode`, Alignment de ambos Axes, `itemSpacing`, Padding, Sizing y Layout position;
- Stroke: `strokeWeight`, `strokeAlign`, `dashPattern`.

### Utilities

- `figma.mixed`
- `figma.createImage(data)`
- `figma.loadFontAsync(fontName)` es un No-op porque OpenPencil no bloquea Text edits mientras un Plugin carga Fonts
- `figma.listAvailableFontsAsync()` devuelve los Host fonts disponibles
- `figma.notify(message)` escribe una Warning en Headless mode
- `figma.viewport`

## Aún no compatible

Estas APIs de Figma todavía no se ofrecen como Helpers compatibles:

- `node.exportAsync()`
- `node.setBoundVariable(field, variable)`
- `node.detachInstance()`
- `figma.combineAsVariants(components, parent)`
- Style APIs como `figma.createPaintStyle()` y `figma.createTextStyle()`
- paridad completa en Vector boolean operations

Según la tarea, se pueden usar CLI export, Core tools o Helpers directos de SceneGraph.

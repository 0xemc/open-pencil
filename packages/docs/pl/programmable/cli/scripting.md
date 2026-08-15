---
title: Scripts
description: Wykonywanie JavaScript przez API zgodne z Figma Plugin API do wyszukiwania, masowych zmian i tworzenia projektu.
---

# Scripts

`openpencil eval` wykonuje JavaScript dla dokumentu OpenPencil i udostępnia globalny obiekt `figma` zgodny z Figma Plugin API. Polecenie nadaje się do headless batch edits, sprawdzania dokumentów, przygotowywania fixtures i innej automatyzacji bez interfejsu edytora.

## Pierwsze wywołanie

```sh
openpencil eval design.fig -c "return figma.currentPage.children.length"
```

Opcja `-c` przyjmuje JavaScript. Jeśli kod nie zaczyna się od `return`, OpenPencil umieszcza go w async function i zwraca jej wynik, jeśli istnieje.

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

## Wyszukiwanie obiektów

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

## Zmiana i zapis

`--write` albo `-w` zapisuje zmiany w pliku wejściowym:

```sh
openpencil eval design.fig -c "
  figma.currentPage.children.forEach((node) => {
    node.opacity = 0.5
  })
" --write
```

`--output` albo `-o` tworzy nowy plik:

```sh
openpencil eval design.fig -c "figma.currentPage.name = 'Updated'" -o updated.fig
```

## Script ze stdin

```sh
cat transform.js | openpencil eval design.fig --stdin --write
```

## Otwarta aplikacja

Nie podawaj pliku, aby wykonać script dla bieżącego dokumentu w desktop app:

```sh
openpencil eval -c "return figma.currentPage.name"
```

Aplikacja musi być uruchomiona, a dokument otwarty.

## Output

Po przekierowaniu output domyślnie używany jest JSON. Opcja `--json` włącza go jawnie:

```sh
openpencil eval design.fig -c "return figma.currentPage.children.map((n) => n.name)" --json
```

`--quiet` albo `-q` wyłącza output, jeśli potrzebny jest wyłącznie zmieniony plik.

## Dostępne API

API jest celowo zbliżone do Figma Plugin API, ale pracuje ze SceneGraph i file formats OpenPencil.

### Dokument i strony

- `figma.root`
- `figma.currentPage`
- `figma.currentPage.selection`
- `figma.getNodeById(id)`
- `figma.createPage()`

### Tworzenie obiektów

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

### Drzewo

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

Najczęściej używane properties można odczytywać i zapisywać przez proxy:

- Geometry: `x`, `y`, `width`, `height`, `rotation`, `resize(width, height)`;
- Appearance: `fills`, `strokes`, `effects`, `opacity`, `visible`, `locked`, `blendMode`, `clipsContent`;
- Radius: `cornerRadius`, `topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`;
- Text: `characters`, `fontSize`, `fontName`, `fontWeight`, alignment, line height, letter spacing i functions dla style runs;
- Auto layout: `layoutMode`, `primaryAxisAlignItems`, `counterAxisAlignItems`, `itemSpacing`, padding, sizing i layout positioning;
- Stroke: `strokeWeight`, `strokeAlign`, `dashPattern`.

### Utilities

- `figma.mixed`
- `figma.createImage(data)`
- `figma.loadFontAsync(fontName)` niczego nie wykonuje, ponieważ OpenPencil nie blokuje zmiany tekstu do czasu plugin font loading
- `figma.listAvailableFontsAsync()` zwraca fonts udostępnione przez host, jeśli są dostępne
- `figma.notify(message)` zapisuje warning w headless mode
- `figma.viewport`

## Brak pełnej zgodności z Figmą

Następujące API nie są jeszcze udostępniane jako zgodne helpers:

- `node.exportAsync()`
- `node.setBoundVariable(field, variable)`
- `node.detachInstance()`
- `figma.combineAsVariants(components, parent)`
- style APIs Figmy, na przykład `figma.createPaintStyle()` i `figma.createTextStyle()`
- pełna zgodność vector boolean operations

Zamiast nich używaj poleceń eksportu OpenPencil CLI, core tools albo bezpośrednich SceneGraph helpers, jeśli są dostępne.

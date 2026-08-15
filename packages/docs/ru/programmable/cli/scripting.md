---
title: Scripts
description: Выполнение JavaScript через совместимый с Figma Plugin API для поиска, массового изменения и создания дизайна.
---

# Scripts

`openpencil eval` выполняет JavaScript для документа OpenPencil и предоставляет глобальный объект `figma`, совместимый с Figma Plugin API. Команда подходит для headless batch edits, проверки документов, подготовки fixtures и другой автоматизации без интерфейса редактора.

## Первый вызов

```sh
openpencil eval design.fig -c "return figma.currentPage.children.length"
```

Параметр `-c` принимает JavaScript. Если код не начинается с `return`, OpenPencil помещает его в async function и возвращает её результат, когда он есть.

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

## Поиск объектов

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

## Изменение и сохранение

`--write` или `-w` записывает изменения во входной файл:

```sh
openpencil eval design.fig -c "
  figma.currentPage.children.forEach((node) => {
    node.opacity = 0.5
  })
" --write
```

`--output` или `-o` создаёт новый файл:

```sh
openpencil eval design.fig -c "figma.currentPage.name = 'Updated'" -o updated.fig
```

## Script из stdin

```sh
cat transform.js | openpencil eval design.fig --stdin --write
```

## Открытое приложение

Не указывайте файл, чтобы выполнить script для текущего документа в desktop app:

```sh
openpencil eval -c "return figma.currentPage.name"
```

Приложение должно быть запущено, а документ — открыт.

## Output

При перенаправлении output по умолчанию используется JSON. Параметр `--json` включает его явно:

```sh
openpencil eval design.fig -c "return figma.currentPage.children.map((n) => n.name)" --json
```

`--quiet` или `-q` отключает output, если нужен только изменённый файл.

## Доступный API

API намеренно близок к Figma Plugin API, но работает с SceneGraph и file formats OpenPencil.

### Документ и страницы

- `figma.root`
- `figma.currentPage`
- `figma.currentPage.selection`
- `figma.getNodeById(id)`
- `figma.createPage()`

### Создание объектов

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

### Дерево

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

Распространённые properties доступны для чтения и записи через proxy:

- Geometry: `x`, `y`, `width`, `height`, `rotation`, `resize(width, height)`;
- Appearance: `fills`, `strokes`, `effects`, `opacity`, `visible`, `locked`, `blendMode`, `clipsContent`;
- Radius: `cornerRadius`, `topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`;
- Text: `characters`, `fontSize`, `fontName`, `fontWeight`, alignment, line height, letter spacing и functions для style runs;
- Auto layout: `layoutMode`, `primaryAxisAlignItems`, `counterAxisAlignItems`, `itemSpacing`, padding, sizing и layout positioning;
- Stroke: `strokeWeight`, `strokeAlign`, `dashPattern`.

### Utilities

- `figma.mixed`
- `figma.createImage(data)`
- `figma.loadFontAsync(fontName)` ничего не делает, поскольку OpenPencil не блокирует изменение текста до plugin font loading
- `figma.listAvailableFontsAsync()` возвращает fonts, предоставленные host, когда они доступны
- `figma.notify(message)` записывает warning в headless mode
- `figma.viewport`

## Пока не совместимо с Figma

Следующие API пока не предоставляются как совместимые helpers:

- `node.exportAsync()`
- `node.setBoundVariable(field, variable)`
- `node.detachInstance()`
- `figma.combineAsVariants(components, parent)`
- style APIs Figma, например `figma.createPaintStyle()` и `figma.createTextStyle()`
- полная совместимость vector boolean operations

Вместо них используйте команды экспорта OpenPencil CLI, core tools или прямые SceneGraph helpers, когда они доступны.

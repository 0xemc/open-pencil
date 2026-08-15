---
title: Просмотр документов
description: Дерево объектов, поиск по имени и типу и просмотр properties из терминала.
---

# Просмотр документов

CLI позволяет изучать design documents без запуска редактора. Те же команды работают с открытым desktop app, если не указывать файл.

::: tip Установка
```sh
npm install -g @open-pencil/cli
# или
brew install open-pencil/tap/open-pencil
```
:::

## Общие сведения

Количество страниц и объектов, используемые fonts и размер файла:

```sh
openpencil info design.fig
```

## Дерево объектов

```sh
openpencil tree design.fig
```

```text
[0] [page] "Getting started" (0:46566)
  [0] [section] "" (0:46567)
    [0] [frame] "Body" (0:46568)
      [0] [frame] "Introduction" (0:46569)
        [0] [frame] "Introduction Card" (0:46570)
          [0] [frame] "Guidance" (0:46571)
```

## Поиск объектов

По type:

```sh
openpencil find design.fig --type TEXT
```

По name:

```sh
openpencil find design.fig --name "Button"
```

Параметры можно использовать одновременно.

## XPath queries

XPath selectors находят объекты по type, attributes и положению в дереве:

```sh
openpencil query design.fig "//FRAME"
```

### По type

```sh
openpencil query design.fig "//TEXT"                    # Все text objects
openpencil query design.fig "//COMPONENT"               # Все components
openpencil query design.fig "//INSTANCE"                # Все instances
```

### По attributes

```sh
openpencil query design.fig "//FRAME[@width < 300]"     # Frames уже 300 px
openpencil query design.fig "//*[@cornerRadius > 0]"    # Объекты со скруглёнными углами
openpencil query design.fig "//*[@visible = false]"     # Скрытые объекты
openpencil query design.fig "//TEXT[@fontSize >= 24]"   # Крупный текст
openpencil query design.fig "//*[@opacity < 1]"         # Объекты с неполной opacity
```

### По имени и содержимому

```sh
openpencil query design.fig "//TEXT[contains(@name, 'Button')]"   # Name содержит Button
openpencil query design.fig "//TEXT[contains(@text, 'Hello')]"    # Text содержит Hello
```

### По hierarchy

```sh
openpencil query design.fig "//SECTION//TEXT"            # Text внутри sections
openpencil query design.fig "//FRAME/TEXT"               # Непосредственные text children frames
openpencil query design.fig "//COMPONENT_SET//INSTANCE"  # Instances внутри component sets
```

### Доступные attributes

`name`, `width`, `height`, `x`, `y`, `visible`, `opacity`, `cornerRadius`, `fontSize`, `fontFamily`, `fontWeight`, `layoutMode`, `itemSpacing`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `strokeWeight`, `rotation`, `locked`, `blendMode`, `text`, `lineHeight`, `letterSpacing`

### Пример результата

```text
  Found 5 nodes

[0] [frame] "Logo  92×32" (0:9)
[1] [frame] "logo-short-6  31×32" (0:10)
[2] [frame] "wrapper  128×73" (0:20)
[3] [frame] "pen-drawing  148×52" (0:21)
[4] [frame] "surprised-emoji  32×32" (0:26)
```

## Properties объекта

```sh
openpencil node design.fig --id 1:23
```

## Страницы

```sh
openpencil pages design.fig
```

## Variables

```sh
openpencil variables design.fig
```

## Работа с открытым приложением

Если desktop app запущен, не указывайте путь к файлу. CLI подключится по RPC к открытому документу:

```sh
openpencil documents         # Показать ID открытых документов и страниц
openpencil tree              # Показать активный документ
openpencil tree --document-id tab-123 --page-id 0:1
openpencil eval --document-id tab-123 --page-id 0:1 -c "..."
```

Для agent workflows сначала вызовите `openpencil documents --json`, а затем явно передавайте `--document-id` и `--page-id`, не полагаясь на видимую активную вкладку или страницу.

## Lint

Проверка naming, layout, structure и accessibility:

```sh
openpencil lint design.fig
openpencil lint design.pen --preset strict
openpencil lint design.fig --rule color-contrast
openpencil lint design.fig --list-rules
```

Добавьте `--json`, если результат будет обрабатывать другая программа.

## JSON output

Все команды поддерживают `--json`. Результат можно передать `jq`, CI script или другому tool:

```sh
openpencil tree design.fig --json | jq '.[] | .name'
```

---
title: Архитектура SDK
description: Структура пакета, границы публичного API и принципы построения @open-pencil/vue.
---

# Архитектура SDK

`@open-pencil/vue` связывает `@open-pencil/core` с Vue.

Модель редактора по-прежнему находится в core. Этот пакет добавляет:

- внедрение зависимостей средствами Vue;
- реактивные composables;
- структурные headless components;
- подключение холста и обработку ввода.

## Структура пакета

Код сгруппирован по предметным областям.

### Семейства компонентов

- `Canvas/`
- `ColorPicker/`
- `FillPicker/`
- `FontPicker/`
- `GradientEditor/`
- `LayerTree/`
- `PageList/`
- `PropertyList/`
- `PropertySection/`
- `SegmentedControl/`
- `NumberField/`
- `Toolbar/`

В этих каталогах находятся структурные headless components и вспомогательные функции, используемые внутри соответствующей области.

### Controls

В `controls/` находятся composables для панели свойств и элементов управления редактором:

- `usePosition`
- `useLayout`
- `useAppearance`
- `useColorModel`
- `useTypography`
- `useExport`
- `useFillControls`
- `useStrokeControls`
- `useEffectsControls`
- `useNodeProps`
- `usePropScrub`
- `useEditorPropertyList`

### Variables

В `VariablesEditor/` находятся composables и код, который связывает состояние редактора переменных с Vue.

### Selection

В `selection/` находятся вычисляемое состояние выделения и сведения о доступных для него действиях.

### Context

В `context/` находятся функции и ключ для передачи редактора через механизм dependency injection во Vue:

- `EDITOR_KEY`
- `provideEditor`
- `useEditor`

### Internal

В `internal/` находятся общие служебные функции. Они не входят в число основных headless components пакета.

## Принципы публичного API

### Используйте composables для логики и состояния

Если код в основном вычисляет состояние, управляет им или вызывает действия редактора, предоставьте его в виде composable.

### Создавайте headless components только там, где важна структура

Корневой компонент нужен, если он управляет структурой, дочерними элементами, slots или контекстом.

Примеры:

- `PageListRoot`
- `PropertyListRoot`
- `PropertySectionRoot`
- `SegmentedControlRoot`
- `ToolbarRoot`

### Не передавайте весь контекст через один slot

Передавайте через slot только необходимые props или используйте composable напрямую. Управляемые компоненты, например `PropertyListRoot`, сообщают о действиях семантическими событиями. Связь с выделением и историей отмены должна находиться в адаптере или управляющем composable, а не внутри такого компонента.

## За что отвечают приложение и SDK

### SDK

- интеграция с редактором;
- переиспользуемая headless-логика;
- переиспользуемая структура интерфейса, не зависящая от оформления;
- интеграция с отрисовкой холста.

### Приложение

- оформление;
- общая компоновка страниц;
- маршрутизация;
- открытие, сохранение и другие операции с файлами;
- уведомления, меню и поведение, характерное только для конкретного приложения.

## Простое правило

Если код можно без оформления приложения использовать в другом редакторе на базе OpenPencil, скорее всего, ему место в `@open-pencil/vue`.

## См. также

- [Начало работы с SDK](./getting-started)
- [Справочник API](./api/)

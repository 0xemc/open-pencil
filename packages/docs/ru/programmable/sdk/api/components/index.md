---
title: Components
description: Справочник headless components пакета @open-pencil/vue.
---

# Components

`@open-pencil/vue` предоставляет структурные headless components для подключения холста, навигации, панелей свойств и специализированных input controls.

## Основные components редактора

<SdkCardGroup>
  <SdkCard title="CanvasRoot" to="/programmable/sdk/api/components/canvas-root" description="Структура и context холста." />
  <SdkCard title="CanvasSurface" to="/programmable/sdk/api/components/canvas-surface" description="Элемент canvas, подключённый к context CanvasRoot." />
  <SdkCard title="LayerTreeRoot" to="/programmable/sdk/api/components/layer-tree-root" description="Дерево слоёв без встроенного оформления." />
  <SdkCard title="LayerTreeItem" to="/programmable/sdk/api/components/layer-tree-item" description="Одна строка дерева слоёв." />
  <SdkCard title="ToolbarRoot" to="/programmable/sdk/api/components/toolbar-root" description="Структура toolbar без встроенного оформления." />
  <SdkCard title="ToolbarItem" to="/programmable/sdk/api/components/toolbar-item" description="Один tool внутри toolbar." />
  <SdkCard title="PageListRoot" to="/programmable/sdk/api/components/page-list-root" description="Список страниц без встроенного оформления." />
</SdkCardGroup>

## Панель свойств

<SdkCardGroup>
  <SdkCard title="PropertySection" to="/programmable/sdk/api/components/property-section" description="Сворачиваемый раздел свойств и empty states." />
  <SdkCard title="PropertyGrid" to="/programmable/sdk/api/components/property-grid" description="Responsive grid для полей и область действий." />
  <SdkCard title="SegmentedControl" to="/programmable/sdk/api/components/segmented-control" description="Accessible groups для выбора или отдельных действий." />
  <SdkCard title="PropertyListRoot" to="/programmable/sdk/api/components/property-list-root" description="Список повторяющихся properties без встроенного оформления." />
  <SdkCard title="PropertyListItem" to="/programmable/sdk/api/components/property-list-item" description="Строка fill, stroke или effect." />
  <SdkCard title="PositionControlsRoot" to="/programmable/sdk/api/components/position-controls-root" description="Position, size и transform controls." />
  <SdkCard title="LayoutControlsRoot" to="/programmable/sdk/api/components/layout-controls-root" description="Auto layout и sizing controls." />
  <SdkCard title="ConstraintsControlRoot" to="/programmable/sdk/api/components/constraints-control-root" description="Constraints дочернего объекта frame и действия над ними." />
  <SdkCard title="AppearanceControlsRoot" to="/programmable/sdk/api/components/appearance-controls-root" description="Opacity, visibility и corner radius." />
  <SdkCard title="TypographyControlsRoot" to="/programmable/sdk/api/components/typography-controls-root" description="Font, alignment и formatting controls." />
</SdkCardGroup>

## Pickers и inputs

<SdkCardGroup>
  <SdkCard title="ColorPickerRoot" to="/programmable/sdk/api/components/color-picker-root" description="Color picker для размещения внутри popover." />
  <SdkCard title="ColorInputRoot" to="/programmable/sdk/api/components/color-input-root" description="Headless color input." />
  <SdkCard title="ChannelSlider" to="/programmable/sdk/api/components/channel-slider" description="Accessible slider для channels OkHCL." />
  <SdkCard title="FillRoot" to="/programmable/sdk/api/components/fill-root" description="Категория fill и действия преобразования." />
  <SdkCard title="FillSwatch" to="/programmable/sdk/api/components/fill-swatch" description="Semantic preview fill с поддержкой binding." />
  <SdkCard title="FontPickerRoot" to="/programmable/sdk/api/components/font-picker-root" description="Font picker с search." />
  <SdkCard title="GradientEditorRoot" to="/programmable/sdk/api/components/gradient-editor-root" description="Root для редактирования gradient." />
  <SdkCard title="GradientEditorBar" to="/programmable/sdk/api/components/gradient-editor-bar" description="Перетаскиваемая gradient bar." />
  <SdkCard title="GradientEditorStop" to="/programmable/sdk/api/components/gradient-editor-stop" description="Один gradient stop." />
  <SdkCard title="NumberField" to="/programmable/sdk/api/components/number-field" description="Numeric field со scrubbing, expressions и изменением с клавиатуры." />
  <SdkCard title="BindableValue" to="/programmable/sdk/api/components/bindable-value" description="Связь values с variables и external tokens через provider." />
</SdkCardGroup>

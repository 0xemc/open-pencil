---
title: Komponenty
description: Dokumentacja komponentów headless dostępnych w @open-pencil/vue.
---

# Komponenty

`@open-pencil/vue` udostępnia komponenty headless do budowania obszaru roboczego, nawigacji, paneli właściwości i wyspecjalizowanych pól.

## Podstawowe elementy edytora

<SdkCardGroup>
  <SdkCard title="CanvasRoot" to="/programmable/sdk/api/components/canvas-root" description="Context i struktura obszaru roboczego." />
  <SdkCard title="CanvasSurface" to="/programmable/sdk/api/components/canvas-surface" description="Element canvas podłączony do CanvasRoot." />
  <SdkCard title="LayerTreeRoot" to="/programmable/sdk/api/components/layer-tree-root" description="Drzewo warstw zarządzane przez SDK." />
  <SdkCard title="LayerTreeItem" to="/programmable/sdk/api/components/layer-tree-item" description="Pojedynczy element drzewa warstw." />
  <SdkCard title="ToolbarRoot" to="/programmable/sdk/api/components/toolbar-root" description="State i actions dla toolbar." />
  <SdkCard title="ToolbarItem" to="/programmable/sdk/api/components/toolbar-item" description="Pojedyncze narzędzie w toolbar." />
  <SdkCard title="PageListRoot" to="/programmable/sdk/api/components/page-list-root" description="Lista stron zarządzana przez SDK." />
</SdkCardGroup>

## Panele właściwości

<SdkCardGroup>
  <SdkCard title="PropertyListRoot" to="/programmable/sdk/api/components/property-list-root" description="Kontrolowana lista wartości właściwości." />
  <SdkCard title="PropertyListItem" to="/programmable/sdk/api/components/property-list-item" description="Pojedynczy fill, stroke albo effect." />
  <SdkCard title="PositionControlsRoot" to="/programmable/sdk/api/components/position-controls-root" description="Position, size i transform." />
  <SdkCard title="LayoutControlsRoot" to="/programmable/sdk/api/components/layout-controls-root" description="Auto layout i sizing." />
  <SdkCard title="AppearanceControlsRoot" to="/programmable/sdk/api/components/appearance-controls-root" description="Opacity, visibility i corner radius." />
  <SdkCard title="TypographyControlsRoot" to="/programmable/sdk/api/components/typography-controls-root" description="Font, alignment i formatting tekstu." />
</SdkCardGroup>

## Pickers i pola

<SdkCardGroup>
  <SdkCard title="ColorPickerRoot" to="/programmable/sdk/api/components/color-picker-root" description="Color picker bez narzuconego wyglądu." />
  <SdkCard title="ColorInputRoot" to="/programmable/sdk/api/components/color-input-root" description="State i actions pola koloru." />
  <SdkCard title="FontPickerRoot" to="/programmable/sdk/api/components/font-picker-root" description="Font picker z wyszukiwaniem." />
  <SdkCard title="GradientEditorRoot" to="/programmable/sdk/api/components/gradient-editor-root" description="Context edytora gradientu." />
  <SdkCard title="GradientEditorBar" to="/programmable/sdk/api/components/gradient-editor-bar" description="Interaktywny gradient bar." />
  <SdkCard title="GradientEditorStop" to="/programmable/sdk/api/components/gradient-editor-stop" description="Pojedynczy gradient stop." />
  <SdkCard title="NumberField" to="/programmable/sdk/api/components/number-field" description="Pole liczbowe ze scrubbing, expressions i zmianą wartości z klawiatury." />
</SdkCardGroup>

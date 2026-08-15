---
title: Низкоуровневые API
description: Специализированные и low-level API пакета @open-pencil/vue.
---

# Низкоуровневые API

Эти API входят в публичный package, но предназначены для более узких задач, чем основные components и composables.

## Selection и SceneGraph

- [useNodeProps](./use-node-props)
- [useSceneComputed](./use-scene-computed)
- [usePropScrub](./use-prop-scrub)

## Pickers, variables, locale и internals редактора

- [useColorVariableBinding](./use-color-variable-binding)
- [useColorBindingProvider](/programmable/sdk/api/advanced/use-color-binding-provider)
- [useGradientStops](./use-gradient-stops)
- [useFontPicker](./use-font-picker)
- [useOkHCL](./use-okhcl)
- [useVariables](./use-variables)
- [useVariablesDialogState](./use-variables-dialog-state)
- [useVariablesTable](./use-variables-table)
- [Locale API](./locale-apis)
- [useToolbarState](./use-toolbar-state)
- [useNodeFontStatus](./use-node-font-status)

## Собственный интерфейс редактора

- [useLayerDrag](./use-layer-drag)
- [useInlineRename](./use-inline-rename)
- [useCanvasDrop](./use-canvas-drop)
- [extractImageFilesFromClipboard](./extract-image-files-from-clipboard)
- [useViewportKind](./use-viewport-kind)
- [toolCursor](./tool-cursor)

## Context components

- [useCanvasContext](./use-canvas-context)
- [useLayerTree](./use-layer-tree)
- [useToolbar](./use-toolbar)
- [usePropertyList](./use-property-list)
- [useNumberField](/programmable/sdk/api/advanced/use-number-field)

---
title: useSceneComputed
description: Computed state, полученный из SceneGraph.
---

# useSceneComputed

`useSceneComputed(fn)` — небольшой wrapper над `computed`, который явно обозначает зависимость derived state от SceneGraph редактора.

Используйте его в composables, когда источник computed state важно показать в коде.

## См. также

- [useSelectionState](../composables/use-selection-state)
- [useSelectionCapabilities](../composables/use-selection-capabilities)
- [useNodeProps](./use-node-props)

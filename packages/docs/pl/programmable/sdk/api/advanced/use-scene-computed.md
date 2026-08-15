---
title: useSceneComputed
description: Reaktywne computed value zależne od danych SceneGraph.
---

# useSceneComputed

`useSceneComputed(fn)` jest niewielkim wrapper dla Vue `computed`, używanym do zaznaczenia, że wynik zależy od danych SceneGraph edytora.

Przydaje się w composables zwracających values obliczane z obiektów dokumentu.

## Zobacz też

- [useSelectionState](../composables/use-selection-state)
- [useSelectionCapabilities](../composables/use-selection-capabilities)
- [useNodeProps](./use-node-props)

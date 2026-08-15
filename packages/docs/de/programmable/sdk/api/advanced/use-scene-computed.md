---
title: useSceneComputed
description: Reaktiver computed value auf Grundlage von SceneGraph data.
---

# useSceneComputed

`useSceneComputed(fn)` ist ein kleiner Wrapper um Vue `computed`. Er kennzeichnet Values, die von SceneGraph data des Editor abhängen.

Das composable eignet sich für andere composables, die Values aus Objekten des Dokuments berechnen.

## Siehe auch

- [useSelectionState](../composables/use-selection-state)
- [useSelectionCapabilities](../composables/use-selection-capabilities)
- [useNodeProps](./use-node-props)

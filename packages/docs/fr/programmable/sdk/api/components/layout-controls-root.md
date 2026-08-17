---
title: LayoutControlsRoot
description: Headless component pour Auto layout et Sizing.
---

<script setup lang="ts">
import { data } from '#docs-api/components/layout-controls-root.data'
</script>

# LayoutControlsRoot

`LayoutControlsRoot` fournit via son Slot l’API renvoyée par `useLayout()`.

L’application peut rendre un panneau Auto layout et Sizing personnalisé tandis que le SDK fournit State et Actions.

<SdkComponentAPI :components="data.components" />

## Voir aussi

- [useLayout](../composables/use-layout)
- [Panneaux Properties](../../guides/property-panels)

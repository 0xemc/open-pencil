---
title: LayoutControlsRoot
description: Headless component para Auto layout y Sizing.
---

<script setup lang="ts">
import { data } from '#docs-api/components/layout-controls-root.data'
</script>

# LayoutControlsRoot

`LayoutControlsRoot` proporciona mediante su Slot el API devuelto por `useLayout()`.

La aplicación puede renderizar un panel propio de Auto layout y Sizing mientras el SDK aporta State y Actions.

<SdkComponentAPI :components="data.components" />

## Consulta también

- [useLayout](../composables/use-layout)
- [Paneles Properties](../../guides/property-panels)

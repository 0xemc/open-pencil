---
title: LayoutControlsRoot
description: Component headless dla Auto layout i sizing.
---

<script setup lang="ts">
import { data } from '#docs-api/components/layout-controls-root.data'
</script>

# LayoutControlsRoot

`LayoutControlsRoot` przekazuje przez slot API zwracane przez `useLayout()`.

Pozwala aplikacji wyrenderować własny panel Auto layout i sizing, zachowując state oraz actions dostarczane przez SDK.

<ComponentApi :meta="data" />

## Zobacz też

- [useLayout](../composables/use-layout)
- [Panele właściwości](../../guides/property-panels)

---
title: AppearanceControlsRoot
description: Component headless dla opacity, visibility i corner radius.
---

<script setup lang="ts">
import { data } from '#docs-api/components/appearance-controls-root.data'
</script>

# AppearanceControlsRoot

`AppearanceControlsRoot` przekazuje przez slot API zwracane przez `useAppearance()`.

Aplikacja może zbudować własne pola opacity, visibility i corner radius bez ponownego implementowania state oraz actions.

<ComponentApi :meta="data" />

## Zobacz też

- [useAppearance](../composables/use-appearance)
- [Panele właściwości](../../guides/property-panels)

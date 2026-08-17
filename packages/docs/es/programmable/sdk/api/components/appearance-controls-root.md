---
title: AppearanceControlsRoot
description: Headless component para Opacity, Visibility y Corner radius.
---

<script setup lang="ts">
import { data } from '#docs-api/components/appearance-controls-root.data'
</script>

# AppearanceControlsRoot

`AppearanceControlsRoot` proporciona mediante su Slot el API devuelto por `useAppearance()`.

Los Fields propios de Opacity, Visibility y Corner radius pueden reutilizar el State y las Actions del SDK.

<SdkComponentAPI :components="data.components" />

## Consulta también

- [useAppearance](../composables/use-appearance)
- [Paneles Properties](../../guides/property-panels)

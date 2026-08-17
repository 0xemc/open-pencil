---
title: AppearanceControlsRoot
description: Headless component pour Opacity, Visibility et Corner radius.
---

<script setup lang="ts">
import { data } from '#docs-api/components/appearance-controls-root.data'
</script>

# AppearanceControlsRoot

`AppearanceControlsRoot` fournit via son Slot l’API renvoyée par `useAppearance()`.

Les Fields personnalisés pour Opacity, Visibility et Corner radius peuvent réutiliser State et Actions du SDK.

<SdkComponentAPI :components="data.components" />

## Voir aussi

- [useAppearance](../composables/use-appearance)
- [Panneaux Properties](../../guides/property-panels)

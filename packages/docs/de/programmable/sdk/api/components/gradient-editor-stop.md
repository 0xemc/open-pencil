---
title: GradientEditorStop
description: State und Actions eines Gradient stop.
---

<script setup lang="ts">
import { data } from '#docs-api/components/gradient-editor-stop.data'
</script>

# GradientEditorStop

`GradientEditorStop` stellt Position, Opacity, Color und Active state eines Gradient stop sowie Actions zum Aktualisieren und Entfernen bereit.

## Beispiel

```vue
<GradientEditorStop :stop="stop" :index="index" :active="active" v-slot="ctx">
  <MyGradientStopRow v-bind="ctx" />
</GradientEditorStop>
```

<SdkComponentAPI :components="data.components" />

## Siehe auch

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorBar](./gradient-editor-bar)

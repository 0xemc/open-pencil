---
title: GradientEditorStop
description: State et Actions d’un Gradient stop.
---

<script setup lang="ts">
import { data } from '#docs-api/components/gradient-editor-stop.data'
</script>

# GradientEditorStop

`GradientEditorStop` fournit Position, Opacity, Color et Active state d’un Gradient stop, ainsi que les Actions pour le modifier et le supprimer.

## Exemple

```vue
<GradientEditorStop :stop="stop" :index="index" :active="active" v-slot="ctx">
  <MyGradientStopRow v-bind="ctx" />
</GradientEditorStop>
```

<SdkComponentAPI :components="data.components" />

## Voir aussi

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorBar](./gradient-editor-bar)

---
title: GradientEditorStop
description: State y Actions de un Gradient stop.
---

<script setup lang="ts">
import { data } from '#docs-api/components/gradient-editor-stop.data'
</script>

# GradientEditorStop

`GradientEditorStop` proporciona Position, Opacity, Color y Active state de un Gradient stop, además de Actions para actualizarlo y eliminarlo.

## Ejemplo

```vue
<GradientEditorStop :stop="stop" :index="index" :active="active" v-slot="ctx">
  <MyGradientStopRow v-bind="ctx" />
</GradientEditorStop>
```

<SdkComponentAPI :components="data.components" />

## Consulta también

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorBar](./gradient-editor-bar)

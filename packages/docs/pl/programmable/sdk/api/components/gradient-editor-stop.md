---
title: GradientEditorStop
description: State i actions pojedynczego gradient stop.
---

<script setup lang="ts">
import { data } from '#docs-api/components/gradient-editor-stop.data'
</script>

# GradientEditorStop

`GradientEditorStop` przekazuje przez slot dane potrzebne do wyświetlenia i edycji jednego gradient stop: position, opacity, color, active state oraz actions aktualizacji i usunięcia.

## Przykład

```vue
<GradientEditorStop :stop="stop" :index="index" :active="active" v-slot="ctx">
  <MyGradientStopRow v-bind="ctx" />
</GradientEditorStop>
```

<ComponentApi :meta="data" />

## Zobacz też

- [GradientEditorRoot](./gradient-editor-root)
- [GradientEditorBar](./gradient-editor-bar)

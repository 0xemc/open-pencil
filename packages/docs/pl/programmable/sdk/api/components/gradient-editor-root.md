---
title: GradientEditorRoot
description: State i actions edytora gradient stops.
---

# GradientEditorRoot

`GradientEditorRoot` zarządza:

- active gradient stop;
- wyborem gradient subtype;
- dodawaniem, usuwaniem i aktualizacją stops;
- color aktywnego stop;
- tłem gradient bar.

Domyślny slot otrzymuje pełne API potrzebne do zbudowania własnego interfejsu edytora gradientu.

## Przykład

```vue
<GradientEditorRoot :fill="fill" @update="fill = $event" v-slot="ctx">
  <MyGradientUI v-bind="ctx" />
</GradientEditorRoot>
```


## Zobacz też

- [GradientEditorBar](./gradient-editor-bar)
- [GradientEditorStop](./gradient-editor-stop)

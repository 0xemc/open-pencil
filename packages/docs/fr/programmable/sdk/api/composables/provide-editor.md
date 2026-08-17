---
title: provideEditor
description: Fournir une instance OpenPencil via Vue dependency injection.
---

# provideEditor

`provideEditor(editor)` met l’Editor à la disposition des composables et Headless components situés plus bas dans le Vue component tree.

`useEditor()` utilise ce Context.

## Utilisation

```ts
import { provideEditor } from '@open-pencil/vue'

provideEditor(editor)
```

## Exemple

```vue
<script setup lang="ts">
import { provideEditor } from '@open-pencil/vue'

import type { Editor } from '@open-pencil/core/editor'

const props = defineProps<{
  editor: Editor
}>()

provideEditor(props.editor)
</script>

<template>
  <slot />
</template>
```

## Notes

Le SDK actuel utilise directement `provideEditor()` et `useEditor()`. D’anciens exemples et messages mentionnent encore `OpenPencilProvider`, mais ce Component ne fait pas partie de l’API publique actuelle.

## Voir aussi

- [useEditor](./use-editor)

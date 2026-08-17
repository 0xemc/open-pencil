---
title: provideEditor
description: Proporcionar una instancia de OpenPencil mediante Vue dependency injection.
---

# provideEditor

`provideEditor(editor)` pone el Editor a disposición de composables y Headless components situados más abajo en el Vue component tree.

`useEditor()` utiliza este Context.

## Uso

```ts
import { provideEditor } from '@open-pencil/vue'

provideEditor(editor)
```

## Ejemplo

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

## Notas

El SDK actual usa directamente `provideEditor()` y `useEditor()`. Algunos ejemplos y mensajes antiguos aún mencionan `OpenPencilProvider`, pero ese Component no forma parte del API público actual.

## Consulta también

- [useEditor](./use-editor)

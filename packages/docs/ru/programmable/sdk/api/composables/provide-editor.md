---
title: provideEditor
description: Передача экземпляра редактора OpenPencil в дочерние компоненты Vue через dependency injection.
---

# provideEditor

`provideEditor(editor)` делает редактор OpenPencil доступным для composables и headless components, расположенных ниже в дереве Vue.

На этой функции основана работа `useEditor()`.

## Использование

```ts
import { provideEditor } from '@open-pencil/vue'

provideEditor(editor)
```

## Базовый пример

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

## Примечания

В актуальном SDK используются непосредственно `provideEditor()` и `useEditor()`. В некоторых старых примерах и сообщениях об ошибках упоминается компонент `OpenPencilProvider`, но он не относится к текущему публичному API.

## Связанные API

- [useEditor](./use-editor)

---
title: useEditor
description: Auf die mit provideEditor bereitgestellte OpenPencil-Editor-Instanz zugreifen.
---

# useEditor

`useEditor()` gibt die Editor-Instanz aus dem nächsten `provideEditor()`-Context zurück.

Composables und headless components verwenden diese Function als zentralen Zugang zum Editor.

## Verwendung

`useEditor()` innerhalb eines Component tree aufrufen, in dem zuvor `provideEditor(editor)` ausgeführt wurde:

```ts
import { useEditor } from '@open-pencil/vue'

const editor = useEditor()
```

## Beispiel

```vue
<script setup lang="ts">
import { computed } from 'vue'

import { useEditor } from '@open-pencil/vue'

const editor = useEditor()
const pageId = computed(() => editor.state.currentPageId)
</script>

<template>
  <div>Aktuelle Seite: {{ pageId }}</div>
</template>
```

### Selection lesen

```ts
const editor = useEditor()
const selected = editor.getSelectedNodes()
```

### Actions ausführen

```ts
const editor = useEditor()
editor.zoomToFit()
editor.undoAction()
```

## Fehlender Context

Wird `useEditor()` außerhalb eines passenden Provider tree aufgerufen, wirft die Function einen verständlichen Fehler. So wird eine fehlende Editor integration früh erkannt.

## Siehe auch

- [provideEditor](./provide-editor)
- [useCanvas](./use-canvas)
- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

## Typ

```ts
function useEditor(): Editor
```

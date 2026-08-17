---
title: useEditor
description: Accéder à l’instance OpenPencil fournie par provideEditor.
---

# useEditor

`useEditor()` renvoie l’instance Editor du Context `provideEditor()` le plus proche.

Les composables et Headless components l’utilisent comme accès principal à l’Editor.

## Utilisation

Appelez `useEditor()` dans un Component tree où `provideEditor(editor)` a été exécuté :

```ts
import { useEditor } from '@open-pencil/vue'

const editor = useEditor()
```

## Exemple

```vue
<script setup lang="ts">
import { computed } from 'vue'

import { useEditor } from '@open-pencil/vue'

const editor = useEditor()
const pageId = computed(() => editor.state.currentPageId)
</script>

<template>
  <div>Page actuelle : {{ pageId }}</div>
</template>
```

### Lire la Selection

```ts
const editor = useEditor()
const selected = editor.getSelectedNodes()
```

### Exécuter des Actions

```ts
const editor = useEditor()
editor.zoomToFit()
editor.undoAction()
```

## Context absent

En dehors d’un Provider tree valide, la Function déclenche une erreur claire. Une intégration incomplète de l’Editor est ainsi détectée rapidement.

## Voir aussi

- [provideEditor](./provide-editor)
- [useCanvas](./use-canvas)
- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

## Type

```ts
function useEditor(): Editor
```

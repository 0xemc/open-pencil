---
title: useSelectionCapabilities
description: Reaktive Boolean values für die mit der aktuellen Selection verfügbaren Actions.
---

# useSelectionCapabilities

`useSelectionCapabilities()` gibt reaktive Boolean values zurück, die angeben, ob häufige Editor actions für die aktuelle Selection verfügbar sind.

Das composable eignet sich für:

- Menüs;
- Toolbars;
- Shortcuts;
- Action buttons;
- Context-dependent panels.

## Verwendung

```ts
import { useSelectionCapabilities } from '@open-pencil/vue'

const caps = useSelectionCapabilities()
```

## Beispiel

```vue
<script setup lang="ts">
import { useSelectionCapabilities } from '@open-pencil/vue'

const { canDelete, canDuplicate, canCreateComponent } = useSelectionCapabilities()
</script>

<template>
  <div class="flex gap-2">
    <button :disabled="!canDuplicate">Duplicate</button>
    <button :disabled="!canDelete">Delete</button>
    <button :disabled="!canCreateComponent">Create component</button>
  </div>
</template>
```

### Verfügbarkeit von Menüeinträgen

```ts
const { canMoveToPage, canGoToMainComponent } = useSelectionCapabilities()
```

### Zoom to selection

```ts
const { canZoomToSelection } = useSelectionCapabilities()
```

## Siehe auch

- [useSelectionState](./use-selection-state)
- [useEditorCommands](./use-editor-commands)

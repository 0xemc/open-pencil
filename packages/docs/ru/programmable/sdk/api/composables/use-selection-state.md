---
title: useSelectionState
description: "Реактивное состояние редактора, производное от выделения: текущий узел, количество и тип выделения."
---

# useSelectionState

`useSelectionState()` возвращает реактивные сведения о текущем выделении.

Используйте их, если интерфейс зависит от:

- наличия выделения
- количества выделенных узлов
- основного выделенного узла
- того, является ли выделенный объект instance, component или group.

## Использование

```ts
import { useSelectionState } from '@open-pencil/vue'

const selection = useSelectionState()
```

## Базовый пример

```vue
<script setup lang="ts">
import { useSelectionState } from '@open-pencil/vue'

const { hasSelection, selectedCount, isInstance } = useSelectionState()
</script>

<template>
  <div class="text-xs text-muted">
    <span v-if="!hasSelection">Нет выделения</span>
    <span v-else>
      {{ selectedCount }} выделено
      <span v-if="isInstance">· экземпляр</span>
    </span>
  </div>
</template>
```

## Возвращаемые значения

Полезные значения:

- `selectedIds`
- `hasSelection`
- `selectedNode`
- `selectedCount`
- `selectedNodeType`
- `isInstance`
- `isComponent`
- `isGroup`
- `canCreateComponentSet`

## Практические примеры

### Показывать действия только для instances

```ts
const { isInstance } = useSelectionState()
```

### Активировать UI создания набора компонентов

```ts
const { canCreateComponentSet } = useSelectionState()
```

## Связанные API

- [useSelectionCapabilities](./use-selection-capabilities)
- [useEditorCommands](./use-editor-commands)
- [useEditor](./use-editor)

---
title: LayoutControlsRoot
description: Headless root для Auto layout и sizing controls.
---

<script setup lang="ts">
import { data } from '#docs-api/components/layout-controls-root.data'
</script>

# LayoutControlsRoot

`LayoutControlsRoot` предоставляет slot contract `useLayout()` через структурный component. Используйте его как переиспользуемую основу layout controls с markup приложения.

Поля width и height могут оставаться редактируемыми, когда соответствующая axis использует Hug или Fill. При первом фактическом изменении числа `updateAxisSize()` записывает переход sizing и переводит только эту axis в Fixed.

Если sizing mode, detach variable и numeric value должны сохраняться или отменяться одной Undo operation, объедините поле с `BindableValue` и provider, поддерживающим interaction batch. Получение focus и открытие picker не меняют sizing mode.

Для меню sizing вызывайте `setAxisSizing('width', mode)` или `setAxisSizing('height', mode)`. Прежние setters для каждой axis не входят в текущий contract.

## Сгенерированный справочник API

Таблицы извлекаются из Vue source и JSDoc во время сборки документации.

<SdkComponentAPI :components="data.components" />

## См. также

- [useLayout](../composables/use-layout)
- [BindableValue](/programmable/sdk/api/components/bindable-value)
- [Панели свойств](../../guides/property-panels)

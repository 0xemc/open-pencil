---
title: PropertyList
description: Строго типизированная headless-структура списков fills, strokes и effects.
---

<script setup lang="ts">
import { data } from '#docs-api/components/property-list.data'
</script>

# PropertyList

PropertyList — controlled headless component для списков fills, strokes и effects. Discriminator `propKey` задаёт для slots и actions точный тип `Fill`, `Stroke` или `Effect`. Изменение editor state и Undo остаются в `useEditorPropertyList()` или adapter приложения.

## Состав

- `PropertyListRoot` — controlled items, identity, mixed state и semantic events;
- `PropertyListItem` — точный тип item, а также `data-hidden` и `data-dragging`;
- `PropertyListAdd` — добавление типизированного item;
- `PropertyListRemove` — удаление item по index;
- `PropertyListVisibility` — изменение visibility по index и значение `aria-pressed`.

```vue twoslash
<script setup lang="ts">
import { ref } from 'vue'
import type { Fill } from '@open-pencil/scene-graph'
import {
  PropertyListItem,
  PropertyListRemove,
  PropertyListRoot
} from '@open-pencil/vue'

const fills = ref<Fill[]>([])
</script>

<template>
  <PropertyListRoot
    prop-key="fills"
    :items="fills"
    @remove="fills.splice($event, 1)"
    v-slot="{ items }"
  >
    <PropertyListItem
      v-for="(_, index) in items"
      :key="index"
      prop-key="fills"
      :index="index"
      v-slot="{ item }"
    >
      <span>{{ item?.type }}</span>
      <PropertyListRemove prop-key="fills" :index="index">Удалить</PropertyListRemove>
    </PropertyListItem>
  </PropertyListRoot>
</template>
```

Общая интерактивная matrix состояний показана в [demo PropertySection](/programmable/sdk/api/components/property-section).

## Adapter редактора

Панели OpenPencil используют `useEditorPropertyList(propKey)`, чтобы связать controlled events с selection, изменением нескольких объектов, batch для Undo и изменением порядка. Пользователи SDK могут предоставить собственный state adapter без context редактора OpenPencil.

## Сгенерированный справочник API

<SdkComponentAPI :components="data.components" />

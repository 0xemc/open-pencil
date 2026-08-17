---
title: useI18n
description: Leer Labels localizados de OpenPencil y cambiar el Locale activo del SDK.
---

# useI18n

`useI18n()` devuelve Translations reactivas y Functions para cambiar el Locale.

El composable proporciona Labels para Menús, Commands, Tools, Paneles, Pages y Dialogs y permite crear un Locale picker propio.

## Uso

```ts
import { useI18n } from '@open-pencil/vue'

const { menu, commands, panels, locale, availableLocales, localeLabels, setLocale } = useI18n()
```

## Values

- `menu`
- `commands`
- `tools`
- `panels`
- `pages`
- `dialogs`
- `locale`
- `availableLocales`
- `localeLabels`
- `setLocale`

## Ejemplo

```vue
<script setup lang="ts">
import { useI18n } from '@open-pencil/vue'

const { menu, locale, availableLocales, localeLabels, setLocale } = useI18n()
</script>

<template>
  <label class="flex items-center gap-2">
    <span>{{ menu.view }}</span>
    <select :value="locale" @change="setLocale(($event.target as HTMLSelectElement).value as typeof locale)">
      <option v-for="code in availableLocales" :key="code" :value="code">
        {{ localeLabels[code] }}
      </option>
    </select>
  </label>
</template>
```

## Notas

- Un cambio de Locale actualiza de forma reactiva todos los Translation groups del SDK.
- El SDK también exporta un Low-level Locale API para acceso directo al Store.

## Consulta también

- [useMenuModel](./use-menu-model)
- [Locale API](../advanced/locale-apis)

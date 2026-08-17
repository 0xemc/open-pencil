---
title: useI18n
description: Lire les Labels localisés d’OpenPencil et changer le Locale actif du SDK.
---

# useI18n

`useI18n()` renvoie des Translations réactives et des Functions pour changer de Locale.

Le composable fournit les Labels des Menus, Commands, Tools, Panneaux, Pages et Dialogs et permet de créer un Locale picker personnalisé.

## Utilisation

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

## Exemple

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

## Notes

- Un changement de Locale met à jour tous les Translation groups du SDK de manière réactive.
- Le SDK exporte également une Low-level Locale API pour accéder directement au Store.

## Voir aussi

- [useMenuModel](./use-menu-model)
- [Locale API](../advanced/locale-apis)

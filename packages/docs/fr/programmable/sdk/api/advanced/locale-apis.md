---
title: Locale API
description: Low-level Locale stores et Metadata de @open-pencil/vue.
---

# Locale API

En plus de `useI18n()`, le SDK Vue exporte une Low-level API pour accéder directement au Locale state :

- `locale`
- `localeSetting`
- `setLocale()`
- `AVAILABLE_LOCALES`
- `LOCALE_LABELS`

Ces Exports conviennent lorsque Locale fait partie d’un Application state plus large ou lorsque la liste des langues est nécessaire sans toute l’API `useI18n()`.

## Utilisation

```ts
import {
  locale,
  localeSetting,
  setLocale,
  AVAILABLE_LOCALES,
  LOCALE_LABELS,
} from '@open-pencil/vue'
```

## Comportement

- `locale` contient le Locale réellement utilisé après Settings et Fallback.
- `localeSetting` conserve la Preference utilisateur.
- `setLocale()` met à jour Preference et Locale actif.
- `AVAILABLE_LOCALES` et `LOCALE_LABELS` servent à créer un Locale picker personnalisé.

## Voir aussi

- [useI18n](../composables/use-i18n)

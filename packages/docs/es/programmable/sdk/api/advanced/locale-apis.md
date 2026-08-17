---
title: Locale API
description: Low-level Locale stores y Metadata de @open-pencil/vue.
---

# Locale API

Además de `useI18n()`, el SDK de Vue exporta un Low-level API para acceder directamente al Locale state:

- `locale`
- `localeSetting`
- `setLocale()`
- `AVAILABLE_LOCALES`
- `LOCALE_LABELS`

Estos Exports resultan útiles cuando Locale forma parte de un Application state más amplio o se necesita la lista de idiomas sin todo el API de `useI18n()`.

## Uso

```ts
import {
  locale,
  localeSetting,
  setLocale,
  AVAILABLE_LOCALES,
  LOCALE_LABELS,
} from '@open-pencil/vue'
```

## Comportamiento

- `locale` contiene el Locale que se usa después de aplicar Settings y Fallback.
- `localeSetting` guarda la Preference del usuario.
- `setLocale()` actualiza Preference y Locale activo.
- `AVAILABLE_LOCALES` y `LOCALE_LABELS` permiten crear un Locale picker propio.

## Consulta también

- [useI18n](../composables/use-i18n)

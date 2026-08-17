---
title: Analizar diseños
description: Examinar Colors, Typography, Spacing y Structures repetidas en archivos `.fig`.
---

# Analizar diseños

Los Commands de `analyze` examinan un documento completo desde el terminal. Muestran Colors y Text styles, desviaciones de Spacing y Structures repetidas que podrían convertirse en Components.

## Colors

```sh
openpencil analyze colors design.fig
```

Cuenta cada Color del documento y muestra un Histograma:

```text
#1d1b20  ██████████████████████████████ 17155×
#49454f  ██████████████████████████████ 9814×
#ffffff  ██████████████████████████████ 8620×
#6750a4  ██████████████████████████████ 3967×
```

## Typography

```sh
openpencil analyze typography design.fig
```

Lista las combinaciones de Font family, Size y Style con su frecuencia. Así se detectan Text styles aislados.

## Spacing

```sh
openpencil analyze spacing design.fig
```

Examina Gap y Padding en Auto-layout Frames. Por ejemplo, permite descubrir un valor `13px` entre valores habituales de `8/16/24`.

## Clusters

```sh
openpencil analyze clusters design.fig
```

Busca Node structures repetidas que podrían agruparse como Components:

```text
3771× frame "container" (100% match)
     size: 40×40, structure: Frame > [Frame]

2982× instance "Checkboxes" (100% match)
     size: 48×48, structure: Instance > [Frame]
```

## JSON output

```sh
openpencil analyze colors design.fig --json
```

Todos los Analyze commands admiten `--json`. La salida se puede procesar con `jq`, validar en CI o usar en Scripts que apliquen reglas de Design tokens.

---
title: Analyser des designs
description: Examiner Colors, Typography, Spacing et Structures répétées dans des fichiers `.fig`.
---

# Analyser des designs

Les Commands `analyze` examinent un document complet depuis le terminal. Elles affichent Colors et Text styles, les écarts de Spacing et les Structures répétées qui pourraient devenir des Components.

## Colors

```sh
openpencil analyze colors design.fig
```

Compte chaque Color du document et affiche un Histogram :

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

Liste les combinaisons Font family, Size et Style avec leur fréquence afin de repérer les Text styles isolés.

## Spacing

```sh
openpencil analyze spacing design.fig
```

Examine Gap et Padding des Auto-layout Frames. Une valeur `13px` au milieu d’une échelle `8/16/24` devient ainsi visible.

## Clusters

```sh
openpencil analyze clusters design.fig
```

Recherche des Node structures répétées pouvant être regroupées en Components :

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

Toutes les Analyze commands acceptent `--json`. La sortie peut être traitée avec `jq`, vérifiée dans la CI ou utilisée dans des Scripts appliquant des règles de Design tokens.

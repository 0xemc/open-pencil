---
title: Designs analysieren
description: Colors, Typography, Spacing und wiederkehrende Strukturen in `.fig`-Dateien untersuchen.
---

# Designs analysieren

Die Commands unter `analyze` prüfen ein vollständiges Dokument im Terminal. Sie zeigen verwendete Colors und Text styles, Abweichungen im Spacing und wiederkehrende Strukturen, die sich möglicherweise als Components eignen.

## Colors

```sh
openpencil analyze colors design.fig
```

Der Command zählt jede Color im Dokument und zeigt ein Histogramm:

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

Listet Kombinationen aus Font family, Size und Style mit ihrer Häufigkeit auf. Einzelne abweichende Text styles lassen sich so leichter erkennen.

## Spacing

```sh
openpencil analyze spacing design.fig
```

Prüft Gap und Padding in Auto-Layout-Frames. Ein einzelner Wert von `13px` zwischen sonst üblichen `8/16/24` wird dadurch sichtbar.

## Clusters

```sh
openpencil analyze clusters design.fig
```

Sucht wiederkehrende Node structures, die als Components zusammengefasst werden könnten:

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

Alle Analyze commands unterstützen `--json`. Die Ausgabe kann mit `jq` verarbeitet, in CI geprüft oder in Scripts für Design-token-Regeln verwendet werden.

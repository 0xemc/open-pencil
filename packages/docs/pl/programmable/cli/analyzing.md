---
title: Analiza projektu
description: Sprawdzanie colors, typography, spacing i powtarzających się patterns w plikach .fig.
---

# Analiza projektu

Polecenia `analyze` sprawdzają design system z terminala: znajdują niespójne wartości, wyodrębniają rzeczywistą palette i wykrywają powtarzające się struktury, które można przekształcić w components.

## Colors

```sh
openpencil analyze colors design.fig
```

Polecenie znajduje wszystkie colors, liczy ich użycia i tworzy histogram:

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

Wynik zawiera kombinacje font family, size i weight oraz liczbę użyć każdej z nich. Pozwala to znaleźć przypadkowe text styles, które warto ujednolicić.

## Spacing

```sh
openpencil analyze spacing design.fig
```

Polecenie sprawdza gap i padding we frames z Auto layout. Pomaga na przykład zauważyć przypadkowy gap `13px` pośród wartości skali `8/16/24`.

## Clusters

```sh
openpencil analyze clusters design.fig
```

Polecenie znajduje powtarzające się struktury obiektów, które mogą stać się components:

```text
3771× frame "container" (100% match)
     size: 40×40, structure: Frame > [Frame]

2982× instance "Checkboxes" (100% match)
     size: 48×48, structure: Instance > [Frame]
```

## JSON output

Wszystkie podpolecenia `analyze` obsługują `--json`:

```sh
openpencil analyze colors design.fig --json
```

Wynik można przekazać do `jq`, wykorzystać w CI checks albo scripts kontrolujących dopuszczalną liczbę design tokens.

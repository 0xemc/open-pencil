---
title: Анализ дизайна
description: Проверка colors, typography, spacing и повторяющихся patterns в .fig.
---

# Анализ дизайна

Команды `analyze` проверяют design system из терминала: находят несогласованные значения, извлекают фактическую palette и обнаруживают повторяющиеся структуры, которые можно превратить в components.

## Colors

```sh
openpencil analyze colors design.fig
```

Команда находит все colors, считает количество использований и строит histogram:

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

Результат содержит сочетания font family, size и weight и количество использований каждого сочетания. Так можно найти случайные text styles, которые стоит объединить.

## Spacing

```sh
openpencil analyze spacing design.fig
```

Команда проверяет gap и padding во frames с Auto layout. Например, она помогает заметить случайный gap `13px` среди значений шкалы `8/16/24`.

## Clusters

```sh
openpencil analyze clusters design.fig
```

Команда находит повторяющиеся структуры объектов, которые могут стать components:

```text
3771× frame "container" (100% match)
     size: 40×40, structure: Frame > [Frame]

2982× instance "Checkboxes" (100% match)
     size: 48×48, structure: Instance > [Frame]
```

## JSON output

Все подкоманды `analyze` поддерживают `--json`:

```sh
openpencil analyze colors design.fig --json
```

Результат можно передать `jq`, использовать в CI checks или scripts, контролирующих допустимое количество design tokens.

---
title: Dateien untersuchen
description: Document tree, Nodes, Pages und Variables über die CLI lesen.
---

# Dateien untersuchen

Mit der CLI können `.fig`-Dateien gelesen werden, ohne den Editor zu öffnen. Läuft die Desktop-App, kann bei den meisten Befehlen der Dateiname entfallen; die CLI verwendet dann RPC zum geöffneten Dokument.

::: tip Installation
```sh
npm install -g @open-pencil/cli
# oder
bun add -g @open-pencil/cli
# oder
brew install open-pencil/tap/open-pencil
```
:::

## Dokumentinformationen

Pages, Anzahl der Nodes, verwendete Fonts und Dateigröße anzeigen:

```sh
openpencil info design.fig
```

## Document tree

```sh
openpencil tree design.fig
```

```text
[0] [page] "Getting started" (0:46566)
  [0] [section] "" (0:46567)
    [0] [frame] "Body" (0:46568)
      [0] [frame] "Introduction" (0:46569)
        [0] [frame] "Introduction Card" (0:46570)
          [0] [frame] "Guidance" (0:46571)
```

## Nodes suchen

Nach Type:

```sh
openpencil find design.fig --type TEXT
```

Nach Name:

```sh
openpencil find design.fig --name "Button"
```

Beide Flags können kombiniert werden.

## Node details

```sh
openpencil node design.fig --id 1:23
```

Der Befehl zeigt die Properties des Node mit der angegebenen ID.

## Pages

```sh
openpencil pages design.fig
```

## Variables

```sh
openpencil variables design.fig
```

## Live document

Bei laufender Desktop-App:

```sh
openpencil tree          # geöffnetes Dokument
openpencil eval -c "..." # Editor über Figma Plugin API abfragen
```

## JSON output

Inspection commands unterstützen `--json`. Die Ausgabe kann an `jq`, CI oder andere Tools weitergegeben werden:

```sh
openpencil tree design.fig --json | jq '.[] | .name'
```

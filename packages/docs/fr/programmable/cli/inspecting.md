---
title: Examiner des fichiers
description: Lire le Document tree, les Nodes, les Pages et les Variables avec la CLI.
---

# Examiner des fichiers

La CLI lit les fichiers `.fig` sans ouvrir l’éditeur. Lorsque l’application de bureau est active, la plupart des Commands acceptent l’omission du fichier et utilisent RPC avec le document ouvert.

::: tip Installation
```sh
npm install -g @open-pencil/cli
# ou
bun add -g @open-pencil/cli
# ou
brew install open-pencil/tap/open-pencil
```
:::

## Informations du document

Affiche les Pages, le nombre de Nodes, les Fonts utilisés et la taille du fichier :

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

## Rechercher des Nodes

Par Type :

```sh
openpencil find design.fig --type TEXT
```

Par Name :

```sh
openpencil find design.fig --name "Button"
```

Les deux Flags peuvent être combinés.

## Node details

```sh
openpencil node design.fig --id 1:23
```

Affiche les Properties du Node indiqué.

## Pages

```sh
openpencil pages design.fig
```

## Variables

```sh
openpencil variables design.fig
```

## Document ouvert

Avec l’application de bureau active :

```sh
openpencil tree           # Document ouvert
openpencil eval -c "..." # Interroger via Figma Plugin API
```

## JSON output

Les Commands d’Inspection acceptent `--json`. La sortie peut être traitée avec `jq`, la CI ou d’autres Tools :

```sh
openpencil tree design.fig --json | jq '.[] | .name'
```

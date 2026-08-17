---
title: Examinar archivos
description: Leer el Document tree, Nodes, Pages y Variables mediante la CLI.
---

# Examinar archivos

La CLI permite leer archivos `.fig` sin abrir el editor. Si la aplicación de escritorio está en ejecución, en la mayoría de los Commands se puede omitir el archivo y trabajar con el documento abierto mediante RPC.

::: tip Instalación
```sh
npm install -g @open-pencil/cli
# o
bun add -g @open-pencil/cli
# o
brew install open-pencil/tap/open-pencil
```
:::

## Información del documento

Muestra Pages, cantidad de Nodes, Fonts usados y tamaño del archivo:

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

## Buscar Nodes

Por Type:

```sh
openpencil find design.fig --type TEXT
```

Por Name:

```sh
openpencil find design.fig --name "Button"
```

Los dos Flags se pueden combinar.

## Node details

```sh
openpencil node design.fig --id 1:23
```

Muestra las Properties del Node indicado.

## Pages

```sh
openpencil pages design.fig
```

## Variables

```sh
openpencil variables design.fig
```

## Documento abierto

Con la aplicación de escritorio en ejecución:

```sh
openpencil tree           # Documento abierto
openpencil eval -c "..." # Consultar mediante Figma Plugin API
```

## JSON output

Los Commands de Inspection admiten `--json`. La salida se puede procesar con `jq`, CI u otras Tools:

```sh
openpencil tree design.fig --json | jq '.[] | .name'
```

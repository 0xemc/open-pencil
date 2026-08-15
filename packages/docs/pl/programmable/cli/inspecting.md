---
title: Przeglądanie dokumentów
description: Drzewo obiektów, wyszukiwanie według nazwy i typu oraz properties z terminala.
---

# Przeglądanie dokumentów

CLI pozwala analizować design documents bez uruchamiania edytora. Te same polecenia działają z otwartą desktop app, jeśli nie podasz pliku.

::: tip Instalacja
```sh
npm install -g @open-pencil/cli
# albo
brew install open-pencil/tap/open-pencil
```
:::

## Informacje ogólne

Liczba stron i obiektów, używane fonts oraz rozmiar pliku:

```sh
openpencil info design.fig
```

## Drzewo obiektów

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

## Wyszukiwanie obiektów

Według type:

```sh
openpencil find design.fig --type TEXT
```

Według name:

```sh
openpencil find design.fig --name "Button"
```

Obie opcje można stosować jednocześnie.

## XPath queries

XPath selectors wyszukują obiekty według type, attributes i położenia w drzewie:

```sh
openpencil query design.fig "//FRAME"
```

### Według type

```sh
openpencil query design.fig "//TEXT"                    # Wszystkie obiekty text
openpencil query design.fig "//COMPONENT"               # Wszystkie components
openpencil query design.fig "//INSTANCE"                # Wszystkie instances
```

### Według attributes

```sh
openpencil query design.fig "//FRAME[@width < 300]"     # Frames węższe niż 300 px
openpencil query design.fig "//*[@cornerRadius > 0]"    # Obiekty z zaokrąglonymi narożnikami
openpencil query design.fig "//*[@visible = false]"     # Ukryte obiekty
openpencil query design.fig "//TEXT[@fontSize >= 24]"   # Duży tekst
openpencil query design.fig "//*[@opacity < 1]"         # Obiekty z niepełną opacity
```

### Według nazwy i zawartości

```sh
openpencil query design.fig "//TEXT[contains(@name, 'Button')]"   # Name zawiera Button
openpencil query design.fig "//TEXT[contains(@text, 'Hello')]"    # Text zawiera Hello
```

### Według hierarchy

```sh
openpencil query design.fig "//SECTION//TEXT"            # Text wewnątrz sections
openpencil query design.fig "//FRAME/TEXT"               # Bezpośrednie text children frames
openpencil query design.fig "//COMPONENT_SET//INSTANCE"  # Instances w component sets
```

### Dostępne attributes

`name`, `width`, `height`, `x`, `y`, `visible`, `opacity`, `cornerRadius`, `fontSize`, `fontFamily`, `fontWeight`, `layoutMode`, `itemSpacing`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `strokeWeight`, `rotation`, `locked`, `blendMode`, `text`, `lineHeight`, `letterSpacing`

### Przykład wyniku

```text
  Found 5 nodes

[0] [frame] "Logo  92×32" (0:9)
[1] [frame] "logo-short-6  31×32" (0:10)
[2] [frame] "wrapper  128×73" (0:20)
[3] [frame] "pen-drawing  148×52" (0:21)
[4] [frame] "surprised-emoji  32×32" (0:26)
```

## Properties obiektu

```sh
openpencil node design.fig --id 1:23
```

## Strony

```sh
openpencil pages design.fig
```

## Variables

```sh
openpencil variables design.fig
```

## Praca z otwartą aplikacją

Jeśli desktop app jest uruchomiona, nie podawaj ścieżki pliku. CLI połączy się przez RPC z otwartym dokumentem:

```sh
openpencil documents         # ID otwartych dokumentów i stron
openpencil tree              # Aktywny dokument
openpencil tree --document-id tab-123 --page-id 0:1
openpencil eval --document-id tab-123 --page-id 0:1 -c "..."
```

W agent workflows najpierw wywołaj `openpencil documents --json`, a potem jawnie przekazuj `--document-id` i `--page-id`, zamiast polegać na widocznej aktywnej karcie lub stronie.

## Lint

Sprawdzanie naming, layout, structure i accessibility:

```sh
openpencil lint design.fig
openpencil lint design.pen --preset strict
openpencil lint design.fig --rule color-contrast
openpencil lint design.fig --list-rules
```

Dodaj `--json`, jeśli wynik będzie przetwarzany przez inny program.

## JSON output

Wszystkie polecenia obsługują `--json`. Wynik można przekazać do `jq`, CI script albo innego tool:

```sh
openpencil tree design.fig --json | jq '.[] | .name'
```

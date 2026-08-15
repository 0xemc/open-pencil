---
title: JSX renderer
description: Designs deklarativ mit JSX erstellen und als JSX oder Tailwind HTML exportieren.
---

# JSX renderer

OpenPencil kann einen Design tree aus JSX erstellen. Die kompakte, deklarative Syntax eignet sich für AI agents, Scripts und wiederholbare Design generation.

JSX kann außerdem als lesbare Darstellung eines vorhandenen Design verwendet werden. Änderungen erscheinen als gewöhnlicher Code diff und lassen sich dadurch reviewen und versionieren.

## Design erstellen

Das Tool `render`, verfügbar in AI Chat, MCP und CLI `eval`, akzeptiert JSX:

```jsx
<Frame name="Card" w={320} h="hug" flex="col" gap={16} p={24} bg="#FFF" rounded={16}>
  <Text size={18} weight="bold">Card Title</Text>
  <Text size={14} color="#666">Description text</Text>
</Frame>
```

In MCP und AI Chat wird der JSX string direkt an `render` übergeben. Für die Gegenrichtung verwendet die CLI den Befehl `export`: [Design als JSX exportieren](./cli/exporting).

## Elemente

| Element | Ergebnis | Alias |
|---------|----------|-------|
| `<Frame>` | Frame mit optionalem Auto Layout | `<View>` |
| `<Rectangle>` | Rectangle | `<Rect>` |
| `<Ellipse>` | Ellipse oder Circle | |
| `<Text>` | Text object; Children werden zum Textinhalt | |
| `<Line>` | Line | |
| `<Star>` | Star | |
| `<Polygon>` | Polygon | |
| `<Vector>` | Vector path | |
| `<Group>` | Group | |
| `<Section>` | Section | |

## Style props

Die Kurzformen orientieren sich an Tailwind naming.

### Layout

| Prop | Bedeutung |
|------|-----------|
| `flex` | `"row"` oder `"col"`; aktiviert Auto Layout |
| `gap` | Abstand zwischen Children |
| `wrap` | Children in weitere Zeilen umbrechen |
| `rowGap` | Abstand zwischen Zeilen bei Wrap |
| `justify` | `"start"`, `"end"`, `"center"`, `"between"` |
| `items` | `"start"`, `"end"`, `"center"`, `"stretch"` |
| `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | Padding |

### Size und Position

| Prop | Bedeutung |
|------|-----------|
| `w`, `h` | Width oder Height als Zahl, `"fill"` oder `"hug"` |
| `minW`, `maxW`, `minH`, `maxH` | Größenlimits |
| `x`, `y` | Position |

### Appearance

| Prop | Bedeutung |
|------|-----------|
| `bg` | Background fill als Hex color |
| `fill` | Alias für `bg` |
| `stroke` | Stroke color |
| `strokeWidth` | Stroke weight, standardmäßig 1 |
| `rounded` | Corner radius; einzelne Ecken über `roundedTL`, `roundedTR`, `roundedBL`, `roundedBR` |
| `cornerSmoothing` | Continuous corner smoothing von 0 bis 1 |
| `opacity` | Wert von 0 bis 1 |
| `shadow` | Drop shadow, zum Beispiel `"0 4 8 #00000040"` |
| `blur` | Layer blur radius |
| `rotate` | Rotation in Grad |
| `blendMode` | Blend mode |
| `overflow` | `"hidden"` oder `"visible"` |

### Typography

| Prop | Bedeutung |
|------|-----------|
| `size` / `fontSize` | Font size |
| `font` / `fontFamily` | Font family |
| `weight` / `fontWeight` | `"bold"`, `"medium"`, `"normal"` oder numerischer Wert |
| `color` | Text color |
| `textAlign` | `"left"`, `"center"`, `"right"`, `"justified"` |

## JSX exportieren

```sh
openpencil export design.fig -f jsx                   # OpenPencil JSX
openpencil export design.fig -f jsx --style tailwind  # HTML mit Tailwind classes
```

Ein exportiertes Design kann im Code verändert und anschließend erneut gerendert werden.

## Diffs

```diff
 <Frame name="Card" w={320} flex="col" gap={16} p={24} bg="#FFF">
-  <Text size={18} weight="bold">Old Title</Text>
+  <Text size={24} weight="bold" color="#1D1B20">New Title</Text>
   <Text size={14} color="#666">Description</Text>
 </Frame>
```

Diese Darstellung macht Designänderungen in Pull requests lesbar und in Version control nachvollziehbar.

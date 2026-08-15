---
title: JSX Renderer
description: Tworzenie projektu za pomocą JSX — składni znanej modelom LLM z milionów React components.
---

# JSX Renderer

OpenPencil używa JSX jako deklaratywnego języka tworzenia projektu. Modele LLM znają miliony React components, dlatego struktura `<Frame><Text>` nie wymaga osobnego treningu. Zwięzłość ma szczególne znaczenie, gdy AI agent wykonuje dziesiątki operacji.

JSX można łatwo porównywać. Po zmianie projektu przez AI wynik da się przedstawić jako zwykły JSX diff, który można przeczytać, sprawdzić i zachować w version control.

## Tworzenie projektu

Tool `render`, dostępny w AI chat, MCP i CLI eval, przyjmuje JSX:

```jsx
<Frame name="Card" w={320} h="hug" flex="col" gap={16} p={24} bg="#FFF" rounded={16}>
  <Text size={18} weight="bold">Card Title</Text>
  <Text size={14} color="#666">Description text</Text>
</Frame>
```

W MCP server i AI chat przekaż do tool `render` ciąg JSX. Do konwersji w drugą stronę za pomocą CLI użyj `export` — więcej na stronie [Eksport projektu do JSX](./cli/exporting).

## Elements

Typy obiektów są reprezentowane jako JSX elements:

| Element | Tworzy | Alias |
|---------|--------|-------|
| `<Frame>` | Frame obsługujący Auto layout | `<View>` |
| `<Rectangle>` | Rectangle | `<Rect>` |
| `<Ellipse>` | Ellipse albo circle | |
| `<Text>` | Obiekt tekstowy; children stają się zawartością | |
| `<Line>` | Line | |
| `<Star>` | Star | |
| `<Polygon>` | Polygon | |
| `<Vector>` | Vector path | |
| `<Group>` | Group | |
| `<Section>` | Section | |

## Style props

Dla zwięzłości props mają nazwy zbliżone do Tailwind.

### Layout

| Prop | Zastosowanie |
|------|--------------|
| `flex` | `"row"` albo `"col"`; włącza Auto layout |
| `gap` | Odległość między children |
| `wrap` | Przenoszenie children do następnego wiersza |
| `rowGap` | Odstęp na osi poprzecznej przy wrap |
| `justify` | `"start"`, `"end"`, `"center"` albo `"between"` |
| `items` | `"start"`, `"end"`, `"center"` albo `"stretch"` |
| `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | Padding |

### Rozmiar i położenie

| Prop | Zastosowanie |
|------|--------------|
| `w`, `h` | Width i height: liczba, `"fill"` albo `"hug"` |
| `minW`, `maxW`, `minH`, `maxH` | Ograniczenia rozmiaru |
| `x`, `y` | Position |

### Wygląd

| Prop | Zastosowanie |
|------|--------------|
| `bg` | Background fill w formacie hex |
| `fill` | Alias `bg` |
| `stroke` | Stroke color |
| `strokeWidth` | Stroke width; domyślnie 1 |
| `rounded` | Corner radius; osobne narożniki: `roundedTL`, `roundedTR`, `roundedBL`, `roundedBR` |
| `cornerSmoothing` | Smooth corners w stylu iOS, od 0 do 1 |
| `opacity` | Od 0 do 1 |
| `shadow` | Drop shadow, na przykład `"0 4 8 #00000040"` |
| `blur` | Layer blur radius |
| `rotate` | Kąt obrotu w stopniach |
| `blendMode` | Blend mode |
| `overflow` | `"hidden"` albo `"visible"` |

### Typography

| Prop | Zastosowanie |
|------|--------------|
| `size` / `fontSize` | Font size |
| `font` / `fontFamily` | Font family |
| `weight` / `fontWeight` | `"bold"`, `"medium"`, `"normal"` albo liczba |
| `color` | Text color |
| `textAlign` | `"left"`, `"center"`, `"right"` albo `"justified"` |

## Eksport do JSX

Istniejący projekt można przekształcić z powrotem do JSX:

```sh
openpencil export design.fig -f jsx                   # Format OpenPencil
openpencil export design.fig -f jsx --style tailwind  # Klasy Tailwind
```

Konwersja działa w obie strony: wyeksportuj JSX, zmień kod i ponownie przekaż go do renderer.

## Visual diff

Ponieważ projekt można przedstawić jako JSX, zmiany wyglądają jak code diff:

```diff
 <Frame name="Card" w={320} flex="col" gap={16} p={24} bg="#FFF">
-  <Text size={18} weight="bold">Old Title</Text>
+  <Text size={24} weight="bold" color="#1D1B20">New Title</Text>
   <Text size={14} color="#666">Description</Text>
 </Frame>
```

Taki diff można sprawdzić w pull request, przechowywać w version control i analizować w CI.

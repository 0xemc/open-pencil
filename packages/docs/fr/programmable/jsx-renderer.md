---
title: JSX renderer
description: Créer des designs de manière déclarative en JSX et les exporter en JSX ou HTML avec Tailwind.
---

# JSX renderer

OpenPencil crée un Design tree à partir de JSX. Cette syntaxe déclarative et compacte convient aux AI agents, aux Scripts et à la génération reproductible de designs.

JSX sert aussi de représentation lisible d’un design existant. Les modifications apparaissent comme un Code diff ordinaire, ce qui facilite Review et Version control.

## Créer un design

Le Tool `render`, disponible dans AI Chat, MCP et CLI `eval`, accepte du JSX :

```jsx
<Frame name="Card" w={320} h="hug" flex="col" gap={16} p={24} bg="#FFF" rounded={16}>
  <Text size={18} weight="bold">Card Title</Text>
  <Text size={14} color="#666">Description text</Text>
</Frame>
```

Dans MCP et AI Chat, le JSX string est transmis directement à `render`. Pour l’autre sens, la CLI utilise `export` : [Exporter un design en JSX](./cli/exporting).

## Éléments

| Élément | Résultat | Alias |
|---------|----------|-------|
| `<Frame>` | Frame avec Auto layout facultatif | `<View>` |
| `<Rectangle>` | Rectangle | `<Rect>` |
| `<Ellipse>` | Ellipse ou Circle | |
| `<Text>` | Objet texte ; les Children deviennent son contenu | |
| `<Line>` | Line | |
| `<Star>` | Star | |
| `<Polygon>` | Polygon | |
| `<Vector>` | Vector path | |
| `<Group>` | Group | |
| `<Section>` | Section | |

## Style props

Les formes courtes suivent les conventions de Tailwind.

### Layout

| Prop | Signification |
|------|---------------|
| `flex` | `"row"` ou `"col"` ; active Auto layout |
| `gap` | Espace entre Children |
| `wrap` | Place les Children sur d’autres lignes |
| `rowGap` | Espace entre les lignes avec Wrap |
| `justify` | `"start"`, `"end"`, `"center"`, `"between"` |
| `items` | `"start"`, `"end"`, `"center"`, `"stretch"` |
| `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | Padding |

### Size et Position

| Prop | Signification |
|------|---------------|
| `w`, `h` | Width ou Height sous forme de nombre, `"fill"` ou `"hug"` |
| `minW`, `maxW`, `minH`, `maxH` | Limites de taille |
| `x`, `y` | Position |

### Appearance

| Prop | Signification |
|------|---------------|
| `bg` | Background fill sous forme de Hex color |
| `fill` | Alias de `bg` |
| `stroke` | Stroke color |
| `strokeWidth` | Stroke weight, 1 par défaut |
| `rounded` | Corner radius ; coins séparés via `roundedTL`, `roundedTR`, `roundedBL`, `roundedBR` |
| `cornerSmoothing` | Continuous corner smoothing de 0 à 1 |
| `opacity` | Valeur de 0 à 1 |
| `shadow` | Drop shadow, par exemple `"0 4 8 #00000040"` |
| `blur` | Layer blur radius |
| `rotate` | Rotation en degrés |
| `blendMode` | Blend mode |
| `overflow` | `"hidden"` ou `"visible"` |

### Typography

| Prop | Signification |
|------|---------------|
| `size` / `fontSize` | Font size |
| `font` / `fontFamily` | Font family |
| `weight` / `fontWeight` | `"bold"`, `"medium"`, `"normal"` ou nombre |
| `color` | Text color |
| `textAlign` | `"left"`, `"center"`, `"right"`, `"justified"` |

## Exporter du JSX

```sh
openpencil export design.fig -f jsx                   # JSX OpenPencil
openpencil export design.fig -f jsx --style tailwind  # HTML avec Tailwind classes
```

Le design exporté peut être modifié comme du Code puis rendu à nouveau.

## Diffs

```diff
 <Frame name="Card" w={320} flex="col" gap={16} p={24} bg="#FFF">
-  <Text size={18} weight="bold">Old Title</Text>
+  <Text size={24} weight="bold" color="#1D1B20">New Title</Text>
   <Text size={14} color="#666">Description</Text>
 </Frame>
```

Cette représentation permet de relire les changements dans les Pull requests et de les conserver dans Version control.

---
title: JSX renderer
description: Crear diseños de forma declarativa con JSX y exportarlos como JSX o HTML con Tailwind.
---

# JSX renderer

OpenPencil puede crear un Design tree a partir de JSX. Su sintaxis declarativa y compacta sirve para AI agents, Scripts y generación repetible de diseños.

JSX también funciona como representación legible de un diseño existente. Los cambios aparecen como un Code diff normal, por lo que se pueden revisar y versionar.

## Crear un diseño

El Tool `render`, disponible en AI Chat, MCP y CLI `eval`, acepta JSX:

```jsx
<Frame name="Card" w={320} h="hug" flex="col" gap={16} p={24} bg="#FFF" rounded={16}>
  <Text size={18} weight="bold">Card Title</Text>
  <Text size={14} color="#666">Description text</Text>
</Frame>
```

En MCP y AI Chat, el JSX string se pasa directamente a `render`. Para la dirección contraria, la CLI usa `export`: [Exportar un diseño como JSX](./cli/exporting).

## Elementos

| Elemento | Resultado | Alias |
|----------|-----------|-------|
| `<Frame>` | Frame con Auto layout opcional | `<View>` |
| `<Rectangle>` | Rectangle | `<Rect>` |
| `<Ellipse>` | Ellipse o Circle | |
| `<Text>` | Objeto de texto; sus Children se convierten en contenido | |
| `<Line>` | Line | |
| `<Star>` | Star | |
| `<Polygon>` | Polygon | |
| `<Vector>` | Vector path | |
| `<Group>` | Group | |
| `<Section>` | Section | |

## Style props

Las abreviaturas siguen la nomenclatura de Tailwind.

### Layout

| Prop | Significado |
|------|-------------|
| `flex` | `"row"` o `"col"`; activa Auto layout |
| `gap` | Espacio entre Children |
| `wrap` | Coloca los Children en otras filas |
| `rowGap` | Espacio entre filas con Wrap |
| `justify` | `"start"`, `"end"`, `"center"`, `"between"` |
| `items` | `"start"`, `"end"`, `"center"`, `"stretch"` |
| `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | Padding |

### Size y Position

| Prop | Significado |
|------|-------------|
| `w`, `h` | Width o Height como número, `"fill"` o `"hug"` |
| `minW`, `maxW`, `minH`, `maxH` | Límites de tamaño |
| `x`, `y` | Position |

### Appearance

| Prop | Significado |
|------|-------------|
| `bg` | Background fill como Hex color |
| `fill` | Alias de `bg` |
| `stroke` | Stroke color |
| `strokeWidth` | Stroke weight; 1 de forma predeterminada |
| `rounded` | Corner radius; esquinas individuales mediante `roundedTL`, `roundedTR`, `roundedBL`, `roundedBR` |
| `cornerSmoothing` | Continuous corner smoothing de 0 a 1 |
| `opacity` | Valor de 0 a 1 |
| `shadow` | Drop shadow, por ejemplo `"0 4 8 #00000040"` |
| `blur` | Layer blur radius |
| `rotate` | Rotation en grados |
| `blendMode` | Blend mode |
| `overflow` | `"hidden"` o `"visible"` |

### Typography

| Prop | Significado |
|------|-------------|
| `size` / `fontSize` | Font size |
| `font` / `fontFamily` | Font family |
| `weight` / `fontWeight` | `"bold"`, `"medium"`, `"normal"` o número |
| `color` | Text color |
| `textAlign` | `"left"`, `"center"`, `"right"`, `"justified"` |

## Exportar JSX

```sh
openpencil export design.fig -f jsx                   # JSX de OpenPencil
openpencil export design.fig -f jsx --style tailwind  # HTML con Tailwind classes
```

El diseño exportado se puede modificar como Code y renderizar de nuevo.

## Diffs

```diff
 <Frame name="Card" w={320} flex="col" gap={16} p={24} bg="#FFF">
-  <Text size={18} weight="bold">Old Title</Text>
+  <Text size={24} weight="bold" color="#1D1B20">New Title</Text>
   <Text size={14} color="#666">Description</Text>
 </Frame>
```

Esta representación permite revisar cambios de diseño en Pull requests y conservarlos en Version control.

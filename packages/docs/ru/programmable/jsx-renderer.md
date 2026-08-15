---
title: JSX Renderer
description: Создание дизайна с помощью JSX — синтаксиса, знакомого LLM по миллионам React components.
---

# JSX Renderer

OpenPencil использует JSX как декларативный язык создания дизайна. LLM уже знакомы с миллионами React components, поэтому структура `<Frame><Text>` не требует отдельного обучения. Компактность особенно важна, когда AI agent выполняет десятки операций.

JSX удобно сравнивать. После изменения дизайна AI результат можно представить как обычный JSX diff: его легко прочитать, проверить и сохранить в version control.

## Создание дизайна

Tool `render`, доступный в AI chat, MCP и CLI eval, принимает JSX:

```jsx
<Frame name="Card" w={320} h="hug" flex="col" gap={16} p={24} bg="#FFF" rounded={16}>
  <Text size={18} weight="bold">Card Title</Text>
  <Text size={14} color="#666">Description text</Text>
</Frame>
```

В MCP server и AI chat передайте tool `render` строку JSX. Для обратного преобразования через CLI используйте `export` — подробнее в разделе [Экспорт дизайна в JSX](./cli/exporting).

## Elements

Типы объектов представлены JSX elements:

| Element | Создаёт | Alias |
|---------|---------|-------|
| `<Frame>` | Frame с поддержкой Auto layout | `<View>` |
| `<Rectangle>` | Rectangle | `<Rect>` |
| `<Ellipse>` | Ellipse или circle | |
| `<Text>` | Text object; children становятся содержимым | |
| `<Line>` | Line | |
| `<Star>` | Star | |
| `<Polygon>` | Polygon | |
| `<Vector>` | Vector path | |
| `<Group>` | Group | |
| `<Section>` | Section | |

## Style props

Для краткости props используют имена, близкие к Tailwind.

### Layout

| Prop | Назначение |
|------|------------|
| `flex` | `"row"` или `"col"`; включает Auto layout |
| `gap` | Расстояние между children |
| `wrap` | Перенос children на следующую строку |
| `rowGap` | Расстояние по поперечной оси при wrap |
| `justify` | `"start"`, `"end"`, `"center"` или `"between"` |
| `items` | `"start"`, `"end"`, `"center"` или `"stretch"` |
| `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` | Padding |

### Размер и положение

| Prop | Назначение |
|------|------------|
| `w`, `h` | Width и height: число, `"fill"` или `"hug"` |
| `minW`, `maxW`, `minH`, `maxH` | Ограничения размера |
| `x`, `y` | Position |

### Внешний вид

| Prop | Назначение |
|------|------------|
| `bg` | Background fill в hex format |
| `fill` | Alias для `bg` |
| `stroke` | Stroke color |
| `strokeWidth` | Stroke width; по умолчанию 1 |
| `rounded` | Corner radius; отдельные углы: `roundedTL`, `roundedTR`, `roundedBL`, `roundedBR` |
| `cornerSmoothing` | Smooth corners в стиле iOS, от 0 до 1 |
| `opacity` | От 0 до 1 |
| `shadow` | Drop shadow, например `"0 4 8 #00000040"` |
| `blur` | Layer blur radius |
| `rotate` | Угол поворота в градусах |
| `blendMode` | Blend mode |
| `overflow` | `"hidden"` или `"visible"` |

### Typography

| Prop | Назначение |
|------|------------|
| `size` / `fontSize` | Font size |
| `font` / `fontFamily` | Font family |
| `weight` / `fontWeight` | `"bold"`, `"medium"`, `"normal"` или число |
| `color` | Text color |
| `textAlign` | `"left"`, `"center"`, `"right"` или `"justified"` |

## Экспорт в JSX

Существующий дизайн можно преобразовать обратно в JSX:

```sh
openpencil export design.fig -f jsx                   # Формат OpenPencil
openpencil export design.fig -f jsx --style tailwind  # Классы Tailwind
```

Преобразование работает в обе стороны: экспортируйте JSX, измените код и снова передайте его renderer.

## Visual diff

Поскольку дизайн можно представить как JSX, изменения выглядят как code diff:

```diff
 <Frame name="Card" w={320} flex="col" gap={16} p={24} bg="#FFF">
-  <Text size={18} weight="bold">Old Title</Text>
+  <Text size={24} weight="bold" color="#1D1B20">New Title</Text>
   <Text size={14} color="#666">Description</Text>
 </Frame>
```

Такой diff можно проверить в pull request, сохранить в version control и анализировать в CI.

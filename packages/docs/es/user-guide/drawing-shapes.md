---
title: Dibujar Shapes
description: Crear Rectangles, Ellipses, Lines, Frames, Sections, Polygons y Stars en OpenPencil.
---

# Dibujar Shapes

La Toolbar inferior incluye Tools para crear Shapes, Frames y Sections. Selecciona uno y arrastra sobre el canvas.

## Tools

| Tool | Atajo | Función |
|------|-------|---------|
| Rectangle | <kbd>R</kbd> | Crea un Rectangle |
| Ellipse | <kbd>O</kbd> | Crea una Ellipse |
| Line | <kbd>L</kbd> | Crea una Line |
| Frame | <kbd>F</kbd> | Crea un Frame que actúa como contenedor |
| Section | <kbd>S</kbd> | Crea una Section e incorpora objetos superpuestos |

## Menú Shapes

También contiene:

- **Polygon:** tres lados de forma predeterminada;
- **Star:** cinco puntas de forma predeterminada.

## Mantener las proporciones

Mantén <kbd>Shift</kbd> durante el arrastre:

- Rectangle se convierte en cuadrado;
- Ellipse se convierte en círculo;
- Line se ajusta a 0°, 45° y 90°.

## Properties

### Fill

Un Shape puede usar Solid color, Gradient lineal/radial/angular/diamond o Image fill.

### Stroke

- **Weight:** uniforme o independiente para Top, Right, Bottom y Left
- **Color:** Solid color con Opacity
- **Alignment:** Inside, Center u Outside con Clipping compatible con Figma
- **Cap:** None, Round, Square o Arrow
- **Join:** Miter, Bevel o Round
- **Dash:** longitudes alternas de Dash y Gap

### Corner radius

Rectangles, Frames, Components e Instances admiten un Radius común o uno distinto en cada esquina.

### Effects

- **Drop shadow:** Offset, Blur radius, Spread y Color
- **Inner shadow:** los mismos ajustes dentro del Shape
- **Layer blur:** desenfoca todo el objeto
- **Background blur:** desenfoca el contenido situado detrás
- **Foreground blur:** desenfoca el contenido situado delante

## Frames y Sections

Los **Frames** son contenedores. Los Shapes que se arrastran dentro pasan a ser sus Children. También admiten [Auto layout](./auto-layout).

Las **Sections** organizan objetos en el nivel superior e incorporan automáticamente los Siblings superpuestos.

## Atajos

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Rectangle | <kbd>R</kbd> | <kbd>R</kbd> |
| Ellipse | <kbd>O</kbd> | <kbd>O</kbd> |
| Line | <kbd>L</kbd> | <kbd>L</kbd> |
| Frame | <kbd>F</kbd> | <kbd>F</kbd> |
| Section | <kbd>S</kbd> | <kbd>S</kbd> |
| Cuadrado o círculo | <kbd>Shift</kbd> + Drag | <kbd>Shift</kbd> + Drag |

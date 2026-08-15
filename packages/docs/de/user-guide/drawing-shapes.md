---
title: Shapes zeichnen
description: Rectangles, Ellipses, Lines, Frames, Sections, Polygons und Stars in OpenPencil erstellen.
---

# Shapes zeichnen

Die Toolbar am unteren Rand enthält Tools für Shapes, Frames und Sections. Tool auswählen und anschließend auf dem Canvas ziehen.

## Tools

| Tool | Shortcut | Funktion |
|------|----------|----------|
| Rectangle | <kbd>R</kbd> | Erstellt ein Rectangle |
| Ellipse | <kbd>O</kbd> | Erstellt eine Ellipse |
| Line | <kbd>L</kbd> | Erstellt eine Line |
| Frame | <kbd>F</kbd> | Erstellt einen Frame als Container |
| Section | <kbd>S</kbd> | Erstellt eine Section und übernimmt überlappende Objekte |

## Shape-Menü

Das Shape-Menü enthält außerdem:

- **Polygon:** standardmäßig ein Dreieck mit drei Seiten;
- **Star:** standardmäßig ein Stern mit fünf Spitzen.

## Proportionen beibehalten

Während des Ziehens <kbd>Shift</kbd> gedrückt halten:

- Rectangle wird zum Quadrat;
- Ellipse wird zum Kreis;
- Line rastet bei 0°, 45° und 90° ein.

## Properties

### Fill

Ein Shape kann einen Solid fill, Linear/Radial/Angular/Diamond gradient oder Image fill besitzen.

### Stroke

- **Weight:** einheitlich oder separat für Top, Right, Bottom und Left
- **Color:** Solid color mit Opacity
- **Alignment:** Inside, Center oder Outside mit Figma-kompatiblem Clipping
- **Cap:** None, Round, Square oder Arrow
- **Join:** Miter, Bevel oder Round
- **Dash:** wechselnde Dash- und Gap-Längen

### Corner radius

Rectangles, Frames, Components und Instances unterstützen einen gemeinsamen oder separaten Radius für jede Ecke.

### Effects

- **Drop shadow:** Offset, Blur radius, Spread und Color
- **Inner shadow:** dieselben Einstellungen innerhalb des Shape
- **Layer blur:** verwischt das gesamte Objekt
- **Background blur:** verwischt den Inhalt hinter dem Objekt
- **Foreground blur:** verwischt den Inhalt vor dem Objekt

## Frames und Sections

**Frames** sind Container. Werden Shapes in einen Frame gezogen, werden sie dessen Children. Frames unterstützen [Auto Layout](./auto-layout).

**Sections** organisieren Objekte auf oberster Ebene und übernehmen überlappende Siblings automatisch.

## Shortcuts

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Rectangle | <kbd>R</kbd> | <kbd>R</kbd> |
| Ellipse | <kbd>O</kbd> | <kbd>O</kbd> |
| Line | <kbd>L</kbd> | <kbd>L</kbd> |
| Frame | <kbd>F</kbd> | <kbd>F</kbd> |
| Section | <kbd>S</kbd> | <kbd>S</kbd> |
| Quadrat oder Kreis | <kbd>Shift</kbd> + Drag | <kbd>Shift</kbd> + Drag |

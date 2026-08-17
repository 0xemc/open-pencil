---
title: Dessiner des Shapes
description: Créer des Rectangles, Ellipses, Lines, Frames, Sections, Polygons et Stars dans OpenPencil.
---

# Dessiner des Shapes

La Toolbar inférieure contient les Tools de création des Shapes, Frames et Sections. Sélectionnez un Tool, puis faites un Drag sur le canvas.

## Tools

| Tool | Raccourci | Fonction |
|------|-----------|----------|
| Rectangle | <kbd>R</kbd> | Crée un Rectangle |
| Ellipse | <kbd>O</kbd> | Crée une Ellipse |
| Line | <kbd>L</kbd> | Crée une Line |
| Frame | <kbd>F</kbd> | Crée un Frame servant de conteneur |
| Section | <kbd>S</kbd> | Crée une Section et intègre les objets superposés |

## Menu Shapes

Il contient également :

- **Polygon :** trois côtés par défaut ;
- **Star :** cinq branches par défaut.

## Conserver les proportions

Maintenez <kbd>Shift</kbd> pendant le Drag :

- Rectangle devient un carré ;
- Ellipse devient un cercle ;
- Line s’aligne sur 0°, 45° et 90°.

## Properties

### Fill

Un Shape peut utiliser une Solid color, un Gradient linear/radial/angular/diamond ou un Image fill.

### Stroke

- **Weight :** uniforme ou indépendant pour Top, Right, Bottom et Left
- **Color :** Solid color avec Opacity
- **Alignment :** Inside, Center ou Outside avec Clipping compatible Figma
- **Cap :** None, Round, Square ou Arrow
- **Join :** Miter, Bevel ou Round
- **Dash :** alternance de longueurs Dash et Gap

### Corner radius

Rectangles, Frames, Components et Instances acceptent un Radius commun ou propre à chaque coin.

### Effects

- **Drop shadow :** Offset, Blur radius, Spread et Color
- **Inner shadow :** mêmes réglages à l’intérieur du Shape
- **Layer blur :** floute tout l’objet
- **Background blur :** floute le contenu derrière l’objet
- **Foreground blur :** floute le contenu devant l’objet

## Frames et Sections

Les **Frames** sont des conteneurs. Les Shapes déplacés à l’intérieur deviennent leurs Children. Ils prennent aussi en charge [Auto layout](./auto-layout).

Les **Sections** organisent les objets au niveau supérieur et intègrent automatiquement les Siblings superposés.

## Raccourcis

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Rectangle | <kbd>R</kbd> | <kbd>R</kbd> |
| Ellipse | <kbd>O</kbd> | <kbd>O</kbd> |
| Line | <kbd>L</kbd> | <kbd>L</kbd> |
| Frame | <kbd>F</kbd> | <kbd>F</kbd> |
| Section | <kbd>S</kbd> | <kbd>S</kbd> |
| Carré ou cercle | <kbd>Shift</kbd> + Drag | <kbd>Shift</kbd> + Drag |

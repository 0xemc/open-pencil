---
title: Layers et Pages
description: Gérer les Layers, les Pages et le panneau Properties d’OpenPencil.
---

# Layers et Pages

L’interface principale comprend le panneau Layers à gauche, le canvas au centre et le panneau Properties à droite. Les séparateurs permettent de redimensionner les panneaux latéraux.

## Panneau Layers

Le panneau Layers représente la hiérarchie du document sous forme de Tree.

### Hiérarchie

Frames, Groups et Components peuvent être développés pour afficher leurs Children.

### Ordre et Parent

Faites un Drag sur une Layer pour modifier son ordre ou la placer dans un autre conteneur. Les Layers situées plus haut sont rendues devant celles du dessous.

### Visibility

L’Eye icon masque ou affiche une Layer sur le canvas.

### Renommer

Double-click sur un Name ouvre un Input. <kbd>Enter</kbd> ou un Click à l’extérieur valide ; <kbd>Escape</kbd> annule.

### Selection

Un Click sur une Layer sélectionne l’objet correspondant sur le canvas. La Selection du canvas est également reflétée dans le Tree.

## Pages

- Click change de Page.
- Le Button Add crée une Page.
- Delete supprime la Page actuelle.
- Double-click lance le changement de nom.

Chaque Page conserve son Canvas background et son propre Viewport state.

## Panneau Properties

### Design

Affiche les Properties de la Selection :

- **Appearance :** Opacity, Corner radius et Visibility ;
- **Fill :** Solid colors, Gradients, Images et Variable bindings ;
- **Stroke :** Color, Weight, Alignment, Cap, Join et Dash ;
- **Effects :** Drop shadow, Inner shadow et Blur ;
- **Typography :** Font family, Style, Size et Buttons B/I/U/S ;
- **Layout :** contrôles d’[Auto layout](./auto-layout) ;
- **Export :** Scale, Format et Action d’export.

### Code

Affiche la Selection en JSX avec Syntax highlighting et permet d’exporter du HTML avec Tailwind CSS v4.

### AI

Ouvre AI Chat. L’onglet est également accessible avec <kbd>⌘</kbd><kbd>J</kbd> ou <kbd>Ctrl</kbd><kbd>J</kbd>.

## Interface mobile

Sur les petits écrans, les panneaux latéraux sont remplacés par une Bottom sheet avec des onglets Layers, Properties, Design et Code.

## Raccourci

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Ouvrir ou fermer AI Chat | <kbd>⌘</kbd><kbd>J</kbd> | <kbd>Ctrl</kbd><kbd>J</kbd> |

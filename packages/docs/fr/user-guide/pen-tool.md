---
title: Pen tool
description: Dessiner des Vector paths et Bezier curves avec Pen tool.
---

# Pen tool

Pen tool crée des Vector paths avec le modèle Vector network compatible avec Figma.

## Activer

Appuyez sur <kbd>P</kbd>.

## Créer des Anchors

- Click crée un Corner anchor et un Segment droit.
- Click et Drag crée un Anchor avec des Bezier handles.
- Maintenez <kbd>Space</kbd> pendant le Drag pour déplacer l’Anchor sans relâcher le Button.

Chaque Anchor supplémentaire prolonge le Path d’un Segment. Une Preview line relie le dernier Anchor au Pointer.

## Fermer un Path

Cliquez sur le premier Anchor pour fermer le Path. Un Path fermé peut recevoir un Fill.

## Path ouvert

Appuyez sur <kbd>Escape</kbd> pour terminer sans fermer. Les Paths ouverts sont affichés uniquement avec leurs Strokes.

## Vector networks

OpenPencil stocke les Vectors sous forme de Vector networks plutôt que de listes de points. Ce modèle permet les Topologies ramifiées et enregistre la géométrie dans `.fig` sans conversion.

## Continuer en Edit mode

Avec Pen tool actif :

- Click sur l’Endpoint d’un Path ouvert reprend le dessin ;
- Click sur un Segment insère un Anchor ;
- <kbd>Option</kbd>/<kbd>Alt</kbd> + Click supprime un Anchor si la Topology le permet.

Consultez [Modifier des Vectors](./vector-edit) pour l’Edit mode.

## Raccourcis

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Pen tool | <kbd>P</kbd> | <kbd>P</kbd> |
| Terminer un Path ouvert | <kbd>Escape</kbd> | <kbd>Escape</kbd> |

## Conseils

- Un Drag plus long produit des Bezier handles plus longs.
- Fill, Stroke et Effects peuvent ensuite être modifiés dans le panneau Properties.

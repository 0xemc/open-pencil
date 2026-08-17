---
title: Modifier des Vectors
description: Modifier Anchors, Bezier handles et Segments et utiliser Pen tool en Edit mode.
---

# Modifier des Vectors

Vector edit mode modifie la géométrie d’un Path : Position des Anchors, forme des Segments et Bezier handles. Il ne transforme pas l’objet entier, mais le Path lui-même.

## Ouvrir Edit mode

1. Sélectionnez un Vector object avec Select tool.
2. Faites un Double-click sur la Curve.

Appuyez sur <kbd>Escape</kbd> ou changez de contexte pour quitter.

## Comportement

- Le Transform bounding box habituel est masqué.
- Anchors, Segments et Handles peuvent être sélectionnés et modifiés.
- Les coins du Bounding box n’activent ni Resize ni Rotation.

## Opérations de base

### Déplacer un Anchor

Faites un Drag sur l’Anchor. Les Segments reliés et la forme du Path sont mis à jour pendant le Drag.

### Modifier un Bezier handle

Faites un Drag sur le Handle d’un Anchor. Le comportement dépend de sa Handle composition actuelle.

## Modifiers

| Comportement | macOS | Windows / Linux |
|---------------|-------|-----------------|
| Continuous | <kbd>Cmd</kbd> + Drag | <kbd>Ctrl</kbd> + Drag |
| Corner, Handles indépendants | <kbd>Option</kbd> + Drag | <kbd>Alt</kbd> + Drag |
| Conserver Direction, modifier seulement Length | <kbd>Shift</kbd> + Drag | <kbd>Shift</kbd> + Drag |

### Continuous

Avec <kbd>Cmd</kbd> ou <kbd>Ctrl</kbd>, l’Active handle reste aligné sur le Handle opposé. Seule sa Length change et la Curve conserve une transition fluide.

### Corner

Avec <kbd>Option</kbd> ou <kbd>Alt</kbd>, l’Active handle est modifié indépendamment. Le Handle opposé reste en place, ce qui permet de créer un Corner marqué.

### Conserver Direction

Pour les Anchors avec Composition **Continuous** ou **Symmetric**, <kbd>Shift</kbd> conserve la Direction présente avant le Drag. Seule la Length d’un ou deux Handles change selon la Composition.

## Bend par Drag de l’Anchor

Lorsqu’un Anchor est déplacé avec <kbd>Cmd</kbd> ou <kbd>Ctrl</kbd>, OpenPencil choisit le Target handle selon la Direction du Segment connecté, et non selon la distance au point voisin.

Ce comportement fonctionne aussi sur les Anchors ramifiés d’un Vector network. Une fois choisi, le même Target handle reste actif jusqu’à la fin du Drag.

## Pen tool en Edit mode

Avec Pen tool actif :

- Click sur un Segment insère un Anchor et divise le Segment ;
- Click sur l’Endpoint d’un Path ouvert reprend le dessin ;
- <kbd>Option</kbd>/<kbd>Alt</kbd> + Click supprime un Anchor si la Topology le permet.

Consultez [Pen tool](./pen-tool.md) pour créer et fermer des Paths.

## Exemple

1. Dessinez un Shape avec Pen tool.
2. Ouvrez la Curve avec un Double-click.
3. Déplacez les Anchors pour ajuster le contour.
4. Modifiez les Handles avec <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>, <kbd>Option</kbd>/<kbd>Alt</kbd> ou <kbd>Shift</kbd>.
5. Appuyez sur <kbd>Escape</kbd>.

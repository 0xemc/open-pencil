---
title: Auto layout
description: Layout Flex et Grid avec Direction, Gap, Padding, Alignment, Child sizing et Grid tracks.
---

# Auto layout

Auto layout répartit automatiquement les Children d’un Frame. Deux modes sont disponibles :

- **Flex :** Flow horizontal ou vertical ;
- **Grid :** Rows et Columns avec Tracks configurables.

## Activer Auto layout

- Sélectionnez un Frame et appuyez sur <kbd>⇧</kbd><kbd>A</kbd> pour activer ou désactiver Auto layout.
- Sélectionnez plusieurs objets libres et utilisez le même raccourci pour les envelopper dans un nouvel Auto-layout Frame.

OpenPencil trie d’abord les objets selon leur position visuelle.

## Direction

- **Horizontal :** Children de gauche à droite.
- **Vertical :** Children de haut en bas.
- **Wrap :** crée une autre ligne ou colonne lorsque l’espace manque.

## Espacement

### Gap

Gap définit la distance entre des Children adjacents.

### Padding

Padding définit la distance entre le bord du Frame et ses Children. Une valeur commune ou quatre valeurs indépendantes peuvent être utilisées.

## Alignment

### Main axis

- **Start :** Children au début de l’Axis.
- **Center :** Children centrés.
- **End :** Children à la fin.
- **Space between :** espace libre réparti entre les Children.

### Cross axis

- **Start :** au début du Cross axis.
- **Center :** au centre.
- **End :** à la fin.
- **Stretch :** occupe tout le Cross axis.

## Child sizing

- **Fixed :** utilise Width ou Height explicite ;
- **Fill :** occupe l’espace disponible ;
- **Hug :** adapte la taille au contenu.

La première modification réelle de Width ou Height fait passer uniquement cet Axis de Hug ou Fill à Fixed. Le simple Focus d’un Field ne modifie pas le Sizing mode.

## Réordonner par Drag

Les Children d’un Auto-layout Frame peuvent être déplacés parmi leurs Siblings. Un Indicator affiche la nouvelle position.

## CSS Grid

Grid répartit les Children dans des Rows et Columns avec des Track sizes explicites.

### Activer Grid

Sélectionnez un Frame avec Auto layout, puis passez de Flex à Grid dans les Layout controls.

### Track sizes

- **fr :** part proportionnelle de l’espace disponible ;
- **px :** taille fixe en pixels ;
- **auto :** taille déterminée par le contenu.

### Row gap et Column gap

Les espacements horizontal et vertical entre Cells se configurent séparément.

### Placement

Par défaut, les Children occupent les Cells libres dans l’ordre des Rows. Column start, Row start et Span se définissent dans les Layout properties du Child.

### Export JSX et Tailwind

Les Grid layouts sont exportés en JSX avec des Tailwind classes, par exemple `grid grid-cols-3`, `gap-x-4 gap-y-2` et `col-start-2 row-span-2`.

## Conseils

- Imbriquez plusieurs Auto-layout Frames pour des Layouts responsive complexes.
- Fill correspond approximativement à `flex-grow: 1` dans de nombreux Flex layouts.
- Grid convient aux Dashboards, Galeries, Formulaires et autres structures bidimensionnelles.

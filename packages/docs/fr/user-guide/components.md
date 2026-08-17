---
title: Components
description: Components réutilisables, Instances, Component sets, Overrides et Libraries dans OpenPencil.
---

# Components

Les Components sont des objets de design réutilisables. Les modifications du Main component sont automatiquement propagées à ses Instances.

## Parcourir les Components

L’onglet **Assets** du panneau gauche affiche les Components locaux et les Libraries activées. Il propose Search ainsi que les vues Grid et List. Un Component peut être inséré par Click, <kbd>Enter</kbd> ou Drag and drop. Les Library revisions téléchargées restent disponibles Offline.

## Créer un Component

Sélectionnez un Frame ou un Group et appuyez sur <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> ; sous Windows et Linux, <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>K</kbd>. OpenPencil transforme l’objet en Component.

Les Components portent un Label violet avec une Diamond icon.

## Component sets et Variants

Sélectionnez au moins deux Components et appuyez sur <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> pour créer un Component set bordé de pointillés violets.

Les Variants peuvent avoir plusieurs Dimensions, par exemple `Size=Small`, `State=Hover` et `Theme=Dark`. Toutes les combinaisons ne sont pas obligatoires. Le Variant en haut à gauche sert de Default et de Fallback lorsqu’une mise à jour ne contient plus de correspondance exacte.

Le panneau Properties permet d’ajouter, renommer, trier et supprimer les Dimensions et Values. Les combinaisons dupliquées sont refusées.

## Component properties

OpenPencil prend en charge les Properties Text, Boolean visibility et Instance swap. Une Property peut être reliée au Field d’un Child. L’Instance peut ensuite modifier ce Value sans se détacher du Main component. Definitions et Assignments sont conservés dans `.fig`.

## Libraries

Une Library publie les Components sous forme de Revisions immuables. Dans **Assets → Manage libraries → Publish library**, la première publication définit une Library ID permanente et un Name. Chaque Revision peut inclure uniquement les modifications choisies ; les autres restent en attente.

Les Libraries activées apparaissent dans Assets avec les Components locaux. Leurs Definitions sont Read-only dans le document utilisateur, tandis que les Instances et Overrides restent modifiables.

La section **Updates** compare l’Instance actuelle et la nouvelle. L’Update peut s’appliquer à une Instance, à toutes les Instances d’un Asset, à la Page actuelle ou à toutes les Pages. Les Properties compatibles sont conservées. Si un Variant manque, son Fallback est indiqué avant validation. Les Updates prennent en charge Undo et Redo.

Les Libraries peuvent être locales ou hébergées par un Storage provider configuré. OpenPencil met en cache les Revisions téléchargées. Les Bindings activés et les Definitions nécessaires sont matérialisés dans `.fig`, ce qui permet d’ouvrir le document sans accès à la Remote library.

## Créer une Instance

Faites un Right-click sur un Component et choisissez **Create instance**. La nouvelle Instance apparaît 40 px à droite du Source component.

## Detach instance

Sélectionnez une Instance et appuyez sur <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> ; sous Windows et Linux, <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>B</kbd>. Elle devient un Frame sans lien avec le Component.

## Go to main component

Faites un Right-click sur une Instance et choisissez **Go to main component**. L’éditeur change de Page si nécessaire et sélectionne le Source component.

## Synchronisation

Les modifications du Main component mettent à jour :

- Width et Height ;
- Fills, Strokes et Effects ;
- Opacity et Corner radii ;
- Layout properties ;
- Clip content.

## Overrides

Une Instance peut remplacer certaines Properties sans perdre sa connexion. Ces Values sont conservés lors de la synchronisation.

Name, Text, Font size, Font style, Font family ainsi que les Properties visuelles et de Layout peuvent être remplacés.

Lorsqu’un Child est ajouté au Main component, OpenPencil ajoute le Child correspondant aux Instances.

## Selection

Components et Instances se comportent comme des conteneurs fermés. Un Click sélectionne le conteneur ; un Double-click permet d’entrer et de sélectionner un Child.

## Apparence

| Élément | Apparence |
|---------|-----------|
| Component label | Violet avec Diamond icon |
| Instance label | Violet avec Diamond icon |
| Bordure du Component set | Violette et en pointillés |

## Raccourcis

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Create component | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>K</kbd> |
| Create component set | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>K</kbd> |
| Detach instance | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>B</kbd> |

## Conseils

- Modifier du Text dans une Instance crée un Override.
- Les Component sets conviennent aux Variants, par exemple les States d’un Button.
- Faites un Double-click avant de modifier un Child d’un Component.

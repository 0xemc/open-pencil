---
title: Modifier le texte
description: Créer et modifier du texte directement sur le canvas, appliquer du Formatting et gérer les Fonts.
---

# Modifier le texte

OpenPencil crée des objets texte et permet de les modifier directement sur le canvas avec Rich text.

## Créer du texte

Appuyez sur <kbd>T</kbd> puis cliquez sur le canvas. Un objet texte vide apparaît avec le Caret actif.

## Edit mode

Double-click sur un objet texte ouvre l’Edit mode. Un Outline bleu l’indique. Cliquez à l’extérieur pour appliquer la modification et quitter.

Le texte est rendu sur le canvas sans Input overlay séparé.

## Déplacer le Caret

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Caractère précédent/suivant | <kbd>←</kbd>/<kbd>→</kbd> | <kbd>←</kbd>/<kbd>→</kbd> |
| Ligne précédente/suivante | <kbd>↑</kbd>/<kbd>↓</kbd> | <kbd>↑</kbd>/<kbd>↓</kbd> |
| Mot précédent/suivant | <kbd>⌥</kbd><kbd>←</kbd>/<kbd>⌥</kbd><kbd>→</kbd> | <kbd>Ctrl</kbd><kbd>←</kbd>/<kbd>Ctrl</kbd><kbd>→</kbd> |
| Début/fin de ligne | <kbd>⌘</kbd><kbd>←</kbd>/<kbd>⌘</kbd><kbd>→</kbd> | <kbd>Home</kbd>/<kbd>End</kbd> |

Maintenez <kbd>Shift</kbd> pour étendre la Selection.

## Sélectionner le texte

- Click place le Caret.
- Drag sélectionne une plage.
- Double-click sélectionne un mot.
- Triple-click sélectionne tout le texte.

## Formatting

Le Formatting s’applique à la Selection de texte. Sans plage sélectionnée, il change le Style de l’objet entier.

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Bold | <kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd><kbd>B</kbd> |
| Italic | <kbd>⌘</kbd><kbd>I</kbd> | <kbd>Ctrl</kbd><kbd>I</kbd> |
| Underline | <kbd>⌘</kbd><kbd>U</kbd> | <kbd>Ctrl</kbd><kbd>U</kbd> |

Strikethrough est disponible avec le Button **S** de Typography. Il n’a pas de raccourci car <kbd>⌘</kbd><kbd>S</kbd> correspond à Save. Les Buttons **B / I / U / S** modifient également le Formatting.

Le Style est stocké par caractère. Un nouveau texte saisi entre deux plages de Styles différents reprend le Style de la plage précédente.

## Opérations d’édition

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Supprimer le mot précédent | <kbd>⌥</kbd><kbd>⌫</kbd> | <kbd>Ctrl</kbd> + Backspace |
| Supprimer jusqu’au début de ligne | <kbd>⌘</kbd><kbd>⌫</kbd> | — |
| Cut | <kbd>⌘</kbd><kbd>X</kbd> | <kbd>Ctrl</kbd><kbd>X</kbd> |
| Copy | <kbd>⌘</kbd><kbd>C</kbd> | <kbd>Ctrl</kbd><kbd>C</kbd> |
| Paste | <kbd>⌘</kbd><kbd>V</kbd> | <kbd>Ctrl</kbd><kbd>V</kbd> |

## Font picker

Le Font picker de Typography permet de :

- filtrer par Name ;
- afficher chaque Family avec son propre Font ;
- parcourir de longues listes avec Virtual scroll ;
- se positionner sur le Font actuel à l’ouverture.

## Font style

Les Styles disponibles dépendent de la Family, par exemple Regular, Medium, Bold ou Black.

## Sources de Fonts

- **Par défaut :** Inter est chargé automatiquement.
- **Application de bureau :** System fonts et catalogues activés Google Fonts, Fontsource, Bunny Fonts et Fontshare.
- **Browser :** Chrome et Edge donnent accès aux System fonts ; les catalogues en ligne nécessitent l’application de bureau.
- **Fonts téléchargés :** l’application conserve les Faces téléchargées sur le même appareil.

## Fonts manquants

Si une Family ou un Style ne peut pas être chargé, OpenPencil affiche un avertissement au-dessus de l’éditeur au lieu de présenter le Fallback comme fidèle au design.

Dépliez l’avertissement pour voir les Faces concernées et leurs remplacements. **Select layers** localise les objets texte. **Retry fonts** lance une nouvelle tentative après modification de l’accès réseau, des autorisations de Fonts locales ou des réglages des Providers.

Si un Style manque, OpenPencil peut le synthétiser à partir d’une autre Face chargée de la même Family. Si la Family entière manque, Inter sert de Fallback lorsqu’il est disponible.

## Conseils

- La liste des Fonts est préchargée au démarrage.
- Les IME chinois, japonais et coréens sont pris en charge.
- Le Rich-text formatting est conservé lors de l’ouverture et de l’enregistrement des fichiers `.fig`.
- Consultez [Components](./components) pour les Text overrides dans les Instances.

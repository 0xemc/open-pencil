---
title: Export
description: Exporter la Selection en PNG, JPG, WEBP ou SVG et ouvrir ou enregistrer des fichiers `.fig`.
---

# Export

OpenPencil exporte des objets en Images ou SVG et enregistre les documents complets au format `.fig`.

## Images et SVG

Sélectionnez un objet et ouvrez la section Export du panneau Properties.

### Réglages

- **Scale :** de 0,5× à 4× ; masquée pour SVG, indépendant de la résolution ;
- **Format :** PNG avec Background transparent, JPG avec Background blanc, WEBP avec Background transparent ou SVG ;
- plusieurs Export settings par objet ;
- Live preview sur un Checkerboard background.

### Lancer l’Export

| Méthode | macOS | Windows / Linux |
|---------|-------|-----------------|
| Raccourci | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>E</kbd> |
| Menu contextuel | Right-click → Export… | Right-click → Export… |
| Panneau Properties | Button Export | Button Export |

## Copy as

Le menu contextuel peut écrire la Selection dans le Clipboard :

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Copy as text | — | — |
| Copy as SVG | — | — |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>C</kbd> |
| Copy as JSX | — | — |

## Fichiers `.fig`

OpenPencil utilise le format de Figma. Les fichiers enregistrés sont compressés et contiennent une Thumbnail.

### Ouvrir et enregistrer

| Action | macOS | Windows / Linux |
|--------|-------|-----------------|
| Open file | <kbd>⌘</kbd><kbd>O</kbd> | <kbd>Ctrl</kbd><kbd>O</kbd> |
| Save | <kbd>⌘</kbd><kbd>S</kbd> | <kbd>Ctrl</kbd><kbd>S</kbd> |
| Save As | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>S</kbd> |

**Save** remplace le fichier actuel si OpenPencil dispose encore de l’autorisation d’écriture. **Save As** ouvre une boîte de dialogue pour choisir un autre chemin.

Dans le Browser, OpenPencil utilise File System Access API lorsqu’elle est disponible dans Chrome et Edge. Les autres Browsers, dont Safari, téléchargent le fichier.

### Compatibilité

Les fichiers `.fig` exportés peuvent être rouverts dans OpenPencil et Figma. OpenPencil importe également les fichiers créés par Figma.

## Conseils

- Utilisez une Scale de 2× ou 3× pour les écrans haute résolution.
- JPG utilise toujours un Background blanc ; choisissez PNG ou WEBP pour conserver Transparency.
- SVG convient à la poursuite de l’édition dans des Code editors ou Vector tools.

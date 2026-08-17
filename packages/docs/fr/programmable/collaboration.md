---
title: Collaboration
description: Édition simultanée en P2P via WebRTC, sans serveur central.
---

# Collaboration

Plusieurs personnes peuvent modifier le même document. Les Peers se connectent directement via WebRTC et aucun compte n’est requis.

## Partager un Room

1. Ouvrez le Share button en haut à droite.
2. Copiez le lien `app.openpencil.dev/share/<room-id>`.
3. Envoyez-le aux autres participants.

Toute personne disposant du lien peut entrer. Le Room reste accessible tant qu’au moins un participant conserve la Page ouverte.

## Données synchronisées

- **Document :** changements de Shapes, Text, Properties et Layout ;
- **Cursors :** Position, Name et Color de chaque participant ;
- **Selections :** objets sélectionnés par les autres Peers.

## Follow mode

Cliquez sur un Avatar de la barre supérieure pour suivre le Viewport de ce Peer. Pan et Zoom s’adaptent à sa vue. Un autre Click arrête Follow mode.

## Fonctionnement

WebRTC transmet les données de design directement entre les Peers. Aucun Application server central ne relaie les modifications du document.

Yjs synchronise le State sous forme de CRDT et fusionne automatiquement les changements simultanés. IndexedDB stocke l’état local afin qu’un Reload du même Room puisse le restaurer.

## Conseils

- Collaboration fonctionne dans le Browser et l’application de bureau.
- Les Room IDs utilisent des valeurs aléatoires cryptographiquement sûres. Seules les personnes connaissant le lien peuvent entrer.
- Les Cursors et Presence entries des Peers déconnectés sont supprimés automatiquement.

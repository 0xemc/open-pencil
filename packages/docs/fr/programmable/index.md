---
layout: doc
title: IA et automatisation
description: Automatiser OpenPencil avec AI Chat, la CLI, JSX, MCP et les APIs.
---

# IA et automatisation

OpenPencil traite les fichiers de design comme des données structurées. Les opérations de l’éditeur — créer des Shapes, modifier des Fills, configurer Auto layout ou exporter des Assets — sont aussi disponibles depuis la CLI, des AI agents et les APIs.

L’interface et l’automatisation utilisent le même Core. Une opération se comporte donc de la même façon depuis l’UI, un Script ou un Agent.

## AI Chat

L’Assistant intégré exécute plus de 90 Tools. Une instruction peut modifier les Shadows de plusieurs Buttons, créer un Component avec un Dark variant ou exporter tous les Frames d’une Page à une Scale de 2×.

[AI Chat →](./ai-chat)

## Collaboration

OpenPencil synchronise les documents en P2P via WebRTC. Un Room link suffit ; aucun compte ou serveur central n’est nécessaire. Live cursors et Follow mode affichent les autres participants. Yjs CRDT fusionne les modifications simultanées.

[Collaboration →](./collaboration)

## JSX renderer

Une UI peut être décrite de manière déclarative en JSX. Un seul appel crée un Tree complet de Frames, Text, Auto layout, Fills et Strokes.

Dans l’autre sens, OpenPencil exporte une Selection en JSX ou en HTML avec des Tailwind classes. Le résultat sert de base à une Implementation, une Code review ou une étape AI supplémentaire.

[JSX renderer →](./jsx-renderer)

## CLI

La CLI examine, exporte et analyse les fichiers `.fig` sans ouvrir l’éditeur. Elle liste Pages et Nodes, recherche des objets, extrait des Design tokens et rend du PNG. JSON output est disponible pour l’automatisation.

Via RPC, elle peut aussi contrôler le document ouvert dans l’application de bureau.

[Examiner des fichiers](./cli/inspecting) · [Export](./cli/exporting) · [Analyser des designs](./cli/analyzing) · [Scripts](./cli/scripting)

## Serveur MCP

Claude Code, Cursor, Windsurf et les autres MCP clients peuvent utiliser les mêmes 90 Tools qu’AI Chat. Le serveur prend en charge stdio et HTTP avec Sessions.

[Serveur MCP →](/programmable/mcp-server)

## Plateforme ouverte

OpenPencil est publié sous licence MIT, stocke les documents localement et fournit un accès programmatique à ses opérations. Les fichiers `.fig` peuvent être examinés, transformés, traités dans la CI ou fournis comme Context à un LLM sans dépendre d’un Hosting provider particulier.

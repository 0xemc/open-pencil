---
layout: doc
title: AI und Automatisierung
description: OpenPencil über AI Chat, CLI, JSX, MCP und APIs automatisieren.
---

# AI und Automatisierung

OpenPencil behandelt Designdateien als strukturierte Daten. Operationen aus dem Editor — Shapes erstellen, Fills ändern, Auto Layout konfigurieren oder Assets exportieren — stehen auch über CLI, AI agents und APIs zur Verfügung.

Editor und Automatisierung verwenden denselben Core. Eine Operation verhält sich deshalb unabhängig davon gleich, ob sie über die UI, ein Script oder einen Agent ausgelöst wird.

## AI Chat

Der integrierte Assistant kann mehr als 90 Tools ausführen. Eine Anweisung kann beispielsweise Shadows an mehreren Buttons ändern, einen Component mit Dark variant erstellen oder alle Frames einer Seite mit Scale 2× exportieren.

[AI Chat →](./ai-chat)

## Collaboration

OpenPencil synchronisiert Dokumente P2P über WebRTC. Ein geteilter Room link genügt; ein zentraler Server und ein Konto sind nicht erforderlich. Live cursors und Follow mode zeigen die anderen Teilnehmer. Yjs CRDT führt gleichzeitige Änderungen zusammen.

[Collaboration →](./collaboration)

## JSX renderer

UI kann deklarativ als JSX beschrieben werden. Ein einzelner Aufruf erstellt einen vollständigen Tree aus Frames, Text, Auto Layout, Fills und Strokes.

In der Gegenrichtung exportiert OpenPencil eine Selection als JSX oder als HTML mit Tailwind classes. Das Ergebnis kann als Ausgangspunkt für Implementation, Code review oder einen weiteren AI-Schritt dienen.

[JSX renderer →](./jsx-renderer)

## CLI

Die CLI untersucht, exportiert und analysiert `.fig`-Dateien ohne geöffneten Editor. Sie listet Pages und Nodes auf, sucht Objekte, extrahiert Design tokens und rendert PNG. Für automatisierte Verarbeitung steht JSON output zur Verfügung.

Über RPC kann die CLI außerdem den laufenden Desktop-Editor steuern.

[Dateien untersuchen](./cli/inspecting) · [Export](./cli/exporting) · [Designs analysieren](./cli/analyzing) · [Scripts](./cli/scripting)

## MCP-Server

Claude Code, Cursor, Windsurf und andere MCP clients können dieselben 90 Tools verwenden wie der integrierte AI Chat. Der Server unterstützt stdio und HTTP mit Sessions.

[MCP-Server →](/programmable/mcp-server)

## Offene Plattform

OpenPencil ist unter der MIT-Lizenz verfügbar, speichert Dokumente lokal und macht seine Operationen programmatisch zugänglich. `.fig`-Dateien können untersucht, transformiert, in CI verarbeitet oder als Context an ein LLM übergeben werden, ohne an einen bestimmten Hosting provider gebunden zu sein.

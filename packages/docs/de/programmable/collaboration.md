---
title: Collaboration
description: Gemeinsame Bearbeitung in Echtzeit über P2P WebRTC ohne zentralen Server.
---

# Collaboration

Mehrere Personen können dasselbe Dokument gleichzeitig bearbeiten. Die Peers verbinden sich direkt über WebRTC; ein Konto ist nicht erforderlich.

## Room teilen

1. Share button oben rechts öffnen.
2. Den erzeugten Link `app.openpencil.dev/share/<room-id>` kopieren.
3. Link an die anderen Teilnehmer senden.

Jede Person mit dem Link kann beitreten. Der Room bleibt erreichbar, solange mindestens ein Teilnehmer die Seite geöffnet hat.

## Synchronisierte Daten

- **Dokument:** Änderungen an Shapes, Text, Properties und Layout;
- **Cursors:** Position, Name und Color jedes Teilnehmers;
- **Selections:** ausgewählte Objekte der anderen Peers.

## Follow mode

Click auf einen Avatar in der oberen Leiste folgt dem Viewport dieses Peer. Pan und Zoom werden an dessen Ansicht angepasst. Ein weiterer Click beendet Follow mode.

## Technische Grundlage

WebRTC überträgt die Designdaten direkt zwischen den Peers. Ein zentraler Application server leitet die Dokumentänderungen nicht weiter.

Der Dokumentzustand wird mit Yjs als CRDT synchronisiert. Gleichzeitige Änderungen werden dadurch automatisch zusammengeführt. IndexedDB speichert den lokalen Stand, sodass ein Reload desselben Room den vorhandenen Zustand wiederherstellen kann.

## Hinweise

- Collaboration funktioniert im Browser und in der Desktop-App.
- Room IDs werden mit kryptografisch sicheren Zufallswerten erzeugt. Zugang hat nur, wer den Link kennt.
- Cursors und Presence entries getrennter Peers werden automatisch entfernt.

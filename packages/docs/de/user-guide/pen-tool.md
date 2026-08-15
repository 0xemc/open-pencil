---
title: Pen tool
description: Vector paths und Bezier curves mit dem Pen tool zeichnen.
---

# Pen tool

Das Pen tool erstellt Vector paths auf Grundlage des mit Figma kompatiblen Vector-network-Modells.

## Aktivieren

<kbd>P</kbd> drücken, um das Pen tool auszuwählen.

## Anchors setzen

- Click setzt einen Corner anchor und erzeugt ein gerades Segment.
- Click und Drag setzt einen Anchor mit Bezier handles.
- Während des Drag <kbd>Space</kbd> gedrückt halten, um den Anchor selbst zu verschieben, ohne die Maustaste loszulassen.

Weitere Anchors bauen den Path Segment für Segment auf. Eine Preview line führt vom letzten Anchor zum Pointer.

## Path schließen

Auf den ersten Anchor klicken, um den Path zu schließen. Ein geschlossener Path kann einen Fill besitzen.

## Offener Path

<kbd>Escape</kbd> beendet den aktuellen Path, ohne ihn zu schließen. Offene Paths werden nur über ihre Strokes dargestellt.

## Vector networks

OpenPencil speichert Vectors nicht als einfache Liste von Punkten, sondern als Vector network. Dadurch sind verzweigte Topologies möglich und die Geometrie kann ohne Umwandlung im `.fig`-Format gespeichert werden.

## Im Edit mode fortsetzen

Ein Endpoint eines offenen Path kann mit aktivem Pen tool angeklickt werden, um dort weiterzuzeichnen. Click auf ein Segment fügt einen Anchor ein. <kbd>Option</kbd> beziehungsweise <kbd>Alt</kbd> + Click entfernt einen Anchor, sofern die Topology dies erlaubt.

Weitere Informationen: [Vektoren bearbeiten](./vector-edit).

## Shortcuts

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Pen tool | <kbd>P</kbd> | <kbd>P</kbd> |
| Offenen Path beenden | <kbd>Escape</kbd> | <kbd>Escape</kbd> |

## Hinweise

- Je weiter beim Setzen eines Anchor gezogen wird, desto länger werden die Bezier handles.
- Fill, Stroke und Effects lassen sich anschließend im Properties-Panel ändern.

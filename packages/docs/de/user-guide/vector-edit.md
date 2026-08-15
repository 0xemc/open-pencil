---
title: Vektoren bearbeiten
description: Anchors, Bezier handles und Segments bearbeiten und das Pen tool im Edit mode verwenden.
---

# Vektoren bearbeiten

Im Vector edit mode wird die Geometrie eines Path verändert: Position der Anchors, Form der Segments und Bezier handles. Transformationen des gesamten Objekts stehen in diesem Modus nicht im Vordergrund.

## Edit mode starten

1. Vector object mit dem Select tool auswählen.
2. Die Curve per Double-click öffnen.

<kbd>Escape</kbd> beendet den Edit mode. Auch der Wechsel in einen anderen Bearbeitungskontext beendet ihn.

## Verhalten im Edit mode

- Die gewöhnliche Transform bounding box wird ausgeblendet.
- Anchors, Segments und Handles können ausgewählt und verändert werden.
- An den Ecken der Bounding box erscheint kein Resize- oder Rotation cursor.

## Grundlagen

### Anchor verschieben

Anchor per Drag verschieben. Die verbundenen Segments und die Form des Path werden während des Drag aktualisiert.

### Bezier handle ändern

Handle an einem Anchor ziehen. Das Verhalten hängt vom aktuellen Handle composition des Anchor ab.

## Modifier für Handles

| Verhalten | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Continuous | <kbd>Cmd</kbd> + Drag | <kbd>Strg</kbd> + Drag |
| Corner, unabhängige Handles | <kbd>Option</kbd> + Drag | <kbd>Alt</kbd> + Drag |
| Richtung beibehalten, nur Länge ändern | <kbd>Shift</kbd> + Drag | <kbd>Shift</kbd> + Drag |

### Continuous

Mit <kbd>Cmd</kbd> beziehungsweise <kbd>Strg</kbd> bleibt der aktive Handle auf derselben Linie wie der gegenüberliegende. Nur seine Länge ändert sich. Dadurch bleibt der Übergang ohne scharfen Corner glatt.

### Corner

Mit <kbd>Option</kbd> beziehungsweise <kbd>Alt</kbd> wird der aktive Handle unabhängig verändert. Der gegenüberliegende Handle bleibt an seiner Position. So entsteht ein scharfer Übergang.

### Richtung beibehalten

Bei Anchors mit **Continuous** oder **Symmetric** composition sperrt <kbd>Shift</kbd> die Richtung, die vor Beginn des aktuellen Drag bestand. Abhängig von der Composition ändert sich nur die Länge eines oder beider Handles.

## Bend durch Drag am Anchor

Wird ein Anchor mit gedrücktem <kbd>Cmd</kbd> beziehungsweise <kbd>Strg</kbd> gezogen, bestimmt OpenPencil den Target handle anhand der Richtung des angeschlossenen Segment, nicht anhand der Entfernung zum nächsten Punkt.

Dies funktioniert auch an verzweigten Anchors eines Vector network. Nach der Auswahl bleibt derselbe Target handle bis zum Ende des Drag aktiv.

## Pen tool im Edit mode

Bei aktivem Pen tool:

- Click auf ein Segment fügt einen Anchor ein und teilt das Segment;
- Click auf den Endpoint eines offenen Path setzt das Zeichnen dort fort;
- <kbd>Option</kbd>/<kbd>Alt</kbd> + Click auf einen Anchor entfernt ihn, sofern die Topology dies erlaubt.

Das Erstellen und Schließen von Paths wird unter [Pen tool](./pen-tool.md) beschrieben.

## Beispiel

1. Shape mit dem Pen tool zeichnen.
2. Curve per Double-click öffnen.
3. Anchors verschieben, um die Kontur anzupassen.
4. Handles mit <kbd>Cmd</kbd>/<kbd>Strg</kbd>, <kbd>Option</kbd>/<kbd>Alt</kbd> oder <kbd>Shift</kbd> verändern.
5. Edit mode mit <kbd>Escape</kbd> beenden.

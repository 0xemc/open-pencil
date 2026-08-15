---
title: Components
description: Wiederverwendbare Components, Instances, Component sets, Overrides und Libraries in OpenPencil.
---

# Components

Components sind wiederverwendbare Design objects. Änderungen am Main component werden automatisch an seine Instances weitergegeben.

## Components finden

Der Tab **Assets** im linken Panel zeigt lokale Components und aktivierte Libraries. Die Liste unterstützt Search sowie Grid und List view. Ein Component lässt sich per Click, <kbd>Enter</kbd> oder Drag and drop einfügen. Heruntergeladene Library revisions bleiben offline verfügbar.

## Component erstellen

Frame oder Group auswählen und <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> drücken; unter Windows und Linux <kbd>Strg</kbd><kbd>Alt</kbd><kbd>K</kbd>. OpenPencil wandelt das Objekt in einen Component um.

Components sind durch ein violettes Label mit Diamond icon gekennzeichnet.

## Component sets und Variants

Mindestens zwei Components auswählen und <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> drücken, um daraus einen Component set zu erstellen. Der Container besitzt einen gestrichelten violetten Rand.

Variants können mehrere Dimensions enthalten, zum Beispiel `Size=Small`, `State=Hover` und `Theme=Dark`. Nicht jede Kombination muss vorhanden sein. Der Variant oben links ist der Default und dient als Fallback, falls nach einem Update keine exakte Kombination mehr existiert.

Im Properties-Panel können Dimensions und Values hinzugefügt, umbenannt, sortiert und entfernt werden. Doppelte Kombinationen sind nicht zulässig.

## Component properties

OpenPencil unterstützt Text, Boolean visibility und Instance swap properties. Eine Property kann mit einem Feld eines Child verbunden werden. Danach lässt sich der Wert in einer Instance ändern, ohne sie vom Main component zu trennen. Definitions und Assignments bleiben in `.fig`-Dateien erhalten.

## Libraries

Eine Library veröffentlicht Components als unveränderliche Revisions. Unter **Assets → Libraries verwalten → Library veröffentlichen** werden beim ersten Publish eine dauerhafte Library ID und ein Name festgelegt. Anschließend können einzelne Änderungen für die Revision ausgewählt werden; nicht veröffentlichte Änderungen bleiben für einen späteren Publish offen.

Aktivierte Libraries erscheinen im Tab Assets neben lokalen Components. Veröffentlichte Definitions sind im verwendenden Dokument read-only. Instances und ihre Overrides bleiben editierbar.

Der Bereich **Updates** zeigt aktuelle und neue Instance nebeneinander. Updates können auf eine Instance, alle Instances eines Asset, die aktuelle Seite oder alle Seiten angewendet werden. Kompatible Properties bleiben erhalten. Wenn ein Variant fehlt, wird vor der Bestätigung der verwendete Fallback angezeigt. Auch Library updates unterstützen Undo und Redo.

Libraries können lokal oder bei einem konfigurierten Storage provider liegen. OpenPencil speichert heruntergeladene Revisions lokal. Aktivierte Bindings und benötigte Definitions werden in `.fig` materialisiert, sodass ein Dokument auch ohne Verbindung zur Remote library geöffnet werden kann.

## Instance erstellen

Component per Right-click öffnen und **Create instance** wählen. Die neue Instance erscheint 40 px rechts vom Source component.

## Instance lösen

Instance auswählen und <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> drücken; unter Windows und Linux <kbd>Strg</kbd><kbd>Alt</kbd><kbd>B</kbd>. Die Instance wird zu einem gewöhnlichen Frame ohne Verbindung zum Component.

## Zum Main component wechseln

Instance per Right-click öffnen und **Go to main component** wählen. Der Editor wechselt bei Bedarf auf eine andere Seite und wählt den Source component aus.

## Synchronisierung

Änderungen am Main component aktualisieren seine Instances. Dazu gehören:

- Width und Height;
- Fills, Strokes und Effects;
- Opacity und Corner radii;
- Layout properties;
- Clip content.

## Overrides

Eine Instance kann einzelne Properties überschreiben, ohne ihre Verbindung zum Component zu verlieren. Diese Werte werden bei der Synchronisierung beibehalten.

Zu den möglichen Overrides zählen Name, Text, Font size, Font style, Font family sowie visuelle und Layout properties.

Wird dem Main component ein Child hinzugefügt, ergänzt OpenPencil den entsprechenden Child auch in den Instances.

## Selection

Components und Instances verhalten sich als geschlossene Container. Ein Click wählt den Container. Per Double-click kann in den Container gewechselt und ein Child ausgewählt werden.

## Darstellung

| Element | Darstellung |
|---------|------------|
| Component label | Violett mit Diamond icon |
| Instance label | Violett mit Diamond icon |
| Component-set border | Gestrichelt und violett |

## Shortcuts

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Component erstellen | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Strg</kbd><kbd>Alt</kbd><kbd>K</kbd> |
| Component set erstellen | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Shift</kbd><kbd>Strg</kbd><kbd>K</kbd> |
| Instance lösen | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> | <kbd>Strg</kbd><kbd>Alt</kbd><kbd>B</kbd> |

## Hinweise

- Das Bearbeiten von Text in einer Instance erzeugt einen Override.
- Component sets eignen sich für Variants, etwa verschiedene States eines Button.
- Vor dem Bearbeiten eines Child per Double-click in den Component wechseln.

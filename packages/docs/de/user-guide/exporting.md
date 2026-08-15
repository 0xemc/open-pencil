---
title: Export
description: Selection als PNG, JPG, WEBP oder SVG exportieren und `.fig`-Dateien öffnen und speichern.
---

# Export

Einzelne Objekte können als Bild oder SVG exportiert werden. Vollständige Dokumente lassen sich im `.fig`-Format öffnen und speichern.

## Bilder und SVG

Objekt auswählen und im Properties-Panel den Bereich Export öffnen.

### Einstellungen

- **Scale:** 0,5× bis 4×; bei SVG ausgeblendet, da das Format resolution-independent ist;
- **Format:** PNG mit transparentem Background, JPG mit weißem Background, WEBP mit transparentem Background oder SVG;
- mehrere Export settings pro Objekt;
- Live preview auf einem Checkerboard background.

### Export starten

| Methode | macOS | Windows / Linux |
|---------|-------|-----------------|
| Shortcut | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd> | <kbd>Shift</kbd><kbd>Strg</kbd><kbd>E</kbd> |
| Kontextmenü | Right-click → Export… | Right-click → Export… |
| Properties-Panel | Export button | Export button |

## Copy as

Das Kontextmenü kann die Selection in verschiedenen Formaten in das Clipboard schreiben:

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Copy as text | — | — |
| Copy as SVG | — | — |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd><kbd>Strg</kbd><kbd>C</kbd> |
| Copy as JSX | — | — |

## `.fig`-Dateien

OpenPencil verwendet das Dateiformat von Figma. Gespeicherte Dateien sind komprimiert und enthalten eine Thumbnail.

### Öffnen

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Open file | <kbd>⌘</kbd><kbd>O</kbd> | <kbd>Strg</kbd><kbd>O</kbd> |

### Speichern

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Save | <kbd>⌘</kbd><kbd>S</kbd> | <kbd>Strg</kbd><kbd>S</kbd> |
| Save As | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd> | <kbd>Shift</kbd><kbd>Strg</kbd><kbd>S</kbd> |

**Save** überschreibt die aktuelle Datei, sofern OpenPencil weiterhin Schreibzugriff besitzt. **Save As** öffnet einen Dialog zur Wahl eines neuen Pfads.

Im Browser verwendet OpenPencil nach Möglichkeit die File System Access API von Chrome und Edge. Andere Browser, darunter Safari, laden die Datei stattdessen herunter.

### Kompatibilität

Von OpenPencil exportierte `.fig`-Dateien können wieder in OpenPencil und in Figma geöffnet werden. Umgekehrt importiert OpenPencil Dateien aus Figma.

## Hinweise

- Scale 2× oder 3× eignet sich für hochauflösende Displays.
- JPG verwendet immer einen weißen Background. Für Transparency PNG oder WEBP wählen.
- SVG eignet sich für weitere Bearbeitung in Code-Editoren und Vector tools.

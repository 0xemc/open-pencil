---
title: Text bearbeiten
description: Text auf dem Canvas erstellen, auswählen und formatieren sowie Fonts verwalten.
---

# Text bearbeiten

Text wird direkt auf dem Canvas erstellt und bearbeitet. Unterschiedliche Zeichenbereiche können eigene Styles besitzen.

## Text erstellen

<kbd>T</kbd> drücken und auf den Canvas klicken. OpenPencil erstellt ein leeres Text object und aktiviert sofort den Caret.

## Edit mode

Ein vorhandenes Text object per Double-click öffnen. Ein blauer Outline kennzeichnet den Edit mode. Ein Click außerhalb beendet die Bearbeitung.

## Caret bewegen

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Zeichenweise | <kbd>←</kbd>/<kbd>→</kbd> | <kbd>←</kbd>/<kbd>→</kbd> |
| Zeilenweise | <kbd>↑</kbd>/<kbd>↓</kbd> | <kbd>↑</kbd>/<kbd>↓</kbd> |
| Wortweise | <kbd>⌥</kbd><kbd>←</kbd>/<kbd>⌥</kbd><kbd>→</kbd> | <kbd>Strg</kbd><kbd>←</kbd>/<kbd>Strg</kbd><kbd>→</kbd> |
| Zeilenanfang oder -ende | <kbd>⌘</kbd><kbd>←</kbd>/<kbd>⌘</kbd><kbd>→</kbd> | <kbd>Pos1</kbd>/<kbd>Ende</kbd> |

Mit <kbd>Shift</kbd> wird die Selection bei jeder Bewegung erweitert.

## Text auswählen

- Click positioniert den Caret;
- Drag markiert einen Textbereich;
- Double-click wählt ein Wort;
- Triple-click wählt den gesamten Text.

## Formatting

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Bold | <kbd>⌘</kbd><kbd>B</kbd> | <kbd>Strg</kbd><kbd>B</kbd> |
| Italic | <kbd>⌘</kbd><kbd>I</kbd> | <kbd>Strg</kbd><kbd>I</kbd> |
| Underline | <kbd>⌘</kbd><kbd>U</kbd> | <kbd>Strg</kbd><kbd>U</kbd> |

Strikethrough ist über den Button **S** im Bereich Typography verfügbar.

## Bearbeitungsbefehle

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Vorheriges Wort löschen | <kbd>⌥</kbd><kbd>⌫</kbd> | <kbd>Strg</kbd> + Backspace |
| Bis zum Zeilenanfang löschen | <kbd>⌘</kbd><kbd>⌫</kbd> | — |
| Cut | <kbd>⌘</kbd><kbd>X</kbd> | <kbd>Strg</kbd><kbd>X</kbd> |
| Copy | <kbd>⌘</kbd><kbd>C</kbd> | <kbd>Strg</kbd><kbd>C</kbd> |
| Paste | <kbd>⌘</kbd><kbd>V</kbd> | <kbd>Strg</kbd><kbd>V</kbd> |

## Font picker

Der Font picker im Bereich Typography unterstützt Suche, Preview und Virtual scrolling.

## Font-Quellen

- **Standard:** Inter wird automatisch geladen.
- **Desktop:** System fonts sowie aktivierte Kataloge von Google Fonts, Fontsource, Bunny Fonts und Fontshare.
- **Browser:** Chrome und Edge können System fonts verwenden; Online-Kataloge setzen die Desktop-App voraus.
- **Heruntergeladene Fonts:** Die Desktop-App speichert geladene Font styles zur weiteren Verwendung auf demselben Gerät.

## Fehlende Fonts

Kann eine angeforderte Font family oder ein Font style nicht geladen werden, zeigt OpenPencil oberhalb des Editors eine Warnung. Die Ersatzdarstellung wird nicht als originalgetreu ausgegeben.

Die aufgeklappte Warnung nennt alle betroffenen Font styles und deren aktuelle Fallbacks. **Layers auswählen** markiert die betreffenden Text objects. **Fonts neu laden** startet nach Änderungen an Netzwerk, lokalen Berechtigungen oder Provider settings einen weiteren Versuch.

Fehlt nur ein Style, kann OpenPencil ihn aus einem anderen geladenen Style derselben Family ableiten. Fehlt die gesamte Family, dient nach Möglichkeit Inter als Fallback.

## Hinweise

- IME für Chinesisch, Japanisch und Koreanisch wird unterstützt.
- Rich-text formatting bleibt beim Import und Export von `.fig`-Dateien erhalten.

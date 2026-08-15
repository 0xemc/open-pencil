---
title: Layers und Pages
description: Layers, Pages und das Properties-Panel in OpenPencil verwenden.
---

# Layers und Pages

Die Editoroberfläche besteht aus dem Layers-Panel links, dem Canvas in der Mitte und dem Properties-Panel rechts. Die Breite der Seitenpanels lässt sich an den Trennlinien ändern.

## Layers-Panel

Das Layers-Panel zeigt die Hierarchie des Dokuments als Tree.

### Hierarchie

Frames, Groups und Components können über den Pfeil neben ihrem Namen auf- und zugeklappt werden. Darunter erscheinen ihre Children.

### Reihenfolge und Parent ändern

Eine Layer kann per Drag an eine andere Position verschoben oder in einen anderen Container gelegt werden. Weiter oben aufgeführte Layers werden vor den darunterliegenden gerendert.

### Visibility

Das Eye icon neben einer Layer schaltet ihre Sichtbarkeit auf dem Canvas um.

### Name ändern

Double-click auf einen Layer name aktiviert ein Textfeld. <kbd>Enter</kbd> oder Click außerhalb übernimmt den Namen, <kbd>Escape</kbd> verwirft die Änderung.

### Selection

Click auf eine Layer wählt das entsprechende Objekt auf dem Canvas. Eine Selection auf dem Canvas wird umgekehrt auch im Tree markiert.

## Pages

Das Pages-Panel listet alle Seiten des Dokuments auf.

- Click auf eine Seite wechselt dorthin.
- Der Add button erstellt eine Seite.
- Delete entfernt die aktuelle Seite.
- Double-click auf den Seitennamen startet die Umbenennung.

Jede Seite besitzt einen eigenen Canvas background und Viewport state.

## Properties-Panel

Das rechte Panel enthält drei Tabs.

### Design

Properties der aktuellen Selection, gegliedert in:

- **Appearance:** Opacity, Corner radius und Visibility;
- **Fill:** Solid colors, Gradients, Images und Variable bindings;
- **Stroke:** Color, Weight, Alignment, Cap, Join und Dash;
- **Effects:** Drop shadow, Inner shadow und Blur;
- **Typography:** Font family, Style, Size und B/I/U/S buttons;
- **Layout:** Einstellungen für [Auto Layout](./auto-layout);
- **Export:** Scale, Format und Export action.

### Code

Zeigt die aktuelle Selection als JSX mit Syntax highlighting und bietet außerdem den Export als HTML mit Tailwind CSS v4.

### AI

Öffnet den AI Chat. Der Tab kann auch mit <kbd>⌘</kbd><kbd>J</kbd> beziehungsweise <kbd>Strg</kbd><kbd>J</kbd> umgeschaltet werden.

## Shortcut

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| AI Chat umschalten | <kbd>⌘</kbd><kbd>J</kbd> | <kbd>Strg</kbd><kbd>J</kbd> |

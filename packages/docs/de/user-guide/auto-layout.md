---
title: Auto Layout
description: Flex- und Grid-Layout mit Direction, Gap, Padding, Alignment, Child sizing und Grid tracks.
---

# Auto Layout

Auto Layout ordnet Children innerhalb eines Frame automatisch an. Zwei Modi stehen zur Verfügung:

- **Flex:** horizontaler oder vertikaler Flow;
- **Grid:** Rows und Columns mit konfigurierbaren Tracks.

## Auto Layout aktivieren

- Frame auswählen und <kbd>⇧</kbd><kbd>A</kbd> drücken, um Auto Layout ein- oder auszuschalten.
- Mehrere freie Objekte auswählen und <kbd>⇧</kbd><kbd>A</kbd> drücken, um sie in einen neuen Auto-Layout-Frame einzuschließen.

Beim Einschließen sortiert OpenPencil die Objekte zunächst nach ihrer sichtbaren Position.

## Direction

- **Horizontal:** Children werden von links nach rechts angeordnet.
- **Vertical:** Children werden von oben nach unten angeordnet.
- **Wrap:** Children wechseln bei Platzmangel in eine weitere Zeile oder Spalte.

## Abstände

### Gap

Gap bestimmt den Abstand zwischen benachbarten Children.

### Padding

Padding bestimmt den Abstand zwischen dem Rand des Frame und seinen Children. Die vier Seiten können gemeinsam oder einzeln eingestellt werden.

## Alignment

### Main axis

- **Start:** Children stehen am Anfang der Achse.
- **Center:** Children werden zentriert.
- **End:** Children stehen am Ende der Achse.
- **Space between:** Der freie Raum wird gleichmäßig zwischen den Children verteilt.

### Cross axis

- **Start:** Ausrichtung am Anfang der Cross axis.
- **Center:** Zentrierung auf der Cross axis.
- **End:** Ausrichtung am Ende der Cross axis.
- **Stretch:** Children füllen die Cross axis.

## Child sizing

- **Fixed:** verwendet die eingestellte Width oder Height;
- **Fill:** füllt den verfügbaren Raum;
- **Hug:** richtet die Größe am Inhalt aus.

Die erste tatsächliche Änderung einer Width oder Height schaltet nur die betreffende Achse von Hug oder Fill auf Fixed. Das Fokussieren eines Feldes allein verändert den Sizing mode nicht.

## Reihenfolge per Drag ändern

Ein Child innerhalb eines Auto-Layout-Frame kann an eine andere Position zwischen seinen Siblings gezogen werden. Ein Indicator zeigt die neue Einfügeposition.

## Shortcut

| Aktion | macOS | Windows / Linux |
|--------|-------|-----------------|
| Auto Layout umschalten | <kbd>⇧</kbd><kbd>A</kbd> | <kbd>Shift</kbd><kbd>A</kbd> |

## CSS Grid

Grid ordnet Children in Rows und Columns mit expliziten Track sizes an.

### Grid einschalten

Frame mit aktivem Auto Layout auswählen und in den Layout controls vom Flex- zum Grid-Modus wechseln.

### Track sizes

Columns und Rows unterstützen:

- **fr:** proportionaler Anteil des verfügbaren Raums;
- **px:** feste Größe in Pixeln;
- **auto:** Größe entsprechend dem Inhalt.

### Row gap und Column gap

Horizontaler und vertikaler Abstand zwischen Grid cells können separat eingestellt werden.

### Placement

Standardmäßig werden Children zeilenweise in freie Cells eingesetzt. Column start, Row start und Span können in den Layout properties des Child festgelegt werden.

### JSX- und Tailwind-Export

Grid layouts werden als JSX mit Tailwind classes exportiert, zum Beispiel `grid grid-cols-3`, `gap-x-4 gap-y-2` und `col-start-2 row-span-2`.

## Hinweise

- Verschachtelte Auto-Layout-Frames eignen sich für komplexe responsive layouts.
- Fill entspricht für viele Flex layouts ungefähr `flex-grow: 1`.
- Grid eignet sich besonders für Dashboards, Galerien, Formulare und andere zweidimensionale layouts.

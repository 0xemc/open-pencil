---
title: Variables
description: Design variables, Collections, Modes und Color bindings in OpenPencil.
---

# Variables

Variables speichern wiederverwendbare Design tokens wie Colors und Spacing values. Properties von Objekten können an Variables gebunden werden. Ändert sich der Wert einer Variable, werden alle verbundenen Objekte aktualisiert.

## Variables öffnen

Wenn kein Objekt ausgewählt ist, zeigt der Tab Design die Page properties. Über das Settings icon im Bereich Variables wird der Variables dialog geöffnet.

## Collections

Variables sind in Collections organisiert. Jede Collection erscheint als eigener Tab.

- Click auf einen Tab wechselt die Collection.
- Double-click auf den Namen startet die Umbenennung.

## Modes

Eine Collection kann mehrere Modes enthalten, zum Beispiel Light und Dark. Die Modes werden als Columns in der Variables table dargestellt.

## Variables bearbeiten

- **Erstellen:** **Create variable** wählen.
- **Name:** Name cell anklicken.
- **Value:** entsprechende Cell eines Mode anklicken.
- **Search:** Liste über die Search bar filtern.

### Color variables

Color values werden direkt in der Tabelle mit einem Color input und Picker bearbeitet.

Die Types `FLOAT`, `STRING` und `BOOLEAN` sind im Datenmodell vorhanden, besitzen derzeit aber noch keine vollständige Editing UI.

## Bindings für Fills und Strokes

Der Variable picker in den Bereichen Fill und Stroke verbindet eine Color variable mit der jeweiligen Color property.

- Variable auswählen, um das Binding herzustellen. Das Feld zeigt anschließend ein violettes Badge mit dem Namen der Variable.
- Binding über die entsprechende Action im Picker entfernen.

Das Öffnen eines Feldes oder Pickers verändert das Binding nicht. Erst eine tatsächliche Value change kann — abhängig vom verwendeten Control — das Binding lösen oder die Variable selbst ändern.

## Hinweise

- Collections gruppieren zusammengehörige Tokens, etwa `Primitives` für Ausgangsfarben und `Semantic` für rollenbezogene Tokens.
- Modes eignen sich für Themes wie Light und Dark innerhalb derselben Collection.
- Aliases erlauben einer Variable, auf den Wert einer anderen Variable zu verweisen, auch über Collections hinweg.

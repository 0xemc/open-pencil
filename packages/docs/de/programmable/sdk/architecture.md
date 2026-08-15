---
title: SDK-Architektur
description: Paketstruktur, Grenzen der öffentlichen API und Gestaltungsprinzipien von @open-pencil/vue.
---

# SDK-Architektur

`@open-pencil/vue` verbindet `@open-pencil/core` mit Vue.

Das Editor-Modell bleibt Bestandteil von core. Dieses Paket ergänzt:

- Dependency Injection mit Vue;
- reaktive Composables;
- strukturelle Headless-Komponenten;
- die Anbindung der Arbeitsfläche und Eingabeverarbeitung.

## Paketstruktur

Der Code ist nach Funktionsbereichen gegliedert.

### Komponentenfamilien

- `Canvas/`
- `ColorPicker/`
- `FillPicker/`
- `FontPicker/`
- `GradientEditor/`
- `LayerTree/`
- `PageList/`
- `PropertyList/`
- `PropertySection/`
- `SegmentedControl/`
- `NumberField/`
- `Toolbar/`

Diese Verzeichnisse enthalten strukturelle Headless-Komponenten und bereichsspezifische Hilfsfunktionen.

### Controls

In `controls/` befinden sich Composables für Eigenschaftenpanels und Editor-Steuerelemente:

- `usePosition`
- `useLayout`
- `useAppearance`
- `useColorModel`
- `useTypography`
- `useExport`
- `useFillControls`
- `useStrokeControls`
- `useEffectsControls`
- `useNodeProps`
- `usePropScrub`
- `useEditorPropertyList`

### Variables

`VariablesEditor/` enthält Composables und Code, der den Zustand des Variableneditors an Vue anbindet.

### Selection

`selection/` enthält den aus der Auswahl abgeleiteten Zustand sowie Angaben zu den verfügbaren Aktionen.

### Context

`context/` enthält den Schlüssel und die Funktionen, mit denen der Editor per Vue Dependency Injection bereitgestellt wird:

- `EDITOR_KEY`
- `provideEditor`
- `useEditor`

### Internal

`internal/` enthält gemeinsam genutzte Hilfsfunktionen. Sie gehören nicht zu den primären Headless-Komponenten des Pakets.

## Grundsätze der öffentlichen API

### Composables für Logik und Zustand

Wenn Code hauptsächlich Zustand berechnet oder verwaltet beziehungsweise Editor-Aktionen ausführt, stellen Sie ihn als Composable bereit.

### Headless-Komponenten nur für relevante Struktur

Eine Root-Komponente ist sinnvoll, wenn sie Struktur, untergeordnete Elemente, Slots oder Kontext koordiniert.

Beispiele:

- `PageListRoot`
- `PropertyListRoot`
- `PropertySectionRoot`
- `SegmentedControlRoot`
- `ToolbarRoot`

### Nicht den gesamten Kontext über einen Slot weitergeben

Übergeben Sie einem Slot nur die benötigten Props oder verwenden Sie das Composable direkt. Kontrollierte Komponenten wie `PropertyListRoot` melden Aktionen durch semantische Events. Die Anbindung an Auswahl und Undo-Verlauf gehört in einen Adapter oder ein steuerndes Composable, nicht in die Komponente selbst.

## Zuständigkeiten von Anwendung und SDK

### SDK

- Editor-Integration;
- wiederverwendbare Headless-Logik;
- wiederverwendbare UI-Struktur ohne Vorgaben zur Gestaltung;
- Integration mit dem Rendering der Arbeitsfläche.

### Anwendung

- Gestaltung;
- allgemeines Seitenlayout;
- Routing;
- Öffnen, Speichern und weitere Dateioperationen;
- Benachrichtigungen, Menüs und anwendungsspezifisches Verhalten.

## Faustregel

Kann Code ohne die Gestaltung der Anwendung in einem anderen OpenPencil-basierten Editor wiederverwendet werden, gehört er wahrscheinlich in `@open-pencil/vue`.

## Siehe auch

- [SDK – Erste Schritte](./getting-started)
- [API-Referenz](./api/)

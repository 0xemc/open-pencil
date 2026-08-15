# Funktionen

## Figma-Dateien

OpenPencil öffnet und speichert `.fig`-Dateien direkt. Import und Export verwenden wie Figma den Kiwi-Binärcodec mit 194 Schemadefinitionen und rund 390 Feldern pro Node. Speichern: <kbd>⌘</kbd><kbd>S</kbd>, Save As: <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd>.

**Copy und Paste mit Figma:** Nodes in Figma auswählen, <kbd>⌘</kbd><kbd>C</kbd> drücken, zu OpenPencil wechseln und mit <kbd>⌘</kbd><kbd>V</kbd> einfügen. Fills, Strokes, Auto Layout, Text, Effects, Corner radii und Vector networks bleiben in beiden Richtungen erhalten.

## Zeichnen und Bearbeiten

- **Shapes:** Rectangle (<kbd>R</kbd>), Ellipse (<kbd>O</kbd>), Line (<kbd>L</kbd>), Polygon und Star
- **Pen tool:** Vector networks statt einfacher Paths, Bezier curves mit Tangent handles
- **Text:** Bearbeitung direkt auf dem Canvas, IME-Unterstützung und Double-click zum Wechsel in den Edit mode
- **Rich text:** Bold (<kbd>⌘</kbd><kbd>B</kbd>), Italic (<kbd>⌘</kbd><kbd>I</kbd>), Underline (<kbd>⌘</kbd><kbd>U</kbd>) und Strikethrough für einzelne Zeichenbereiche
- **Auto Layout:** Flexbox und CSS Grid über Yoga WASM mit Direction, Gap, Padding, Justify, Align, Child sizing und Grid tracks; <kbd>⇧</kbd><kbd>A</kbd> schaltet Auto Layout um
- **Components:** Erstellen mit <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>, Component sets mit <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd>, Instances mit Overrides und Live-Synchronisierung
- **Variables:** Design tokens mit Collections, Modes wie Light und Dark, den Types Color, Float, String und Boolean sowie Variable bindings
- **Sections:** Container zur Organisation mit automatischer Übernahme überlappender Children und Title pills

## Properties-Panel

Die Tabs Design, Code und AI passen sich der aktuellen Auswahl an:

- **Appearance:** Opacity, einheitlicher oder separater Corner radius und Visibility
- **Fill:** Solid color, Linear/Radial/Angular/Diamond gradient und Image
- **Stroke:** Color, Weight, Alignment, separate Weights pro Seite, Cap, Join und Dash
- **Effects:** Drop shadow, Inner shadow, Layer blur, Background blur und Foreground blur
- **Typography:** Font picker mit Virtual scrolling und Suche, Style, Size, Alignment und Formatting
- **Layout:** Auto-Layout-Einstellungen, sobald Auto Layout aktiv ist
- **Export:** Scale, PNG/JPG/WEBP/SVG und Live preview

## Rendering

Skia über CanvasKit WASM ist dieselbe Rendering Engine, die auch Figma verwendet. OpenPencil unterstützt unter anderem:

- Linear, Radial, Angular und Diamond gradients;
- Image fills mit verschiedenen Scale modes;
- Effects mit Cache pro Node;
- Arcs, partielle Ellipsen und Rings;
- Viewport culling und Wiederverwendung von Paint objects;
- Snap guides, die Rotation berücksichtigen;
- Rulers mit Markierung des Selection-Bereichs;
- Hover highlights entlang der tatsächlichen Geometrie.

## Undo und Redo

Erstellen, Löschen, Verschieben, Resize, Property changes, Reparenting, Layout und Variable operations lassen sich rückgängig machen. OpenPencil speichert dafür inverse Commands. Shortcuts: <kbd>⌘</kbd><kbd>Z</kbd> und <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd>.

## Dokumente mit mehreren Seiten

Seiten lassen sich hinzufügen, löschen und umbenennen. Jede Seite besitzt einen eigenen Viewport state. Ein Double-click startet die direkte Umbenennung.

## Mehrere Dateien

Mehrere Dokumente können gleichzeitig in Tabs geöffnet werden. <kbd>⌘</kbd><kbd>T</kbd> erstellt einen Tab, <kbd>⌘</kbd><kbd>W</kbd> schließt ihn und <kbd>⌘</kbd><kbd>O</kbd> öffnet eine Datei.

## Export

- **Bilder:** PNG, JPG und WEBP mit einer Scale von 0,5× bis 4× über Panel, Kontextmenü oder <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd>
- **SVG:** Shapes, Text mit Style runs, Gradients, Effects und Blend modes
- **Tailwind JSX:** HTML mit Tailwind-v4-Utility-Classes für React oder Vue
- **Copy as:** Text, SVG, PNG mit <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> oder JSX über das Kontextmenü

CLI: `openpencil export design.fig -f jsx --style tailwind`

## AI Chat

<kbd>⌘</kbd><kbd>J</kbd> öffnet den AI Assistant. Mehr als 90 Tools erstellen Shapes, ändern Styles, verwalten Layouts, bearbeiten Components und Variables, führen Boolean operations aus, analysieren Design tokens und exportieren Assets. Unterstützt werden Anthropic, OpenAI, Google AI, OpenRouter und kompatible Endpoints.

Tool calls erscheinen als einklappbare Einträge in einer Timeline. Zur visuellen Prüfung rendert der Assistant seine Änderungen und vergleicht das Ergebnis mit der Anfrage. Sämtliche Änderungen durch AI unterstützen Undo.

Einrichtung und Provider: [AI Chat](/programmable/ai-chat).

## MCP-Server

Claude Code, Cursor, Windsurf und andere MCP-Clients können `.fig`-Dateien mit mehr als 90 Tools headless lesen und verändern. Als Transport stehen stdio und HTTP zur Verfügung.

```sh
npm install -g @open-pencil/mcp
```

```json
{
  "mcpServers": {
    "open-pencil": {
      "command": "openpencil-mcp"
    }
  }
}
```

Die vollständige Liste enthält die [MCP-Tools-Referenz](/programmable/mcp-server).

## CLI

`.fig`-Dateien lassen sich im Terminal untersuchen, exportieren und analysieren:

```sh
openpencil tree design.fig              # Node tree
openpencil find design.fig --type TEXT  # Search
openpencil export design.fig -f png     # Render
openpencil analyze colors design.fig    # Color audit
openpencil analyze clusters design.fig  # Repeated patterns
openpencil eval design.fig -c "..."     # Figma Plugin API
```

Wenn die Desktop-App läuft, kann der Dateiname entfallen. Der Befehl steuert dann den geöffneten Editor über RPC:

```sh
openpencil tree                     # Live document
openpencil export -f png            # Screenshot canvas
```

Alle Befehle unterstützen `--json`. Installation: `npm install -g @open-pencil/cli` oder `bun add -g @open-pencil/cli`.

## Zusammenarbeit in Echtzeit

Die Zusammenarbeit erfolgt P2P über WebRTC und benötigt keinen Server. Ein Link genügt, um gemeinsam zu bearbeiten.

- Live cursors mit farbigen Pfeilen und Namen
- Presence avatars
- Follow mode zum Verfolgen des Viewport eines anderen Teilnehmers
- Lokale Speicherung in IndexedDB
- Kryptografisch sichere Room IDs über `crypto.getRandomValues()`

## Desktop und Web

**Desktop:** Tauri v2, rund 7 MB, verfügbar für macOS, Windows und Linux. Die macOS-App ist signiert und notarisiert. Native Menüs, Offlinebetrieb und Autosave sind integriert.

**Web:** [app.openpencil.dev](https://app.openpencil.dev) läuft im Browser und kann auf Mobilgeräten als PWA mit touchoptimierter Oberfläche installiert werden.

**Homebrew:**

```sh
brew install open-pencil/tap/open-pencil
```

## Google-Fonts-Fallback

Ist ein Font nicht lokal verfügbar, lädt OpenPencil ihn automatisch von Google Fonts. Beim Öffnen einer `.fig`-Datei mit unbekannten Fonts ist keine manuelle Installation erforderlich.

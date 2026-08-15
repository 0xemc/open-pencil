# Figma-Kompatibilität

Vergleich der Funktionen von Figma Design mit dem aktuellen Stand von OpenPencil.

::: tip Status
✅ Unterstützt — funktioniert vollständig · 🟡 Teilweise — grundlegende Funktion vorhanden, einzelne Teile fehlen · 🔲 Nicht implementiert
:::

**Abdeckung:** 94 von 158 Figma-Funktionen berücksichtigt — 76 ✅ vollständig, 18 🟡 teilweise und 64 🔲 noch nicht. Stand: 2026-03-07.

## Oberfläche und Navigation

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Toolbar | ✅ | Untere Toolbar im UI3-Stil: Select, Frame, Section, Rectangle, Ellipse, Line, Text, Hand und Pen |
| Layers-Panel | ✅ | Tree mit Expand/Collapse, Drag reorder und Visibility; verstellbare Breite |
| Pages-Panel | ✅ | Pages erstellen, löschen und umbenennen; eigener Viewport state pro Page |
| Properties-Panel | ✅ | Appearance, Fill, Stroke, Effects, Typography, Layout und Position; verstellbare Breite |
| Zoom und Pan | ✅ | <kbd>Ctrl</kbd> + Scroll, Pinch, <kbd>⌘</kbd><kbd>+</kbd>/<kbd>−</kbd>, <kbd>⌘</kbd><kbd>0</kbd> (100 %), <kbd>⌘</kbd><kbd>1</kbd> (Fit), <kbd>⌘</kbd><kbd>2</kbd> (Selection), <kbd>Space</kbd> + Drag, mittlere Maustaste und Hand tool (<kbd>H</kbd>) |
| Rulers | ✅ | Rulers oben und links mit Selection-Bereich und Coordinate badges |
| Canvas background | ✅ | Eigener Background pro Page im Properties-Panel |
| Guides | 🔲 | Keine aus Rulers ziehbaren Guides |
| Actions menu / Command palette | 🔲 | Keine Quick-actions-Suche |
| Kontextmenü | ✅ | Clipboard, Reihenfolge, Groups, Components, Visibility, Lock und Move to page |
| Shortcuts | 🟡 | Zentrale Shortcuts, Components, Reihenfolge, Visibility und Lock; Scale, Arrow, Pencil, Flip und Teile des Text formatting fehlen |
| Find and replace | 🔲 | Keine dokumentweite Textsuche und Ersetzung |
| Layer outlines | 🔲 | Keine Wireframe view aller Layers |
| Eigene Thumbnail | 🔲 | Thumbnail wird beim Export erzeugt, kann aber nicht frei gewählt werden |
| Nudge settings | 🔲 | 1 px und 10 px; keine eigenen Small/Big-nudge-Werte |
| Application menu | ✅ | File, Edit, View, Object, Text und Arrange im Browser; native Menüs in Tauri |
| AI tools | 🟡 | 90 Tools über OpenRouter und MCP server; keine AI-generierten Images oder AI Search |

## Layers und Shapes

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Rectangle, Ellipse, Line, Polygon und Star | ✅ | Grundlegende Shapes; Side count des Polygon und Inner radius des Star konfigurierbar |
| Frames | ✅ | Clip content, eigener Coordinate system sowie Figma-ähnliche Presets für Erstellung und Resize |
| Groups | ✅ | <kbd>⌘</kbd><kbd>G</kbd> und <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> |
| Sections | ✅ | Title pills, automatische Übernahme überlappender Objekte und luminanzabhängiger Text |
| Arc | ✅ | `arcData` mit Start angle, End angle und Inner radius |
| Pencil | 🔲 | Kein Freehand drawing tool |
| Masks | 🔲 | Keine Shape masks zum Clipping von Layers |
| Layer types und Hierarchie | ✅ | 17 Node types, flache Map und Parent-child tree |
| Selection | ✅ | Click, Shift-click und Marquee selection |
| Alignment und Position | ✅ | Position, Rotation und Dimensions im Properties-Panel |
| Copy und Paste | ✅ | Standard Clipboard, Figma Kiwi binary sowie Copy as text/SVG/PNG/JSX |
| Proportionaler Resize | 🟡 | Shift hält Proportionen; kein eigenes Scale tool (<kbd>K</kbd>) |
| Lock | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd>; gesperrte Objekte sind auf dem Canvas nicht auswählbar oder beweglich |
| Visibility | ✅ | Eye icon und <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> |
| Rename | ✅ | Double-click im Layers-Panel; Enter, Escape oder Blur beendet die Bearbeitung |
| Bring to front / Send to back | ✅ | ] und [ sowie Kontextmenü |
| Move to page | ✅ | Selection über Kontextmenü zwischen Pages verschieben |
| Constraints | 🔲 | Kein Pinning von Edges oder Center bei Parent resize |
| Smart selection | 🔲 | Kein gleichmäßiges Verteilen und Ausrichten von Multi-selection |
| Layout guides | 🔲 | Keine Columns, Rows oder Grid overlays auf Frames |
| Abstände messen | 🔲 | Kein Alt-hover zur Abstandsanzeige |
| Mehrere Objekte bearbeiten | ✅ | Position, Size, Appearance, Fill, Stroke und Effects; abweichende Values erscheinen als Mixed |
| Ähnliche Objekte finden | 🔲 | Kein Identify matching objects |
| Copy/Paste properties | 🔲 | Kein Kopieren von Fill, Stroke oder Effects zwischen Layers |
| Parent-child relationships | ✅ | Vollständige Hierarchie über `parentIndex`, Reparenting per Drag |

## Vector tools

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Vector networks | ✅ | Figma-kompatibles Modell statt einfacher Paths |
| Pen tool | ✅ | Corner points, Bezier curves sowie offene und geschlossene Paths |
| Vector edit | 🟡 | Erstellung funktioniert; fortgeschrittene Vertex-Bearbeitung, Bend, Delete und Join eingeschränkt |
| Boolean operations | 🔲 | Kein Union, Subtract, Intersect oder Exclude |
| Flatten | 🔲 | Kein Zusammenführen von Vector paths |
| Outline Stroke | 🔲 | Keine Umwandlung von Strokes in Paths |
| Text to paths | 🔲 | Keine Vector outlines aus Text |
| Shape builder | 🔲 | Kein interaktives Boolean tool |
| Offset path | 🔲 | Kein Inset/Outset |
| Simplify path | 🔲 | Keine Reduktion der Vector points |

## Text und Typography

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Text tool und Inline editing | ✅ | Phantom `textarea`, Caret, Selection, Word select, Drag select, Double/Triple-click und Rich-text style runs; <kbd>⌘</kbd><kbd>B</kbd>/<kbd>I</kbd>/<kbd>U</kbd> und **S** |
| Text rendering | ✅ | CanvasKit Paragraph für Shaping, Line breaking und Metrics |
| System fonts | ✅ | Inter als Default, font-kit in Tauri mit Cache und Preloading, `queryLocalFonts` im Browser |
| Font family und Style | ✅ | FontPicker mit Virtual scroll, Search und CSS preview; Style im Properties-Panel |
| Font size und Line height | ✅ | Im Bereich Typography editierbar |
| Text alignment | 🟡 | Grundlegendes Alignment; Vertical alignment und Auto width/height fehlen |
| Text styles | 🟡 | Bold, Italic, Underline und Strikethrough pro Selection; keine wiederverwendbaren Named styles |
| Text resizing modes | 🔲 | Kein Auto width, Auto height oder Fixed size |
| Lists | 🔲 | Keine Bulleted oder Numbered lists |
| Links | 🔲 | Keine Hyperlinks im Text |
| Emoji und Smart symbols | 🔲 | Keine vollständige Unterstützung |
| OpenType | 🔲 | Keine Ligatures, Stylistic alternates oder Tabular figures |
| Variable fonts | 🔲 | Keine einstellbaren Axes wie Weight, Width oder Slant |
| CJK | 🔲 | Keine vollständige Unterstützung für Chinesisch, Japanisch und Koreanisch |
| RTL | 🔲 | Kein Right-to-left layout |
| Icon fonts | 🔲 | Keine besondere Behandlung von Icon glyphs |

## Colors, Gradients und Images

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Color picker | ✅ | HSV field, Hue, Alpha und Hex input |
| Solid fills | ✅ | Hex color mit Opacity |
| Linear gradient | ✅ | Stops und Transform handles |
| Radial gradient | ✅ | CanvasKit shaders |
| Angular gradient | ✅ | Sweep/Conic gradient |
| Diamond gradient | ✅ | Vierpunkt-Diamond-gradient |
| Image fills | ✅ | Blob data und Scale modes Fill, Fit, Crop und Tile |
| Pattern fills | 🔲 | Keine wiederholten Patterns |
| Blend modes | 🔲 | Keine Layer- oder Fill-blend-modes |
| Images und Video | 🟡 | Image fills werden gerendert; kein Drag-and-drop-Import und kein Video |
| Image adjustments | 🔲 | Keine Exposure-, Contrast- oder Saturation-Einstellungen |
| Crop | 🔲 | Kein interaktives Cropping |
| Eyedropper | 🔲 | Keine Color-Auswahl vom Canvas |
| Mixed-selection colors | 🔲 | Keine gemeinsame Color-Änderung in heterogener Selection |
| Color models | 🟡 | HSV und Hex; kein HSL- oder RGB-mode |

## Effects und Properties

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Drop shadow | ✅ | Offset, Blur radius und Color über CanvasKit filters |
| Inner shadow | ✅ | Inset shadow |
| Layer blur | ✅ | Gaussian blur |
| Background blur | ✅ | Blur des Inhalts hinter der Layer |
| Foreground blur | ✅ | Blur vor der Layer |
| Stroke weight | ✅ | Im Properties-Panel konfigurierbar |
| Stroke cap | ✅ | `NONE`, `ROUND`, `SQUARE`, `ARROW_LINES`, `ARROW_EQUILATERAL` |
| Stroke join | ✅ | Miter, Bevel und Round |
| Dash patterns | ✅ | Dash-on/Dash-off pattern |
| Stroke alignment | ✅ | Inside, Center und Outside mit Figma-kompatiblem Clipping |
| Separate Stroke weights | ✅ | Top, Right, Bottom und Left mit Side selector |
| Corner radius | ✅ | Einheitlich oder pro Corner |
| Corner smoothing | 🔲 | Kein Continuous corner rounding |
| Mehrere Fills/Strokes | 🔲 | Kein Stack mehrerer Fills oder Strokes pro Layer |

## Auto Layout

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Horizontal und Vertical flow | ✅ | Yoga WASM Flexbox |
| Auto Layout umschalten | ✅ | <kbd>⇧</kbd><kbd>A</kbd> auf Frame oder Selection |
| Gap | ✅ | Im Properties-Panel |
| Padding | ✅ | Einheitlich oder pro Seite |
| Justify content | ✅ | Start, Center, End und Space between |
| Align items | ✅ | Start, Center, End und Stretch |
| Child sizing | ✅ | Fixed, Fill und Hug |
| Wrap | ✅ | Flex wrap |
| Grid | ✅ | CSS Grid über Yoga fork mit Tracks, Gaps und Spans |
| Nested flows | ✅ | Verschachtelte Auto-Layout-Frames mit unterschiedlichen Directions |
| Drag reorder | ✅ | Visueller Insertion indicator |
| Min/max dimensions | 🔲 | Keine Min/max constraints für Children |

## Components und Design systems

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Components erstellen | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>; Properties für Text, Visibility, Instance swap und Variants |
| Component sets | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd>; multidimensionale Sparse variants, Duplicate validation und Default oben links |
| Instances | ✅ | Assets, Insert, editierbare Properties und Overrides, Variant switching, Live sync und Update review |
| Variants | ✅ | Sparse combinations, Authoring, Switching, Duplicate validation und Top-left fallback |
| Component properties | ✅ | Boolean visibility, Text und Instance swap |
| Override propagation | ✅ | Änderungen am Main component erreichen Instances; Overrides bleiben erhalten |
| Variables | 🟡 | Vollständige UI für `COLOR`; `FLOAT`, `STRING` und `BOOLEAN` ohne Editing UI |
| Collections und Modes | 🟡 | Collections, Modes und Active mode funktionieren; keine Variable-driven theming UI |
| Styles | 🔲 | Keine wiederverwendbaren Named presets |
| Libraries | ✅ | Unveränderliche Local/Storage revisions, Selective publish, Enablement, Scoped update review, Offline materialization und `.fig` persistence |
| Detach instance | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> wandelt Instance in Frame um |
| Go to main component | ✅ | Navigation zum Source component auch zwischen Pages |

## Prototyping

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Prototype connections | 🔲 | Noch nicht unterstützt |
| Triggers | 🔲 | Kein Click, Hover, Drag usw. |
| Actions | 🔲 | Kein Navigate, Overlay oder Scroll |
| Animations und Transitions | 🔲 | Noch nicht unterstützt |
| Smart animate | 🔲 | Keine Animation passender Layers |
| Overlays | 🔲 | Keine Modal-/Popover-Prototypes |
| Scroll und Overflow | 🔲 | Keine scrollbaren Prototype frames |
| Prototype flows | 🔲 | Keine Named starting points |
| Variables | 🔲 | Keine Conditional logic |
| Easing und Springs | 🔲 | Keine Custom curves |
| Present | 🔲 | Kein Fullscreen prototype viewer |

## Import und Export

| Funktion | Status | Hinweise |
|----------|--------|----------|
| `.fig` importieren | ✅ | Kiwi codec mit 194 Definitions und rund 390 Fields pro `NodeChange` |
| `.fig` exportieren | ✅ | Kiwi, Zstd und Thumbnail; `COMPONENT`/`COMPONENT_SET` werden für Roundtrip als `SYMBOL` gespeichert |
| Save / Save As | ✅ | Native Dialogs in Tauri, File System Access API in Chrome/Edge und Download fallback in Safari |
| Figma Clipboard: Paste | ✅ | Kiwi binary aus Figmas Clipboard decodieren |
| Figma Clipboard: Copy | ✅ | Von Figma lesbares Kiwi binary erzeugen |
| Sketch importieren | 🔲 | Kein `.sketch` parser |
| Image/SVG/PDF export | 🟡 | PNG, JPG, WEBP und SVG ✅; PDF 🔲 |
| Version history | 🔲 | Keine früheren Versionen durchsuchen oder wiederherstellen |
| Assets zwischen Tools | ✅ | Figma Clipboard sowie Copy as text/SVG/PNG/JSX |

## Plugin API und Scripts

| Funktion | Status | Hinweise |
|----------|--------|----------|
| `eval` mit Figma Plugin API | ✅ | Headless JavaScript mit Figma-kompatiblem globalem `figma` object |

## Collaboration und Dev Mode

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Comments | 🔲 | Keine Pins, Threads oder Resolve |
| Multiplayer | ✅ | P2P über Trystero und Yjs CRDT, Cursors und Follow mode; kein Server erforderlich |
| Cursor chat | 🔲 | Keine Inline-chat-bubbles |
| Branching und Merging | 🔲 | Keine Version branches |
| Dev Mode | 🟡 | Code tab zeigt JSX; keine CSS properties oder Handoff specs |
| Code Connect | 🔲 | Keine Verbindung von Design components zu Code |
| Code snippets | 🟡 | JSX mit Syntax highlighting und Copy; kein Swift/Kotlin |
| Tailwind CSS v4 | ✅ | HTML mit Tailwind utility classes aus Code panel, CLI oder API |
| Figma for VS Code | 🔲 | Keine Editor-plugin-Integration |
| MCP server | ✅ | `@open-pencil/mcp` mit stdio und HTTP; 87 Core tools plus 3 File tools, insgesamt 90 |
| CLI | ✅ | `info`, `tree`, `find`, `export`, `analyze`, `node`, `pages`, `variables`, `eval` und MCP server |

## Figma Draw

| Funktion | Status | Hinweise |
|----------|--------|----------|
| Illustration tools | 🔲 | Keine spezialisierten Tools aus Figma Draw |
| Pattern transforms | 🔲 | Keine wiederholten Patterns mit Transforms |

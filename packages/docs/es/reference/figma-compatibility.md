# Compatibilidad con Figma

Comparación entre las funciones de Figma Design y el estado actual de OpenPencil.

::: tip Estado
✅ Compatible — funciona de principio a fin · 🟡 Parcial — existe el comportamiento principal, pero faltan algunas funciones · 🔲 No implementado
:::

**Cobertura:** 94 de 158 funciones de Figma consideradas — 76 ✅ completas, 18 🟡 parciales y 64 🔲 pendientes. Actualizado: 2026-03-07.

## Interfaz y navegación

| Función | Estado | Notas |
|---------|--------|-------|
| Toolbar | ✅ | Toolbar inferior de estilo UI3: Select, Frame, Section, Rectangle, Ellipse, Line, Text, Hand y Pen |
| Panel Layers | ✅ | Tree con Expand/Collapse, Drag reorder y Visibility; Width ajustable |
| Panel Pages | ✅ | Crear, eliminar y renombrar Pages; Viewport state independiente |
| Panel Properties | ✅ | Appearance, Fill, Stroke, Effects, Typography, Layout y Position; Width ajustable |
| Zoom y Pan | ✅ | <kbd>Ctrl</kbd> + Scroll, Pinch, <kbd>⌘</kbd><kbd>+</kbd>/<kbd>−</kbd>, <kbd>⌘</kbd><kbd>0</kbd> (100 %), <kbd>⌘</kbd><kbd>1</kbd> (Fit), <kbd>⌘</kbd><kbd>2</kbd> (Selection), <kbd>Space</kbd> + Drag, Button central y Hand tool (<kbd>H</kbd>) |
| Rulers | ✅ | Rulers superior e izquierda con rango de Selection y Coordinate badges |
| Canvas background | ✅ | Background independiente por Page desde Properties |
| Guides | 🔲 | No hay Guides arrastrables desde Rulers |
| Actions menu / Command palette | 🔲 | No hay búsqueda Quick actions |
| Menú contextual | ✅ | Clipboard, orden, Groups, Components, Visibility, Lock y Move to page |
| Atajos | 🟡 | Atajos principales, Components, orden, Visibility y Lock; faltan Scale, Arrow, Pencil, Flip y parte del Text formatting |
| Find and replace | 🔲 | No hay búsqueda y sustitución de texto en todo el documento |
| Layer outlines | 🔲 | No hay Wireframe view de todas las Layers |
| Thumbnail propia | 🔲 | Se genera al exportar, pero no se puede elegir una personalizada |
| Nudge settings | 🔲 | Valores de 1 px y 10 px; no admite Small/Big nudge personalizados |
| Application menu | ✅ | File, Edit, View, Object, Text y Arrange en Browser; Native menus en Tauri |
| AI tools | 🟡 | 90 Tools mediante OpenRouter y MCP server; sin Images generadas por AI ni AI Search |

## Layers y Shapes

| Función | Estado | Notas |
|---------|--------|-------|
| Rectangle, Ellipse, Line, Polygon y Star | ✅ | Shapes básicos; Side count de Polygon e Inner radius de Star configurables |
| Frames | ✅ | Clip content, Coordinate system propio y Presets de creación y Resize similares a Figma |
| Groups | ✅ | <kbd>⌘</kbd><kbd>G</kbd> y <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> |
| Sections | ✅ | Title pills, incorporación automática de objetos superpuestos y Text adaptado a Luminance |
| Arc | ✅ | `arcData` con Start angle, End angle e Inner radius |
| Pencil | 🔲 | No hay Freehand drawing tool |
| Masks | 🔲 | No hay Shape masks para recortar Layers |
| Layer types y jerarquía | ✅ | 17 Node types, Map plana y Parent-child tree |
| Selection | ✅ | Click, Shift-click y Marquee selection |
| Alignment y Position | ✅ | Position, Rotation y Dimensions en Properties |
| Copy y Paste | ✅ | Clipboard estándar, Figma Kiwi binary y Copy as text/SVG/PNG/JSX |
| Resize proporcional | 🟡 | Shift conserva proporciones; no hay Scale tool (<kbd>K</kbd>) |
| Lock | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd>; los objetos bloqueados no se seleccionan ni mueven en el canvas |
| Visibility | ✅ | Eye icon y <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> |
| Rename | ✅ | Double-click en Layers; Enter, Escape o Blur termina la edición |
| Bring to front / Send to back | ✅ | ] y [ además del menú contextual |
| Move to page | ✅ | Mueve la Selection entre Pages desde el menú contextual |
| Constraints | 🔲 | No hay Pinning de Edges o Center durante Parent resize |
| Smart selection | 🔲 | No distribuye ni alinea Multi-selection uniformemente |
| Layout guides | 🔲 | No hay Columns, Rows o Grid overlays en Frames |
| Medir distancias | 🔲 | No hay medición mediante Alt-hover |
| Edición múltiple | ✅ | Position, Size, Appearance, Fill, Stroke y Effects; Values distintos aparecen como Mixed |
| Objetos similares | 🔲 | No hay Identify matching objects |
| Copy/Paste properties | 🔲 | No copia Fills, Strokes o Effects entre Layers |
| Parent-child relationships | ✅ | Jerarquía completa mediante `parentIndex` y Reparenting con Drag |

## Vector tools

| Función | Estado | Notas |
|---------|--------|-------|
| Vector networks | ✅ | Modelo compatible con Figma, no solo Paths simples |
| Pen tool | ✅ | Corner points, Bezier curves y Paths abiertos o cerrados |
| Vector edit | 🟡 | Creación disponible; Vertex editing, Bend, Delete y Join avanzados limitados |
| Boolean operations | 🔲 | No hay Union, Subtract, Intersect o Exclude |
| Flatten | 🔲 | No combina Vector paths |
| Outline Stroke | 🔲 | No convierte Strokes en Paths |
| Text to paths | 🔲 | No convierte Text en Vector outlines |
| Shape builder | 🔲 | No hay Boolean tool interactiva |
| Offset path | 🔲 | No hay Inset/Outset |
| Simplify path | 🔲 | No reduce Vector points |

## Text y Typography

| Función | Estado | Notas |
|---------|--------|-------|
| Text tool e Inline editing | ✅ | `textarea` invisible, Caret, Selection, Word select, Drag select, Double/Triple-click y Rich-text style runs; <kbd>⌘</kbd><kbd>B</kbd>/<kbd>I</kbd>/<kbd>U</kbd> y **S** |
| Text rendering | ✅ | CanvasKit Paragraph para Shaping, Line breaking y Metrics |
| System fonts | ✅ | Inter predeterminado, font-kit en Tauri con Cache y Preloading, `queryLocalFonts` en Browser |
| Font family y Style | ✅ | FontPicker con Virtual scroll, Search y CSS preview; Style en Properties |
| Font size y Line height | ✅ | Editables en Typography |
| Text alignment | 🟡 | Alignment básico; faltan Vertical alignment y Auto width/height |
| Text styles | 🟡 | Bold, Italic, Underline y Strikethrough por Selection; sin Named styles reutilizables |
| Text resizing modes | 🔲 | No hay Auto width, Auto height o Fixed size |
| Lists | 🔲 | No hay Bulleted o Numbered lists |
| Links | 🔲 | No hay Hyperlinks en Text |
| Emoji y Smart symbols | 🔲 | Sin compatibilidad completa |
| OpenType | 🔲 | Sin Ligatures, Stylistic alternates ni Tabular figures |
| Variable fonts | 🔲 | No permite ajustar Axes como Weight, Width o Slant |
| CJK | 🔲 | Sin compatibilidad completa con chino, japonés y coreano |
| RTL | 🔲 | No hay Right-to-left layout |
| Icon fonts | 🔲 | Sin tratamiento especial para Icon glyphs |

## Colors, Gradients e Images

| Función | Estado | Notas |
|---------|--------|-------|
| Color picker | ✅ | HSV field, Hue, Alpha y Hex input |
| Solid fills | ✅ | Hex color con Opacity |
| Linear gradient | ✅ | Stops y Transform handles |
| Radial gradient | ✅ | CanvasKit shaders |
| Angular gradient | ✅ | Sweep/Conic gradient |
| Diamond gradient | ✅ | Diamond gradient de cuatro puntos |
| Image fills | ✅ | Blob data y Scale modes Fill, Fit, Crop y Tile |
| Pattern fills | 🔲 | No hay Patterns repetidos |
| Blend modes | 🔲 | No hay Layer o Fill blend modes |
| Images y Video | 🟡 | Renderiza Image fills; sin Import por Drag and drop ni Video |
| Image adjustments | 🔲 | Sin Exposure, Contrast o Saturation |
| Crop | 🔲 | No hay Cropping interactivo |
| Eyedropper | 🔲 | No toma Colors del canvas |
| Mixed-selection colors | 🔲 | No modifica Colors en una Selection heterogénea |
| Color models | 🟡 | HSV y Hex; sin HSL o RGB mode |

## Effects y Properties

| Función | Estado | Notas |
|---------|--------|-------|
| Drop shadow | ✅ | Offset, Blur radius y Color mediante CanvasKit filters |
| Inner shadow | ✅ | Inset shadow |
| Layer blur | ✅ | Gaussian blur |
| Background blur | ✅ | Blur del contenido detrás de la Layer |
| Foreground blur | ✅ | Blur delante de la Layer |
| Stroke weight | ✅ | Configurable en Properties |
| Stroke cap | ✅ | `NONE`, `ROUND`, `SQUARE`, `ARROW_LINES`, `ARROW_EQUILATERAL` |
| Stroke join | ✅ | Miter, Bevel y Round |
| Dash patterns | ✅ | Dash-on/Dash-off pattern |
| Stroke alignment | ✅ | Inside, Center y Outside con Clipping compatible con Figma |
| Stroke weights independientes | ✅ | Top, Right, Bottom y Left mediante Side selector |
| Corner radius | ✅ | Uniforme o por Corner |
| Corner smoothing | 🔲 | No hay Continuous corner rounding |
| Varios Fills/Strokes | 🔲 | No apila varios Fills o Strokes en una Layer |

## Auto layout

| Función | Estado | Notas |
|---------|--------|-------|
| Horizontal y Vertical flow | ✅ | Yoga WASM Flexbox |
| Activar Auto layout | ✅ | <kbd>⇧</kbd><kbd>A</kbd> en Frame o Selection |
| Gap | ✅ | Configurable en Properties |
| Padding | ✅ | Uniforme o por Side |
| Justify content | ✅ | Start, Center, End y Space between |
| Align items | ✅ | Start, Center, End y Stretch |
| Child sizing | ✅ | Fixed, Fill y Hug |
| Wrap | ✅ | Flex wrap |
| Grid | ✅ | CSS Grid mediante Yoga fork con Tracks, Gaps y Spans |
| Nested flows | ✅ | Auto-layout Frames anidados con Directions distintas |
| Drag reorder | ✅ | Insertion indicator visible |
| Min/max dimensions | 🔲 | No hay Min/max constraints para Children |

## Components y Design systems

| Función | Estado | Notas |
|---------|--------|-------|
| Crear Components | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>; Properties de Text, Visibility, Instance swap y Variants |
| Component sets | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd>; Sparse variants multidimensionales, Duplicate validation y Default arriba a la izquierda |
| Instances | ✅ | Assets, Insert, Properties y Overrides editables, Variant switching, Live sync y Update review |
| Variants | ✅ | Sparse combinations, Authoring, Switching, Duplicate validation y Top-left fallback |
| Component properties | ✅ | Boolean visibility, Text e Instance swap |
| Override propagation | ✅ | Los cambios del Main component llegan a Instances y conservan Overrides |
| Variables | 🟡 | UI completa para `COLOR`; `FLOAT`, `STRING` y `BOOLEAN` sin Editing UI |
| Collections y Modes | 🟡 | Collections, Modes y Active mode; sin Variable-driven theming UI |
| Styles | 🔲 | No hay Named presets reutilizables |
| Libraries | ✅ | Local/Storage revisions inmutables, Selective publishing, Enablement, Scoped update review, Offline materialization y `.fig` persistence |
| Detach instance | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> convierte Instance en Frame |
| Go to main component | ✅ | Navega al Source component incluso entre Pages |

## Prototyping

| Función | Estado | Notas |
|---------|--------|-------|
| Prototype connections | 🔲 | No disponible |
| Triggers | 🔲 | Sin Click, Hover, Drag y otros Triggers |
| Actions | 🔲 | Sin Navigate, Overlay o Scroll |
| Animations y Transitions | 🔲 | No disponibles |
| Smart animate | 🔲 | No anima Layers equivalentes |
| Overlays | 🔲 | No hay Modal/Popover prototypes |
| Scroll y Overflow | 🔲 | No hay Prototype frames desplazables |
| Prototype flows | 🔲 | No hay Named starting points |
| Variables | 🔲 | No hay Conditional logic |
| Easing y Springs | 🔲 | No hay Custom curves |
| Present | 🔲 | No hay Fullscreen prototype viewer |

## Import y Export

| Función | Estado | Notas |
|---------|--------|-------|
| Import `.fig` | ✅ | Kiwi codec con 194 Definitions y unas 390 Fields por `NodeChange` |
| Export `.fig` | ✅ | Kiwi, Zstd y Thumbnail; `COMPONENT`/`COMPONENT_SET` se guardan como `SYMBOL` para Roundtrip |
| Save / Save As | ✅ | Native dialogs en Tauri, File System Access API en Chrome/Edge y Download fallback en Safari |
| Figma Clipboard: Paste | ✅ | Decodifica Kiwi binary del Clipboard de Figma |
| Figma Clipboard: Copy | ✅ | Genera Kiwi binary legible por Figma |
| Import Sketch | 🔲 | No hay Parser `.sketch` |
| Image/SVG/PDF export | 🟡 | PNG, JPG, WEBP y SVG ✅; PDF 🔲 |
| Version history | 🔲 | No permite consultar ni restaurar versiones anteriores |
| Assets entre Tools | ✅ | Figma Clipboard y Copy as text/SVG/PNG/JSX |

## Plugin API y Scripts

| Función | Estado | Notas |
|---------|--------|-------|
| `eval` con Figma Plugin API | ✅ | Headless JavaScript con objeto global `figma` compatible con Figma |

## Collaboration y Dev Mode

| Función | Estado | Notas |
|---------|--------|-------|
| Comments | 🔲 | Sin Pins, Threads o Resolve |
| Multiplayer | ✅ | P2P mediante Trystero y Yjs CRDT, Cursors y Follow mode; no necesita Server |
| Cursor chat | 🔲 | No hay Inline chat bubbles |
| Branching y Merging | 🔲 | No hay Version branches |
| Dev Mode | 🟡 | Code tab muestra JSX; sin CSS properties ni Handoff specs |
| Code Connect | 🔲 | No conecta Design components con Code |
| Code snippets | 🟡 | JSX con Syntax highlighting y Copy; sin Swift/Kotlin |
| Tailwind CSS v4 | ✅ | HTML con Tailwind utility classes desde Code panel, CLI o API |
| Figma for VS Code | 🔲 | Sin integración con Editor plugin |
| MCP server | ✅ | `@open-pencil/mcp` con stdio y HTTP; 87 Core tools y 3 File tools, 90 en total |
| CLI | ✅ | `info`, `tree`, `find`, `export`, `analyze`, `node`, `pages`, `variables`, `eval` y MCP server |

## Figma Draw

| Función | Estado | Notas |
|---------|--------|-------|
| Illustration tools | 🔲 | Sin Tools especializados de Figma Draw |
| Pattern transforms | 🔲 | Sin Patterns repetidos con Transforms |

# Compatibilité avec Figma

Comparaison des fonctions de Figma Design avec l’état actuel d’OpenPencil.

::: tip État
✅ Compatible — fonctionne de bout en bout · 🟡 Partiel — le comportement principal existe, mais certaines fonctions manquent · 🔲 Non implémenté
:::

**Couverture :** 94 fonctions sur 158 prises en compte — 76 ✅ complètes, 18 🟡 partielles et 64 🔲 absentes. Mise à jour : 2026-03-07.

## Interface et navigation

| Fonction | État | Notes |
|----------|------|-------|
| Toolbar | ✅ | Toolbar inférieure de style UI3 : Select, Frame, Section, Rectangle, Ellipse, Line, Text, Hand et Pen |
| Panneau Layers | ✅ | Tree avec Expand/Collapse, Drag reorder et Visibility ; Width réglable |
| Panneau Pages | ✅ | Créer, supprimer et renommer des Pages ; Viewport state indépendant |
| Panneau Properties | ✅ | Appearance, Fill, Stroke, Effects, Typography, Layout et Position ; Width réglable |
| Zoom et Pan | ✅ | <kbd>Ctrl</kbd> + Scroll, Pinch, <kbd>⌘</kbd><kbd>+</kbd>/<kbd>−</kbd>, <kbd>⌘</kbd><kbd>0</kbd> (100 %), <kbd>⌘</kbd><kbd>1</kbd> (Fit), <kbd>⌘</kbd><kbd>2</kbd> (Selection), <kbd>Space</kbd> + Drag, Button central et Hand tool (<kbd>H</kbd>) |
| Rulers | ✅ | Rulers supérieure et gauche avec plage Selection et Coordinate badges |
| Canvas background | ✅ | Background propre à chaque Page via Properties |
| Guides | 🔲 | Pas de Guides déplaçables depuis les Rulers |
| Actions menu / Command palette | 🔲 | Pas de recherche Quick actions |
| Menu contextuel | ✅ | Clipboard, ordre, Groups, Components, Visibility, Lock et Move to page |
| Raccourcis | 🟡 | Raccourcis principaux, Components, ordre, Visibility et Lock ; Scale, Arrow, Pencil, Flip et une partie du Text formatting manquent |
| Find and replace | 🔲 | Pas de recherche/remplacement global du texte |
| Layer outlines | 🔲 | Pas de Wireframe view de toutes les Layers |
| Thumbnail personnalisée | 🔲 | Générée à l’Export, mais non personnalisable |
| Nudge settings | 🔲 | Valeurs 1 px et 10 px ; pas de Small/Big nudge personnalisés |
| Application menu | ✅ | File, Edit, View, Object, Text et Arrange dans le Browser ; Native menus dans Tauri |
| AI tools | 🟡 | 90 Tools via OpenRouter et MCP server ; pas d’Images générées par AI ni d’AI Search |

## Layers et Shapes

| Fonction | État | Notes |
|----------|------|-------|
| Rectangle, Ellipse, Line, Polygon et Star | ✅ | Shapes de base ; Side count du Polygon et Inner radius de Star configurables |
| Frames | ✅ | Clip content, Coordinate system propre et Presets de création/Resize proches de Figma |
| Groups | ✅ | <kbd>⌘</kbd><kbd>G</kbd> et <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> |
| Sections | ✅ | Title pills, intégration automatique des objets superposés et Text adapté à Luminance |
| Arc | ✅ | `arcData` avec Start angle, End angle et Inner radius |
| Pencil | 🔲 | Pas de Freehand drawing tool |
| Masks | 🔲 | Pas de Shape masks pour découper les Layers |
| Layer types et hiérarchie | ✅ | 17 Node types, Map plate et Parent-child tree |
| Selection | ✅ | Click, Shift-click et Marquee selection |
| Alignment et Position | ✅ | Position, Rotation et Dimensions dans Properties |
| Copy et Paste | ✅ | Clipboard standard, Figma Kiwi binary et Copy as text/SVG/PNG/JSX |
| Resize proportionnel | 🟡 | Shift conserve les proportions ; pas de Scale tool (<kbd>K</kbd>) |
| Lock | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd> ; les objets verrouillés ne sont ni sélectionnables ni déplaçables sur le canvas |
| Visibility | ✅ | Eye icon et <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> |
| Rename | ✅ | Double-click dans Layers ; Enter, Escape ou Blur termine l’édition |
| Bring to front / Send to back | ✅ | ] et [ ainsi que le menu contextuel |
| Move to page | ✅ | Déplace la Selection entre les Pages |
| Constraints | 🔲 | Pas de Pinning des Edges ou Center lors du Parent resize |
| Smart selection | 🔲 | Pas de distribution/alignement uniforme de Multi-selection |
| Layout guides | 🔲 | Pas de Columns, Rows ou Grid overlays sur les Frames |
| Mesurer les distances | 🔲 | Pas de mesure avec Alt-hover |
| Édition multiple | ✅ | Position, Size, Appearance, Fill, Stroke et Effects ; Values divergents affichés Mixed |
| Objets similaires | 🔲 | Pas d’Identify matching objects |
| Copy/Paste properties | 🔲 | Pas de copie de Fills, Strokes ou Effects entre Layers |
| Parent-child relationships | ✅ | Hiérarchie complète via `parentIndex` et Reparenting par Drag |

## Vector tools

| Fonction | État | Notes |
|----------|------|-------|
| Vector networks | ✅ | Modèle compatible Figma, pas uniquement des Paths simples |
| Pen tool | ✅ | Corner points, Bezier curves et Paths ouverts/fermés |
| Vector edit | 🟡 | Création disponible ; Vertex editing, Bend, Delete et Join avancés limités |
| Boolean operations | 🔲 | Pas d’Union, Subtract, Intersect ou Exclude |
| Flatten | 🔲 | Pas de fusion de Vector paths |
| Outline Stroke | 🔲 | Pas de conversion des Strokes en Paths |
| Text to paths | 🔲 | Pas de conversion du Text en Vector outlines |
| Shape builder | 🔲 | Pas de Boolean tool interactif |
| Offset path | 🔲 | Pas d’Inset/Outset |
| Simplify path | 🔲 | Pas de réduction des Vector points |

## Text et Typography

| Fonction | État | Notes |
|----------|------|-------|
| Text tool et Inline editing | ✅ | `textarea` invisible, Caret, Selection, Word select, Drag select, Double/Triple-click et Rich-text style runs ; <kbd>⌘</kbd><kbd>B</kbd>/<kbd>I</kbd>/<kbd>U</kbd> et **S** |
| Text rendering | ✅ | CanvasKit Paragraph pour Shaping, Line breaking et Metrics |
| System fonts | ✅ | Inter par défaut, font-kit dans Tauri avec Cache/Preloading, `queryLocalFonts` dans Browser |
| Font family et Style | ✅ | FontPicker avec Virtual scroll, Search et CSS preview ; Style dans Properties |
| Font size et Line height | ✅ | Modifiables dans Typography |
| Text alignment | 🟡 | Alignment de base ; Vertical alignment et Auto width/height manquent |
| Text styles | 🟡 | Bold, Italic, Underline et Strikethrough par Selection ; pas de Named styles réutilisables |
| Text resizing modes | 🔲 | Pas d’Auto width, Auto height ou Fixed size |
| Lists | 🔲 | Pas de Bulleted ou Numbered lists |
| Links | 🔲 | Pas d’Hyperlinks dans Text |
| Emoji et Smart symbols | 🔲 | Prise en charge incomplète |
| OpenType | 🔲 | Pas de Ligatures, Stylistic alternates ou Tabular figures |
| Variable fonts | 🔲 | Pas d’Axes réglables comme Weight, Width ou Slant |
| CJK | 🔲 | Prise en charge incomplète du chinois, japonais et coréen |
| RTL | 🔲 | Pas de Right-to-left layout |
| Icon fonts | 🔲 | Pas de traitement particulier des Icon glyphs |

## Colors, Gradients et Images

| Fonction | État | Notes |
|----------|------|-------|
| Color picker | ✅ | HSV field, Hue, Alpha et Hex input |
| Solid fills | ✅ | Hex color avec Opacity |
| Linear gradient | ✅ | Stops et Transform handles |
| Radial gradient | ✅ | CanvasKit shaders |
| Angular gradient | ✅ | Sweep/Conic gradient |
| Diamond gradient | ✅ | Diamond gradient à quatre points |
| Image fills | ✅ | Blob data et Scale modes Fill, Fit, Crop et Tile |
| Pattern fills | 🔲 | Pas de Patterns répétés |
| Blend modes | 🔲 | Pas de Layer ou Fill blend modes |
| Images et Video | 🟡 | Image fills rendus ; pas d’Import par Drag and drop ni Video |
| Image adjustments | 🔲 | Pas d’Exposure, Contrast ou Saturation |
| Crop | 🔲 | Pas de Cropping interactif |
| Eyedropper | 🔲 | Pas de prélèvement de Colors sur le canvas |
| Mixed-selection colors | 🔲 | Pas de modification groupée des Colors d’une Selection hétérogène |
| Color models | 🟡 | HSV et Hex ; pas de mode HSL ou RGB |

## Effects et Properties

| Fonction | État | Notes |
|----------|------|-------|
| Drop shadow | ✅ | Offset, Blur radius et Color via CanvasKit filters |
| Inner shadow | ✅ | Inset shadow |
| Layer blur | ✅ | Gaussian blur |
| Background blur | ✅ | Blur du contenu derrière la Layer |
| Foreground blur | ✅ | Blur devant la Layer |
| Stroke weight | ✅ | Configurable dans Properties |
| Stroke cap | ✅ | `NONE`, `ROUND`, `SQUARE`, `ARROW_LINES`, `ARROW_EQUILATERAL` |
| Stroke join | ✅ | Miter, Bevel et Round |
| Dash patterns | ✅ | Dash-on/Dash-off pattern |
| Stroke alignment | ✅ | Inside, Center et Outside avec Clipping compatible Figma |
| Stroke weights indépendants | ✅ | Top, Right, Bottom et Left via Side selector |
| Corner radius | ✅ | Uniforme ou par Corner |
| Corner smoothing | 🔲 | Pas de Continuous corner rounding |
| Plusieurs Fills/Strokes | 🔲 | Pas d’empilement de plusieurs Fills ou Strokes par Layer |

## Auto layout

| Fonction | État | Notes |
|----------|------|-------|
| Horizontal et Vertical flow | ✅ | Yoga WASM Flexbox |
| Activer Auto layout | ✅ | <kbd>⇧</kbd><kbd>A</kbd> sur Frame ou Selection |
| Gap | ✅ | Configurable dans Properties |
| Padding | ✅ | Uniforme ou par Side |
| Justify content | ✅ | Start, Center, End et Space between |
| Align items | ✅ | Start, Center, End et Stretch |
| Child sizing | ✅ | Fixed, Fill et Hug |
| Wrap | ✅ | Flex wrap |
| Grid | ✅ | CSS Grid via Yoga fork avec Tracks, Gaps et Spans |
| Nested flows | ✅ | Auto-layout Frames imbriqués avec Directions différentes |
| Drag reorder | ✅ | Insertion indicator visible |
| Min/max dimensions | 🔲 | Pas de Min/max constraints pour les Children |

## Components et Design systems

| Fonction | État | Notes |
|----------|------|-------|
| Créer des Components | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> ; Properties Text, Visibility, Instance swap et Variants |
| Component sets | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> ; Sparse variants multidimensionnels, Duplicate validation et Default en haut à gauche |
| Instances | ✅ | Assets, Insert, Properties et Overrides modifiables, Variant switching, Live sync et Update review |
| Variants | ✅ | Sparse combinations, Authoring, Switching, Duplicate validation et Top-left fallback |
| Component properties | ✅ | Boolean visibility, Text et Instance swap |
| Override propagation | ✅ | Modifications du Main component appliquées aux Instances avec conservation des Overrides |
| Variables | 🟡 | UI complète pour `COLOR` ; `FLOAT`, `STRING` et `BOOLEAN` sans Editing UI |
| Collections et Modes | 🟡 | Collections, Modes et Active mode ; pas de Variable-driven theming UI |
| Styles | 🔲 | Pas de Named presets réutilisables |
| Libraries | ✅ | Local/Storage revisions immuables, Selective publishing, Enablement, Scoped update review, Offline materialization et `.fig` persistence |
| Detach instance | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> transforme l’Instance en Frame |
| Go to main component | ✅ | Navigation vers le Source component, y compris entre Pages |

## Prototyping

| Fonction | État | Notes |
|----------|------|-------|
| Prototype connections | 🔲 | Non disponible |
| Triggers | 🔲 | Pas de Click, Hover, Drag ou autres Triggers |
| Actions | 🔲 | Pas de Navigate, Overlay ou Scroll |
| Animations et Transitions | 🔲 | Non disponibles |
| Smart animate | 🔲 | Pas d’animation automatique des Layers correspondantes |
| Overlays | 🔲 | Pas de Modal/Popover prototypes |
| Scroll et Overflow | 🔲 | Pas de Prototype frames scrollables |
| Prototype flows | 🔲 | Pas de Named starting points |
| Variables | 🔲 | Pas de Conditional logic |
| Easing et Springs | 🔲 | Pas de Custom curves |
| Present | 🔲 | Pas de Fullscreen prototype viewer |

## Import et Export

| Fonction | État | Notes |
|----------|------|-------|
| Import `.fig` | ✅ | Kiwi codec avec 194 Definitions et environ 390 Fields par `NodeChange` |
| Export `.fig` | ✅ | Kiwi, Zstd et Thumbnail ; `COMPONENT`/`COMPONENT_SET` enregistrés comme `SYMBOL` pour le Roundtrip |
| Save / Save As | ✅ | Native dialogs dans Tauri, File System Access API dans Chrome/Edge et Download fallback dans Safari |
| Figma Clipboard: Paste | ✅ | Décode Kiwi binary depuis Figma Clipboard |
| Figma Clipboard: Copy | ✅ | Produit un Kiwi binary lisible par Figma |
| Import Sketch | 🔲 | Pas de Parser `.sketch` |
| Image/SVG/PDF export | 🟡 | PNG, JPG, WEBP et SVG ✅ ; PDF 🔲 |
| Version history | 🔲 | Pas de consultation/restauration des versions précédentes |
| Assets entre Tools | ✅ | Figma Clipboard et Copy as text/SVG/PNG/JSX |

## Plugin API et Scripts

| Fonction | État | Notes |
|----------|------|-------|
| `eval` avec Figma Plugin API | ✅ | Headless JavaScript avec objet global `figma` compatible Figma |

## Collaboration et Dev Mode

| Fonction | État | Notes |
|----------|------|-------|
| Comments | 🔲 | Pas de Pins, Threads ou Resolve |
| Multiplayer | ✅ | P2P via Trystero et Yjs CRDT, Cursors et Follow mode ; aucun Server nécessaire |
| Cursor chat | 🔲 | Pas d’Inline chat bubbles |
| Branching et Merging | 🔲 | Pas de Version branches |
| Dev Mode | 🟡 | Code tab affiche JSX ; pas de CSS properties ni Handoff specs |
| Code Connect | 🔲 | Pas de liaison entre Design components et Code |
| Code snippets | 🟡 | JSX avec Syntax highlighting et Copy ; pas de Swift/Kotlin |
| Tailwind CSS v4 | ✅ | HTML avec Tailwind utility classes depuis Code panel, CLI ou API |
| Figma for VS Code | 🔲 | Pas d’intégration Editor plugin |
| MCP server | ✅ | `@open-pencil/mcp` avec stdio et HTTP ; 87 Core tools plus 3 File tools, 90 au total |
| CLI | ✅ | `info`, `tree`, `find`, `export`, `analyze`, `node`, `pages`, `variables`, `eval` et MCP server |

## Figma Draw

| Fonction | État | Notes |
|----------|------|-------|
| Illustration tools | 🔲 | Pas de Tools spécialisés Figma Draw |
| Pattern transforms | 🔲 | Pas de Patterns répétés avec Transforms |

# Fonctionnalités

## Fichiers Figma

OpenPencil ouvre et enregistre directement les fichiers `.fig`. L’import et l’export utilisent le même codec binaire Kiwi que Figma : 194 définitions de schéma et environ 390 champs par Node. Save : <kbd>⌘</kbd><kbd>S</kbd>. Save As : <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd>.

**Copy et Paste avec Figma :** sélectionnez des objets dans Figma, appuyez sur <kbd>⌘</kbd><kbd>C</kbd>, passez à OpenPencil puis utilisez <kbd>⌘</kbd><kbd>V</kbd>. Fills, Strokes, Auto layout, texte, Effects, Corner radii et Vector networks sont conservés dans les deux sens.

## Dessin et édition

- **Shapes :** Rectangle (<kbd>R</kbd>), Ellipse (<kbd>O</kbd>), Line (<kbd>L</kbd>), Polygon et Star
- **Pen tool :** Vector networks, Bezier curves et Tangent handles
- **Texte :** édition directe sur le canvas, prise en charge des IME et Double-click pour ouvrir l’Edit mode
- **Rich text :** Bold (<kbd>⌘</kbd><kbd>B</kbd>), Italic (<kbd>⌘</kbd><kbd>I</kbd>), Underline (<kbd>⌘</kbd><kbd>U</kbd>) et Strikethrough sur des plages de caractères
- **Auto layout :** Flexbox et CSS Grid via Yoga WASM, avec Direction, Gap, Padding, Justify, Align, Child sizing et Grid tracks ; <kbd>⇧</kbd><kbd>A</kbd> active ou désactive le Layout
- **Components :** création avec <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>, Component sets avec <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd>, Instances avec Overrides et synchronisation
- **Variables :** Design tokens organisés en Collections et Modes, avec Types Color/Float/String/Boolean et Variable bindings
- **Sections :** conteneurs d’organisation qui intègrent automatiquement les objets superposés

## Panneau Properties

Les onglets Design, Code et AI s’adaptent à la Selection :

- **Appearance :** Opacity, Corner radius uniforme ou par coin et Visibility
- **Fill :** Solid color, Gradients linear/radial/angular/diamond et Images
- **Stroke :** Color, Weight, Alignment, épaisseur par côté, Cap, Join et Dash
- **Effects :** Drop shadow, Inner shadow, Layer blur, Background blur et Foreground blur
- **Typography :** Font picker avec Virtual scrolling et Search, Style, Size, Alignment et Formatting
- **Layout :** contrôles d’Auto layout
- **Export :** Scale, PNG/JPG/WEBP/SVG et Live preview

## Rendu

OpenPencil utilise Skia via CanvasKit WASM, le même moteur graphique que Figma :

- Gradients linear, radial, angular et diamond ;
- Image fills avec plusieurs Scale modes ;
- Effects avec Cache par Node ;
- Arcs, ellipses partielles et rings ;
- Viewport culling et réutilisation des Paint objects ;
- Snap guides tenant compte de la Rotation ;
- Rulers avec plage de Selection ;
- Hover highlights suivant la géométrie réelle.

## Undo et Redo

La création, la suppression, les déplacements, le Resize, les modifications de Properties, le Reparenting, le Layout et les Variables peuvent être annulés. OpenPencil stocke des Commands inverses. Raccourcis : <kbd>⌘</kbd><kbd>Z</kbd> et <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd>.

## Documents avec plusieurs Pages

Vous pouvez créer, supprimer et renommer des Pages. Chacune conserve son propre Viewport state. Un Double-click lance le changement de nom.

## Plusieurs fichiers

OpenPencil ouvre plusieurs documents dans des Tabs. <kbd>⌘</kbd><kbd>T</kbd> en crée un, <kbd>⌘</kbd><kbd>W</kbd> le ferme et <kbd>⌘</kbd><kbd>O</kbd> ouvre un fichier.

## Export

- **Images :** PNG, JPG et WEBP avec une Scale de 0,5× à 4× depuis le panneau, le menu contextuel ou <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd>
- **SVG :** Shapes, texte avec Style runs, Gradients, Effects et Blend modes
- **Tailwind JSX :** HTML avec les Utility classes de Tailwind v4 pour React ou Vue
- **Copy as :** Text, SVG, PNG avec <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> ou JSX depuis le menu contextuel

CLI : `openpencil export design.fig -f jsx --style tailwind`

## AI Chat

<kbd>⌘</kbd><kbd>J</kbd> ouvre l’AI Assistant. Plus de 90 Tools peuvent créer des Shapes, modifier des Styles, gérer des Layouts, travailler avec des Components et Variables, exécuter des Boolean operations, analyser les Design tokens et exporter des Assets. Anthropic, OpenAI, Google AI, OpenRouter et les Endpoints compatibles sont pris en charge.

Les Tool calls apparaissent dans une Timeline sous forme d’entrées repliables. Pour vérifier les modifications, l’Assistant rend le résultat et le compare à la demande. Toutes les modifications réalisées par l’AI prennent en charge Undo.

Configuration et Providers : [AI Chat](/programmable/ai-chat).

## Serveur MCP

Claude Code, Cursor, Windsurf et les autres MCP clients peuvent lire et modifier des fichiers `.fig` grâce à plus de 90 Tools. Les Transports stdio et HTTP sont disponibles.

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

Consultez la [référence des Tools MCP](/programmable/mcp-server).

## CLI

La CLI examine, exporte et analyse les fichiers `.fig` :

```sh
openpencil tree design.fig              # Document tree
openpencil find design.fig --type TEXT  # Search
openpencil export design.fig -f png     # Render
openpencil analyze colors design.fig    # Color audit
openpencil analyze clusters design.fig  # Repeated patterns
openpencil eval design.fig -c "..."     # Figma Plugin API
```

Lorsque l’application de bureau est ouverte, le nom du fichier peut être omis afin de contrôler le document via RPC :

```sh
openpencil tree          # Document ouvert
openpencil export -f png # Screenshot du canvas
```

Toutes les Commands acceptent `--json`. Installation : `npm install -g @open-pencil/cli` ou `bun add -g @open-pencil/cli`.

## Collaboration en temps réel

La Collaboration fonctionne en P2P via WebRTC et ne nécessite aucun serveur. Il suffit de partager un lien.

- Live cursors avec Color et Name
- Presence avatars
- Follow mode pour suivre le Viewport d’un autre participant
- Persistance locale dans IndexedDB
- Room IDs cryptographiquement sûres via `crypto.getRandomValues()`

## Bureau et Web

**Bureau :** Tauri v2, environ 7 Mo, pour macOS, Windows et Linux. L’application macOS est signée et notariée. Elle inclut les Native menus, le fonctionnement Offline et Autosave.

**Web :** [app.openpencil.dev](https://app.openpencil.dev) fonctionne dans le Browser et peut être installé comme PWA sur mobile avec une interface tactile.

**Homebrew :**

```sh
brew install open-pencil/tap/open-pencil
```

## Fallback Google Fonts

Si une Font family n’est pas disponible localement, OpenPencil la télécharge automatiquement depuis Google Fonts. Aucune installation manuelle n’est requise lors de l’ouverture d’un fichier `.fig`.

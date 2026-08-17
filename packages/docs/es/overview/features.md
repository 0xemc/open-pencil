# Características

## Archivos de Figma

OpenPencil abre y guarda archivos `.fig` directamente. La importación y exportación usan el mismo códec binario Kiwi que Figma: 194 definiciones de esquema y unos 390 campos por Node. Guardar: <kbd>⌘</kbd><kbd>S</kbd>. Save As: <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd>.

**Copy y Paste con Figma:** selecciona objetos en Figma, pulsa <kbd>⌘</kbd><kbd>C</kbd>, cambia a OpenPencil y usa <kbd>⌘</kbd><kbd>V</kbd>. Fills, Strokes, Auto layout, texto, Effects, Corner radii y Vector networks se conservan en ambas direcciones.

## Dibujo y edición

- **Shapes:** Rectangle (<kbd>R</kbd>), Ellipse (<kbd>O</kbd>), Line (<kbd>L</kbd>), Polygon y Star
- **Pen tool:** Vector networks, Bezier curves y Tangent handles
- **Texto:** edición directa en el canvas, soporte de IME y Double-click para abrir el Edit mode
- **Rich text:** Bold (<kbd>⌘</kbd><kbd>B</kbd>), Italic (<kbd>⌘</kbd><kbd>I</kbd>), Underline (<kbd>⌘</kbd><kbd>U</kbd>) y Strikethrough en rangos de caracteres
- **Auto layout:** Flexbox y CSS Grid mediante Yoga WASM, con Direction, Gap, Padding, Justify, Align, Child sizing y Grid tracks; <kbd>⇧</kbd><kbd>A</kbd> lo activa o desactiva
- **Components:** creación con <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>, Component sets con <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd>, Instances con Overrides y sincronización
- **Variables:** Design tokens con Collections, Modes como Light/Dark, Types Color/Float/String/Boolean y Variable bindings
- **Sections:** contenedores de organización que incorporan automáticamente los objetos superpuestos

## Panel Properties

Las pestañas Design, Code y AI se adaptan a la selección:

- **Appearance:** Opacity, Corner radius uniforme o por esquina y Visibility
- **Fill:** Solid color, Gradients lineal/radial/angular/diamond e Images
- **Stroke:** Color, Weight, Alignment, pesos por lado, Cap, Join y Dash
- **Effects:** Drop shadow, Inner shadow, Layer blur, Background blur y Foreground blur
- **Typography:** Font picker con Virtual scrolling y Search, Style, Size, Alignment y Formatting
- **Layout:** controles de Auto layout
- **Export:** Scale, PNG/JPG/WEBP/SVG y Live preview

## Renderizado

OpenPencil usa Skia mediante CanvasKit WASM, el mismo motor gráfico de Figma:

- Gradients lineal, radial, angular y diamond;
- Image fills con varios Scale modes;
- Effects con caché por Node;
- Arcs, elipses parciales y rings;
- Viewport culling y reutilización de Paint objects;
- Snap guides que tienen en cuenta la rotación;
- Rulers con el rango de la Selection;
- Hover highlights que siguen la geometría real.

## Undo y Redo

Creación, eliminación, movimientos, Resize, cambios de Properties, Reparenting, Layout y Variables se pueden deshacer. OpenPencil almacena Commands inversos. Atajos: <kbd>⌘</kbd><kbd>Z</kbd> y <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd>.

## Documentos con varias Pages

Puedes crear, eliminar y renombrar Pages. Cada una mantiene su propio Viewport state. Double-click inicia el cambio de nombre.

## Varios archivos

OpenPencil abre varios documentos en Tabs. <kbd>⌘</kbd><kbd>T</kbd> crea uno, <kbd>⌘</kbd><kbd>W</kbd> lo cierra y <kbd>⌘</kbd><kbd>O</kbd> abre un archivo.

## Export

- **Imágenes:** PNG, JPG y WEBP con Scale de 0,5× a 4× desde el panel, el menú contextual o <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd>
- **SVG:** Shapes, texto con Style runs, Gradients, Effects y Blend modes
- **Tailwind JSX:** HTML con Utility classes de Tailwind v4 para React o Vue
- **Copy as:** Text, SVG, PNG con <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> o JSX desde el menú contextual

CLI: `openpencil export design.fig -f jsx --style tailwind`

## AI Chat

<kbd>⌘</kbd><kbd>J</kbd> abre el AI Assistant. Más de 90 Tools pueden crear Shapes, modificar Styles, gestionar Layouts, trabajar con Components y Variables, ejecutar Boolean operations, analizar Design tokens y exportar Assets. Admite Anthropic, OpenAI, Google AI, OpenRouter y Endpoints compatibles.

Los Tool calls aparecen como entradas plegables en una Timeline. Para verificar visualmente los cambios, el Assistant renderiza el resultado y lo compara con la solicitud. Todas las modificaciones realizadas por AI admiten Undo.

Configuración y Providers: [AI Chat](/programmable/ai-chat).

## Servidor MCP

Claude Code, Cursor, Windsurf y otros MCP clients pueden leer y modificar archivos `.fig` con más de 90 Tools. Están disponibles los Transports stdio y HTTP.

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

Consulta la [referencia de Tools MCP](/programmable/mcp-server).

## CLI

La CLI examina, exporta y analiza archivos `.fig`:

```sh
openpencil tree design.fig              # Document tree
openpencil find design.fig --type TEXT  # Search
openpencil export design.fig -f png     # Render
openpencil analyze colors design.fig    # Color audit
openpencil analyze clusters design.fig  # Repeated patterns
openpencil eval design.fig -c "..."     # Figma Plugin API
```

Si la aplicación de escritorio está abierta, se puede omitir el archivo para controlar el documento mediante RPC:

```sh
openpencil tree          # Documento abierto
openpencil export -f png # Screenshot del canvas
```

Todos los Commands admiten `--json`. Instalación: `npm install -g @open-pencil/cli` o `bun add -g @open-pencil/cli`.

## Colaboración en tiempo real

La colaboración funciona P2P mediante WebRTC y no necesita servidor. Basta con compartir un enlace.

- Live cursors con color y nombre
- Presence avatars
- Follow mode para seguir el Viewport de otro participante
- Persistencia local en IndexedDB
- Room IDs criptográficamente seguras mediante `crypto.getRandomValues()`

## Escritorio y web

**Escritorio:** Tauri v2, unos 7 MB, para macOS, Windows y Linux. La aplicación de macOS está firmada y notarizada. Incluye menús nativos, modo Offline y Autosave.

**Web:** [app.openpencil.dev](https://app.openpencil.dev) funciona en el navegador y se puede instalar como PWA en móviles con una interfaz adaptada al tacto.

**Homebrew:**

```sh
brew install open-pencil/tap/open-pencil
```

## Fallback de Google Fonts

Si una Font family no está disponible localmente, OpenPencil la descarga automáticamente desde Google Fonts. No es necesario instalarla manualmente al abrir un archivo `.fig`.

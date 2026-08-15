# Funkcje

## Pliki Figma .fig

OpenPencil otwiera i zapisuje `.fig` bez wcześniejszej konwersji. Import i export korzystają z binary codec Kiwi używanego przez Figmę: 194 schema definitions i około 390 fields dla każdego obiektu. Save: <kbd>⌘</kbd><kbd>S</kbd>; Save As: <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd>.

**Copy i Paste między Figmą i OpenPencil:** skopiuj obiekty w jednym edytorze i wklej w drugim. Zachowywane są fills, strokes, Auto layout, text, effects, corner radii i vector networks. Wymiana działa w obie strony.

## Rysowanie i edycja

- **Shapes:** Rectangle, Ellipse, Line, Polygon i Star.
- **Pen tool:** vector networks, krzywe Béziera i tangent handles.
- **Text:** edycja bezpośrednio na obszarze roboczym i obsługa IME.
- **Rich text:** bold, italic, underline i strikethrough dla poszczególnych znaków.
- **Auto layout:** flexbox i CSS Grid przez Yoga WASM; direction, gap, padding, justify, align, sizing i grid tracks. Skrót <kbd>⇧</kbd><kbd>A</kbd>.
- **Components:** tworzenie components i component sets, instances, overrides oraz automatyczna synchronizacja.
- **Variables:** design tokens z collections, modes Light i Dark, typami color, float, string i boolean oraz variable bindings.
- **Sections:** kontenery najwyższego poziomu, które przejmują przecinające się obiekty i pokazują title pill.

## Panel właściwości

Zawartość kart Design, Code i AI zależy od selection.

- **Appearance:** opacity, wspólny lub osobny corner radius i visibility.
- **Fill:** solid, linear, radial, angular i diamond gradients oraz images.
- **Stroke:** color, weight, Inside/Center/Outside alignment, osobna grubość boków, cap, join i dash.
- **Effects:** drop shadow, inner shadow, layer blur, background blur i foreground blur.
- **Typography:** Font picker z search i virtual scroll, weight, size, alignment i style buttons.
- **Layout:** ustawienia Auto layout.
- **Export:** scale, PNG/JPG/WEBP/SVG i live preview.

## Rendering

OpenPencil używa Skia przez CanvasKit WASM — tego samego rendering engine co Figma:

- linear, radial, angular i diamond gradient fills;
- image fills z różnymi scale modes;
- effects z cache dla poszczególnych obiektów;
- arc data dla częściowych ellipses i donut shapes;
- viewport culling i ponowne użycie paint;
- snap guides uwzględniające rotation;
- rulers z oznaczeniami selection;
- hover highlight zgodny z rzeczywistą geometry.

## Undo i Redo

Można cofnąć tworzenie, usuwanie, przesuwanie, resize, zmianę properties i parent, layout oraz variables. Historia używa inverse commands. Skróty: <kbd>⌘</kbd><kbd>Z</kbd> i <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd>.

## Wiele stron

Strony można dodawać, usuwać i przemianowywać. Każda strona ma własny viewport.

## Wiele dokumentów

Dokumenty otwierają się w kartach. <kbd>⌘</kbd><kbd>T</kbd> tworzy nową kartę, <kbd>⌘</kbd><kbd>W</kbd> ją zamyka, a <kbd>⌘</kbd><kbd>O</kbd> otwiera plik.

## Export

- **Images:** PNG, JPG i WEBP w skali od 0,5× do 4× przez panel, menu kontekstowe albo <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd>.
- **SVG:** shapes, text ze style runs, gradients, effects i blend modes.
- **Tailwind JSX:** HTML z utility classes Tailwind v4 dla React lub Vue.
- **Copy as:** text, SVG, PNG albo JSX przez menu kontekstowe.

```sh
openpencil export design.fig -f jsx --style tailwind
```

## AI chat

Naciśnij <kbd>⌘</kbd><kbd>J</kbd>. Ponad 90 tools tworzy shapes, zmienia styles i layout, pracuje z components i variables, wykonuje boolean operations, analizuje design tokens i eksportuje assets. Można podłączyć Anthropic, OpenAI, Google AI, OpenRouter albo compatible endpoint.

Tool calls są wyświetlane jako zwijane elementy timeline. Do kontroli wizualnej assistant eksportuje wynik i porównuje go z poleceniem. Wszystkie zmiany AI obsługują Undo.

Konfigurację opisano na stronie [AI chat](/programmable/ai-chat).

## MCP server

Claude Code, Cursor, Windsurf i inni MCP clients mogą odczytywać i zmieniać `.fig` bez interfejsu. Dostępnych jest ponad 90 tools i dwa transports: stdio oraz HTTP.

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

Pełna lista znajduje się w [dokumentacji MCP tools](/programmable/mcp-server).

## CLI

```sh
openpencil tree design.fig              # Drzewo obiektów
openpencil find design.fig --type TEXT  # Wyszukiwanie
openpencil export design.fig -f png     # Export
openpencil analyze colors design.fig    # Colors
openpencil analyze clusters design.fig  # Powtarzające się structures
openpencil eval design.fig -c "..."     # Figma Plugin API
```

Jeśli desktop app jest uruchomiona, plik można pominąć. CLI połączy się przez RPC z otwartym dokumentem.

```sh
openpencil tree          # Otwarty dokument
openpencil export -f png # Zrzut obszaru roboczego
```

Wszystkie polecenia obsługują `--json`. Instalacja: `npm install -g @open-pencil/cli` albo `bun add -g @open-pencil/cli`.

## Współpraca

Peer-to-peer WebRTC nie wymaga centralnego server. Wyślij link pozostałym uczestnikom i wspólnie edytujcie dokument.

- Live cursors z kolorowymi strzałkami i nazwami.
- Presence avatars.
- Follow mode dla viewport innego uczestnika.
- Lokalny zapis w IndexedDB.
- Kryptograficznie bezpieczne room IDs przez `crypto.getRandomValues()`.

## Desktop i Web

**Desktop app:** Tauri v2, około 7 MB, wersje dla macOS, Windows i Linux, native menus, offline mode i autosave.

**Web app:** [app.openpencil.dev](https://app.openpencil.dev), instalacja jako PWA i interfejs dla touch screens.

```sh
brew install open-pencil/tap/open-pencil
```

## Google Fonts fallback

Jeśli odpowiedniego font nie ma na komputerze, OpenPencil automatycznie pobiera go z Google Fonts. Podczas otwierania `.fig` z nieznanymi fonts nie trzeba instalować ich ręcznie.

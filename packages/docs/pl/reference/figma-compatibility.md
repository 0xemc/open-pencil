# Zgodność z Figmą

Porównanie funkcji Figma Design z aktualnymi możliwościami OpenPencil.

::: tip Status
✅ Obsługiwane — funkcja działa w pełnym zakresie · 🟡 Częściowo — podstawowe działanie jest dostępne, ale brakuje części możliwości · 🔲 Brak
:::

**Pokrycie:** uwzględniono 94 ze 158 funkcji Figmy — 76 ✅ obsługiwanych, 18 🟡 częściowo i 64 🔲 niezaimplementowane. Aktualizacja: 2026-03-07.

## Interfejs i nawigacja

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Toolbar | ✅ | Dolny toolbar w stylu UI3: Select, Frame, Section, Rectangle, Ellipse, Line, Text, Hand i Pen |
| Panel Layers | ✅ | Rozwijane drzewo, drag reorder, visibility i zmienna szerokość |
| Panel Pages | ✅ | Dodawanie, usuwanie i przemianowywanie stron; osobny viewport każdej strony |
| Panel Properties | ✅ | Appearance, Fill, Stroke, Effects, Typography, Layout i Position; zmienna szerokość |
| Zoom i przesuwanie widoku | ✅ | <kbd>Ctrl</kbd> + scroll, pinch, <kbd>⌘</kbd><kbd>+</kbd>/<kbd>−</kbd>, <kbd>⌘</kbd><kbd>0</kbd> (100%), <kbd>⌘</kbd><kbd>1</kbd> (Fit), <kbd>⌘</kbd><kbd>2</kbd> (Selection), <kbd>Space</kbd> + drag, środkowy przycisk i Hand tool (<kbd>H</kbd>) |
| Rulers | ✅ | Rulers u góry i z lewej strony, zakres selection i badges coordinates |
| Tło obszaru roboczego | ✅ | Osobny color każdej strony ustawiany w panelu Properties |
| Guides | 🔲 | Brak przeciąganych guides z rulers |
| Actions menu / command palette | 🔲 | Brak odpowiednika Quick actions |
| Menu kontekstowe | ✅ | Clipboard, kolejność warstw, groups, components, visibility, lock i Move to page |
| Skróty klawiaturowe | 🟡 | Dostępne podstawowe shortcuts, components, kolejność, visibility i lock; brak Scale, Arrow, Pencil, flip oraz części formatting tekstu |
| Find and replace | 🔲 | Brak wyszukiwania i zamiany tekstu w całym dokumencie |
| Layer outlines | 🔲 | Brak wireframe view wszystkich warstw |
| Własna thumbnail pliku | 🔲 | Thumbnail jest generowana podczas eksportu, ale nie można wybrać własnej |
| Ustawienia nudge | 🔲 | Dostępne wartości 1 px i 10 px; brak własnych wartości small/big nudge |
| Menu aplikacji | ✅ | W browser: File, Edit, View, Object, Text i Arrange; Tauri używa native menu |
| AI tools | 🟡 | 90 tools przez OpenRouter i MCP server; brak generowania obrazów oraz wyszukiwania z AI |

## Warstwy i kształty

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Rectangle, Ellipse, Line, Polygon i Star | ✅ | Wszystkie podstawowe shapes; konfigurowalna liczba boków Polygon i inner radius Star |
| Frames | ✅ | Clip content, niezależny coordinate system oraz presets tworzenia i resize zgodne z Figmą |
| Groups | ✅ | <kbd>⌘</kbd><kbd>G</kbd> i <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> |
| Sections | ✅ | Title pills, automatyczne przejmowanie nakładających się obiektów i color tekstu zależny od luminance |
| Arc | ✅ | `arcData` ze start angle, end angle i inner radius |
| Pencil | 🔲 | Brak freehand drawing tool |
| Masks | 🔲 | Brak masks przycinających warstwy |
| Types i hierarchia warstw | ✅ | 17 node types, płaska `Map` i parent-child tree |
| Selection | ✅ | Click, Shift-click i marquee selection |
| Alignment i position | ✅ | Position, rotation i dimensions w panelu Properties |
| Copy i Paste | ✅ | Standardowy clipboard, Figma Kiwi binary oraz Copy as text/SVG/PNG/JSX |
| Proporcjonalny resize | 🟡 | Shift zachowuje proporcje; brak osobnego Scale tool (<kbd>K</kbd>) |
| Lock | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd>; zablokowanych obiektów nie można wybrać ani przesunąć na canvas |
| Visibility | ✅ | Ikona oka i <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> |
| Zmiana nazwy | ✅ | Double-click w panelu Layers; Enter, Escape albo blur kończy edycję |
| Bring to front / Send to back | ✅ | Skróty ] i [ oraz menu kontekstowe |
| Move to page | ✅ | Przenoszenie selection między stronami z menu kontekstowego |
| Constraints | 🔲 | Brak przypinania edges i center podczas resize parent |
| Smart selection | 🔲 | Brak równomiernego rozmieszczania multi-selection |
| Layout guides | 🔲 | Brak columns, rows i grid guides na frames |
| Pomiar odległości | 🔲 | Brak pomiaru po Alt-hover |
| Zbiorcza edycja obiektów | ✅ | Position, size, appearance, fills, strokes i effects wielu obiektów; różne wartości są oznaczane jako Mixed |
| Wyszukiwanie podobnych obiektów | 🔲 | Brak Identify matching objects |
| Copy/Paste properties | 🔲 | Brak kopiowania fills, strokes i effects między warstwami |
| Parent-child relationships | ✅ | Pełna hierarchia przez `parentIndex` i reparenting przez drag |

## Wektory

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Vector networks | ✅ | Model zgodny z Figmą, nie tylko proste paths |
| Pen tool | ✅ | Corner points, Bezier curves oraz otwarte i zamknięte paths |
| Edycja wektorów | 🟡 | Tworzenie działa; zaawansowana edycja vertices, bend, usuwanie i łączenie pozostają ograniczone |
| Boolean operations | 🔲 | Brak Union, Subtract, Intersect i Exclude |
| Flatten | 🔲 | Brak łączenia vector paths |
| Outline Stroke | 🔲 | Brak konwersji strokes na paths |
| Tekst na paths | 🔲 | Brak konwersji tekstu na vector outlines |
| Shape builder | 🔲 | Brak interaktywnego boolean tool |
| Offset path | 🔲 | Brak inset/outset path |
| Simplify path | 🔲 | Brak redukcji liczby vector points |

## Tekst i typografia

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Text tool i edycja na canvas | ✅ | Phantom `textarea`, caret, selection, wybór słowa, drag selection, double/triple-click i rich text style runs; <kbd>⌘</kbd><kbd>B</kbd>/<kbd>I</kbd>/<kbd>U</kbd> oraz button **S** |
| Rendering tekstu | ✅ | CanvasKit Paragraph: shaping, line breaking i metrics |
| System fonts | ✅ | Domyślny Inter; font-kit w Tauri z cache i preloading, `queryLocalFonts` w browser |
| Font family i style | ✅ | FontPicker z virtual scroll, search i CSS preview; wybór style w panelu Properties |
| Font size i line height | ✅ | Edycja w sekcji Typography |
| Text alignment | 🟡 | Podstawowy alignment; brak vertical alignment i wszystkich trybów auto width/height |
| Text styles | 🟡 | Bold, italic, underline i strikethrough dla selection; brak named reusable text styles |
| Text resizing modes | 🔲 | Brak Auto width, Auto height i Fixed size |
| Listy | 🔲 | Brak bulleted i numbered lists |
| Links | 🔲 | Brak hyperlinks w tekście |
| Emoji i smart symbols | 🔲 | Brak pełnej obsługi emoji i znaków specjalnych |
| OpenType | 🔲 | Brak ligatures, stylistic alternates i tabular figures |
| Variable fonts | 🔲 | Brak regulacji axes, takich jak weight, width i slant |
| CJK | 🔲 | Brak pełnej obsługi tekstu chińskiego, japońskiego i koreańskiego |
| RTL | 🔲 | Brak right-to-left layout |
| Icon fonts | 🔲 | Brak specjalnej obsługi glyphs icon fonts |

## Kolory, gradients i obrazy

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Color picker | ✅ | HSV square, hue, alpha i hex input |
| Solid fills | ✅ | Hex color i opacity |
| Linear gradient | ✅ | Gradient stops i transform handles |
| Radial gradient | ✅ | CanvasKit shaders |
| Angular gradient | ✅ | Sweep/conic gradient |
| Diamond gradient | ✅ | Czteropunktowy diamond gradient |
| Image fills | ✅ | Dane blob i modes fill, fit, crop oraz tile |
| Pattern fills | 🔲 | Brak powtarzanych pattern fills |
| Blend modes | 🔲 | Brak layer i fill blend modes |
| Obrazy i video | 🟡 | Image fills są renderowane; brak importu obrazów przez drag and drop i obsługi video |
| Korekcja obrazu | 🔲 | Brak exposure, contrast i saturation |
| Crop | 🔲 | Brak interaktywnego image crop |
| Eyedropper | 🔲 | Brak pobierania color z canvas |
| Color w mixed selection | 🔲 | Brak wspólnej regulacji colors heterogenicznego selection |
| Color models | 🟡 | HSV i Hex; brak wyboru HSL albo RGB |

## Effects i properties

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Drop shadow | ✅ | Offset, blur radius i color przez CanvasKit filters |
| Inner shadow | ✅ | Inset shadow |
| Layer blur | ✅ | Gaussian blur warstwy |
| Background blur | ✅ | Blur treści za warstwą |
| Foreground blur | ✅ | Blur na pierwszym planie |
| Stroke weight | ✅ | Edycja w panelu Properties |
| Stroke cap | ✅ | `NONE`, `ROUND`, `SQUARE`, `ARROW_LINES`, `ARROW_EQUILATERAL` |
| Stroke join | ✅ | Miter, bevel i round |
| Dash patterns | ✅ | Wzór dash-on/dash-off |
| Stroke alignment | ✅ | Inside, Center i Outside z rendering zgodnym z Figmą |
| Osobny stroke weight każdego boku | ✅ | Top, Right, Bottom i Left z wyborem boków |
| Corner radius | ✅ | Wspólny albo osobny dla każdego corner |
| Corner smoothing | 🔲 | Brak continuous corner rounding |
| Wiele fills/strokes | 🔲 | Brak nakładania wielu fills i strokes na jednej warstwie |

## Auto layout

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Horizontal i vertical flow | ✅ | Yoga WASM flexbox |
| Włączanie Auto layout | ✅ | <kbd>⇧</kbd><kbd>A</kbd> na frame albo selection |
| Gap | ✅ | Edycja w panelu Properties |
| Padding | ✅ | Wspólny albo osobny dla czterech boków |
| Justify content | ✅ | Start, center, end i space-between |
| Align items | ✅ | Start, center, end i stretch |
| Child sizing | ✅ | Fixed, Fill i Hug dla każdego child |
| Wrap | ✅ | Flex wrap dla wielowierszowego layout |
| Grid | ✅ | CSS Grid przez fork Yoga: tracks, gaps i spans |
| Nested flows | ✅ | Zagnieżdżone Auto layout frames o różnych directions |
| Drag reorder | ✅ | Widoczny insertion indicator |
| Min/max dimensions | 🔲 | Brak min/max constraints dla children |

## Components i design systems

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Tworzenie components | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>; component properties dla text, visibility, instance swap i variants |
| Component sets | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd>; wielowymiarowe sparse variants, duplicate validation i default w lewym górnym rogu |
| Instances | ✅ | Assets, insertion, editable properties i overrides, variant switching, live sync oraz update review |
| Variants | ✅ | Sparse combinations, authoring, switching, duplicate validation i top-left fallback |
| Component properties | ✅ | Boolean visibility, text i instance swap |
| Propagacja overrides | ✅ | Zmiany main component docierają do instances, a overrides są zachowywane |
| Variables | 🟡 | Pełny UI dla `COLOR`; `FLOAT`, `STRING` i `BOOLEAN` są zdefiniowane bez UI edycji |
| Collections i modes | 🟡 | Collections, modes i active mode działają; brak UI theming opartego na variables |
| Styles | 🔲 | Brak reusable named presets dla color, text, effect i layout |
| Libraries | ✅ | Niezmienne local/storage revisions, selective publishing, enablement, scoped update review, offline materialization i zapis w `.fig` |
| Detach instance | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> konwertuje instance na frame |
| Go to main component | ✅ | Nawigacja do source component także między stronami |

## Prototyping

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Prototype connections | 🔲 | Brak |
| Triggers | 🔲 | Brak click, hover, drag i innych triggers |
| Actions | 🔲 | Brak navigate, overlay i scroll actions |
| Animations i transitions | 🔲 | Brak |
| Smart animate | 🔲 | Brak animowania pasujących warstw |
| Overlays | 🔲 | Brak modal/popover prototypes |
| Scroll i overflow | 🔲 | Brak scrollable prototype frames |
| Prototype flows | 🔲 | Brak named starting points |
| Variables | 🔲 | Brak conditional logic z variables |
| Easing i springs | 🔲 | Brak custom animation curves |
| Present | 🔲 | Brak fullscreen prototype viewer |

## Import i eksport

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Import `.fig` | ✅ | Kiwi codec: 194 definitions i około 390 fields w `NodeChange` |
| Eksport `.fig` | ✅ | Kiwi, Zstd i thumbnail; `COMPONENT`/`COMPONENT_SET` są mapowane na `SYMBOL` dla round trip |
| Save / Save As | ✅ | <kbd>⌘</kbd><kbd>S</kbd> i <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd>; native dialogs w Tauri, File System Access API w Chrome/Edge i download fallback w Safari |
| Figma clipboard: Paste | ✅ | Dekodowanie Kiwi binary z clipboard Figmy |
| Figma clipboard: Copy | ✅ | Kodowanie Kiwi binary czytelnego przez Figmę |
| Import Sketch | 🔲 | Brak parser `.sketch` |
| Eksport obrazu/SVG/PDF | 🟡 | PNG, JPG, WEBP i SVG ✅; PDF 🔲 |
| Version history | 🔲 | Brak przeglądania i przywracania wersji |
| Przenoszenie assets między tools | ✅ | Figma clipboard oraz Copy as text/SVG/PNG/JSX |

## Plugin API i scripts

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| `eval` z Figma Plugin API | ✅ | Headless JavaScript z globalnym `figma` zgodnym z powierzchnią Plugin API |

## Collaboration i Dev Mode

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Comments | 🔲 | Brak pins, threads i resolve |
| Multiplayer | ✅ | P2P przez Trystero i Yjs CRDT, cursors oraz follow mode; bez server |
| Cursor chat | 🔲 | Brak inline chat przy cursor |
| Branching i merging | 🔲 | Brak branches dokumentu |
| Dev Mode | 🟡 | Panel Code pokazuje JSX; brak CSS properties i handoff specs |
| Code Connect | 🔲 | Brak połączenia design components z code |
| Code snippets | 🟡 | Eksport JSX z syntax highlighting i Copy; brak Swift/Kotlin snippets |
| Tailwind CSS v4 | ✅ | Eksport HTML z Tailwind utilities przez panel Code, CLI albo API |
| Figma for VS Code | 🔲 | Brak integracji z editor plugin |
| MCP server | ✅ | `@open-pencil/mcp`, transports stdio i HTTP; 87 core tools oraz 3 file tools, łącznie 90 |
| CLI | ✅ | `info`, `tree`, `find`, `export`, `analyze`, `node`, `pages`, `variables`, `eval` oraz MCP server |

## Figma Draw

| Funkcja | Status | Uwagi |
|---------|--------|-------|
| Illustration tools | 🔲 | Brak wyspecjalizowanych tools Figma Draw |
| Pattern transforms | 🔲 | Brak powtarzanych patterns z transforms |

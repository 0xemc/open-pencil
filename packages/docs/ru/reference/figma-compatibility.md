# Совместимость с Figma

Ниже перечислены возможности Figma Design и их текущий статус в OpenPencil.

::: tip Обозначения
✅ Поддерживается полностью · 🟡 Поддерживается частично · 🔲 Пока не реализовано
:::

**Покрытие:** реализованы или частично реализованы 94 из 158 пунктов: 76 ✅ полностью и 18 🟡 частично; 64 🔲 пока отсутствуют. Данные обновлены 7 марта 2026 года.

## Интерфейс и навигация

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Toolbar с design tools | ✅ | Нижняя toolbar в стиле UI3: Select, Frame, Section, Rectangle, Ellipse, Line, Text, Hand и Pen |
| Панель слоёв | ✅ | Tree view, expand/collapse, drag reorder, visibility и изменяемая ширина |
| Страницы | ✅ | Добавление, удаление и rename; отдельный viewport для каждой страницы |
| Панель свойств | ✅ | Appearance, Fill, Stroke, Effects, Typography, Layout и Position; изменяемая ширина |
| Zoom и перемещение | ✅ | <kbd>Ctrl</kbd> + scroll, pinch, сочетания <kbd>⌘</kbd><kbd>+</kbd>, <kbd>⌘</kbd><kbd>−</kbd>, <kbd>⌘</kbd><kbd>0</kbd>, <kbd>⌘</kbd><kbd>1</kbd>, <kbd>⌘</kbd><kbd>2</kbd>, <kbd>Space</kbd> + drag, средняя кнопка и Hand tool |
| Rulers | ✅ | Верхняя и левая rulers с selection bands и coordinate badges |
| Цвет фона холста | ✅ | Отдельный background для каждой страницы |
| Guides | 🔲 | Перетаскиваемые guides из rulers |
| Actions menu / command palette | 🔲 | Быстрый поиск действий |
| Контекстное меню | ✅ | Clipboard, порядок наложения, groups, components, visibility, lock и Move to page |
| Сочетания клавиш | 🟡 | Основные commands, components, порядок наложения и visibility/lock; Scale, Arrow, Pencil, flip и часть text formatting пока не подключены |
| Find and replace | 🔲 | Поиск и замена текста во всём документе |
| Layer outlines | 🔲 | Wireframe view всех слоёв |
| Собственный thumbnail | 🔲 | Thumbnail создаётся при export, но выбрать его вручную нельзя |
| Nudge settings | 🔲 | Используются 1 px и 10 px; собственные small/big values не настраиваются |
| Application menu в browser | ✅ | File, Edit, View, Object, Text и Arrange; в Tauri используются native menus |
| AI tools | 🟡 | 90 tools через providers и MCP server; генерация изображений и AI search пока отсутствуют |

## Слои и shapes

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Rectangle, Ellipse, Line, Polygon и Star | ✅ | Все основные shapes; настраиваются число сторон Polygon и inner radius Star |
| Frames | ✅ | Clips content, собственная coordinate system и presets создания и resize |
| Groups | ✅ | <kbd>⌘</kbd><kbd>G</kbd> и <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> |
| Sections | ✅ | Title pills, автоматическое принятие пересекающихся objects и цвет текста по luminance |
| Arc tool | ✅ | `arcData` со start angle, end angle и inner radius |
| Pencil tool | 🔲 | Freehand drawing |
| Masks | 🔲 | Shape masks для clipping слоёв |
| Типы и hierarchy | ✅ | 17 типов объектов, flat Map и parent-child tree |
| Selection | ✅ | Нажатие, Shift + нажатие и marquee selection |
| Alignment и position | ✅ | Position, rotation и dimensions на панели свойств |
| Copy и Paste объектов | ✅ | Обычный clipboard и binary Kiwi Figma; Copy as text, SVG, PNG и JSX |
| Пропорциональный resize | 🟡 | Shift сохраняет пропорции; отдельного Scale tool (<kbd>K</kbd>) нет |
| Lock | ✅ | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd>; locked object нельзя выбрать или переместить на холсте |
| Visibility | ✅ | Значок глаза и <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> |
| Rename | ✅ | Inline rename на панели слоёв; <kbd>Enter</kbd>, <kbd>Escape</kbd> и blur завершают ввод |
| Bring to front / Send to back | ✅ | <kbd>]</kbd> и <kbd>[</kbd>, а также контекстное меню |
| Move to page | ✅ | Перемещение selection между страницами |
| Constraints | 🔲 | Привязка edges и center при resize parent |
| Smart selection | 🔲 | Равномерное распределение и alignment multi-selection |
| Layout guides | 🔲 | Columns, rows и grid overlays для frames |
| Измерение расстояний | 🔲 | Alt-hover с distances |
| Массовое изменение | ✅ | Position, size, appearance, fill, stroke и effects для multi-selection; разные values отображаются как `Mixed` |
| Поиск похожих objects | 🔲 | Identify matching objects |
| Copy/Paste properties | 🔲 | Перенос fill, stroke и effects между objects |
| Parent-child | ✅ | Полная hierarchy через `parentIndex` и reparenting перетаскиванием |

## Vector tools

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Vector networks | ✅ | Совместимая с Figma модель, а не простой список points |
| Pen tool | ✅ | Corner points, curves Безье, открытые и замкнутые paths |
| Редактирование vectors | 🟡 | Создание и базовое изменение geometry; часть advanced vertex operations ограничена |
| Boolean operations | 🔲 | Union, Subtract, Intersect и Exclude |
| Flatten | 🔲 | Объединение vector paths |
| Outline Stroke | 🔲 | Преобразование stroke в path |
| Text to paths | 🔲 | Преобразование текста в outlines |
| Shape builder | 🔲 | Interactive boolean tool |
| Offset path | 🔲 | Inset и outset path |
| Simplify path | 🔲 | Уменьшение числа points |

## Текст и typography

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Text tool и редактирование | ✅ | Редактирование на холсте, скрытая textarea, cursor и selection, выбор слова, drag selection, двойное и тройное нажатие, rich text style runs |
| Text rendering | ✅ | CanvasKit Paragraph для shaping, line breaking и metrics |
| System fonts | ✅ | Inter, font-kit в Tauri с cache и preload, `queryLocalFonts` в browser |
| Font family и weight | ✅ | FontPicker с search, virtual scroll и CSS preview; weight на панели свойств |
| Font size и line height | ✅ | Редактируются в Typography |
| Text alignment | 🟡 | Basic alignment; vertical alignment и auto-width/height modes пока отсутствуют |
| Text styles | 🟡 | Bold, italic, underline и strikethrough для selection; named reusable presets отсутствуют |
| Text resize modes | 🔲 | Auto width, auto height и fixed size |
| Lists | 🔲 | Bulleted и numbered lists |
| Links | 🔲 | Hyperlinks внутри текста |
| Emoji и symbols | 🔲 | Полноценная отрисовка emoji и специальных symbols |
| OpenType | 🔲 | Ligatures, stylistic alternates и tabular figures |
| Variable fonts | 🔲 | Настраиваемые axes |
| CJK | 🔲 | Полная отрисовка китайского, японского и корейского текста |
| RTL | 🔲 | Layout справа налево |
| Icon fonts | 🔲 | Специальная обработка icon glyphs |

## Color, gradients и images

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| HSV Color picker | ✅ | HSV square, hue и alpha sliders, hex input |
| Solid fills | ✅ | Hex color и opacity |
| Linear gradient | ✅ | Stops и transform handles |
| Radial gradient | ✅ | CanvasKit shaders |
| Angular gradient | ✅ | Sweep/conic gradient |
| Diamond gradient | ✅ | Four-point diamond gradient |
| Image fills | ✅ | Blob decoding и modes fill, fit, crop и tile |
| Pattern fills | 🔲 | Повторяющиеся images и patterns |
| Blend modes | 🔲 | Blend modes layers и fills |
| Images и videos | 🟡 | Image fills отображаются; drag and drop import и video отсутствуют |
| Image adjustments | 🔲 | Exposure, contrast, saturation и другие настройки |
| Crop image | 🔲 | Interactive crop |
| Eyedropper | 🔲 | Получение color с холста |
| Mixed-selection colors | 🔲 | Общее изменение colors неоднородного selection |
| Color models | 🟡 | HSV и Hex; переключателей HSL и RGB нет |

## Effects и properties

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Drop shadow | ✅ | Offset, blur radius и color через CanvasKit filters |
| Inner shadow | ✅ | Inset shadow |
| Layer blur | ✅ | Gaussian blur объекта |
| Background blur | ✅ | Blur содержимого позади объекта |
| Foreground blur | ✅ | Blur переднего плана |
| Stroke weight | ✅ | Настраивается на панели свойств |
| Stroke cap | ✅ | `NONE`, `ROUND`, `SQUARE`, `ARROW_LINES`, `ARROW_EQUILATERAL` |
| Stroke join | ✅ | Miter, bevel и round |
| Dash pattern | ✅ | Dash-on/dash-off |
| Stroke alignment | ✅ | Inside, Center и Outside с clipping как в Figma |
| Толщина отдельных сторон | ✅ | Top, Right, Bottom и Left |
| Corner radius | ✅ | Общий и отдельный для каждого угла |
| Corner smoothing | 🔲 | Continuous corners в стиле iOS |
| Несколько fills и strokes | 🔲 | Stack нескольких fills и strokes на одном объекте |

## Auto layout

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Horizontal и vertical flow | ✅ | Yoga WASM flexbox |
| <kbd>⇧</kbd><kbd>A</kbd> | ✅ | Включение для frame или оборачивание selection |
| Gap | ✅ | Настраивается на панели свойств |
| Padding | ✅ | Общее или отдельное для четырёх сторон |
| Justify | ✅ | Start, center, end и space-between |
| Align | ✅ | Start, center, end и stretch |
| Fixed, Fill и Hug | ✅ | Отдельный sizing mode для каждого child |
| Wrap | ✅ | Flex wrap |
| Grid | ✅ | CSS Grid через fork Yoga: row/column tracks, gaps и spans |
| Nested flows | ✅ | Вложенные frames с разными directions |
| Drag reorder | ✅ | Visual insertion indicator |
| Min/max size | 🔲 | Min/max constraints для children |

## Components и design systems

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Create components | ✅ | Создание из frame или group и оборачивание selection; text, visibility, instance swap и variants |
| Component sets | ✅ | Multidimensional sparse variants, duplicate validation и top-left default |
| Instances | ✅ | Assets, insertion, component properties, overrides, variant switching, live sync и update review |
| Variants | ✅ | Authoring, switching, sparse combinations и top-left fallback |
| Component properties | ✅ | Boolean visibility, text и instance swap |
| Override propagation | ✅ | Main component обновляет instances, сохраняя overrides |
| Variables | 🟡 | Полный UI для `COLOR`; `FLOAT`, `STRING` и `BOOLEAN` определены, но не имеют editing UI |
| Collections и modes | 🟡 | Collections, modes и `activeMode`; variable-driven theming UI отсутствует |
| Styles | 🔲 | Named reusable color, text, effect и layout styles |
| Libraries | ✅ | Immutable local/storage revisions, selective publish, enablement, scoped update review, offline materialization и сохранение в `.fig` |
| Detach instance | ✅ | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> превращает instance во frame |
| Go to main component | ✅ | Переход к source component, в том числе на другую страницу |

## Prototyping

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Connections | 🔲 | Пока не поддерживается |
| Triggers | 🔲 | Click, hover, drag и другие triggers |
| Actions | 🔲 | Navigate, overlay, scroll и другие actions |
| Animations | 🔲 | Transitions и animations |
| Smart animate | 🔲 | Автоматическая animation совпадающих слоёв |
| Overlays | 🔲 | Modal и popover prototypes |
| Scroll behavior | 🔲 | Scrollable frames в prototypes |
| Flows | 🔲 | Named starting points |
| Variables | 🔲 | Conditional logic |
| Easing и springs | 🔲 | Собственные animation curves |
| Present mode | 🔲 | Fullscreen prototype viewer |

## Import и Export

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Import .fig | ✅ | Kiwi codec: 194 definitions и около 390 fields в `NodeChange` |
| Export .fig | ✅ | Kiwi encoding, Zstd compression и thumbnail; `COMPONENT` и `COMPONENT_SET` преобразуются в `SYMBOL` для round trip |
| Save / Save As | ✅ | Native dialogs в Tauri, File System Access API в Chrome и Edge, download fallback в Safari |
| Paste из Figma | ✅ | Decode binary Kiwi из clipboard Figma |
| Copy в Figma | ✅ | Encode binary Kiwi, читаемый Figma |
| Import Sketch | 🔲 | Parsing `.sketch` |
| Image/SVG/PDF export | 🟡 | PNG, JPG, WEBP и SVG поддерживаются; PDF отсутствует |
| Version history | 🔲 | Просмотр и восстановление versions |
| Обмен assets | ✅ | Clipboard Figma и Copy as text, SVG, PNG и JSX |

## Plugin API и scripts

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| `eval` с Figma Plugin API | ✅ | Headless JavaScript с глобальным `figma`, близким к plugin surface Figma |

## Collaboration и Dev Mode

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Comments | 🔲 | Pins, threads и resolve пока отсутствуют |
| Real-time multiplayer | ✅ | P2P через Trystero и Yjs CRDT, cursors и Follow mode без server |
| Cursor chat | 🔲 | Chat bubbles возле cursor |
| Branching и merging | 🔲 | Version branches для design files |
| Dev Mode | 🟡 | Вкладка Code показывает JSX selection; CSS properties и handoff specs отсутствуют |
| Code Connect | 🔲 | Связь design components с code |
| Code snippets | 🟡 | JSX с syntax highlighting и Copy; CSS, Swift и Kotlin snippets отсутствуют |
| Tailwind CSS v4 | ✅ | HTML с utility classes из Code, CLI или программного API |
| Figma for VS Code | 🔲 | Интеграция с code editor |
| MCP server | ✅ | `@open-pencil/mcp`, stdio и HTTP; 87 core tools и 3 file tools |
| CLI | ✅ | `info`, `tree`, `find`, `export`, `analyze`, `node`, `pages`, `variables`, `eval` и JSON output |

## Figma Draw

| Возможность | Статус | OpenPencil |
|-------------|--------|------------|
| Illustration tools | 🔲 | Специализированные drawing tools Figma Draw |
| Pattern transforms | 🔲 | Повторяющиеся patterns с transforms |

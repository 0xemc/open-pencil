# Возможности

## Файлы Figma .fig

OpenPencil открывает и сохраняет `.fig` без предварительного преобразования. Import и export используют binary codec Kiwi из формата Figma: 194 schema definitions и около 390 fields для каждого объекта. Для Save нажмите <kbd>⌘</kbd><kbd>S</kbd>, для Save As — <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd>.

**Copy и Paste между Figma и OpenPencil:** скопируйте объекты в одном редакторе и вставьте в другом. Сохраняются fills, strokes, Auto layout, text, effects, corner radii и vector networks. Обмен работает в обе стороны.

## Рисование и редактирование

- **Shapes:** Rectangle (<kbd>R</kbd>), Ellipse (<kbd>O</kbd>), Line (<kbd>L</kbd>), Polygon и Star.
- **Pen tool:** vector networks, curves Безье и tangent handles.
- **Text:** редактирование непосредственно на холсте и поддержка IME.
- **Rich text:** bold, italic, underline и strikethrough для отдельных символов.
- **Auto layout:** flexbox и CSS Grid через Yoga WASM; direction, gap, padding, justify, align, sizing и grid tracks. Включается сочетанием <kbd>⇧</kbd><kbd>A</kbd>.
- **Components:** создание components и component sets, instances, overrides и автоматическая синхронизация.
- **Variables:** design tokens с collections, modes Light и Dark, типами color, float, string и boolean и variable bindings.
- **Sections:** контейнеры верхнего уровня, которые принимают пересекающиеся объекты и показывают title pill.

## Панель свойств

Содержимое вкладок Design, Code и AI зависит от selection.

- **Appearance:** opacity, общий или отдельный corner radius и visibility.
- **Fill:** solid, linear, radial, angular и diamond gradients, а также images.
- **Stroke:** color, weight, Inside/Center/Outside alignment, отдельная толщина сторон, cap, join и dash.
- **Effects:** drop shadow, inner shadow, layer blur, background blur и foreground blur.
- **Typography:** Font picker с search и virtual scroll, weight, size, alignment и style buttons.
- **Layout:** параметры Auto layout.
- **Export:** scale, PNG/JPG/WEBP/SVG и live preview.

## Rendering

OpenPencil использует Skia через CanvasKit WASM — тот же rendering engine, что и Figma:

- linear, radial, angular и diamond gradient fills;
- image fills с разными scale modes;
- effects с cache для отдельных объектов;
- arc data для частичных ellipses и donut shapes;
- viewport culling и повторное использование paint;
- snap guides с учётом rotation;
- rulers с отметками selection;
- hover highlight по фактической geometry.

## Undo и Redo

Можно отменить создание и удаление, перемещение и resize, изменение properties и parent, layout и variables. История использует inverse commands. Сочетания: <kbd>⌘</kbd><kbd>Z</kbd> и <kbd>⇧</kbd><kbd>⌘</kbd><kbd>Z</kbd>.

## Несколько страниц

Страницы можно добавлять, удалять и переименовывать. Для каждой страницы сохраняется собственный viewport.

## Несколько документов

Документы открываются во вкладках. <kbd>⌘</kbd><kbd>T</kbd> создаёт новую вкладку, <kbd>⌘</kbd><kbd>W</kbd> закрывает её, <kbd>⌘</kbd><kbd>O</kbd> открывает файл.

## Export

- **Images:** PNG, JPG и WEBP в масштабе от 0,5× до 4× через панель, контекстное меню или <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd>.
- **SVG:** shapes, text со style runs, gradients, effects и blend modes.
- **Tailwind JSX:** HTML с utility classes Tailwind v4 для React или Vue.
- **Copy as:** text, SVG, PNG или JSX через контекстное меню.

```sh
openpencil export design.fig -f jsx --style tailwind
```

## AI chat

Нажмите <kbd>⌘</kbd><kbd>J</kbd>. Более 90 tools создают shapes, меняют styles и layout, работают с components и variables, выполняют boolean operations, анализируют design tokens и экспортируют assets. Можно подключить Anthropic, OpenAI, Google AI, OpenRouter или compatible endpoint.

Tool calls отображаются как сворачиваемые элементы timeline. Для визуальной проверки assistant экспортирует результат и сопоставляет его с запросом. Все изменения AI поддерживают Undo.

Настройка описана в разделе [AI chat](/programmable/ai-chat).

## MCP server

Claude Code, Cursor, Windsurf и другие MCP clients могут читать и изменять `.fig` без интерфейса. Доступно более 90 tools и два transports: stdio и HTTP.

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

Полный список находится в [справочнике MCP tools](/programmable/mcp-server).

## CLI

```sh
openpencil tree design.fig              # Дерево объектов
openpencil find design.fig --type TEXT  # Поиск
openpencil export design.fig -f png     # Export
openpencil analyze colors design.fig    # Colors
openpencil analyze clusters design.fig  # Повторяющиеся structures
openpencil eval design.fig -c "..."     # Figma Plugin API
```

Если desktop app запущен, файл можно не указывать: CLI подключится по RPC к открытому документу.

```sh
openpencil tree          # Открытый документ
openpencil export -f png # Снимок холста
```

Все команды поддерживают `--json`. Установка: `npm install -g @open-pencil/cli` или `bun add -g @open-pencil/cli`.

## Совместная работа

Peer-to-peer WebRTC не требует центрального server. Отправьте ссылку другим участникам и редактируйте документ вместе.

- Live cursors с цветными стрелками и именами.
- Presence avatars.
- Follow mode для viewport другого участника.
- Локальное сохранение в IndexedDB.
- Криптографически стойкие room IDs через `crypto.getRandomValues()`.

## Desktop и Web

**Desktop app:** Tauri v2, около 7 МБ, версии для macOS, Windows и Linux, native menus, offline mode и autosave.

**Web app:** [app.openpencil.dev](https://app.openpencil.dev), установка как PWA и интерфейс для touch screens.

```sh
brew install open-pencil/tap/open-pencil
```

## Google Fonts fallback

Если нужного font нет на компьютере, OpenPencil автоматически загружает его из Google Fonts. При открытии `.fig` с незнакомыми fonts вручную устанавливать их не нужно.

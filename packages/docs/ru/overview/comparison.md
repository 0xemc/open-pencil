# OpenPencil и Penpot: архитектура и производительность

OpenPencil создаётся как открытая local-first альтернатива закрытым design platforms. Сравнение с Penpot показывает, к каким результатам приводят разные архитектурные решения.

::: info WASM renderer в Penpot
Penpot 2.x включает Rust/Skia WASM renderer `render-wasm/v1`, который включается server flags или параметром `?wasm=true`. По умолчанию по-прежнему используется SVG renderer. Ниже рассматриваются оба варианта.
:::

## 1. Размер codebase

| Показатель | OpenPencil | Penpot |
|------------|------------|--------|
| Всего LOC | **около 26 000** | **около 299 000** |
| Source files | около 143 | около 2 900 |
| Языки | TypeScript, Vue | Clojure, ClojureScript, Rust, JS, SQL, SCSS |
| Rendering engine | около 3 200 LOC, TypeScript | 22 000 LOC, Rust/Skia WASM |
| UI | около 4 500 LOC | около 175 000 LOC, CLJS и SCSS |
| Backend | Нет, local-first | 32 600 LOC и 151 SQL file |
| Соотношение LOC | **1×** | **около 11×** |

OpenPencil примерно в 11 раз меньше. Это следствие другой архитектуры, а не только меньшего набора возможностей.

## 2. Архитектура

### OpenPencil: один client process

```text
┌─────────────────────────────────┐
│         Tauri (native shell)    │
│  ┌───────────────────────────┐  │
│  │  Vue 3 + TypeScript       │  │
│  │  Editor + Kiwi Codec      │  │
│  │  SceneGraph in TypeScript │  │
│  │  CanvasKit + Yoga (WASM)  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

Editor, SceneGraph, file codec и renderer работают в одном process. Отдельные server, database и Docker не нужны. SceneGraph хранится как `Map<string, SceneNode>`. TypeScript напрямую вызывает CanvasKit, а Yoga WASM синхронно рассчитывает layout.

### Penpot: client-server platform

```text
┌───────────────────────────────────────────────────────┐
│                    Docker Compose                     │
│  ClojureScript frontend │ Clojure/JVM backend        │
│  Rust/Skia WASM         │ PostgreSQL, Valkey, MinIO  │
│  Chromium exporter      │ MCP server                 │
└───────────────────────────────────────────────────────┘
```

Для полного deployment Penpot нужны frontend, JVM backend, PostgreSQL, Valkey, MinIO и exporter на базе headless Chromium. Development environment использует Docker Compose, JVM, Node и Rust toolchain.

### Вывод

Архитектура OpenPencil исключает network latency между frontend и backend, serialization на границах services, container orchestration и database queries для обычных операций. Penpot рассчитан на server-hosted multi-user deployment, а OpenPencil — на локальную работу с минимальной задержкой.

## 3. Rendering pipeline

### OpenPencil: TypeScript → CanvasKit WASM

```typescript
renderSceneToCanvas(canvas, graph, pageId) {
  this.fillPaint.setColor(...)
  canvas.drawRRect(rrect, this.fillPaint)
}
```

- Один переход TS → WASM.
- SceneGraph остаётся в JS heap и не сериализуется перед отрисовкой.
- Renderer занимает около 3 200 LOC и разделён на специализированные modules.

### Penpot: ClojureScript → Rust WASM → Skia

При включённом WASM renderer pipeline выглядит так:

```text
ClojureScript → JavaScript
  → decomposition и binary packing в WASM linear memory
  → Rust WASM через Emscripten C FFI
  → skia-safe
  → Skia/WebGL
```

При выключенном WASM каждый shape отображается как элемент SVG DOM через React/Reagent.

В WASM mode UUID разбивается на четыре `u32`, transform — на шесть `f32`, fills и strokes упаковываются в binary format, а основные props каждого shape — в structure размером 104 bytes. Renderer использует tile cache, interest areas, 11 render surfaces и global mutable state через `unsafe { STATE.as_mut() }`.

Tile system Penpot предварительно отрисовывает области вокруг viewport и хранит до 1024 textures. OpenPencil перерисовывает видимую область целиком без tile cache.

### Сравнение

| Аспект | OpenPencil | Penpot |
|--------|------------|--------|
| JS → WASM | Прямые вызовы с TS objects | Binary-packed structures |
| Модель | Полная отрисовка viewport | Tile cache |
| Surfaces | 1 | 11 |
| Дополнительная память | Без tile cache | До 1024 cached tiles |
| Размер renderer | около 3 200 LOC | 22 000 LOC |
| Unsafe code | Нет | Global state через `unsafe` |

Для небольших и средних документов прямой CanvasKit pipeline требует меньше промежуточной обработки. Tile system Penpot может быть выгоднее для документов со 100 000 и более shapes, когда видна только небольшая часть холста.

## 4. SceneGraph и data model

### OpenPencil

```typescript
nodes: Map<string, SceneNode>
```

- O(1) lookup по ID.
- 29 типов objects из Kiwi schema Figma.
- Около 390 fields в `NodeChange`.
- Strict TypeScript types.
- GUID в формате Figma `sessionID:localID`.

### Penpot

Penpot хранит собственные type definitions в Clojure/ClojureScript и Rust. Отдельные modules отвечают за colors, components, containers, fills, grid, modifiers, pages и paths. Schemas проверяются в runtime через Malli, а rendering data пересекают границу CLJS → Rust.

OpenPencil использует Kiwi schema напрямую; Penpot должен синхронизировать собственную модель между несколькими языками.

## 5. Layout engine

### OpenPencil

```typescript
import Yoga from 'yoga-layout'
const root = Yoga.Node.create()
root.setFlexDirection(FlexDirection.Row)
root.calculateLayout()
applyYogaLayout(graph, frame, yogaRoot)
```

Layout делегирован Yoga WASM и вызывается синхронно внутри process.

### Penpot

Penpot поддерживает собственные реализации flex и grid в ClojureScript и Rust WASM. Два независимых engine должны выдавать одинаковый результат.

OpenPencil использует проверенную библиотеку Yoga; Penpot поддерживает несколько тысяч LOC собственного layout code на двух языках.

## 6. File formats и Figma

### OpenPencil

- Native binary format Kiwi, используемый Figma.
- Прямой import `.fig`.
- Paste binary Kiwi data из clipboard Figma.
- Wire compatibility с multiplayer protocol Figma.

### Penpot

- `.penpot` — ZIP с JSON manifests, document data, binary assets и thumbnails.
- SVG renderer и export по умолчанию, optional WASM renderer.
- Native import `.fig` отсутствует.
- Несколько поколений format с migration system.

OpenPencil читает `.fig` и clipboard Figma напрямую. Для Penpot требуется отдельный import или export.

## 7. State и Undo

OpenPencil использует inverse commands: forward и inverse closures сохраняют необходимый минимум state, а batch объединяет несколько действий.

Penpot использует Potok. `UpdateEvent` изменяет state, `WatchEvent` выполняет side effects через RxJS. Undo хранит inverse change vectors, ограничивает history 50 entries и группирует быстрые изменения в transactions.

Подход OpenPencil проще; serializable changes Penpot лучше соответствуют server collaboration, но добавляют complexity.

## 8. Development

| Показатель | OpenPencil | Penpot |
|------------|------------|--------|
| Setup | `bun install && bun dev` | Docker Compose, JVM, Node, Rust |
| HMR | Vite | shadow-cljs |
| Types | Strict TypeScript | Runtime Malli schemas |
| Desktop | Tauri v2 | Browser |
| Основные технологии | TypeScript и Vue | Clojure, ClojureScript, Rust и Docker |

## 9. Характеристики performance

| Сценарий | OpenPencil | Penpot |
|----------|------------|--------|
| Cold start | менее 2 s, включая WASM | более 10 s для server, client и WASM |
| Обычная операция | внутри process | возможен network round trip |
| Render frame | Прямой вызов Skia | CLJS → JS → WASM FFI → Skia |
| Базовая память | около 50 MB в browser tab | JVM, database, cache и browser |
| Offline | Полный local-first mode | Требуется server |
| 10K shapes | Один проход | Tile renderer с 11 surfaces |

## 10. Преимущества Penpot

1. **Server collaboration:** accounts, access control и централизованное хранение через WebSockets.
2. **PDF export:** отдельный Chromium exporter.
3. **Plugin system:** sandboxed execution и plugin API.
4. **Design tokens:** встроенная поддержка.
5. **CSS Grid:** собственная реализация; OpenPencil использует fork Yoga с Grid.
6. **Self-hosting:** deployment командной platform через Docker.
7. **Зрелость:** многолетняя эксплуатация в production.

## 11. Scripts и расширение

Команда [`eval`](/programmable/cli/scripting) предоставляет совместимый с Figma Plugin API для headless scripts, batch operations и automated tests. Кроме того, 90 AI tools доступны через AI chat, MCP server и CLI. Они охватывают чтение, создание и изменение объектов, structure, variables, vector paths, analysis, diff, boolean operations и arrangement.

Penpot предоставляет sandboxed plugins, но не имеет аналогичного headless scripting API или MCP integration.

## Итоги

| Область | Преимущество | Причина |
|---------|--------------|---------|
| Простота архитектуры | OpenPencil | Один process вместо нескольких services |
| Rendering | OpenPencil | Прямой CanvasKit pipeline |
| Размер codebase | OpenPencil | Около 26K LOC против 299K LOC |
| Figma compatibility | OpenPencil | Native Kiwi и `.fig` |
| Вход в разработку | OpenPencil | TypeScript и Vue вместо Clojure, Rust и Docker |
| Desktop app | OpenPencil | Native Tauri application |
| Layout | OpenPencil | Yoga вместо двух собственных implementations |
| Collaboration | Разные преимущества | Penpot: server и access control; OpenPencil: P2P без hosting |
| Self-hosting | Penpot | Docker deployment |
| Зрелость ecosystem | Penpot | Многолетний production use |

OpenPencil — компактный single-process editor с CanvasKit renderer и native `.fig`. Penpot — полная client-server platform с Clojure, ClojureScript, Rust, databases и Docker services. Оба проекта поддерживают совместную работу, но используют разные модели. Penpot предлагает plugin ecosystem и PDF export; OpenPencil — headless Figma-compatible scripts, 90 AI/MCP tools, SVG export и desktop app.

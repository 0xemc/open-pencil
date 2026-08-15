# OpenPencil i Penpot: architektura oraz wydajność

OpenPencil powstaje jako otwarta alternatywa local-first dla zamkniętych design platforms. Porównanie z Penpotem pokazuje konsekwencje różnych decyzji architektonicznych.

::: info WASM renderer w Penpot
Penpot 2.x zawiera Rust/Skia WASM renderer `render-wasm/v1`, włączany przez server flags albo parametr `?wasm=true`. Domyślnie nadal używany jest SVG renderer. Poniżej uwzględniono oba warianty.
:::

## 1. Rozmiar codebase

| Wskaźnik | OpenPencil | Penpot |
|----------|------------|--------|
| Łącznie LOC | **około 26 000** | **około 299 000** |
| Source files | około 143 | około 2 900 |
| Języki | TypeScript, Vue | Clojure, ClojureScript, Rust, JS, SQL, SCSS |
| Rendering engine | około 3 200 LOC, TypeScript | 22 000 LOC, Rust/Skia WASM |
| UI | około 4 500 LOC | około 175 000 LOC, CLJS i SCSS |
| Backend | Brak, local-first | 32 600 LOC i 151 SQL files |
| Stosunek LOC | **1×** | **około 11×** |

OpenPencil jest około 11 razy mniejszy. Wynika to z innej architektury, a nie wyłącznie z mniejszej liczby funkcji.

## 2. Architektura

### OpenPencil: jeden client process

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

Editor, SceneGraph, file codec i renderer działają w jednym process. Osobne server, database i Docker nie są potrzebne. SceneGraph jest przechowywany jako `Map<string, SceneNode>`. TypeScript wywołuje CanvasKit bezpośrednio, a Yoga WASM synchronicznie oblicza layout.

### Penpot: client-server platform

```text
┌───────────────────────────────────────────────────────┐
│                    Docker Compose                     │
│  ClojureScript frontend │ Clojure/JVM backend        │
│  Rust/Skia WASM         │ PostgreSQL, Valkey, MinIO  │
│  Chromium exporter      │ MCP server                 │
└───────────────────────────────────────────────────────┘
```

Pełny deployment Penpota wymaga frontend, JVM backend, PostgreSQL, Valkey, MinIO i exporter opartego na headless Chromium. Development environment korzysta z Docker Compose, JVM, Node i Rust toolchain.

### Wniosek

Architektura OpenPencil eliminuje network latency między frontend i backend, serialization na granicach services, container orchestration i database queries dla zwykłych operacji. Penpot jest przeznaczony do server-hosted multi-user deployment, a OpenPencil — do lokalnej pracy z minimalnym opóźnieniem.

## 3. Rendering pipeline

### OpenPencil: TypeScript → CanvasKit WASM

```typescript
renderSceneToCanvas(canvas, graph, pageId) {
  this.fillPaint.setColor(...)
  canvas.drawRRect(rrect, this.fillPaint)
}
```

- Jedno przejście TS → WASM.
- SceneGraph pozostaje w JS heap i nie jest serializowany przed rendering.
- Renderer ma około 3 200 LOC i jest podzielony na wyspecjalizowane modules.

### Penpot: ClojureScript → Rust WASM → Skia

Przy włączonym WASM renderer pipeline wygląda następująco:

```text
ClojureScript → JavaScript
  → decomposition i binary packing do WASM linear memory
  → Rust WASM przez Emscripten C FFI
  → skia-safe
  → Skia/WebGL
```

Przy wyłączonym WASM każdy shape jest elementem SVG DOM obsługiwanym przez React/Reagent.

W WASM mode UUID jest dzielony na cztery `u32`, transform na sześć `f32`, fills i strokes są pakowane do binary format, a podstawowe props każdego shape do structure o rozmiarze 104 bytes. Renderer używa tile cache, interest areas, 11 render surfaces i global mutable state przez `unsafe { STATE.as_mut() }`.

Tile system Penpota przygotowuje obszary wokół viewport i przechowuje do 1024 textures. OpenPencil przerysowuje cały widoczny obszar bez tile cache.

### Porównanie

| Aspekt | OpenPencil | Penpot |
|--------|------------|--------|
| JS → WASM | Bezpośrednie wywołania z TS objects | Binary-packed structures |
| Model | Pełne przerysowanie viewport | Tile cache |
| Surfaces | 1 | 11 |
| Dodatkowa pamięć | Bez tile cache | Do 1024 cached tiles |
| Rozmiar renderer | około 3 200 LOC | 22 000 LOC |
| Unsafe code | Brak | Global state przez `unsafe` |

Dla małych i średnich dokumentów bezpośredni CanvasKit pipeline wymaga mniej przetwarzania pośredniego. Tile system Penpota może być korzystniejszy dla dokumentów zawierających ponad 100 000 shapes, gdy widoczna jest tylko niewielka część obszaru roboczego.

## 4. SceneGraph i data model

### OpenPencil

```typescript
nodes: Map<string, SceneNode>
```

- O(1) lookup według ID.
- 29 typów obiektów z Kiwi schema Figmy.
- Około 390 fields w `NodeChange`.
- Strict TypeScript types.
- GUID w formacie Figmy `sessionID:localID`.

### Penpot

Penpot przechowuje własne type definitions w Clojure/ClojureScript i Rust. Osobne modules odpowiadają za colors, components, containers, fills, grid, modifiers, pages i paths. Schemas są sprawdzane w runtime przez Malli, a rendering data przekraczają granicę CLJS → Rust.

OpenPencil używa Kiwi schema bezpośrednio; Penpot musi synchronizować własny model między kilkoma językami.

## 5. Layout engine

### OpenPencil

```typescript
import Yoga from 'yoga-layout'
const root = Yoga.Node.create()
root.setFlexDirection(FlexDirection.Row)
root.calculateLayout()
applyYogaLayout(graph, frame, yogaRoot)
```

Layout jest powierzony Yoga WASM i wykonywany synchronicznie wewnątrz process.

### Penpot

Penpot utrzymuje własne implementacje flex i grid w ClojureScript oraz Rust WASM. Dwa niezależne engines muszą zwracać taki sam wynik.

OpenPencil korzysta ze sprawdzonej biblioteki Yoga; Penpot utrzymuje kilka tysięcy LOC własnego layout code w dwóch językach.

## 6. File formats i Figma

### OpenPencil

- Native binary format Kiwi używany przez Figmę.
- Bezpośredni import `.fig`.
- Paste binary Kiwi data z clipboard Figmy.
- Wire compatibility z multiplayer protocol Figmy.

### Penpot

- `.penpot` jest ZIP zawierającym JSON manifests, document data, binary assets i thumbnails.
- Domyślny SVG renderer oraz export; opcjonalny WASM renderer.
- Brak native import `.fig`.
- Kilka generacji format z migration system.

OpenPencil odczytuje `.fig` i clipboard Figmy bezpośrednio. Penpot wymaga osobnego importu lub eksportu.

## 7. State i Undo

OpenPencil używa inverse commands: forward i inverse closures przechowują niezbędne minimum state, a batch łączy kilka operacji.

Penpot używa Potok. `UpdateEvent` zmienia state, a `WatchEvent` wykonuje side effects przez RxJS. Undo przechowuje inverse change vectors, ogranicza history do 50 entries i grupuje szybkie zmiany w transactions.

Podejście OpenPencil jest prostsze. Serializable changes Penpota lepiej odpowiadają server collaboration, ale zwiększają complexity.

## 8. Development

| Wskaźnik | OpenPencil | Penpot |
|----------|------------|--------|
| Setup | `bun install && bun dev` | Docker Compose, JVM, Node, Rust |
| HMR | Vite | shadow-cljs |
| Types | Strict TypeScript | Runtime Malli schemas |
| Desktop | Tauri v2 | Browser |
| Główne technologie | TypeScript i Vue | Clojure, ClojureScript, Rust i Docker |

## 9. Charakterystyka performance

| Scenariusz | OpenPencil | Penpot |
|------------|------------|--------|
| Cold start | mniej niż 2 s, wraz z WASM | ponad 10 s dla server, client i WASM |
| Zwykła operacja | wewnątrz process | możliwy network round trip |
| Render frame | Bezpośrednie wywołanie Skia | CLJS → JS → WASM FFI → Skia |
| Pamięć bazowa | około 50 MB w browser tab | JVM, database, cache i browser |
| Offline | Pełny local-first mode | Wymaga server |
| 10K shapes | Jedno przejście | Tile renderer z 11 surfaces |

## 10. Zalety Penpota

1. **Server collaboration:** accounts, access control i centralne przechowywanie przez WebSockets.
2. **PDF export:** osobny Chromium exporter.
3. **Plugin system:** sandboxed execution i plugin API.
4. **Design tokens:** wbudowana obsługa.
5. **CSS Grid:** własna implementacja; OpenPencil używa fork Yoga z Grid.
6. **Self-hosting:** deployment platformy zespołowej przez Docker.
7. **Dojrzałość:** wiele lat użycia w production.

## 11. Scripts i rozszerzanie

Polecenie [`eval`](/programmable/cli/scripting) udostępnia API zgodne z Figma Plugin API dla headless scripts, batch operations i automated tests. Ponadto 90 AI tools jest dostępnych przez AI chat, MCP server i CLI. Obejmują odczyt, tworzenie i zmianę obiektów, structure, variables, vector paths, analysis, diff, boolean operations i arrangement.

Penpot oferuje sandboxed plugins, ale nie ma podobnego headless scripting API ani MCP integration.

## Podsumowanie

| Obszar | Przewaga | Powód |
|--------|----------|-------|
| Prostota architektury | OpenPencil | Jeden process zamiast kilku services |
| Rendering | OpenPencil | Bezpośredni CanvasKit pipeline |
| Rozmiar codebase | OpenPencil | Około 26K LOC wobec 299K LOC |
| Zgodność z Figmą | OpenPencil | Native Kiwi i `.fig` |
| Rozpoczęcie development | OpenPencil | TypeScript i Vue zamiast Clojure, Rust i Docker |
| Desktop app | OpenPencil | Native Tauri application |
| Layout | OpenPencil | Yoga zamiast dwóch własnych implementations |
| Collaboration | Różne zalety | Penpot: server i access control; OpenPencil: P2P bez hosting |
| Self-hosting | Penpot | Docker deployment |
| Dojrzałość ecosystem | Penpot | Wieloletnie użycie w production |

OpenPencil to zwarty single-process editor z CanvasKit renderer i native `.fig`. Penpot jest pełną client-server platform z Clojure, ClojureScript, Rust, databases i Docker services. Oba projekty obsługują współpracę, ale używają różnych modeli. Penpot oferuje plugin ecosystem i PDF export; OpenPencil — headless scripts zgodne z Figmą, 90 AI/MCP tools, SVG export i desktop app.

# OpenPencil und Penpot im Vergleich

OpenPencil und Penpot sind Open-Source-Design-Tools, verfolgen jedoch unterschiedliche Ziele und Architekturen.

::: info WASM renderer in Penpot
Penpot 2.x enthält den Rust/Skia-WASM-Renderer `render-wasm/v1`. Er wird über Server flags oder `?wasm=true` aktiviert; standardmäßig kommt weiterhin der SVG renderer zum Einsatz. Der Vergleich berücksichtigt beide Varianten.
:::

## 1. Umfang des Codebase

| Metrik | OpenPencil | Penpot |
|--------|------------|--------|
| Lines of code | **rund 26.000** | **rund 299.000** |
| Source files | rund 143 | rund 2.900 |
| Sprachen | TypeScript, Vue | Clojure, ClojureScript, Rust, JavaScript, SQL, SCSS |
| Renderer | rund 3.200 LOC, TypeScript | 22.000 LOC, Rust/Skia WASM |
| UI | rund 4.500 LOC | rund 175.000 LOC, CLJS und SCSS |
| Backend | Keines, local-first | 32.600 LOC und 151 SQL files |
| Verhältnis | **1×** | **rund 11×** |

OpenPencil ist ungefähr elfmal kleiner. Der Unterschied entsteht vor allem durch die Architektur, nicht nur durch den Funktionsumfang.

## 2. Architektur

### OpenPencil: ein Client process

```text
┌─────────────────────────────────┐
│         Tauri native shell      │
│  ┌───────────────────────────┐  │
│  │  Vue 3 + TypeScript       │  │
│  │  Editor + Kiwi codec      │  │
│  │  SceneGraph in TypeScript │  │
│  │  CanvasKit + Yoga WASM    │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

Editor, SceneGraph, File codec und Renderer laufen in einem Process. Ein separater Server, eine Database und Docker sind nicht erforderlich. Der SceneGraph liegt als `Map<string, SceneNode>` vor. TypeScript ruft CanvasKit direkt auf, Yoga WASM berechnet das Layout synchron.

### Penpot: Client-Server-Plattform

```text
┌───────────────────────────────────────────────────────┐
│                    Docker Compose                     │
│  ClojureScript frontend │ Clojure/JVM backend        │
│  Rust/Skia WASM         │ PostgreSQL, Valkey, MinIO  │
│  Chromium exporter      │ MCP server                 │
└───────────────────────────────────────────────────────┘
```

Ein vollständiges Penpot deployment umfasst Frontend, JVM backend, PostgreSQL, Valkey, MinIO und einen Exporter auf Grundlage von Headless Chromium. Die Development environment benötigt Docker Compose, JVM, Node und Rust toolchain.

OpenPencil vermeidet Network latency, Serialization zwischen Services, Container orchestration und Database queries für gewöhnliche Editor operations. Penpot ist auf eine zentral gehostete Multi-user-Plattform ausgerichtet; OpenPencil auf lokale Bearbeitung mit geringer Latenz.

## 3. Rendering pipeline

### OpenPencil: TypeScript → CanvasKit WASM

```typescript
renderSceneToCanvas(canvas, graph, pageId) {
  this.fillPaint.setColor(...)
  canvas.drawRRect(rrect, this.fillPaint)
}
```

- Ein direkter Übergang von TypeScript zu WASM.
- Der SceneGraph bleibt im JavaScript heap und wird vor dem Rendering nicht serialisiert.
- Der Renderer umfasst rund 3.200 LOC in spezialisierten Modules.

### Penpot: ClojureScript → Rust WASM → Skia

Mit aktiviertem WASM renderer:

```text
ClojureScript → JavaScript
  → Zerlegung und Binary packing in WASM linear memory
  → Rust WASM über Emscripten C FFI
  → skia-safe
  → Skia/WebGL
```

Ohne WASM wird jedes Shape als SVG DOM element über React/Reagent gerendert.

Im WASM mode wird eine UUID in vier `u32` zerlegt, ein Transform in sechs `f32`, Fills und Strokes werden binär codiert und grundlegende Shape properties in einer 104-Byte-Structure gespeichert. Der Renderer verwendet Tile cache, Interest areas, elf Render surfaces und globalen Mutable state über `unsafe { STATE.as_mut() }`.

Das Tile system bereitet Bereiche um den Viewport vor und hält bis zu 1.024 Textures im Cache. OpenPencil rendert dagegen den sichtbaren Bereich vollständig neu.

| Aspekt | OpenPencil | Penpot |
|--------|------------|--------|
| JavaScript → WASM | Direkte Calls mit TypeScript objects | Binär gepackte Structures |
| Rendering model | Vollständiger sichtbarer Viewport | Tile cache |
| Surfaces | 1 | 11 |
| Zusätzlicher Cache | Kein Tile cache | Bis zu 1.024 Tiles |
| Renderer size | rund 3.200 LOC | 22.000 LOC |
| Unsafe code | Keiner | Global state über `unsafe` |

Für kleine und mittlere Dokumente benötigt der direkte CanvasKit path weniger Zwischenverarbeitung. Bei Dokumenten mit mehr als 100.000 Shapes kann Penpots Tile system vorteilhaft sein, wenn nur ein kleiner Ausschnitt sichtbar ist.

## 4. SceneGraph und Datenmodell

### OpenPencil

```typescript
nodes: Map<string, SceneNode>
```

- Lookup nach ID in O(1).
- 29 Object types aus Figmas Kiwi schema.
- Rund 390 Fields in `NodeChange`.
- Strict TypeScript types.
- GUID im Figma format `sessionID:localID`.

Penpot pflegt eigene Type definitions in Clojure/ClojureScript und Rust. Separate Modules behandeln Colors, Components, Containers, Fills, Grid, Modifiers, Pages und Paths. Malli validiert Schemas zur Runtime, während Rendering data die Grenze von CLJS zu Rust überschreiten.

OpenPencil verwendet das Kiwi schema direkt. Penpot muss sein eigenes Datenmodell zwischen mehreren Sprachen synchron halten.

## 5. Layout engine

OpenPencil verwendet Yoga WASM synchron:

```typescript
import Yoga from 'yoga-layout'
const root = Yoga.Node.create()
root.setFlexDirection(FlexDirection.Row)
root.calculateLayout()
applyYogaLayout(graph, frame, yogaRoot)
```

Penpot pflegt eigene Flex- und Grid-Implementations in ClojureScript und Rust WASM. Beide Engines müssen dasselbe Ergebnis liefern.

OpenPencil nutzt eine etablierte Yoga library einschließlich Grid fork. Penpot wartet mehrere Tausend LOC eigenes Layout code in zwei Sprachen.

## 6. Dateiformate und Figma

### OpenPencil

- Native Kiwi binary format von Figma.
- Direkter Import von `.fig`.
- Paste von Kiwi binary data aus Figmas Clipboard.
- Wire compatibility mit Figmas Multiplayer protocol.

### Penpot

- `.penpot` ist ein ZIP mit JSON manifests, Dokumentdaten, Binary assets und Thumbnails.
- Standardmäßig SVG renderer und SVG export; optionaler WASM renderer.
- Kein nativer `.fig`-Import.
- Mehrere Format generations mit Migration system.

OpenPencil liest `.fig` und Figmas Clipboard direkt. Penpot benötigt einen getrennten Import- oder Exportweg.

## 7. State und Undo

OpenPencil verwendet inverse Commands. Forward und inverse closures speichern nur den benötigten State; Batches fassen mehrere Operations zusammen.

Penpot verwendet Potok. `UpdateEvent` ändert State, `WatchEvent` führt Side effects über RxJS aus. Undo speichert inverse Change vectors, begrenzt die History auf 50 Entries und gruppiert schnelle Änderungen in Transactions.

Serializable Changes passen gut zu Penpots serverbasierter Collaboration, erhöhen jedoch die Komplexität. OpenPencils Ansatz ist für den Single-process editor direkter.

## 8. Development

| Metrik | OpenPencil | Penpot |
|--------|------------|--------|
| Setup | `bun install && bun dev` | Docker Compose, JVM, Node und Rust |
| HMR | Vite | shadow-cljs |
| Types | Strict TypeScript | Malli runtime schemas |
| Desktop | Tauri v2 | Browser |
| Zentrale Technologien | TypeScript und Vue | Clojure, ClojureScript, Rust und Docker |

## 9. Performance characteristics

| Szenario | OpenPencil | Penpot |
|----------|------------|--------|
| Cold start | unter 2 s einschließlich WASM | über 10 s für Server, Client und WASM |
| Gewöhnliche Operation | Innerhalb eines Process | Möglicher Network round trip |
| Render frame | Direkter Skia call | CLJS → JS → WASM FFI → Skia |
| Grundbedarf an Memory | rund 50 MB im Browser tab | JVM, Database, Cache und Browser |
| Offline | Vollständiger local-first mode | Server erforderlich |
| 10K Shapes | Ein Rendering pass | Tile renderer mit elf Surfaces |

## 10. Stärken von Penpot

1. **Server collaboration:** Accounts, Access control und zentrale Speicherung über WebSockets.
2. **PDF export:** eigener Chromium exporter.
3. **Plugin system:** Sandboxed execution und Plugin API.
4. **Design tokens:** integrierte Unterstützung.
5. **CSS Grid:** eigene Implementation; OpenPencil verwendet einen Yoga fork mit Grid.
6. **Self-hosting:** Team platform über Docker deploybar.
7. **Reife:** mehrjährige Verwendung in Production.

## 11. Scripts und Erweiterbarkeit

Der Command [`eval`](/programmable/cli/scripting) stellt eine Figma-kompatible Plugin API für Headless scripts, Batch operations und automatisierte Tests bereit. Außerdem sind 90 AI tools über AI Chat, MCP server und CLI verfügbar. Sie decken Read, Create, Modify, Structure, Variables, Vector paths, Analysis, Diffs, Boolean operations und Arrangement ab.

Penpot besitzt sandboxed Plugins, aber kein vergleichbares Headless scripting API oder MCP integration.

## Zusammenfassung

| Bereich | Vorteil | Grund |
|---------|---------|-------|
| Einfachheit | OpenPencil | Ein Process statt mehrerer Services |
| Rendering | OpenPencil | Direkter CanvasKit path |
| Codebase | OpenPencil | Rund 26K statt 299K LOC |
| Figma compatibility | OpenPencil | Native Kiwi und `.fig` |
| Development setup | OpenPencil | TypeScript und Vue statt Clojure, Rust und Docker |
| Desktop app | OpenPencil | Native Tauri application |
| Layout | OpenPencil | Yoga statt zwei eigener Implementations |
| Collaboration | Unterschiedliche Stärken | Penpot: Server und Access control; OpenPencil: P2P ohne Hosting |
| Self-hosting | Penpot | Docker deployment |
| Ecosystem maturity | Penpot | Mehrjährige Production-Nutzung |

OpenPencil ist ein kompakter Single-process editor mit CanvasKit renderer und nativer `.fig`-Unterstützung. Penpot ist eine vollständige Client-Server-Plattform mit Clojure, ClojureScript, Rust, Databases und Docker services. Beide unterstützen Collaboration mit unterschiedlichen Modellen. Penpot bietet Plugin ecosystem und PDF export; OpenPencil eine Figma-kompatible Headless API, 90 AI/MCP tools, SVG export und eine Desktop-App.

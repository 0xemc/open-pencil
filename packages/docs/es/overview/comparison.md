# OpenPencil y Penpot: arquitectura y rendimiento

OpenPencil y Penpot son Tools de diseño de código abierto, pero persiguen objetivos y arquitecturas distintos.

::: info WASM renderer de Penpot
Penpot 2.x incluye el Rust/Skia WASM renderer `render-wasm/v1`, que se activa mediante Server flags o `?wasm=true`. El SVG renderer sigue siendo el predeterminado. La comparación tiene en cuenta ambas opciones.
:::

## 1. Tamaño del Codebase

| Métrica | OpenPencil | Penpot |
|---------|------------|--------|
| Lines of code | **unas 26.000** | **unas 299.000** |
| Source files | unas 143 | unas 2.900 |
| Lenguajes | TypeScript, Vue | Clojure, ClojureScript, Rust, JavaScript, SQL, SCSS |
| Renderer | unas 3.200 LOC, TypeScript | 22.000 LOC, Rust/Skia WASM |
| UI | unas 4.500 LOC | unas 175.000 LOC, CLJS y SCSS |
| Backend | Ninguno, Local-first | 32.600 LOC y 151 SQL files |
| Proporción | **1×** | **unas 11×** |

OpenPencil es unas once veces más pequeño. La diferencia se debe sobre todo a la arquitectura, no únicamente al número de funciones.

## 2. Arquitectura

### OpenPencil: un solo Client process

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

Editor, SceneGraph, File codec y Renderer se ejecutan en el mismo Process. No se necesita un Server, una Database ni Docker. SceneGraph se almacena como `Map<string, SceneNode>`. TypeScript llama directamente a CanvasKit y Yoga WASM calcula Layout de forma síncrona.

### Penpot: plataforma Client-Server

```text
┌───────────────────────────────────────────────────────┐
│                    Docker Compose                     │
│  ClojureScript frontend │ Clojure/JVM backend        │
│  Rust/Skia WASM         │ PostgreSQL, Valkey, MinIO  │
│  Chromium exporter      │ MCP server                 │
└───────────────────────────────────────────────────────┘
```

Un Deployment completo de Penpot incluye Frontend, JVM backend, PostgreSQL, Valkey, MinIO y un Exporter basado en Headless Chromium. El Development environment requiere Docker Compose, JVM, Node y Rust toolchain.

OpenPencil evita Network latency entre Frontend y Backend, Serialization entre Services, Container orchestration y Database queries para las operaciones habituales. Penpot está pensado como plataforma Multi-user alojada en un Server; OpenPencil prioriza la edición local con baja latencia.

## 3. Rendering pipeline

### OpenPencil: TypeScript → CanvasKit WASM

```typescript
renderSceneToCanvas(canvas, graph, pageId) {
  this.fillPaint.setColor(...)
  canvas.drawRRect(rrect, this.fillPaint)
}
```

- Paso directo de TypeScript a WASM.
- SceneGraph permanece en el JavaScript heap y no se serializa antes del Rendering.
- El Renderer contiene unas 3.200 LOC distribuidas en Modules especializados.

### Penpot: ClojureScript → Rust WASM → Skia

Con WASM renderer activado:

```text
ClojureScript → JavaScript
  → descomposición y Binary packing en WASM linear memory
  → Rust WASM mediante Emscripten C FFI
  → skia-safe
  → Skia/WebGL
```

Sin WASM, cada Shape se renderiza como SVG DOM element mediante React/Reagent.

En WASM mode, cada UUID se divide en cuatro `u32`, cada Transform en seis `f32`, Fills y Strokes se codifican en Binary y las Properties básicas de un Shape ocupan una Structure de 104 bytes. El Renderer usa Tile cache, Interest areas, once Render surfaces y Mutable global state mediante `unsafe { STATE.as_mut() }`.

El Tile system prepara zonas próximas al Viewport y almacena hasta 1.024 Textures. OpenPencil vuelve a renderizar toda la zona visible.

| Aspecto | OpenPencil | Penpot |
|---------|------------|--------|
| JavaScript → WASM | Calls directos con objetos TypeScript | Structures codificadas en Binary |
| Modelo | Render completo del Viewport visible | Tile cache |
| Surfaces | 1 | 11 |
| Caché adicional | Sin Tile cache | Hasta 1.024 Tiles |
| Tamaño del Renderer | unas 3.200 LOC | 22.000 LOC |
| Unsafe code | Ninguno | Global state mediante `unsafe` |

El Path directo de CanvasKit necesita menos procesamiento intermedio en documentos pequeños y medianos. El Tile system de Penpot puede resultar ventajoso en documentos con más de 100.000 Shapes cuando solo se muestra una zona reducida.

## 4. SceneGraph y modelo de datos

```typescript
nodes: Map<string, SceneNode>
```

OpenPencil ofrece:

- Lookup por ID en O(1);
- 29 Object types del Kiwi schema de Figma;
- unas 390 Fields en `NodeChange`;
- Strict TypeScript types;
- GUID con formato `sessionID:localID` de Figma.

Penpot mantiene sus propias Type definitions en Clojure/ClojureScript y Rust. Modules distintos gestionan Colors, Components, Containers, Fills, Grid, Modifiers, Pages y Paths. Malli valida Schemas en Runtime y los Rendering data cruzan el límite CLJS → Rust.

OpenPencil utiliza directamente Kiwi schema. Penpot debe mantener sincronizado su modelo entre varios lenguajes.

## 5. Layout engine

OpenPencil usa Yoga WASM de forma síncrona:

```typescript
import Yoga from 'yoga-layout'
const root = Yoga.Node.create()
root.setFlexDirection(FlexDirection.Row)
root.calculateLayout()
applyYogaLayout(graph, frame, yogaRoot)
```

Penpot mantiene Implementations propias de Flex y Grid en ClojureScript y Rust WASM. Ambos Engines deben producir el mismo resultado.

OpenPencil utiliza Yoga, incluido un Fork con Grid. Penpot mantiene varios miles de LOC de Layout code propio en dos lenguajes.

## 6. Formatos y Figma

### OpenPencil

- Formato Binary Kiwi nativo de Figma.
- Import directo de `.fig`.
- Paste de Kiwi binary data desde Figma Clipboard.
- Wire compatibility con Figma Multiplayer protocol.

### Penpot

- `.penpot` es un ZIP con JSON manifests, Document data, Binary assets y Thumbnails.
- SVG renderer y Export predeterminados; WASM renderer opcional.
- Sin Import nativo de `.fig`.
- Varias Generations del formato con Migration system.

OpenPencil lee `.fig` y Figma Clipboard directamente. Penpot necesita una vía de Import o Export separada.

## 7. State y Undo

OpenPencil usa Commands inversos. Forward e inverse closures guardan solo el State necesario; Batches agrupan varias Operations.

Penpot usa Potok. `UpdateEvent` modifica State y `WatchEvent` ejecuta Side effects mediante RxJS. Undo almacena Change vectors inversos, limita History a 50 Entries y agrupa cambios rápidos en Transactions.

Los Changes serializables encajan con Collaboration basada en Server, pero aumentan la complejidad. El enfoque de OpenPencil es más directo para un Single-process editor.

## 8. Desarrollo

| Métrica | OpenPencil | Penpot |
|---------|------------|--------|
| Setup | `bun install && bun dev` | Docker Compose, JVM, Node y Rust |
| HMR | Vite | shadow-cljs |
| Types | Strict TypeScript | Malli runtime schemas |
| Desktop | Tauri v2 | Browser |
| Tecnologías principales | TypeScript y Vue | Clojure, ClojureScript, Rust y Docker |

## 9. Rendimiento

| Escenario | OpenPencil | Penpot |
|-----------|------------|--------|
| Cold start | menos de 2 s con WASM | más de 10 s para Server, Client y WASM |
| Operación habitual | Dentro de un Process | Posible Network round trip |
| Render frame | Call directo a Skia | CLJS → JS → WASM FFI → Skia |
| Memory base | unos 50 MB en el Browser tab | JVM, Database, Cache y Browser |
| Offline | Local-first completo | Requiere Server |
| 10K Shapes | Una pasada | Tile renderer con once Surfaces |

## 10. Ventajas de Penpot

1. **Collaboration mediante Server:** Accounts, Access control y almacenamiento central a través de WebSockets.
2. **PDF export:** Chromium exporter independiente.
3. **Plugin system:** Sandboxed execution y Plugin API.
4. **Design tokens:** soporte integrado.
5. **CSS Grid:** Implementation propia; OpenPencil usa un Yoga fork con Grid.
6. **Self-hosting:** Deployment de una plataforma de equipo mediante Docker.
7. **Madurez:** varios años de uso en Production.

## 11. Scripts y extensibilidad

El Command [`eval`](/programmable/cli/scripting) proporciona una Plugin API compatible con Figma para Headless scripts, Batch operations y Tests automatizados. Además, AI Chat, MCP server y CLI ofrecen 90 AI tools para Read, Create, Modify, Structure, Variables, Vector paths, Analysis, Diffs, Boolean operations y Arrangement.

Penpot ofrece Sandboxed plugins, pero no un Headless scripting API o una MCP integration equivalente.

## Resumen

| Área | Ventaja | Motivo |
|------|---------|--------|
| Simplicidad | OpenPencil | Un Process en lugar de varios Services |
| Rendering | OpenPencil | Path directo de CanvasKit |
| Codebase | OpenPencil | Unas 26K frente a 299K LOC |
| Compatibilidad con Figma | OpenPencil | Kiwi y `.fig` nativos |
| Desarrollo | OpenPencil | TypeScript y Vue frente a Clojure, Rust y Docker |
| Aplicación de escritorio | OpenPencil | Tauri nativo |
| Layout | OpenPencil | Yoga frente a dos Implementations propias |
| Collaboration | Ventajas distintas | Penpot: Server y Access control; OpenPencil: P2P sin Hosting |
| Self-hosting | Penpot | Docker deployment |
| Madurez del Ecosystem | Penpot | Años de uso en Production |

OpenPencil es un Single-process editor compacto con CanvasKit renderer y soporte nativo de `.fig`. Penpot es una plataforma Client-Server completa con Clojure, ClojureScript, Rust, Databases y Docker services. Ambos ofrecen Collaboration con modelos diferentes. Penpot tiene Plugin ecosystem y PDF export; OpenPencil ofrece Headless scripting compatible con Figma, 90 AI/MCP tools, SVG export y una aplicación de escritorio.

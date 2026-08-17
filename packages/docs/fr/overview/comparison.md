# OpenPencil et Penpot : architecture et performances

OpenPencil et Penpot sont des Tools de design open source qui poursuivent des objectifs et des architectures différents.

::: info WASM renderer de Penpot
Penpot 2.x inclut le Rust/Skia WASM renderer `render-wasm/v1`, activé par des Server flags ou `?wasm=true`. Le SVG renderer reste utilisé par défaut. Cette comparaison tient compte des deux options.
:::

## 1. Taille du Codebase

| Mesure | OpenPencil | Penpot |
|--------|------------|--------|
| Lines of code | **environ 26 000** | **environ 299 000** |
| Source files | environ 143 | environ 2 900 |
| Langages | TypeScript, Vue | Clojure, ClojureScript, Rust, JavaScript, SQL, SCSS |
| Renderer | environ 3 200 LOC, TypeScript | 22 000 LOC, Rust/Skia WASM |
| UI | environ 4 500 LOC | environ 175 000 LOC, CLJS et SCSS |
| Backend | Aucun, Local-first | 32 600 LOC et 151 SQL files |
| Rapport | **1×** | **environ 11×** |

OpenPencil est environ onze fois plus petit. Cette différence vient surtout de l’architecture, pas uniquement du nombre de fonctionnalités.

## 2. Architecture

### OpenPencil : un Client process

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

Editor, SceneGraph, File codec et Renderer s’exécutent dans le même Process. Aucun Server, Database ou Docker n’est nécessaire. SceneGraph est stocké dans `Map<string, SceneNode>`. TypeScript appelle directement CanvasKit et Yoga WASM calcule le Layout de manière synchrone.

### Penpot : plateforme Client-Server

```text
┌───────────────────────────────────────────────────────┐
│                    Docker Compose                     │
│  ClojureScript frontend │ Clojure/JVM backend        │
│  Rust/Skia WASM         │ PostgreSQL, Valkey, MinIO  │
│  Chromium exporter      │ MCP server                 │
└───────────────────────────────────────────────────────┘
```

Un Deployment complet de Penpot comprend Frontend, JVM backend, PostgreSQL, Valkey, MinIO et un Exporter basé sur Headless Chromium. Le Development environment nécessite Docker Compose, JVM, Node et Rust toolchain.

OpenPencil évite Network latency entre Frontend et Backend, Serialization entre Services, Container orchestration et Database queries pour les opérations courantes. Penpot vise une plateforme Multi-user hébergée sur Server ; OpenPencil privilégie l’édition locale à faible latence.

## 3. Rendering pipeline

### OpenPencil : TypeScript → CanvasKit WASM

```typescript
renderSceneToCanvas(canvas, graph, pageId) {
  this.fillPaint.setColor(...)
  canvas.drawRRect(rrect, this.fillPaint)
}
```

- Passage direct de TypeScript à WASM.
- SceneGraph reste dans le JavaScript heap et n’est pas sérialisé avant Rendering.
- Le Renderer compte environ 3 200 LOC réparties en Modules spécialisés.

### Penpot : ClojureScript → Rust WASM → Skia

Avec WASM renderer :

```text
ClojureScript → JavaScript
  → décomposition et Binary packing dans WASM linear memory
  → Rust WASM via Emscripten C FFI
  → skia-safe
  → Skia/WebGL
```

Sans WASM, chaque Shape devient un SVG DOM element rendu par React/Reagent.

En WASM mode, chaque UUID est divisée en quatre `u32`, chaque Transform en six `f32`, Fills et Strokes sont encodés en Binary et les Properties de base d’un Shape occupent une Structure de 104 octets. Le Renderer utilise Tile cache, Interest areas, onze Render surfaces et un Mutable global state via `unsafe { STATE.as_mut() }`.

Le Tile system prépare les zones proches du Viewport et conserve jusqu’à 1 024 Textures. OpenPencil rend de nouveau toute la zone visible.

| Aspect | OpenPencil | Penpot |
|--------|------------|--------|
| JavaScript → WASM | Calls directs avec objets TypeScript | Structures encodées en Binary |
| Modèle | Rendu complet du Viewport visible | Tile cache |
| Surfaces | 1 | 11 |
| Cache supplémentaire | Aucun Tile cache | Jusqu’à 1 024 Tiles |
| Taille du Renderer | environ 3 200 LOC | 22 000 LOC |
| Unsafe code | Aucun | Global state via `unsafe` |

Le Path CanvasKit direct demande moins de traitement intermédiaire pour les documents petits et moyens. Le Tile system de Penpot peut être avantageux au-delà de 100 000 Shapes lorsqu’une faible portion seulement est visible.

## 4. SceneGraph et modèle de données

```typescript
nodes: Map<string, SceneNode>
```

OpenPencil fournit :

- Lookup par ID en O(1) ;
- 29 Object types du Kiwi schema de Figma ;
- environ 390 Fields dans `NodeChange` ;
- Strict TypeScript types ;
- GUID au format Figma `sessionID:localID`.

Penpot maintient ses propres Type definitions en Clojure/ClojureScript et Rust. Des Modules distincts gèrent Colors, Components, Containers, Fills, Grid, Modifiers, Pages et Paths. Malli valide les Schemas à la Runtime et les Rendering data franchissent la limite CLJS → Rust.

OpenPencil utilise directement Kiwi schema. Penpot doit synchroniser son modèle entre plusieurs langages.

## 5. Layout engine

OpenPencil utilise Yoga WASM de manière synchrone :

```typescript
import Yoga from 'yoga-layout'
const root = Yoga.Node.create()
root.setFlexDirection(FlexDirection.Row)
root.calculateLayout()
applyYogaLayout(graph, frame, yogaRoot)
```

Penpot maintient ses propres Implementations de Flex et Grid en ClojureScript et Rust WASM. Les deux Engines doivent produire le même résultat.

OpenPencil utilise Yoga, avec un Fork prenant Grid en charge. Penpot maintient plusieurs milliers de LOC de Layout code dans deux langages.

## 6. Formats et Figma

### OpenPencil

- Format Binary Kiwi natif de Figma.
- Import direct de `.fig`.
- Paste de Kiwi binary data depuis Figma Clipboard.
- Wire compatibility avec Figma Multiplayer protocol.

### Penpot

- `.penpot` est un ZIP avec JSON manifests, Document data, Binary assets et Thumbnails.
- SVG renderer et Export par défaut ; WASM renderer facultatif.
- Aucun Import `.fig` natif.
- Plusieurs Generations de format avec Migration system.

OpenPencil lit `.fig` et Figma Clipboard directement. Penpot nécessite une voie Import ou Export distincte.

## 7. State et Undo

OpenPencil utilise des Commands inverses. Forward et inverse closures conservent seulement le State nécessaire ; des Batches regroupent plusieurs Operations.

Penpot utilise Potok. `UpdateEvent` modifie State et `WatchEvent` exécute les Side effects avec RxJS. Undo stocke des Change vectors inverses, limite History à 50 Entries et regroupe les changements rapides en Transactions.

Les Changes sérialisables conviennent à la Collaboration via Server, mais augmentent la complexité. L’approche OpenPencil est plus directe pour un Single-process editor.

## 8. Développement

| Mesure | OpenPencil | Penpot |
|--------|------------|--------|
| Setup | `bun install && bun dev` | Docker Compose, JVM, Node et Rust |
| HMR | Vite | shadow-cljs |
| Types | Strict TypeScript | Malli runtime schemas |
| Desktop | Tauri v2 | Browser |
| Technologies principales | TypeScript et Vue | Clojure, ClojureScript, Rust et Docker |

## 9. Performances

| Scénario | OpenPencil | Penpot |
|----------|------------|--------|
| Cold start | moins de 2 s avec WASM | plus de 10 s pour Server, Client et WASM |
| Opération courante | Dans un Process | Network round trip possible |
| Render frame | Call Skia direct | CLJS → JS → WASM FFI → Skia |
| Memory de base | environ 50 Mo dans le Browser tab | JVM, Database, Cache et Browser |
| Offline | Local-first complet | Server requis |
| 10K Shapes | Une passe | Tile renderer avec onze Surfaces |

## 10. Avantages de Penpot

1. **Collaboration via Server :** Accounts, Access control et stockage central avec WebSockets.
2. **PDF export :** Chromium exporter dédié.
3. **Plugin system :** Sandboxed execution et Plugin API.
4. **Design tokens :** prise en charge intégrée.
5. **CSS Grid :** Implementation propre ; OpenPencil utilise un Yoga fork avec Grid.
6. **Self-hosting :** Deployment d’une plateforme d’équipe avec Docker.
7. **Maturité :** plusieurs années en Production.

## 11. Scripts et extensibilité

La Command [`eval`](/programmable/cli/scripting) fournit une Plugin API compatible Figma pour Headless scripts, Batch operations et Tests automatisés. AI Chat, MCP server et CLI offrent aussi 90 AI tools couvrant Read, Create, Modify, Structure, Variables, Vector paths, Analysis, Diffs, Boolean operations et Arrangement.

Penpot propose des Sandboxed plugins, mais pas d’Headless scripting API ou d’MCP integration équivalente.

## Résumé

| Domaine | Avantage | Motif |
|---------|----------|-------|
| Simplicité | OpenPencil | Un Process au lieu de plusieurs Services |
| Rendering | OpenPencil | Path CanvasKit direct |
| Codebase | OpenPencil | Environ 26K contre 299K LOC |
| Compatibilité Figma | OpenPencil | Kiwi et `.fig` natifs |
| Développement | OpenPencil | TypeScript et Vue plutôt que Clojure, Rust et Docker |
| Application de bureau | OpenPencil | Tauri natif |
| Layout | OpenPencil | Yoga plutôt que deux Implementations propres |
| Collaboration | Forces différentes | Penpot : Server et Access control ; OpenPencil : P2P sans Hosting |
| Self-hosting | Penpot | Docker deployment |
| Maturité de l’Ecosystem | Penpot | Plusieurs années en Production |

OpenPencil est un Single-process editor compact avec CanvasKit renderer et prise en charge native de `.fig`. Penpot est une plateforme Client-Server complète utilisant Clojure, ClojureScript, Rust, Databases et Docker services. Les deux offrent Collaboration avec des modèles différents. Penpot propose un Plugin ecosystem et PDF export ; OpenPencil fournit un Headless scripting compatible Figma, 90 AI/MCP tools, SVG export et une application de bureau.

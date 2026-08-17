---
title: Editar Vectors
description: Modificar Anchors, Bezier handles y Segments y usar Pen tool en Edit mode.
---

# Editar Vectors

Vector edit mode permite cambiar la geometría de un Path: posición de los Anchors, forma de los Segments y Bezier handles. No transforma el objeto completo, sino el propio Path.

## Abrir Edit mode

1. Selecciona un Vector object con Select tool.
2. Haz Double-click en la Curve.

Pulsa <kbd>Escape</kbd> o cambia a otro contexto para salir.

## Comportamiento

- Se oculta el Transform bounding box normal.
- Anchors, Segments y Handles se pueden seleccionar y modificar.
- Las esquinas del Bounding box no activan Resize ni Rotation.

## Operaciones básicas

### Mover un Anchor

Arrastra el Anchor. Los Segments conectados y la forma del Path se actualizan durante el Drag.

### Modificar un Bezier handle

Arrastra el Handle de un Anchor. El comportamiento depende de su Handle composition actual.

## Modificadores

| Comportamiento | macOS | Windows / Linux |
|----------------|-------|-----------------|
| Continuous | <kbd>Cmd</kbd> + Drag | <kbd>Ctrl</kbd> + Drag |
| Corner, Handles independientes | <kbd>Option</kbd> + Drag | <kbd>Alt</kbd> + Drag |
| Mantener Direction, cambiar solo Length | <kbd>Shift</kbd> + Drag | <kbd>Shift</kbd> + Drag |

### Continuous

Con <kbd>Cmd</kbd> o <kbd>Ctrl</kbd>, el Active handle permanece en la misma línea que el opuesto. Solo cambia su Length y la Curve mantiene una transición suave.

### Corner

Con <kbd>Option</kbd> o <kbd>Alt</kbd>, el Active handle se modifica de forma independiente. El opuesto permanece en su posición y se puede crear un Corner pronunciado.

### Mantener Direction

En Anchors con Composition **Continuous** o **Symmetric**, <kbd>Shift</kbd> conserva la Direction existente antes del Drag. Solo cambia la Length de uno o ambos Handles, según la Composition.

## Bend mediante Drag del Anchor

Al arrastrar un Anchor con <kbd>Cmd</kbd> o <kbd>Ctrl</kbd>, OpenPencil determina el Target handle por la Direction del Segment conectado, no por la distancia al punto vecino.

También funciona en Anchors ramificados de un Vector network. Una vez elegido, el mismo Target handle permanece activo hasta que termina el Drag.

## Pen tool en Edit mode

Con Pen tool activo:

- Click en un Segment inserta un Anchor y divide el Segment;
- Click en el Endpoint de un Path abierto continúa el dibujo;
- <kbd>Option</kbd>/<kbd>Alt</kbd> + Click elimina un Anchor si la Topology lo permite.

Consulta [Pen tool](./pen-tool.md) para crear y cerrar Paths.

## Ejemplo

1. Dibuja un Shape con Pen tool.
2. Abre la Curve con Double-click.
3. Mueve los Anchors para ajustar el contorno.
4. Modifica los Handles con <kbd>Cmd</kbd>/<kbd>Ctrl</kbd>, <kbd>Option</kbd>/<kbd>Alt</kbd> o <kbd>Shift</kbd>.
5. Pulsa <kbd>Escape</kbd>.

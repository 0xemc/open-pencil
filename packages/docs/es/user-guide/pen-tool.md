---
title: Pen tool
description: Dibujar Vector paths y Bezier curves con Pen tool.
---

# Pen tool

Pen tool crea Vector paths mediante el modelo Vector network compatible con Figma.

## Activar

Pulsa <kbd>P</kbd>.

## Crear Anchors

- Click crea un Corner anchor y un Segment recto.
- Click y Drag crea un Anchor con Bezier handles.
- Mantén <kbd>Space</kbd> durante el Drag para mover el propio Anchor sin soltar el Button.

Cada Anchor adicional amplía el Path con un nuevo Segment. Una Preview line conecta el último Anchor con el Pointer.

## Cerrar un Path

Haz Click en el primer Anchor para cerrar el Path. Los Paths cerrados pueden tener Fill.

## Path abierto

Pulsa <kbd>Escape</kbd> para terminar sin cerrar. Los Paths abiertos se muestran únicamente mediante Strokes.

## Vector networks

OpenPencil no almacena los Vectors como una lista simple de puntos, sino como Vector networks. Este modelo permite Topologies ramificadas y guarda la geometría en `.fig` sin convertirla.

## Continuar en Edit mode

Con Pen tool activo:

- Click en el Endpoint de un Path abierto continúa el dibujo desde allí;
- Click en un Segment inserta un Anchor;
- <kbd>Option</kbd>/<kbd>Alt</kbd> + Click elimina un Anchor si la Topology lo permite.

Consulta [Editar Vectors](./vector-edit) para conocer el Edit mode.

## Atajos

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Pen tool | <kbd>P</kbd> | <kbd>P</kbd> |
| Terminar un Path abierto | <kbd>Escape</kbd> | <kbd>Escape</kbd> |

## Consejos

- Un Drag más largo genera Bezier handles más largos.
- Después puedes modificar Fill, Stroke y Effects desde el panel Properties.

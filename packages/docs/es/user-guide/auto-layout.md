---
title: Auto layout
description: Layout Flex y Grid con Direction, Gap, Padding, Alignment, Child sizing y Grid tracks.
---

# Auto layout

Auto layout distribuye los Children de un Frame de forma automática. Admite dos modos:

- **Flex:** Flow horizontal o vertical;
- **Grid:** Rows y Columns con Tracks configurables.

## Activar Auto layout

- Selecciona un Frame y pulsa <kbd>⇧</kbd><kbd>A</kbd> para activar o desactivar Auto layout.
- Selecciona varios objetos sueltos y pulsa <kbd>⇧</kbd><kbd>A</kbd> para envolverlos en un nuevo Auto-layout Frame.

Antes de envolverlos, OpenPencil ordena los objetos según su posición visual.

## Direction

- **Horizontal:** coloca los Children de izquierda a derecha.
- **Vertical:** coloca los Children de arriba abajo.
- **Wrap:** crea otra fila o columna cuando se agota el espacio.

## Espaciado

### Gap

Gap controla la distancia entre Children adyacentes.

### Padding

Padding controla la distancia entre el borde del Frame y sus Children. Se puede usar un único valor o configurar cada lado por separado.

## Alignment

### Main axis

- **Start:** Children al principio del Axis.
- **Center:** Children centrados.
- **End:** Children al final.
- **Space between:** distribuye el espacio libre entre los Children.

### Cross axis

- **Start:** al principio del Cross axis.
- **Center:** centrados en el Cross axis.
- **End:** al final del Cross axis.
- **Stretch:** ocupan todo el Cross axis.

## Child sizing

- **Fixed:** usa Width o Height explícitos;
- **Fill:** ocupa el espacio disponible;
- **Hug:** ajusta el tamaño al contenido.

La primera modificación real de Width o Height cambia únicamente ese Axis de Hug o Fill a Fixed. El simple Focus de un Field no altera el Sizing mode.

## Reordenar mediante Drag

Los Children de un Auto-layout Frame se pueden mover entre sus Siblings. Un Indicator muestra la nueva posición.

## Atajo

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Activar o desactivar Auto layout | <kbd>⇧</kbd><kbd>A</kbd> | <kbd>Shift</kbd><kbd>A</kbd> |

## CSS Grid

Grid distribuye los Children en Rows y Columns con Track sizes explícitos.

### Activar Grid

Selecciona un Frame con Auto layout y cambia de Flex a Grid en los Layout controls.

### Track sizes

- **fr:** parte proporcional del espacio disponible;
- **px:** tamaño fijo en píxeles;
- **auto:** tamaño determinado por el contenido.

### Row gap y Column gap

El espacio horizontal y vertical entre las Cells puede configurarse por separado.

### Placement

Por defecto, los Children ocupan las Cells libres en orden de filas. Column start, Row start y Span se pueden configurar en las Layout properties del Child.

### Export a JSX y Tailwind

Los Grid layouts se exportan como JSX con Tailwind classes, por ejemplo `grid grid-cols-3`, `gap-x-4 gap-y-2` y `col-start-2 row-span-2`.

## Consejos

- Combina varios Auto-layout Frames para crear Layouts responsive complejos.
- Fill equivale aproximadamente a `flex-grow: 1` en muchos Flex layouts.
- Grid resulta adecuado para Dashboards, Galerías, Formularios y otras estructuras bidimensionales.

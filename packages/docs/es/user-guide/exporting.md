---
title: Export
description: Exportar la Selection como PNG, JPG, WEBP o SVG y abrir o guardar archivos `.fig`.
---

# Export

OpenPencil exporta objetos como Images o SVG y guarda documentos completos en formato `.fig`.

## Images y SVG

Selecciona un objeto y abre la sección Export del panel Properties.

### Ajustes

- **Scale:** de 0,5× a 4×; no se muestra para SVG porque es independiente de la resolución;
- **Format:** PNG con Background transparente, JPG con Background blanco, WEBP con Background transparente o SVG;
- varios Export settings por objeto;
- Live preview sobre un Checkerboard background.

### Iniciar el Export

| Método | macOS | Windows / Linux |
|--------|-------|-----------------|
| Atajo | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>E</kbd> |
| Menú contextual | Right-click → Export… | Right-click → Export… |
| Panel Properties | Button Export | Button Export |

## Copy as

El menú contextual puede escribir la Selection en el Clipboard:

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Copy as text | — | — |
| Copy as SVG | — | — |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>C</kbd> |
| Copy as JSX | — | — |

## Archivos `.fig`

OpenPencil usa el formato de Figma. Los archivos guardados se comprimen e incluyen una Thumbnail.

### Abrir y guardar

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Open file | <kbd>⌘</kbd><kbd>O</kbd> | <kbd>Ctrl</kbd><kbd>O</kbd> |
| Save | <kbd>⌘</kbd><kbd>S</kbd> | <kbd>Ctrl</kbd><kbd>S</kbd> |
| Save As | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>S</kbd> |

**Save** sobrescribe el archivo actual si OpenPencil conserva el permiso de escritura. **Save As** abre un diálogo para elegir otra ruta.

En el navegador, OpenPencil usa File System Access API cuando está disponible en Chrome y Edge. Otros navegadores, incluido Safari, descargan el archivo.

### Compatibilidad

Los `.fig` exportados se pueden volver a abrir en OpenPencil y en Figma. OpenPencil también importa archivos creados por Figma.

## Consejos

- Usa Scale 2× o 3× para pantallas de alta resolución.
- JPG siempre usa Background blanco; elige PNG o WEBP para conservar Transparency.
- SVG resulta adecuado para seguir editando en Code editors o Vector tools.

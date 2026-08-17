---
title: Editar texto
description: Crear y editar texto directamente en el canvas, aplicar Formatting y gestionar Fonts.
---

# Editar texto

OpenPencil crea objetos de texto y permite editarlos directamente en el canvas con Rich text.

## Crear texto

Pulsa <kbd>T</kbd> y haz Click en el canvas. Aparece un objeto de texto vacío con el Caret activo para empezar a escribir.

## Edit mode

Haz Double-click en un objeto de texto. Un Outline azul indica el Edit mode. Haz Click fuera para aplicar el cambio y salir.

El texto se renderiza en el canvas; no aparece un Input overlay independiente.

## Mover el Caret

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Carácter anterior/siguiente | <kbd>←</kbd>/<kbd>→</kbd> | <kbd>←</kbd>/<kbd>→</kbd> |
| Línea anterior/siguiente | <kbd>↑</kbd>/<kbd>↓</kbd> | <kbd>↑</kbd>/<kbd>↓</kbd> |
| Palabra anterior/siguiente | <kbd>⌥</kbd><kbd>←</kbd>/<kbd>⌥</kbd><kbd>→</kbd> | <kbd>Ctrl</kbd><kbd>←</kbd>/<kbd>Ctrl</kbd><kbd>→</kbd> |
| Inicio/final de línea | <kbd>⌘</kbd><kbd>←</kbd>/<kbd>⌘</kbd><kbd>→</kbd> | <kbd>Home</kbd>/<kbd>End</kbd> |

Mantén <kbd>Shift</kbd> para ampliar la Selection.

## Seleccionar texto

- Click sitúa el Caret.
- Drag selecciona un rango.
- Double-click selecciona una palabra.
- Triple-click selecciona todo el texto.

## Formatting

El Formatting se aplica a la Selection de texto. Si no hay un rango seleccionado, cambia el Style de todo el objeto.

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Bold | <kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd><kbd>B</kbd> |
| Italic | <kbd>⌘</kbd><kbd>I</kbd> | <kbd>Ctrl</kbd><kbd>I</kbd> |
| Underline | <kbd>⌘</kbd><kbd>U</kbd> | <kbd>Ctrl</kbd><kbd>U</kbd> |

Strikethrough está disponible mediante el Button **S** de Typography. No tiene atajo porque <kbd>⌘</kbd><kbd>S</kbd> corresponde a Save. Los Buttons **B / I / U / S** también modifican el Formatting.

El Style se almacena por carácter. Al escribir entre dos rangos con Styles distintos, el nuevo texto hereda el Style del rango anterior.

## Operaciones de edición

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Eliminar la palabra anterior | <kbd>⌥</kbd><kbd>⌫</kbd> | <kbd>Ctrl</kbd> + Backspace |
| Eliminar hasta el inicio de línea | <kbd>⌘</kbd><kbd>⌫</kbd> | — |
| Cut | <kbd>⌘</kbd><kbd>X</kbd> | <kbd>Ctrl</kbd><kbd>X</kbd> |
| Copy | <kbd>⌘</kbd><kbd>C</kbd> | <kbd>Ctrl</kbd><kbd>C</kbd> |
| Paste | <kbd>⌘</kbd><kbd>V</kbd> | <kbd>Ctrl</kbd><kbd>V</kbd> |

## Font picker

El Font picker de Typography permite:

- filtrar por nombre;
- previsualizar cada Family con su propio Font;
- recorrer listas extensas mediante Virtual scroll;
- desplazarse al Font actual al abrir el Picker.

## Font style

Los Styles disponibles dependen de la Family elegida, por ejemplo Regular, Medium, Bold o Black.

## Fuentes de Fonts

- **Predeterminada:** Inter se carga automáticamente.
- **Aplicación de escritorio:** System fonts y catálogos habilitados de Google Fonts, Fontsource, Bunny Fonts y Fontshare.
- **Navegador:** Chrome y Edge permiten usar System fonts; los catálogos online requieren la aplicación de escritorio.
- **Fonts descargados:** la aplicación guarda las Faces descargadas para reutilizarlas en el mismo equipo.

## Fonts ausentes

Si no se puede cargar una Family o un Style, OpenPencil muestra una advertencia sobre el editor en lugar de presentar el Fallback como si fuera fiel al diseño.

Despliega la advertencia para ver las Faces afectadas y sus sustituciones. **Select layers** localiza los objetos de texto. **Retry fonts** inicia otro intento después de modificar el acceso de red, los permisos de Fonts locales o la configuración de Providers.

Si falta un Style, puede sintetizarse a partir de otra Face cargada de la misma Family. Si falta toda la Family, OpenPencil usa Inter cuando está disponible.

## Consejos

- La lista de Fonts se carga al iniciar para que el Picker se abra sin demora.
- IME para chino, japonés y coreano está soportado.
- El Rich-text formatting se conserva al abrir y guardar archivos `.fig`.
- Consulta [Components](./components) para conocer los Text overrides en Instances.

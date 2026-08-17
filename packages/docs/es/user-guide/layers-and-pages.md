---
title: Layers y Pages
description: Gestionar Layers, Pages y el panel Properties de OpenPencil.
---

# Layers y Pages

La interfaz principal contiene el panel Layers a la izquierda, el canvas en el centro y el panel Properties a la derecha. Los paneles laterales se pueden redimensionar desde sus separadores.

## Panel Layers

El panel Layers representa la jerarquía del documento como un Tree.

### Jerarquía

Los Frames, Groups y Components se pueden expandir para mostrar sus Children.

### Orden y Parent

Arrastra una Layer para cambiar su orden o colocarla dentro de otro contenedor. Las Layers situadas más arriba se renderizan delante de las inferiores.

### Visibility

El Eye icon oculta o muestra una Layer en el canvas.

### Renombrar

Double-click en el nombre abre un Input. <kbd>Enter</kbd> o Click fuera aplica el cambio; <kbd>Escape</kbd> lo cancela.

### Selection

Click en una Layer selecciona el objeto correspondiente en el canvas. La Selection del canvas también se refleja en el Tree.

## Pages

- Click cambia de Page.
- Add button crea una Page.
- Delete elimina la Page actual.
- Double-click inicia el cambio de nombre.

Cada Page mantiene su Canvas background y su propio Viewport state.

## Panel Properties

### Design

Muestra las Properties de la Selection:

- **Appearance:** Opacity, Corner radius y Visibility;
- **Fill:** Solid colors, Gradients, Images y Variable bindings;
- **Stroke:** Color, Weight, Alignment, Cap, Join y Dash;
- **Effects:** Drop shadow, Inner shadow y Blur;
- **Typography:** Font family, Style, Size y Buttons B/I/U/S;
- **Layout:** controles de [Auto layout](./auto-layout);
- **Export:** Scale, Format y Action de exportación.

### Code

Muestra la Selection como JSX con Syntax highlighting y permite exportar HTML con Tailwind CSS v4.

### AI

Abre AI Chat. También se puede cambiar a esta pestaña con <kbd>⌘</kbd><kbd>J</kbd> o <kbd>Ctrl</kbd><kbd>J</kbd>.

## Diseño móvil

En pantallas pequeñas, los paneles laterales se sustituyen por un Bottom sheet con pestañas para Layers, Properties, Design y Code.

## Atajo

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Abrir o cerrar AI Chat | <kbd>⌘</kbd><kbd>J</kbd> | <kbd>Ctrl</kbd><kbd>J</kbd> |

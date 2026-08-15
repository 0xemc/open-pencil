---
title: Arquitectura del SDK
description: Estructura del paquete, límites de la API pública y principios de diseño de @open-pencil/vue.
---

# Arquitectura del SDK

`@open-pencil/vue` conecta `@open-pencil/core` con Vue.

El modelo del editor sigue perteneciendo a core. Este paquete añade:

- dependency injection mediante Vue;
- composables reactivos;
- componentes estructurales headless;
- conexión del lienzo y gestión de la entrada del usuario.

## Estructura del paquete

El código se organiza por áreas funcionales.

### Familias de componentes

- `Canvas/`
- `ColorPicker/`
- `FillPicker/`
- `FontPicker/`
- `GradientEditor/`
- `LayerTree/`
- `PageList/`
- `PropertyList/`
- `PropertySection/`
- `SegmentedControl/`
- `NumberField/`
- `Toolbar/`

Estos directorios contienen componentes estructurales headless y funciones auxiliares específicas de cada área.

### Controls

`controls/` contiene composables para los paneles de propiedades y los controles del editor:

- `usePosition`
- `useLayout`
- `useAppearance`
- `useColorModel`
- `useTypography`
- `useExport`
- `useFillControls`
- `useStrokeControls`
- `useEffectsControls`
- `useNodeProps`
- `usePropScrub`
- `useEditorPropertyList`

### Variables

`VariablesEditor/` contiene composables y el código que conecta el estado del editor de variables con Vue.

### Selection

`selection/` contiene el estado calculado a partir de la selección y la información sobre las operaciones disponibles.

### Context

`context/` contiene la clave y las funciones que proporcionan el editor mediante dependency injection de Vue:

- `EDITOR_KEY`
- `provideEditor`
- `useEditor`

### Internal

`internal/` contiene funciones auxiliares compartidas. No forman parte de los componentes headless principales del paquete.

## Principios de la API pública

### Composables para la lógica y el estado

Si el código sirve principalmente para calcular o administrar el estado, o para ejecutar operaciones del editor, proporciónalo como composable.

### Componentes headless solo cuando la estructura sea relevante

Un componente raíz resulta útil cuando coordina la estructura, los elementos descendientes, los slots o el contexto.

Ejemplos:

- `PageListRoot`
- `PropertyListRoot`
- `PropertySectionRoot`
- `SegmentedControlRoot`
- `ToolbarRoot`

### No pases todo el contexto por un único slot

Pasa al slot únicamente los props necesarios o utiliza el composable directamente. Los componentes controlados, como `PropertyListRoot`, emiten eventos semánticos. La conexión con la selección y el historial de deshacer debe estar en un adaptador o composable de control, no en el propio componente.

## Responsabilidades de la aplicación y el SDK

### SDK

- integración con el editor;
- lógica headless reutilizable;
- estructura de interfaz reutilizable y sin requisitos de estilo;
- integración con el renderizado del lienzo.

### Aplicación

- estilos;
- disposición general de las páginas;
- routing;
- apertura, guardado y otras operaciones con archivos;
- notificaciones, menús y comportamiento específico de la aplicación.

## Regla general

Si un fragmento de código puede utilizarse en otro editor basado en OpenPencil sin arrastrar los estilos de la aplicación, probablemente debe formar parte de `@open-pencil/vue`.

## Véase también

- [Primeros pasos con el SDK](./getting-started)
- [Referencia de la API](./api/)

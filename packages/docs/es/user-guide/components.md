---
title: Components
description: Components reutilizables, Instances, Component sets, Overrides y Libraries en OpenPencil.
---

# Components

Los Components son objetos de diseño reutilizables. Los cambios en el Main component se propagan automáticamente a sus Instances.

## Explorar Components

La pestaña **Assets** del panel izquierdo muestra Components locales y Libraries habilitadas. Permite Search y vistas Grid/List. Puedes insertar un Component mediante Click, <kbd>Enter</kbd> o Drag and drop. Las Library revisions descargadas siguen disponibles Offline.

## Crear un Component

Selecciona un Frame o Group y pulsa <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>; en Windows y Linux, <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>K</kbd>. OpenPencil convierte el objeto en un Component.

Los Components muestran un Label morado con Diamond icon.

## Component sets y Variants

Selecciona al menos dos Components y pulsa <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> para crear un Component set con borde morado discontinuo.

Los Variants pueden contener varias Dimensions, por ejemplo `Size=Small`, `State=Hover` y `Theme=Dark`. No es obligatorio definir todas las combinaciones. El Variant situado arriba a la izquierda actúa como Default y como Fallback cuando una actualización deja de incluir una coincidencia exacta.

El panel Properties permite añadir, renombrar, ordenar y eliminar Dimensions y Values. Las combinaciones duplicadas no están permitidas.

## Component properties

OpenPencil admite Properties de Text, Boolean visibility e Instance swap. Una Property se puede asociar con el Field de un Child. Después, la Instance puede cambiar ese Value sin separarse del Main component. Definitions y Assignments se conservan en `.fig`.

## Libraries

Una Library publica Components como Revisions inmutables. En **Assets → Manage libraries → Publish library**, la primera publicación establece una Library ID permanente y un Name. Se pueden seleccionar cambios concretos para cada Revision; los no incluidos permanecen pendientes.

Las Libraries habilitadas aparecen en Assets junto a los Components locales. Sus Definitions son Read-only en el documento consumidor, mientras que las Instances y sus Overrides continúan siendo editables.

En **Updates** se comparan la Instance actual y la nueva. El Update puede aplicarse a una Instance, a todas las Instances de un Asset, a la Page actual o a todas las Pages. Las Properties compatibles se conservan. Si falta un Variant, se muestra el Fallback antes de confirmar. Los Updates admiten Undo y Redo.

Las Libraries pueden guardarse localmente o mediante un Storage provider. OpenPencil almacena en caché las Revisions descargadas. Los Bindings habilitados y las Definitions necesarias se materializan en `.fig`, de modo que el documento se abre aunque la Remote library no esté disponible.

## Crear una Instance

Haz Right-click sobre un Component y elige **Create instance**. La nueva Instance aparece 40 px a la derecha del Source component.

## Detach instance

Selecciona una Instance y pulsa <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd>; en Windows y Linux, <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>B</kbd>. Se convierte en un Frame sin vínculo con el Component.

## Go to main component

Haz Right-click sobre una Instance y elige **Go to main component**. El editor cambia de Page cuando es necesario y selecciona el Source component.

## Sincronización

Las modificaciones del Main component actualizan:

- Width y Height;
- Fills, Strokes y Effects;
- Opacity y Corner radii;
- Layout properties;
- Clip content.

## Overrides

Una Instance puede sustituir Properties concretas sin perder su conexión. Esos Values se conservan durante la sincronización.

Entre los Overrides disponibles se encuentran Name, Text, Font size, Font style, Font family y las Properties visuales y de Layout.

Cuando se añade un Child al Main component, OpenPencil incorpora el Child correspondiente a las Instances.

## Selection

Components e Instances se comportan como contenedores cerrados. Un Click selecciona el contenedor. Double-click permite entrar y seleccionar un Child.

## Apariencia

| Elemento | Apariencia |
|----------|------------|
| Component label | Morado con Diamond icon |
| Instance label | Morado con Diamond icon |
| Borde de Component set | Morado y discontinuo |

## Atajos

| Acción | macOS | Windows / Linux |
|--------|-------|-----------------|
| Create component | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>K</kbd> |
| Create component set | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Shift</kbd><kbd>Ctrl</kbd><kbd>K</kbd> |
| Detach instance | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>B</kbd> |

## Consejos

- Editar Text dentro de una Instance crea un Override.
- Los Component sets sirven para Variants, como distintos States de un Button.
- Haz Double-click antes de editar un Child de un Component.

---
title: Variables
description: Design variables, Collections, Modes y Color bindings en OpenPencil.
---

# Variables

Las Variables almacenan Design tokens reutilizables, como Colors y valores de Spacing. Las Properties de los objetos pueden vincularse a ellas. Cuando cambia una Variable, se actualizan todos los objetos asociados.

## Abrir Variables

Cuando no hay ningún objeto seleccionado, la pestaña Design muestra las Page properties. El Settings icon de la sección Variables abre el Variables dialog.

## Collections

Las Variables se organizan en Collections. Cada Collection aparece como una pestaña.

- Click cambia de Collection.
- Double-click en el nombre permite renombrarla.

## Modes

Una Collection puede tener varios Modes, por ejemplo Light y Dark. Se muestran como Columns de la Variables table.

## Editar Variables

- **Crear:** elige **Create variable**.
- **Name:** haz Click en la Name cell.
- **Value:** haz Click en la Cell del Mode correspondiente.
- **Search:** filtra la lista desde la Search bar.

### Color variables

Los Color values se editan directamente en la tabla mediante un Color input y un Picker.

Los Types `FLOAT`, `STRING` y `BOOLEAN` existen en el modelo de datos, pero aún no disponen de una Editing UI completa.

## Bindings de Fill y Stroke

El Variable picker de Fill y Stroke vincula una Color variable con la Property de Color correspondiente.

- Selecciona una Variable para crear el Binding. El Field muestra un Badge morado con su Name.
- Elimina el Binding mediante la Action específica del Picker.

Abrir el Field o el Picker no modifica el Binding. Solo una modificación real del Value puede, según el Control, desvincularlo o editar la propia Variable.

## Consejos

- Usa Collections para agrupar Tokens relacionados, por ejemplo `Primitives` para Colors base y `Semantic` para Tokens según su función.
- Los Modes permiten definir Themes Light y Dark en una misma Collection.
- Los Aliases permiten que una Variable haga referencia a otra, incluso si pertenece a una Collection distinta.

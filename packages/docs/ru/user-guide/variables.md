---
title: Переменные
description: Design variables, collections, modes и привязка к fills в OpenPencil.
---

# Переменные

Variables хранят переиспользуемые design tokens: цвета, spacing и другие значения, которые можно связать с объектами. После изменения variable все связанные с ней объекты обновляются.

## Открытие Variables

Снимите выделение со всех объектов. На вкладке Design появятся свойства страницы, включая раздел Variables с количеством collections и variables. Нажмите значок настроек, чтобы открыть диалог.

## Collections

Variables объединяются в collections. Каждая collection представлена отдельной вкладкой.

- Нажмите вкладку, чтобы перейти к collection.
- Дважды нажмите её имя, чтобы переименовать collection.

## Modes

Collection может содержать несколько modes, например Light и Dark. В таблице каждый mode занимает отдельный столбец, а variable хранит значение для каждого mode.

### Добавление collections и modes

Новая collection создаётся через toolbar диалога. Добавляйте modes, чтобы хранить варианты темы или значения для разных responsive breakpoints.

## Работа с variables

В таблице есть изменяемый по ширине столбец Name и по одному столбцу для каждого mode.

- **Создать:** нажмите **+ Create variable**.
- **Переименовать:** нажмите ячейку с именем.
- **Изменить значение:** нажмите ячейку нужного mode.
- **Найти:** введите часть имени в search field.

### Color variables

Для color variable в таблице отображается color input. Нажмите swatch, чтобы открыть color picker.

## Привязка к Fill

На панели свойств откройте раздел Fill и выберите color variable через variable picker.

- **Bind:** выберите variable. Рядом с fill появится фиолетовая подпись с её именем.
- **Detach:** удалите binding. Fill сохранит вычисленное на этот момент color value.

После изменения variable или переключения mode все связанные fills обновляются автоматически.

## Советы

- Объединяйте связанные tokens в collections, например Primitives для исходных цветов, Semantic для role-based aliases и Spacing для значений layout.
- Light и Dark values одной темы удобно хранить как modes одной collection.
- Variables поддерживают aliases: variable из Semantic может ссылаться на значение из Primitives.
- Работа с fills и color picker описана в разделе [Фигуры](./drawing-shapes).

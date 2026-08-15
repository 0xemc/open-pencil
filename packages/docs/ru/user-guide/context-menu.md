---
title: Контекстное меню
description: Clipboard, порядок наложения, groups, components и другие действия по правому нажатию в OpenPencil.
---

# Контекстное меню

Нажмите холст правой кнопкой мыши. Если указатель находится над объектом, OpenPencil сначала выделит его. Нажатие правой кнопкой на пустом участке снимает текущее выделение.

## Copy/Paste as

В submenu **Copy/Paste as** доступны дополнительные clipboard formats:

| Действие | macOS | Windows / Linux |
|----------|-------|-----------------|
| Copy as text | — | — |
| Copy as SVG | — | — |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Copy as JSX | — | — |

- **Copy as text** копирует видимый текст из selection.
- **Copy as SVG** копирует дерево объектов как SVG markup.
- **Copy as PNG** выполняет отрисовку в масштабе 2× и помещает изображение в системный clipboard.
- **Copy as JSX** копирует OpenPencil JSX для использования с `renderJsx()`.

## Clipboard

| Действие | macOS | Windows / Linux |
|----------|-------|-----------------|
| Copy | <kbd>⌘</kbd><kbd>C</kbd> | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Cut | <kbd>⌘</kbd><kbd>X</kbd> | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Paste here | <kbd>⌘</kbd><kbd>V</kbd> | <kbd>Ctrl</kbd> + <kbd>V</kbd> |
| Duplicate | <kbd>⌘</kbd><kbd>D</kbd> | <kbd>Ctrl</kbd> + <kbd>D</kbd> |
| Delete | <kbd>⌫</kbd> | <kbd>Backspace</kbd> / <kbd>Delete</kbd> |

Если ничего не выделено, действия с selection недоступны. Paste остаётся доступным, когда clipboard содержит поддерживаемые данные.

## Порядок наложения

| Действие | Клавиша |
|----------|---------|
| Bring to front | <kbd>]</kbd> |
| Send to back | <kbd>[</kbd> |

Команды перемещают объект в начало или конец списка children его parent.

## Groups и Auto layout

| Действие | macOS | Windows / Linux |
|----------|-------|-----------------|
| Group | <kbd>⌘</kbd><kbd>G</kbd> | <kbd>Ctrl</kbd> + <kbd>G</kbd> |
| Ungroup | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>G</kbd> |
| Add auto layout | <kbd>⇧</kbd><kbd>A</kbd> | <kbd>Shift</kbd> + <kbd>A</kbd> |

- **Group** доступен, когда выделено не менее двух объектов.
- **Ungroup** переносит children выбранного group к его parent.
- **Add auto layout** помещает selection в новый frame с [Auto layout](./auto-layout).

## Components

Действия с components показаны фиолетовым цветом.

| Действие | macOS | Windows / Linux | Доступно для |
|----------|-------|-----------------|--------------|
| Create component | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> | Frames, groups и multi-selection |
| Create component set | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | Не менее двух components |
| Create instance | — | — | Components |
| Go to main component | — | — | Instances |
| Detach instance | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd> | Instances |

Подробнее — в разделе [Компоненты](./components).

## Видимость и блокировка

| Действие | macOS | Windows / Linux |
|----------|-------|-----------------|
| Hide / Show | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>H</kbd> |
| Lock / Unlock | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> |

Название команды зависит от текущего состояния: для видимого объекта показывается Hide, а для скрытого — Show.

## Move to page

Submenu **Move to page** содержит все страницы, кроме текущей. Выбранная страница становится новым parent для перемещаемых объектов.

## Советы

- На пустом холсте контекстное меню позволяет выполнить Paste в выбранном месте.
- Команды для components появляются только в подходящем context, например Create instance показывается только для component.
- Рядом с командами указаны сочетания клавиш, поэтому меню удобно использовать как справочник.

---
title: Редактирование vector paths
description: Изменение anchors, segments и handles Безье, модификаторы и действия Pen tool в режиме редактирования.
---

# Редактирование vector paths

В режиме Vector Object Editing изменяется сама geometry path: положение anchors, форма segments и handles Безье. Обычные преобразования всего объекта в этом режиме недоступны.

## Вход в режим

1. Выберите vector object с помощью Select tool.
2. Дважды нажмите его curve.

## Выход

Нажмите <kbd>Escape</kbd> или перейдите в другой режим редактирования.

## Отличия режима

- Transform bounding box объекта отключается.
- Можно изменять anchors, segments и handles.
- При наведении на углы bounding box не включаются resize и rotate.

## Основные действия

### Перемещение anchor

Перетащите anchor point. Связанные segments и форма path обновляются во время движения.

### Изменение handle Безье

Перетащите handle выбранного anchor. Поведение второго handle зависит от текущего handle composition.

## Модификаторы при перетаскивании handle

| Режим | macOS | Windows / Linux |
|-------|-------|-----------------|
| Continuous | <kbd>Cmd</kbd> + перетаскивание | <kbd>Ctrl</kbd> + перетаскивание |
| Corner | <kbd>Option</kbd> + перетаскивание | <kbd>Alt</kbd> + перетаскивание |
| Зафиксировать направление | <kbd>Shift</kbd> + перетаскивание | <kbd>Shift</kbd> + перетаскивание |

### Continuous

- Активный handle остаётся на одной прямой со вторым handle.
- Изменяется только длина активного handle.
- Режим подходит для плавного перехода без угла.

### Corner

- Активный handle изменяется независимо.
- Второй handle остаётся на месте.
- Режим создаёт резкий переход в anchor.

### Фиксация направления

Для anchors с composition **Continuous** или **Symmetric** направление handles фиксируется в положении до начала перетаскивания. Движение меняет только длину одного или обоих handles в зависимости от composition.

## Изменение изгиба перетаскиванием anchor

Если перетаскивать anchor с нажатой <kbd>Cmd</kbd> или <kbd>Ctrl</kbd>, OpenPencil выбирает нужный handle по направлению, в котором segment входит в anchor, а не по расстоянию до ближайшей соседней точки.

Это работает и для anchors с несколькими branches в vector network. После выбора target handle не меняется до конца текущего перетаскивания.

## Pen tool в режиме редактирования

Если активен Pen tool:

- нажмите segment, чтобы вставить новый anchor и разделить segment;
- нажмите endpoint открытого path, чтобы продолжить рисование от него;
- удерживайте <kbd>Option</kbd> или <kbd>Alt</kbd> и нажмите anchor, чтобы удалить его, если topology это допускает.

Создание и замыкание paths описано в разделе [Pen tool](./pen-tool.md).

## Пример работы

1. Создайте shape с помощью Pen tool.
2. Дважды нажмите curve, чтобы войти в Vector Object Editing.
3. Переместите anchors и уточните силуэт.
4. Измените handles:
   - с <kbd>Cmd</kbd> или <kbd>Ctrl</kbd> для плавного перехода;
   - с <kbd>Option</kbd> или <kbd>Alt</kbd> для независимого изменения;
   - с <kbd>Shift</kbd> только для изменения длины.
5. Нажмите <kbd>Escape</kbd>.

---
title: Фигуры
description: Создание rectangles, ellipses, lines, frames, sections, polygons и stars в OpenPencil.
---

# Фигуры

На нижней toolbar находятся инструменты для создания shapes, frames и sections. Выберите инструмент, затем нажмите и перетащите указатель по холсту.

## Инструменты

| Инструмент | Клавиша | Результат |
|------------|---------|-----------|
| Rectangle | <kbd>R</kbd> | Прямоугольник |
| Ellipse | <kbd>O</kbd> | Эллипс |
| Line | <kbd>L</kbd> | Линия |
| Frame | <kbd>F</kbd> | Контейнер для других объектов |
| Section | <kbd>S</kbd> | Контейнер верхнего уровня, который принимает пересекающиеся соседние объекты |

## Дополнительные shapes

В раскрывающемся меню Shapes доступны:

- **Polygon:** по умолчанию треугольник с тремя сторонами;
- **Star:** по умолчанию звезда с пятью вершинами и inner radius 0,38.

Отдельных сочетаний клавиш для Polygon и Star нет.

## Рисование с ограничениями

Удерживайте <kbd>Shift</kbd> во время перетаскивания:

- Rectangle станет квадратом;
- Ellipse станет кругом;
- Line будет привязываться к углам 0°, 45° и 90°.

## Свойства shape

Выделите созданный объект и откройте вкладку Design на панели свойств.

### Fill

- **Solid color:** HSV color picker или hex value;
- **Gradient:** Linear, Radial, Angular или Diamond с редактируемыми stops;
- **Image:** файл изображения в качестве заливки.

### Stroke

- **Width:** общая толщина или отдельные значения для Top, Right, Bottom и Left;
- **Color:** сплошной цвет с opacity;
- **Alignment:** Inside, Center или Outside; отрисовка с clipping соответствует Figma;
- **Cap:** None, Round, Square, Arrow Lines или Arrow Equilateral для открытых paths;
- **Join:** Miter, Bevel или Round;
- **Dash pattern:** длины штриха и промежутка.

### Corner radius

Corner radius доступен для rectangles, frames, components и instances. Включите независимые углы, чтобы отдельно задать top-left, top-right, bottom-left и bottom-right.

### Effects

- **Drop Shadow:** offset, blur radius, spread и color;
- **Inner Shadow:** те же параметры, но эффект отображается внутри shape;
- **Layer Blur:** размывает весь объект;
- **Background Blur:** размывает содержимое за объектом;
- **Foreground Blur:** размывает содержимое перед ним.

Нажмите **+**, чтобы добавить effect. Строку effect можно раскрыть для настройки, а значок глаза включает и отключает его.

## Frames и Sections

**Frame** — контейнер для других объектов. Перетащите shape внутрь frame, чтобы изменить его parent. Frame может обрезать содержимое, но по умолчанию Clips content отключён. Frames также поддерживают [Auto layout](./auto-layout).

После выбора Frame tool на панели Design появляются сворачиваемые группы presets для телефонов, планшетов, компьютеров, презентаций, часов, бумаги, социальных сетей, Figma Community assets и устаревших устройств. Preset создаёт именованный frame в центре viewport, после чего OpenPencil возвращается к Select tool. Если frame уже выделен, dropdown Frame preset изменит его размер, не меняя имя.

**Section** — контейнер верхнего уровня. При рисовании он автоматически принимает пересекающиеся соседние объекты. Sections помогают разделить большой холст на смысловые области. Подпись section можно перетаскивать.

## Сочетания клавиш

| Действие | macOS | Windows / Linux |
|----------|-------|-----------------|
| Rectangle tool | <kbd>R</kbd> | <kbd>R</kbd> |
| Ellipse tool | <kbd>O</kbd> | <kbd>O</kbd> |
| Line tool | <kbd>L</kbd> | <kbd>L</kbd> |
| Frame tool | <kbd>F</kbd> | <kbd>F</kbd> |
| Section tool | <kbd>S</kbd> | <kbd>S</kbd> |
| Квадрат или круг | <kbd>Shift</kbd> + перетаскивание | <kbd>Shift</kbd> + перетаскивание |

## Советы

- Section может находиться только на верхнем уровне, а не внутри frame.
- Для адаптивных интерфейсов используйте frames с [Auto layout](./auto-layout).
- Отдельные shapes и groups можно [экспортировать](./exporting) через панель свойств или контекстное меню.

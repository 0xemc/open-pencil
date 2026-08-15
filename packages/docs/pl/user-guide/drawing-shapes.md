---
title: Kształty
description: Tworzenie rectangles, ellipses, lines, frames, sections, polygons i stars w OpenPencil.
---

# Kształty

Dolny toolbar zawiera narzędzia do tworzenia shapes, frames i sections. Wybierz narzędzie, a następnie naciśnij i przeciągnij wskaźnik po obszarze roboczym.

## Narzędzia

| Narzędzie | Klawisz | Wynik |
|-----------|---------|-------|
| Rectangle | <kbd>R</kbd> | Prostokąt |
| Ellipse | <kbd>O</kbd> | Elipsa |
| Line | <kbd>L</kbd> | Linia |
| Frame | <kbd>F</kbd> | Kontener na inne obiekty |
| Section | <kbd>S</kbd> | Kontener najwyższego poziomu przejmujący przecinające się obiekty |

## Dodatkowe shapes

W rozwijanym menu Shapes dostępne są:

- **Polygon:** domyślnie trójkąt o trzech bokach;
- **Star:** domyślnie gwiazda o pięciu ramionach i inner radius 0,38.

Polygon i Star nie mają osobnych skrótów klawiaturowych.

## Rysowanie z ograniczeniami

Przytrzymaj <kbd>Shift</kbd> podczas przeciągania:

- Rectangle stanie się kwadratem;
- Ellipse stanie się kołem;
- Line będzie przyciągana do kątów 0°, 45° i 90°.

## Właściwości shape

Zaznacz utworzony obiekt i otwórz kartę Design na panelu właściwości.

### Fill

- **Solid color:** HSV color picker albo wartość hex;
- **Gradient:** Linear, Radial, Angular lub Diamond z edytowalnymi stops;
- **Image:** plik obrazu jako wypełnienie.

### Stroke

- **Width:** wspólna grubość albo osobne wartości Top, Right, Bottom i Left;
- **Color:** kolor z opacity;
- **Alignment:** Inside, Center albo Outside; clipping odpowiada zachowaniu Figmy;
- **Cap:** None, Round, Square, Arrow Lines lub Arrow Equilateral dla otwartych paths;
- **Join:** Miter, Bevel albo Round;
- **Dash pattern:** długość kreski i odstępu.

### Corner radius

Corner radius jest dostępny dla rectangles, frames, components i instances. Włącz niezależne narożniki, aby osobno ustawić top-left, top-right, bottom-left i bottom-right.

### Effects

- **Drop Shadow:** offset, blur radius, spread i color;
- **Inner Shadow:** te same parametry, ale efekt znajduje się wewnątrz shape;
- **Layer Blur:** rozmywa cały obiekt;
- **Background Blur:** rozmywa zawartość za obiektem;
- **Foreground Blur:** rozmywa zawartość przed nim.

Naciśnij **+**, aby dodać effect. Wiersz effect można rozwinąć, a ikona oka włącza i wyłącza efekt.

## Frames i Sections

**Frame** jest kontenerem. Przeciągnij shape do frame, aby zmienić jego parent. Frame może przycinać zawartość, ale Clips content jest domyślnie wyłączone. Frames obsługują również [Auto layout](./auto-layout).

Po wybraniu Frame tool panel Design pokazuje zwijane grupy presets dla telefonów, tabletów, komputerów, prezentacji, zegarków, papieru, mediów społecznościowych, Figma Community assets i starszych urządzeń. Preset tworzy nazwany frame pośrodku viewport, po czym OpenPencil wraca do Select tool. Jeśli frame jest już zaznaczony, dropdown Frame preset zmienia jego rozmiar bez zmiany nazwy.

**Section** jest kontenerem najwyższego poziomu. Podczas rysowania automatycznie przejmuje przecinające się obiekty znajdujące się obok. Sections pomagają dzielić duży obszar roboczy na logiczne części. Etykietę section można przeciągać.

## Skróty klawiaturowe

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Rectangle tool | <kbd>R</kbd> | <kbd>R</kbd> |
| Ellipse tool | <kbd>O</kbd> | <kbd>O</kbd> |
| Line tool | <kbd>L</kbd> | <kbd>L</kbd> |
| Frame tool | <kbd>F</kbd> | <kbd>F</kbd> |
| Section tool | <kbd>S</kbd> | <kbd>S</kbd> |
| Kwadrat lub koło | <kbd>Shift</kbd> + przeciąganie | <kbd>Shift</kbd> + przeciąganie |

## Wskazówki

- Section może znajdować się tylko na najwyższym poziomie, a nie wewnątrz frame.
- Do responsywnych interfejsów używaj frames z [Auto layout](./auto-layout).
- Pojedyncze shapes i groups można [eksportować](./exporting) przez panel właściwości lub menu kontekstowe.

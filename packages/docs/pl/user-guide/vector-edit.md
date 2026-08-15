---
title: Edycja wektorów
description: Edycja anchors, Bezier handles i segments oraz używanie Pen tool w trybie edycji wektorów.
---

# Edycja wektorów

Tryb edycji wektorów pozwala zmieniać geometrię ścieżki: położenie anchors, kształt segments i Bezier handles. Zamiast transformować cały obiekt, edytujesz samą ścieżkę.

## Włączanie trybu edycji

1. Wybierz obiekt wektorowy za pomocą Select tool.
2. Kliknij dwukrotnie krzywą.

Aby zakończyć edycję, naciśnij <kbd>Escape</kbd> albo przejdź do innego trybu.

## Zachowanie interfejsu

W trybie edycji:

- bounding box służący do transformacji obiektu jest ukryty;
- można wybierać i zmieniać anchors, segments oraz handles;
- narożniki bounding box nie aktywują resize ani rotation.

## Podstawowe operacje

### Przesuwanie anchor

Przeciągnij anchor. Połączone segments i kształt ścieżki zmieniają się podczas przeciągania.

### Edycja Bezier handle

Przeciągnij handle przy anchor. Domyślne zachowanie zależy od aktualnego handle composition danego anchor.

## Modyfikatory przeciągania handles

| Operacja | macOS | Windows / Linux |
|----------|-------|-----------------|
| Continuous | <kbd>Cmd</kbd> + przeciągnięcie | <kbd>Ctrl</kbd> + przeciągnięcie |
| Corner, niezależne handles | <kbd>Option</kbd> + przeciągnięcie | <kbd>Alt</kbd> + przeciągnięcie |
| Zablokowany kierunek, tylko długość | <kbd>Shift</kbd> + przeciągnięcie | <kbd>Shift</kbd> + przeciągnięcie |

### Continuous

Przytrzymaj <kbd>Cmd</kbd> albo <kbd>Ctrl</kbd> podczas przeciągania:

- active handle pozostaje na jednej linii z drugim handle;
- zmienia się wyłącznie długość active handle;
- krzywa zachowuje płynne przejście bez ostrego narożnika.

### Corner

Przytrzymaj <kbd>Option</kbd> albo <kbd>Alt</kbd>:

- active handle zmienia się niezależnie;
- drugi handle pozostaje na miejscu;
- można utworzyć ostre przejście w narożniku.

### Zablokowany kierunek

Dla anchors o composition **Continuous** albo **Symmetric**, przytrzymanie <kbd>Shift</kbd> blokuje kierunek zapisany przed rozpoczęciem bieżącego przeciągania. Zmienia się tylko długość jednego lub obu handles, zależnie od composition.

## Zmiana wygięcia przez przeciągnięcie anchor

Gdy przeciągasz anchor z wciśniętym <kbd>Cmd</kbd> albo <kbd>Ctrl</kbd>, edytor wybiera właściwy handle na podstawie kierunku segment przyłączonego do anchor, a nie odległości od najbliższego sąsiedniego punktu.

Działa to również dla wielogałęziowych anchors w vector network. Po wybraniu target handle nie zmienia się do końca bieżącego przeciągania.

## Pen tool w trybie edycji

Gdy Pen tool jest aktywne:

- kliknij segment, aby dodać anchor i podzielić segment;
- kliknij endpoint otwartej ścieżki, aby wznowić rysowanie;
- kliknij anchor z wciśniętym <kbd>Option</kbd> albo <kbd>Alt</kbd>, aby go usunąć, jeśli pozwala na to topologia.

Tworzenie i zamykanie ścieżek opisano na stronie [Pen tool](./pen-tool.md).

## Przykładowa kolejność pracy

1. Narysuj kształt za pomocą Pen tool.
2. Kliknij dwukrotnie krzywą, aby rozpocząć edycję wektora.
3. Przesuń anchors, aby poprawić obrys.
4. Zmień handles:
   - <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> zachowuje płynne przejście;
   - <kbd>Option</kbd>/<kbd>Alt</kbd> rozłącza handles;
   - <kbd>Shift</kbd> zmienia tylko długość.
5. Naciśnij <kbd>Escape</kbd>.

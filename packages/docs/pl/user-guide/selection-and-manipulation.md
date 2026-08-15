---
title: Zaznaczanie i modyfikowanie
description: Wybieranie, przesuwanie, zmiana rozmiaru, obracanie, kopiowanie i porządkowanie obiektów.
---

# Zaznaczanie i modyfikowanie

Zaznacz jeden lub kilka obiektów, aby je przesuwać, zmieniać ich rozmiar, obracać, kopiować i zmieniać kolejność.

## Zaznaczanie

- Naciśnij obiekt, aby zaznaczyć wyłącznie jego.
- Przytrzymaj <kbd>Shift</kbd> i naciskaj obiekty, aby dodawać je do selection albo z niego usuwać.
- Rozpocznij przeciąganie na pustym obszarze, aby utworzyć marquee selection. Po zwolnieniu przycisku zostaną zaznaczone wszystkie przecinające się obiekty.
- Naciśnij <kbd>⌘</kbd><kbd>A</kbd> albo <kbd>Ctrl</kbd> + <kbd>A</kbd>, aby zaznaczyć wszystkie obiekty bieżącej strony.
- Naciśnij pusty obszar, aby usunąć zaznaczenie.

## Przesuwanie

- Przeciągnij dowolny zaznaczony obiekt. Pozostałe obiekty w selection przesuną się razem z nim.
- Klawisze strzałek przesuwają selection o 1 px.
- <kbd>Shift</kbd> + strzałka przesuwa go o 10 px.

## Zmiana rozmiaru

Wokół selection pojawia się osiem resize handles: cztery w narożnikach i cztery na bokach. Przeciągnij handle, aby zmienić rozmiar.

Przytrzymaj <kbd>Shift</kbd> podczas przeciągania narożnego handle, aby zachować proporcje.

## Obracanie

Umieść wskaźnik nieco poza narożnym handle. Gdy pojawi się cursor obrotu, rozpocznij przeciąganie.

Przytrzymaj <kbd>Shift</kbd>, aby przyciągać kąt co 15°.

## Kopiowanie

- <kbd>⌥</kbd> + przeciąganie w macOS albo <kbd>Alt</kbd> + przeciąganie w Windows i Linuksie tworzy kopię i od razu ją przesuwa.
- <kbd>⌘</kbd><kbd>D</kbd> albo <kbd>Ctrl</kbd> + <kbd>D</kbd> tworzy kopię w tym samym miejscu.

## Usuwanie

Naciśnij <kbd>Backspace</kbd> lub <kbd>Delete</kbd>, aby usunąć wszystkie zaznaczone obiekty.

## Kolejność nakładania

Kolejność zmienia się wewnątrz wspólnego parent:

- <kbd>]</kbd> — umieścić przed pozostałymi siblings;
- <kbd>[</kbd> — umieścić za pozostałymi siblings.

## Widoczność i blokada

- <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> albo <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>H</kbd> ukrywa lub pokazuje selection. Ukryte obiekty pozostają w drzewie warstw.
- <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd> albo <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> blokuje lub odblokowuje selection. Zablokowanego obiektu nie można wybrać ani przesunąć na obszarze roboczym.

## Przenoszenie na inną stronę

Wybierz stronę docelową w [menu kontekstowym](./context-menu). Obiekty otrzymają obszar roboczy tej strony jako nowy parent.

## Sections

Podczas rysowania Section wszystkie przecinające się sibling objects automatycznie stają się jej elementami potomnymi.

## Skróty klawiaturowe

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Zaznaczyć wszystko | <kbd>⌘</kbd><kbd>A</kbd> | <kbd>Ctrl</kbd> + <kbd>A</kbd> |
| Utworzyć kopię | <kbd>⌘</kbd><kbd>D</kbd> | <kbd>Ctrl</kbd> + <kbd>D</kbd> |
| Utworzyć i przesunąć kopię | <kbd>⌥</kbd> + przeciąganie | <kbd>Alt</kbd> + przeciąganie |
| Usunąć | <kbd>⌫</kbd> / <kbd>Delete</kbd> | <kbd>Backspace</kbd> / <kbd>Delete</kbd> |
| Przesunąć o 1 px | Strzałki | Strzałki |
| Przesunąć o 10 px | <kbd>⇧</kbd> + strzałka | <kbd>Shift</kbd> + strzałka |
| Przed pozostałe | <kbd>]</kbd> | <kbd>]</kbd> |
| Za pozostałe | <kbd>[</kbd> | <kbd>[</kbd> |
| Ukryć lub pokazać | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>H</kbd> |
| Zablokować lub odblokować | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> |

## Wskazówki

- Jeśli obiekty się nakładają, wybieraj je i zmieniaj kolejność na panelu [Warstwy i strony](./layers-and-pages).
- Grupowanie, tworzenie components i inne operacje znajdują się w [menu kontekstowym](./context-menu).

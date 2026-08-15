---
title: Zmienne
description: Design variables, collections, modes i binding do fills w OpenPencil.
---

# Zmienne

Variables przechowują design tokens przeznaczone do ponownego użycia: kolory, spacing i inne wartości, które można powiązać z obiektami. Po zmianie variable wszystkie powiązane obiekty zostają zaktualizowane.

## Otwieranie Variables

Usuń zaznaczenie ze wszystkich obiektów. Karta Design pokaże właściwości strony, w tym sekcję Variables z liczbą collections i variables. Naciśnij ikonę ustawień, aby otworzyć okno.

## Collections

Variables są łączone w collections. Każda collection jest przedstawiona jako osobna karta.

- Naciśnij kartę, aby przejść do collection.
- Naciśnij jej nazwę dwukrotnie, aby zmienić nazwę collection.

## Modes

Collection może zawierać kilka modes, na przykład Light i Dark. W tabeli każdy mode zajmuje osobną kolumnę, a variable przechowuje wartość dla każdego mode.

### Dodawanie collections i modes

Nową collection tworzy się przez toolbar okna. Dodawaj modes, aby przechowywać warianty motywu albo wartości dla różnych responsive breakpoints.

## Praca z variables

Tabela zawiera kolumnę Name o zmiennej szerokości oraz po jednej kolumnie dla każdego mode.

- **Utworzyć:** naciśnij **+ Create variable**.
- **Zmienić nazwę:** naciśnij komórkę z nazwą.
- **Zmienić wartość:** naciśnij komórkę odpowiedniego mode.
- **Wyszukać:** wpisz część nazwy w search field.

### Color variables

Dla color variable tabela pokazuje color input. Naciśnij swatch, aby otworzyć color picker.

## Binding do Fill

Na panelu właściwości otwórz sekcję Fill i wybierz color variable za pomocą variable picker.

- **Bind:** wybierz variable. Obok fill pojawi się fioletowa etykieta z jej nazwą.
- **Detach:** usuń binding. Fill zachowa color value obliczone w tej chwili.

Po zmianie variable albo przełączeniu mode wszystkie powiązane fills aktualizują się automatycznie.

## Wskazówki

- Łącz powiązane tokens w collections, na przykład Primitives dla kolorów źródłowych, Semantic dla role-based aliases i Spacing dla wartości layout.
- Wartości Light i Dark jednego motywu wygodnie przechowywać jako modes jednej collection.
- Variables obsługują aliases: variable z Semantic może odwoływać się do wartości z Primitives.
- Fills i color picker opisano na stronie [Kształty](./drawing-shapes).

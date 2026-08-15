---
title: Auto layout
description: "Flex i grid w OpenPencil: kierunek, gap, padding, wyrównanie, rozmiary elementów potomnych i grid tracks."
---

# Auto layout

Auto layout automatycznie rozmieszcza elementy potomne wewnątrz frame. Dostępne są dwa tryby: **flex** z przepływem poziomym lub pionowym oraz **grid** z wierszami, kolumnami i konfigurowalnymi tracks.

## Włączanie Auto layout

- Zaznacz frame i naciśnij <kbd>⇧</kbd><kbd>A</kbd>, aby włączyć lub wyłączyć Auto layout.
- Zaznacz obiekty bez wspólnego parent frame i naciśnij <kbd>⇧</kbd><kbd>A</kbd>, aby umieścić je w nowym frame z Auto layout.

Podczas tworzenia frame obiekty są sortowane według położenia: od lewej do prawej dla układu poziomego i od góry do dołu dla pionowego.

## Kierunek

- **Horizontal:** obiekty są rozmieszczane od lewej do prawej.
- **Vertical:** obiekty są rozmieszczane od góry do dołu.
- **Wrap:** po wyczerpaniu miejsca obiekty przechodzą do następnego wiersza lub kolumny.

## Odstępy

### Gap

Odległość między sąsiednimi elementami potomnymi. Jedna wartość dotyczy wszystkich przerw.

### Padding

Odległość między krawędzią frame a jego zawartością. Można ustawić jedną wartość albo osobne wartości dla każdej strony.

## Wyrównanie

### Justify — główna oś

- **Start:** przy początku osi;
- **Center:** pośrodku;
- **End:** przy końcu osi;
- **Space between:** wolne miejsce zostaje równo rozdzielone między obiekty.

### Align — oś poprzeczna

- **Start:** przy początku osi poprzecznej;
- **Center:** pośrodku;
- **End:** przy końcu osi;
- **Stretch:** rozciągnięcie na dostępną szerokość lub wysokość.

## Rozmiar elementów potomnych

Każda oś może mieć osobny tryb:

- **Fixed:** używa jawnej szerokości lub wysokości;
- **Fill:** zajmuje dostępne miejsce w parent;
- **Hug:** dopasowuje rozmiar do zawartości.

## Zmiana kolejności

Przeciągnij element potomny wewnątrz frame, aby zmienić jego miejsce. Wskaźnik pokazuje przyszłą pozycję.

## Panel właściwości

Po zaznaczeniu frame z Auto layout sekcja Layout pokazuje direction, gap, padding, justify i align.

## Skrót klawiaturowy

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Włączyć lub wyłączyć Auto layout | <kbd>⇧</kbd><kbd>A</kbd> | <kbd>Shift</kbd> + <kbd>A</kbd> |

## CSS Grid

Grid rozmieszcza elementy potomne w wierszach i kolumnach z jawnie określonym rozmiarem tracks.

### Włączanie Grid

Zaznacz frame z Auto layout i naciśnij ikonę grid w panelu Layout, aby przełączyć tryb flex na grid.

### Rozmiary tracks

- **fr:** część dostępnego miejsca;
- **px:** stała liczba pikseli;
- **auto:** rozmiar zależny od zawartości.

Na przykład `1fr 200px 1fr` tworzy trzy kolumny: stałą środkową i dwie elastyczne boczne.

### Gap w Grid

Dla wierszy i kolumn można ustawić osobne wartości gap.

### Rozmieszczanie obiektów

Domyślnie obiekty kolejno wypełniają komórki wierszami. We właściwościach elementu potomnego można zmienić początkowy wiersz lub kolumnę oraz określić span.

### Eksport do JSX i Tailwind

Grid jest eksportowany do JSX z klasami Tailwind, na przykład `grid grid-cols-3`, `gap-x-4 gap-y-2` i `col-start-2 row-span-2`.

## Wskazówki

- Auto layout jest obliczany natychmiast po utworzeniu, więc granice zaznaczenia od razu się aktualizują.
- Zagnieżdżaj frames z Auto layout, aby tworzyć złożone interfejsy responsywne.
- Fill wykorzystuje pozostałe miejsce podobnie do `flex-grow: 1` w CSS.
- Grid sprawdza się w dashboardach, galeriach, formularzach i innych strukturach dwuwymiarowych.
- Tworzenie frames opisano na stronie [Kształty](./drawing-shapes).
- Użycie Auto layout wewnątrz komponentów opisano na stronie [Komponenty](./components).

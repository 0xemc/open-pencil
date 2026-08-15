---
title: Komponenty
description: Components, instances, component sets, overrides, synchronizacja i biblioteki w OpenPencil.
---

# Komponenty

Component jest elementem projektu przeznaczonym do ponownego użycia. Po zmianie main component wszystkie powiązane instances aktualizują się automatycznie.

## Assets

Otwórz kartę **Assets** w lewym panelu, aby zobaczyć lokalne components i włączone biblioteki. Dostępne są grid view, list view i wyszukiwanie według nazwy. Po wybraniu component pojawiają się szczegółowe informacje.

Asset można dodać do obszaru roboczego przez naciśnięcie, klawisz <kbd>Enter</kbd> lub przeciągnięcie. Lokalne assets są grupowane według stron źródłowych. Asset z biblioteki pozostaje dostępny bez sieci, jeśli jego revision została wcześniej pobrana.

## Tworzenie component

Zaznacz frame lub group i naciśnij <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd>. W Windows i Linuksie użyj <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd>.

Jeśli zaznaczono kilka obiektów, OpenPencil umieszcza je w nowym component o granicach zgodnych ze wspólnym bounding box.

Nad component pojawia się fioletowa etykieta z ikoną rombu.

## Component sets i variants

Zaznacz co najmniej dwa components i naciśnij <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> albo <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd>. OpenPencil połączy je w component set z fioletową przerywaną ramką i padding 40 px.

Każdy component w set może określać wartości wielu variant dimensions, na przykład `Size=Small`, `State=Hover` i `Theme=Dark`. Nie trzeba tworzyć wszystkich możliwych kombinacji. Variant w lewym górnym rogu jest wartością domyślną i pełni rolę fallback, gdy po aktualizacji dokładna kombinacja nie istnieje.

Na panelu właściwości component można dodawać, zmieniać nazwy, porządkować i usuwać dimensions oraz ich wartości. Nie można utworzyć dwóch identycznych kombinacji.

## Component properties

Components i component sets obsługują properties trzech rodzajów:

- text;
- boolean visibility;
- instance swap.

Powiąż property z polem obiektu potomnego. Następnie wartość można zmieniać w instance bez detach. Definicje properties i przypisane wartości są zapisywane w `.fig`.

## Biblioteki komponentów

Biblioteka publikuje components jako niezmienne revisions. Każdy opublikowany asset ma stałe library ID, asset ID i revision ID. Dzięki temu różne instances mogą korzystać z różnych revisions aż do jawnej aktualizacji.

### Publikowanie

1. Utwórz components i component sets, które chcesz udostępnić.
2. Otwórz **Assets → Manage libraries**.
3. Wybierz **Publish library**.
4. Podaj stałe library ID i nazwę wyświetlaną. Po pierwszej publikacji ID nie można zmienić.
5. Opcjonalnie wyszukaj odpowiednie zmiany i dodaj opis revision.
6. Zaznacz dodane, zmienione, przemianowane lub usunięte assets, które mają zostać uwzględnione.
7. Sprawdź miejsce publikacji i naciśnij **Publish library**.

Podczas kolejnych publikacji niezaznaczone zmiany pozostają oczekujące. Niezmienione assets zachowują poprzednie definicje. Usunięte definicje pozostają dostępne, dopóki dokumenty odwołują się do ich historycznych revisions.

### Włączanie i wstawianie assets

Otwórz **Assets → Manage libraries** i włącz bibliotekę. Jej components pojawią się obok lokalnych. Dodaj asset przez naciśnięcie, za pomocą klawiatury albo przeciągnięcie.

Opublikowane definicje są dostępne w dokumencie korzystającym z biblioteki wyłącznie do odczytu. Aby zmienić definicję, edytuj dokument źródłowy i opublikuj nową revision. Powiązane instances nadal można konfigurować za pomocą component properties i overrides.

### Sprawdzanie i przyjmowanie aktualizacji

Otwórz **Manage libraries → Updates**, aby znaleźć nowe revisions. Samo wyszukiwanie niczego nie zmienia w dokumencie. Można porównać bieżący i zaktualizowany instance, przechodzić między dotkniętymi instances, a następnie zaktualizować:

- zaznaczony instance;
- wszystkie instances jednego asset;
- instances na bieżącej stronie;
- instances na wszystkich stronach.

OpenPencil zachowuje zgodne text, visibility i instance-swap assignments. Jeśli dokładny variant już nie istnieje, przed zatwierdzeniem aktualizacji zostanie pokazany fallback z lewego górnego rogu. Zastosowaną aktualizację można cofnąć przez Undo.

### Praca lokalna, storage i offline mode

Biblioteka może znajdować się w lokalnym katalogu browser albo u skonfigurowanego storage provider. Zdalna publikacja używa niezmiennych revision objects i warunkowo aktualizowanego wskaźnika latest, dlatego dwóch autorów nie może niezauważenie nadpisać swoich zmian.

Pobrane revisions są zapisywane lokalnie. Bez sieci dokument nadal wyświetla ich definicje i pozwala wstawiać odpowiednie assets. Błędy integrity check są zgłaszane zamiast ukrywania ich za danymi z cache.

### Zapisywanie dokumentu korzystającego z biblioteki

Powiązania bibliotek i materialized definitions są zapisywane w `.fig`. Po ponownym otwarciu dokumentu linked instances i revision IDs pozostają zachowane, nawet gdy zdalna biblioteka jest niedostępna.

## Tworzenie instance

Naciśnij component prawym przyciskiem i wybierz **Create instance**. Nowy instance pojawi się 40 px na prawo od component źródłowego i będzie wyglądał tak samo.

Polecenie znajduje się wyłącznie w menu kontekstowym; toolbar nie zawiera osobnego przycisku.

## Detach instance

Zaznacz instance i naciśnij <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> albo <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd>. Instance stanie się zwykłym frame i utraci powiązanie z main component. Wszystkie overrides zostaną zachowane jako zwykłe wartości.

## Go to main component

Naciśnij instance prawym przyciskiem i wybierz **Go to main component**. OpenPencil przejdzie do component źródłowego, w razie potrzeby zmieni stronę i go zaznaczy.

## Synchronizacja

Po zmianie component powiązane instances aktualizują się automatycznie. Synchronizowane są:

- szerokość i wysokość;
- fills, strokes i effects;
- opacity i corner radii;
- parametry layout, w tym Auto layout;
- Clips content.

Synchronizacja następuje po zmianie, przesunięciu albo zmianie rozmiaru obiektów potomnych component.

## Overrides

Instance może zastąpić wybrane properties bez zrywania powiązania z component. Podczas następnej synchronizacji zmieniona property zostanie zachowana, a pozostałe nadal będą aktualizowane z main component.

Dla obiektów potomnych można zastąpić nazwę, tekst, font size, font weight, font family oraz visual i layout properties: fills, strokes, effects, opacity, corner radii i rozmiary.

Jeśli do component zostanie dodany nowy obiekt potomny, jego kopia automatycznie pojawi się we wszystkich istniejących instances. Kolejność elementów odpowiada main component.

## Wybieranie obiektów potomnych

Components i instances zachowują się jak pojedyncze kontenery: pierwsze naciśnięcie obiektu potomnego zaznacza kontener. Naciśnij component albo instance dwukrotnie, aby wejść do środka i wybrać zawartość.

## Oznaczenia

| Element | Wygląd |
|---------|--------|
| Component | Stała fioletowa etykieta z ikoną rombu |
| Instance | Stała fioletowa etykieta z ikoną rombu |
| Component set | Fioletowa przerywana ramka |

## Skróty klawiaturowe

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Utworzyć component | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> |
| Utworzyć component set | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> |
| Detach instance | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd> |

## Wskazówki

- Zmiana tekstu wewnątrz instance tworzy override, dlatego późniejsza zmiana component nie zastąpi tego tekstu.
- Component sets nadają się do variants o kilku dimensions, takich jak rozmiar, stan i motyw.
- Publikuj assets z dokumentu źródłowego; opublikowane definicje są celowo dostępne dla odbiorców tylko do odczytu.
- Przed przyjęciem revision sprawdź aktualizację, zwłaszcza jeśli nowa wersja usuwa dokładną kombinację variant values.
- Wszystkie polecenia dotyczące components opisano w [menu kontekstowym](./context-menu).

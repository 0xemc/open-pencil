---
title: Eksport i pliki
description: Eksport obrazów, SVG i wybranych obiektów do .fig oraz otwieranie dokumentów .fig i .pen.
---

# Eksport i pliki

OpenPencil eksportuje pojedyncze obiekty jako obrazy, SVG albo osobne dokumenty `.fig`. Edytor otwiera pełne dokumenty `.fig` i `.pen`.

## Eksport obrazów

Zaznacz obiekt i otwórz sekcję Export na panelu właściwości.

### Ustawienia

- **Scale:** 0,5×, 0,75×, 1×, 1,5×, 2×, 3× lub 4×. Dla SVG skala nie jest wyświetlana, ponieważ vector graphics nie zależą od rozdzielczości.
- **Format:** PNG z przezroczystym tłem, JPG z białym tłem, WEBP z przezroczystym tłem, SVG albo osobny dokument `.fig`.

Dla jednego obiektu można dodać kilka wariantów eksportu z różnymi formatami i skalami. Preview na tle szachownicy pokazuje przyszły wynik.

### Sposoby eksportu

| Sposób | macOS | Windows / Linux |
|--------|-------|-----------------|
| Skrót | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>E</kbd> |
| Menu kontekstowe | Prawy przycisk <kbd>→</kbd> Export… | Prawy przycisk <kbd>→</kbd> Export… |
| Panel właściwości | Naciśnij Export | Naciśnij Export |

W desktop app ścieżkę wybiera się w systemowym oknie. W browser plik jest pobierany w zwykły sposób.

## Copy/Paste as

Menu kontekstowe **Copy/Paste as** umieszcza selection w clipboard w kilku formatach:

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Copy as text | — | — |
| Copy as SVG | — | — |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Copy as JSX | — | — |

- **Copy as text** kopiuje widoczny tekst zaznaczonych obiektów.
- **Copy as SVG** kopiuje SVG markup, który można wkleić do edytora kodu lub Inkscape.
- **Copy as PNG** renderuje obraz w skali 2× i kopiuje go do Slacka, Notion i innych aplikacji.
- **Copy as JSX** kopiuje OpenPencil JSX zgodny z `renderJsx()`.

## Dokumenty .fig i .pen

OpenPencil używa tego samego binary format `.fig` co Figma i otwiera również dokumenty `.pen`.

### Otwieranie

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Otworzyć plik | <kbd>⌘</kbd><kbd>O</kbd> | <kbd>Ctrl</kbd> + <kbd>O</kbd> |

Okno wyboru pokazuje pliki `.fig` i `.pen`. Desktop app używa systemowego okna dialogowego.

### Zapisywanie

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Save | <kbd>⌘</kbd><kbd>S</kbd> | <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| Save As | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> |

- **Save** nadpisuje bieżący plik bez dodatkowego okna.
- **Save As** pozwala wybrać nową ścieżkę.

Zapisany plik jest skompresowany i zawiera thumbnail widoczny w managerze plików.

### Zgodność z Figmą

Pliki wyeksportowane z OpenPencil można otworzyć w Figmie, a dokumenty Figmy — w OpenPencil. Format `.fig` zachowuje typy obiektów, properties, fills, strokes, effects, vector data i parametry layout.

## Skróty klawiaturowe

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Wyeksportować selection | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>E</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>E</kbd> |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Otworzyć plik | <kbd>⌘</kbd><kbd>O</kbd> | <kbd>Ctrl</kbd> + <kbd>O</kbd> |
| Save | <kbd>⌘</kbd><kbd>S</kbd> | <kbd>Ctrl</kbd> + <kbd>S</kbd> |
| Save As | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>S</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>S</kbd> |

## Wskazówki

- Dla ekranów o dużej gęstości pikseli używaj skali 2× lub 3×.
- JPG zawsze otrzymuje białe tło. Do przezroczystości wybierz PNG lub WEBP.
- SVG nadaje się do dalszej edycji w Illustratorze, Inkscape lub kodzie.
- Thumbnail wewnątrz `.fig` pozwala zobaczyć dokument w managerze plików i oknie otwierania Figmy.

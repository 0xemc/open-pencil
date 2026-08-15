---
title: Tekst
description: Tworzenie i edytowanie tekstu, rich text, fonts oraz edycja bezpośrednio na obszarze roboczym.
---

# Tekst

OpenPencil pozwala tworzyć obiekty tekstowe i edytować rich text bezpośrednio na obszarze roboczym.

## Tworzenie tekstu

Naciśnij <kbd>T</kbd>, a następnie naciśnij obszar roboczy. Pojawi się pusty obiekt tekstowy z migającym cursor — możesz od razu rozpocząć pisanie.

## Edycja na obszarze roboczym

Naciśnij dwukrotnie istniejący obiekt tekstowy. Niebieska ramka oznacza aktywny tryb edycji. Naciśnij poza obiektem, aby zapisać zmiany i wyjść.

Tekst jest wyświetlany przez canvas renderer; nad obszarem roboczym nie pojawia się osobny widoczny input.

## Przesuwanie cursor

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Jeden znak w lewo lub w prawo | <kbd>←</kbd> / <kbd>→</kbd> | <kbd>←</kbd> / <kbd>→</kbd> |
| Jeden wiersz w górę lub w dół | <kbd>↑</kbd> / <kbd>↓</kbd> | <kbd>↑</kbd> / <kbd>↓</kbd> |
| Jedno słowo | <kbd>⌥</kbd><kbd>←</kbd> / <kbd>⌥</kbd><kbd>→</kbd> | <kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>Ctrl</kbd> + <kbd>→</kbd> |
| Początek lub koniec wiersza | <kbd>⌘</kbd><kbd>←</kbd> / <kbd>⌘</kbd><kbd>→</kbd> | <kbd>Home</kbd> / <kbd>End</kbd> |

Przytrzymaj <kbd>Shift</kbd> razem z klawiszem ruchu, aby rozszerzyć text selection.

## Zaznaczanie tekstu

- Naciśnij wewnątrz tekstu, aby ustawić cursor.
- Naciśnij i przeciągnij, aby zaznaczyć zakres.
- Naciśnij słowo dwukrotnie, aby je zaznaczyć.
- Naciśnij tekst trzykrotnie, aby zaznaczyć całą zawartość obiektu.

## Rich text

Formatting jest stosowany do zaznaczonego zakresu. Jeśli nic nie zaznaczono, przycisk zmienia styl całego obiektu tekstowego.

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Bold | <kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd> + <kbd>B</kbd> |
| Italic | <kbd>⌘</kbd><kbd>I</kbd> | <kbd>Ctrl</kbd> + <kbd>I</kbd> |
| Underline | <kbd>⌘</kbd><kbd>U</kbd> | <kbd>Ctrl</kbd> + <kbd>U</kbd> |

Strikethrough włącza się przyciskiem **S** w sekcji Typography. Nie ma osobnego skrótu, ponieważ <kbd>⌘</kbd><kbd>S</kbd> służy do Save.

Styl jest przechowywany dla każdego znaku. Tekst wpisywany między segmentami bold i regular dziedziczy styl poprzedniego segmentu.

Formatting można również zmieniać przyciskami **B / I / U / S** w sekcji Typography.

## Operacje edycji

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Usunąć poprzednie słowo | <kbd>⌥</kbd><kbd>⌫</kbd> | <kbd>Ctrl</kbd> + <kbd>Backspace</kbd> |
| Usunąć do początku wiersza | <kbd>⌘</kbd><kbd>⌫</kbd> | — |
| Cut | <kbd>⌘</kbd><kbd>X</kbd> | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Copy | <kbd>⌘</kbd><kbd>C</kbd> | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Paste | <kbd>⌘</kbd><kbd>V</kbd> | <kbd>Ctrl</kbd> + <kbd>V</kbd> |

## Font picker

Otwórz Font picker w sekcji Typography, aby wybrać font family.

- **Search:** zawęża listę podczas pisania.
- **Preview:** nazwa każdego font jest pokazana we własnym typeface.
- **Virtual scroll:** sprawnie obsługuje duże katalogi.
- **Bieżący font:** po otwarciu picker lista przewija się do wybranego family i go wyróżnia.

## Font weight

Dostępne weights zależą od font family, na przykład Regular, Medium, Bold i Black.

## Źródła fonts

- **Domyślnie:** Inter jest ładowany automatycznie.
- **Desktop app:** systemowe fonts i włączone katalogi Google Fonts, Fontsource, Bunny Fonts oraz Fontshare.
- **Browser:** systemowe fonts są dostępne w Chrome i Edge; online font catalogs wymagają desktop app.
- **Pobrane fonts:** desktop app zapisuje pobrane faces do ponownego użycia na tym komputerze.

## Brakujące fonts i zamienniki

Jeśli odpowiednie family lub style nie mogą zostać załadowane, OpenPencil pokazuje ostrzeżenie nad edytorem i nie przedstawia fallback rendering jako dokładnej typography.

Rozwiń ostrzeżenie, aby zobaczyć wszystkie dotknięte faces oraz aktywne substitutes. Przycisk **Select layers** zaznacza odpowiednie obiekty tekstowe. Po zmianie dostępu do sieci, uprawnień do lokalnych fonts lub ustawień providers naciśnij **Retry fonts**.

Style może zostać utworzony na podstawie innego załadowanego face z tego samego family. Jeśli brakuje całego family, OpenPencil używa Inter, o ile jest dostępny.

## Wskazówki

- Lista fonts jest ładowana podczas uruchamiania, dlatego picker otwiera się bez opóźnienia.
- Obsługiwane jest wprowadzanie przez IME dla języka chińskiego, japońskiego i koreańskiego.
- Rich text jest zachowywany podczas otwierania i zapisywania `.fig`.
- Text overrides wewnątrz component instances opisano na stronie [Komponenty](./components).

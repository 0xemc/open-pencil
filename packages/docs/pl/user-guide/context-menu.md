---
title: Menu kontekstowe
description: Clipboard, kolejność nakładania, groups, components i inne operacje dostępne pod prawym przyciskiem.
---

# Menu kontekstowe

Naciśnij obszar roboczy prawym przyciskiem myszy. Jeśli wskaźnik znajduje się nad obiektem, OpenPencil najpierw go zaznaczy. Prawy przycisk na pustym obszarze usuwa bieżące zaznaczenie.

## Copy/Paste as

Submenu **Copy/Paste as** udostępnia dodatkowe clipboard formats:

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Copy as text | — | — |
| Copy as SVG | — | — |
| Copy as PNG | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>C</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Copy as JSX | — | — |

- **Copy as text** kopiuje widoczny tekst z selection.
- **Copy as SVG** kopiuje drzewo obiektów jako SVG markup.
- **Copy as PNG** renderuje obraz w skali 2× i umieszcza go w systemowym clipboard.
- **Copy as JSX** kopiuje OpenPencil JSX do użycia z `renderJsx()`.

## Clipboard

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Copy | <kbd>⌘</kbd><kbd>C</kbd> | <kbd>Ctrl</kbd> + <kbd>C</kbd> |
| Cut | <kbd>⌘</kbd><kbd>X</kbd> | <kbd>Ctrl</kbd> + <kbd>X</kbd> |
| Paste here | <kbd>⌘</kbd><kbd>V</kbd> | <kbd>Ctrl</kbd> + <kbd>V</kbd> |
| Duplicate | <kbd>⌘</kbd><kbd>D</kbd> | <kbd>Ctrl</kbd> + <kbd>D</kbd> |
| Delete | <kbd>⌫</kbd> | <kbd>Backspace</kbd> / <kbd>Delete</kbd> |

Gdy nic nie jest zaznaczone, operacje dotyczące selection są niedostępne. Paste pozostaje dostępne, jeśli clipboard zawiera obsługiwane dane.

## Kolejność nakładania

| Działanie | Klawisz |
|-----------|---------|
| Bring to front | <kbd>]</kbd> |
| Send to back | <kbd>[</kbd> |

Polecenia przesuwają obiekt na początek lub koniec listy children jego parent.

## Groups i Auto layout

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Group | <kbd>⌘</kbd><kbd>G</kbd> | <kbd>Ctrl</kbd> + <kbd>G</kbd> |
| Ungroup | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>G</kbd> |
| Add auto layout | <kbd>⇧</kbd><kbd>A</kbd> | <kbd>Shift</kbd> + <kbd>A</kbd> |

- **Group** jest dostępne, gdy zaznaczono co najmniej dwa obiekty.
- **Ungroup** przenosi children zaznaczonego group do jego parent.
- **Add auto layout** umieszcza selection w nowym frame z [Auto layout](./auto-layout).

## Components

Operacje dotyczące components są wyświetlane na fioletowo.

| Działanie | macOS | Windows / Linux | Dostępne dla |
|-----------|-------|-----------------|--------------|
| Create component | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> | Frames, groups i multi-selection |
| Create component set | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>K</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>K</kbd> | Co najmniej dwa components |
| Create instance | — | — | Components |
| Go to main component | — | — | Instances |
| Detach instance | <kbd>⌥</kbd><kbd>⌘</kbd><kbd>B</kbd> | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd> | Instances |

Więcej informacji znajduje się na stronie [Komponenty](./components).

## Widoczność i blokada

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Hide / Show | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>H</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>H</kbd> |
| Lock / Unlock | <kbd>⇧</kbd><kbd>⌘</kbd><kbd>L</kbd> | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>L</kbd> |

Nazwa polecenia zależy od bieżącego stanu: dla widocznego obiektu pojawia się Hide, a dla ukrytego — Show.

## Move to page

Submenu **Move to page** zawiera wszystkie strony poza bieżącą. Wybrana strona staje się nowym parent dla przenoszonych obiektów.

## Wskazówki

- Na pustym obszarze menu kontekstowe pozwala wykonać Paste w wybranym miejscu.
- Polecenia components pojawiają się tylko w odpowiednim context, na przykład Create instance jest widoczne wyłącznie dla component.
- Przy poleceniach są pokazane skróty, dlatego menu może służyć jako podręczna ściągawka.

---
title: Warstwy i strony
description: Praca z warstwami, stronami i panelem właściwości w OpenPencil.
---

# Warstwy i strony

Interfejs edytora składa się z trzech głównych obszarów: warstw po lewej stronie, obszaru roboczego pośrodku i właściwości po prawej. Szerokość paneli bocznych można zmieniać przez przeciąganie separatorów.

## Warstwy

Lewy panel przedstawia hierarchy dokumentu jako drzewo.

### Drzewo obiektów

Naciśnij strzałkę obok frame, group lub component, aby pokazać albo ukryć elementy potomne.

### Zmiana kolejności

Przeciągaj warstwy na liście, aby zmienić kolejność nakładania. Obiekty położone wyżej są wyświetlane przed pozostałymi.

### Widoczność

Naciśnij ikonę oka obok warstwy, aby ją ukryć lub pokazać. Ukryty obiekt pozostaje w drzewie.

### Zmiana nazwy

Naciśnij nazwę warstwy dwukrotnie i wpisz nową. <kbd>Enter</kbd> lub naciśnięcie poza polem zapisuje nazwę, a <kbd>Escape</kbd> anuluje zmianę.

### Powiązanie z obszarem roboczym

Wybranie warstwy na liście zaznacza odpowiadający jej obiekt na obszarze roboczym. Zaznaczenie obiektu na obszarze roboczym wskazuje go również w drzewie.

## Strony

Panel stron zawiera wszystkie strony dokumentu.

- **Przejść do strony:** naciśnij jej kartę. OpenPencil przywróci zapisane położenie i powiększenie.
- **Dodać stronę:** naciśnij przycisk dodawania.
- **Usunąć stronę:** usuń bieżącą stronę.
- **Zmienić nazwę:** naciśnij nazwę dwukrotnie. <kbd>Enter</kbd>, <kbd>Escape</kbd> lub naciśnięcie poza polem kończy edycję.

Każda strona ma własny obszar roboczy, położenie widoku i powiększenie.

## Właściwości

Po prawej stronie znajdują się trzy karty.

### Design

Karta pokazuje właściwości zaznaczonych obiektów:

- **Appearance:** opacity, wspólny albo niezależny corner radius oraz visibility;
- **Fill:** solid color, linear, radial, angular i diamond gradient, image oraz variable binding;
- **Stroke:** color, width, cap, join i dash pattern;
- **Effects:** drop shadow, inner shadow, layer blur, background blur i foreground blur;
- **Typography:** font family, size, weight i przyciski B/I/U/S;
- **Layout:** ustawienia [Auto layout](./auto-layout) dla odpowiednich frames;
- **Export:** scale, format i przycisk eksportu — więcej na stronie [Eksport](./exporting).

Jeśli nic nie jest zaznaczone, karta Design pokazuje właściwości strony, w tym kolor tła obszaru roboczego.

### Code

Zaznaczony obiekt jest prezentowany jako kod z wyróżnianiem składni, numerami wierszy i przyciskiem Copy. Dostępne są dwa formaty:

- **OpenPencil JSX:** drzewo komponentów zgodne z `renderJsx()`;
- **Tailwind CSS v4:** HTML z utility classes, na przykład `<div className="flex gap-4 p-3">`, gotowy do użycia w React lub Vue.

### AI

AI chat tworzy i zmienia obiekty na podstawie poleceń w zwykłym języku. Kartę można również otworzyć lub zamknąć skrótem <kbd>⌘</kbd><kbd>J</kbd>. Obsługiwane są różne AI models przez OpenRouter.

## Skrót klawiaturowy

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Otworzyć lub zamknąć AI chat | <kbd>⌘</kbd><kbd>J</kbd> | <kbd>Ctrl</kbd> + <kbd>J</kbd> |

## Małe ekrany

Na telefonach i małych ekranach panele boczne zastępuje wysuwany panel dolny. Karty przełączają widoki Layers, Properties, Design i Code. Toolbar zmienia się w kompaktowy poziomy pasek z wyborem kategorii.

## Wskazówki

- Szerokość paneli jest zapisywana i przywracana po ponownym załadowaniu.
- Drzewo warstw pomaga wybrać zasłonięty obiekt, do którego trudno dotrzeć na obszarze roboczym.
- Dodatkowe operacje znajdują się w [menu kontekstowym](./context-menu).
- Skróty do zmiany kolejności, widoczności i blokady opisano na stronie [Zaznaczanie i modyfikowanie](./selection-and-manipulation).

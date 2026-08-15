---
title: Pen tool
description: Tworzenie vector paths i krzywych Béziera za pomocą Pen tool.
---

# Pen tool

Pen tool tworzy vector paths w formacie vector network zgodnym z `.fig`.

## Włączanie

Naciśnij <kbd>P</kbd>.

## Tworzenie punktów

- Naciśnij raz, aby umieścić corner point i utworzyć prosty segment.
- Naciśnij i przeciągnij, aby umieścić curve point z tangent handles Béziera. Kierunek i odległość przeciągania określają kształt krzywej.
- Nie zwalniając przycisku myszy, przytrzymaj <kbd>Space</kbd>, aby przesunąć właśnie tworzony punkt.

Dodawaj kolejne punkty, aby budować path segment po segmencie. Preview line łączy ostatni punkt z bieżącym położeniem wskaźnika.

## Zamknięty path

Naciśnij pierwszy punkt path, aby go zamknąć. Zamknięty path może mieć fill.

## Otwarty path

Naciśnij <kbd>Escape</kbd>, aby zakończyć path bez zamykania. Otwarty path jest wyświetlany tylko ze stroke i nie otrzymuje fill.

## Vector networks

Zamiast prostej sekwencji punktów OpenPencil używa vector network. Ten model obsługuje rozgałęzienia i złożoną topology. Figma stosuje ten sam model, dlatego paths są zachowywane podczas importu i eksportu `.fig`.

## Skróty klawiaturowe

| Działanie | macOS | Windows / Linux |
|-----------|-------|-----------------|
| Pen tool | <kbd>P</kbd> | <kbd>P</kbd> |
| Zakończyć otwarty path | <kbd>Escape</kbd> | <kbd>Escape</kbd> |

## Wskazówki

- Preview line zawsze zaczyna się w ostatnim dodanym punkcie i nie przeskakuje do współrzędnych `(0, 0)`.
- Im dalej przeciągniesz wskaźnik podczas tworzenia curve point, tym dłuższe będą tangent handles i szersze wygięcie.
- Po utworzeniu path skonfiguruj fill, stroke i effects na panelu właściwości.

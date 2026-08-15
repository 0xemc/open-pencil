---
title: Współpraca
description: Jednoczesna edycja przez peer-to-peer WebRTC bez osobnego server i konta.
---

# Współpraca

Kilka osób może jednocześnie edytować jeden dokument. Uczestnicy łączą się bezpośrednio: centralny server nie przekazuje danych, a konto nie jest wymagane.

## Link do pokoju

1. Naciśnij Share w prawym górnym rogu.
2. Skopiuj utworzony link `app.openpencil.dev/share/<room-id>`.
3. Wyślij go pozostałym uczestnikom.

Dołączyć może każda osoba mająca link. Pokój pozostaje aktywny, dopóki jego strona jest otwarta u co najmniej jednego uczestnika.

## Synchronizowane dane

- **Dokument:** kształty, tekst, właściwości i układ aktualizują się natychmiast po zmianie.
- **Wskaźniki:** widoczne są położenie wskaźnika, nazwa i kolor każdego uczestnika.
- **Zaznaczenie:** inni uczestnicy widzą zaznaczone przez Ciebie obiekty.

## Follow mode

Naciśnij avatar uczestnika na górnym pasku, aby śledzić jego viewport. Położenie i powiększenie obszaru roboczego będą odpowiadały jego widokowi. Naciśnij avatar ponownie, aby wyłączyć Follow mode.

## Sposób synchronizacji

Uczestnicy łączą się bezpośrednio przez WebRTC, dlatego dane dokumentu są przesyłane z jednej przeglądarki do drugiej bez centralnego server. Stan jest przechowywany jako CRDT — conflict-free replicated data type — dzięki czemu jednoczesne zmiany łączą się automatycznie.

Pokój jest zapisywany lokalnie. Po odświeżeniu strony ponownie dołączysz z poprzednim stanem.

## Wskazówki

- Współpraca działa w browser i desktop app.
- Room IDs są tworzone za pomocą kryptograficznie bezpiecznego generatora. Dołączyć mogą wyłącznie osoby, które otrzymały link.
- Po rozłączeniu uczestnika jego nieaktualny wskaźnik jest automatycznie usuwany.

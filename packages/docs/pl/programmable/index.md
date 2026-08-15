---
layout: doc
title: Automatyzacja
description: AI chat, CLI, JSX renderer, MCP server i inne narzędzia automatyzacji oparte na silniku OpenPencil.
---

# Automatyzacja

OpenPencil pozwala traktować pliki projektowe jak dane. Wszystkie operacje edytora — tworzenie kształtów, ustawianie wypełnień, zarządzanie Auto layout i eksport zasobów — są dostępne także z terminala, dla agentów AI i z kodu. Nie trzeba instalować plugins, uzyskiwać API key ani czekać na dostęp.

Interfejs edytora i narzędzia automatyzacji korzystają z tego samego silnika. Każdą operację dostępną w interfejsie można wykonać również za pomocą script.

## Szersza idea

OpenPencil nie jest wyłącznie aplikacją do projektowania.

To również toolkit, który można osadzić w innym produkcie, uzupełnić własnym interfejsem i wykorzystać do wyspecjalizowanych procesów edycji. Aplikacja, CLI, AI tools, JSX renderer, MCP server i SDK działają na tym samym silniku edytora.

## AI chat

Wbudowany assistant korzysta z ponad 90 narzędzi obejmujących funkcje edytora. Opisz zadanie zwykłym językiem, na przykład: „dodaj cień 16 px do wszystkich przycisków”, „utwórz komponent karty z wariantem ciemnego motywu” albo „wyeksportuj wszystkie ramki na tej stronie w skali 2×”.

[AI chat →](./ai-chat)

## Współpraca

Kilka osób może jednocześnie edytować dokument przez peer-to-peer WebRTC. Serwer i konto nie są potrzebne: wystarczy wysłać link do pokoju. OpenPencil pokazuje wskaźniki uczestników i pozwala śledzić widok wybranej osoby.

Stan dokumentu jest synchronizowany przez CRDT, dzięki czemu zmiany łączą się automatycznie nawet przy niestabilnym połączeniu.

[Współpraca →](./collaboration)

## Vue SDK

Twórz edytory oparte na OpenPencil za pomocą tego samego Vue SDK, którego używa aplikacja. SDK udostępnia kontekst edytora, podłączenie obszaru roboczego, stan zaznaczenia, modele poleceń, composables dla paneli właściwości i komponenty headless.

[Vue SDK →](./sdk/)

## JSX renderer

Opisuj interfejs za pomocą JSX — składni znanej modelom LLM z Reacta. Jedno wywołanie może utworzyć drzewo komponentów zawierające ramki, tekst, Auto layout, wypełnienia i obrysy. Taki opis jest zwięzły, deklaratywny i łatwy do porównania między wersjami.

Możliwe jest również przekształcenie w drugą stronę: wyeksportuj zaznaczone obiekty do JSX z klasami Tailwind, aby przekazać wynik programistom albo ponownie przetworzyć go za pomocą LLM.

[JSX renderer →](./jsx-renderer)

## CLI

Przeglądaj, sprawdzaj, eksportuj i analizuj dokumenty bez uruchamiania edytora. CLI pozwala wyświetlić strony, znaleźć obiekty, wyodrębnić design tokens, wykryć problemy z układem i dostępnością oraz wyeksportować PNG. Wszystkie polecenia obsługują JSON output.

CLI łączy się także przez RPC z uruchomioną aplikacją desktopową, dlatego można sterować edytorem ze scripts podczas pracy.

[Przeglądanie plików](./cli/inspecting) · [Eksport](./cli/exporting) · [Analiza](./cli/analyzing) · [Scripts](./cli/scripting)

## MCP server

Połącz Claude Code, Cursor, Windsurf lub innego MCP client z OpenPencil. Server udostępnia 90 narzędzi do odczytywania, tworzenia i zmieniania projektów — tych samych, których używa wbudowany AI chat. Dostępne są transports stdio i HTTP z obsługą sessions.

[MCP server →](/programmable/mcp-server)

## Dlaczego open source

Figma jest zamkniętą platformą. Jej MCP server zapewnia tylko odczyt, dostęp przeglądarkowy przez CDP został zamknięty w wersji 126, a pliki są przechowywane w zastrzeżonym formacie na cudzych serwerach. Tworzenie plugins wymaga osobnego runtime z ograniczonym API.

OpenPencil oferuje inne podejście: kod open source na licencji MIT, lokalne przechowywanie danych i programowy dostęp do wszystkich operacji. Możesz przeglądać i przekształcać własne pliki, przetwarzać je w CI albo przekazywać do LLM bez dodatkowej zgody.

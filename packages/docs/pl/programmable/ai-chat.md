---
title: AI chat
description: Wbudowany AI assistant z ponad 90 narzędziami do tworzenia i zmieniania projektów.
---

# AI chat

Naciśnij <kbd>⌘</kbd><kbd>J</kbd> albo <kbd>Ctrl</kbd> + <kbd>J</kbd>, aby otworzyć AI assistant. Opisz zadanie zwykłym językiem: assistant tworzy kształty, zmienia style i układ, pracuje z komponentami oraz analizuje dokument.

## Konfiguracja

1. Otwórz panel AI chat.
2. Naciśnij ikonę ustawień.
3. Dodaj model i skonfiguruj jego provider, model ID, credentials oraz capabilities.
4. Zapisz model i przypisz go do roli **Design agent**.

Możesz utworzyć kilka modeli przeznaczonych do ponownego użycia i osobno przypisać je do projektowania, review, szybkich zadań oraz przetwarzania obrazów. Modele korzystające z tego samego provider connection używają zapisanych dla niego credentials.

### Providers

| Provider | Models | Konfiguracja |
|----------|--------|--------------|
| **OpenRouter** | Claude, GPT, Gemini, DeepSeek, Qwen i inne | API key z [openrouter.ai](https://openrouter.ai) |
| **Anthropic** | Claude Sonnet 4.6, Claude Opus 4.6 | API key z [console.anthropic.com](https://console.anthropic.com) |
| **OpenAI** | GPT-5.3 Codex, GPT-4.1, o3, o4-mini | API key z [platform.openai.com](https://platform.openai.com) |
| **Google AI** | Gemini 3.1 Pro, Gemini 3 Flash | API key z [aistudio.google.dev](https://aistudio.google.dev) |
| **Z.ai** | GLM-5.1, GLM-5, GLM-4.7 i rodzina GLM-4.5 | API key zgodnie z [dokumentacją Z.ai](https://docs.z.ai/devpack/quick-start) |
| **MiniMax** | MiniMax M3, M2.7, M2.7-highspeed, M2.5, M2.1 | API key z [platform.minimax.io](https://platform.minimax.io/user-center/basic-information/interface-key) |
| **OpenAI-compatible** | Dowolny endpoint w formacie OpenAI API | Własne base URL i key; wybór Completions API lub Responses API |
| **Anthropic-compatible** | Dowolny endpoint w formacie Anthropic API | Własne base URL i key |

OpenPencil nie wymaga osobnego backendu ani subskrypcji: żądania są wysyłane bezpośrednio do provider za pomocą Twojego key. W przeglądarce podlegają zasadom CORS provider. Poszczególne model deployments różnią się również niezawodnością streaming tool calls. Wyniki pomiarów i instrukcje ich odtworzenia znajdują się na stronie [Zgodność providers i models BYOK](/programmable/byok-provider-compatibility).

### Zewnętrzne MCP connections

W wersji desktopowej ACP agents mogą korzystać z zaufanych zdalnych serwerów [Model Context Protocol](https://modelcontextprotocol.io/). Otwórz **Settings → MCP connections**, dodaj nazwany Streamable HTTP endpoint, opcjonalnie zapisz bearer token i włącz connection.

Token jest przechowywany w skonfigurowanym credential backend, a nie w zwykłych ustawieniach, i jest odczytywany dopiero podczas uruchamiania ACP session.

Zdalny server musi używać HTTPS. W lokalnym development dozwolone są loopback endpoints przez HTTP. Włączaj wyłącznie servers, którym ufasz: ich tools mogą odczytywać dane zewnętrzne i wykonywać działania za pomocą przekazanych credentials. Wbudowany design MCP server OpenPencil jest podłączany automatycznie.

## Możliwości

Assistant korzysta z ponad 90 tools:

- **Create:** frames, shapes, text, components i pages oraz JSX dla złożonych layouts.
- **Style:** fills, strokes, effects, opacity, corner radius i blend modes.
- **Layout:** Auto layout, grid, alignment, spacing i sizing.
- **Components:** tworzenie components, instances i component sets oraz zarządzanie overrides.
- **Variables:** tworzenie i zmiana variables, collections i modes oraz binding do fills.
- **Query:** wyszukiwanie obiektów, XPath selectors, properties, pages, fonts i selection.
- **Inspect:** `get_jsx`, `diff_jsx` i `describe` do określania roli obiektu i problemów projektu.
- **Analyze:** palette, typography audit, spacing i clusters.
- **Export:** PNG, SVG i JSX z klasami Tailwind oraz kontrola wizualna przez `export_image`.
- **Vector:** boolean operations i modyfikowanie paths.

## Kontrola wizualna

Po utworzeniu lub zmianie projektu assistant może wywołać `export_image`, uzyskać obraz wyniku i porównać go z pierwotnym poleceniem. Pozwala to wykryć problemy z układem, brakujące elementy i nieprawidłowe kolory.

## Przykładowe polecenia

- „Utwórz kartę z tytułem, opisem i niebieskim przyciskiem”.
- „Ustaw taki sam promień narożników dla wszystkich przycisków na tej stronie”.
- „Jakie fonts są używane w tym pliku?”
- „Zmień tło zaznaczonego frame na gradient od niebieskiego do fioletowego”.
- „Wyeksportuj zaznaczony frame jako SVG”.
- „Znajdź wszystkie obiekty tekstowe z font size mniejszym niż 12”.
- „Opisz rolę zaznaczonego component”.
- „Pokaż JSX tego frame”.

## Wskazówki

- Przed wysłaniem polecenia zaznacz odpowiednie obiekty: assistant widzi selection.
- Dokładnie podawaj kolory, rozmiary i położenie.
- Jedna wiadomość może zmienić kilka obiektów.
- Jeśli wynik jest nieodpowiedni, użyj Undo. Wszystkie zmiany AI można cofnąć.
- Po każdym tool call układ jest przeliczany automatycznie.

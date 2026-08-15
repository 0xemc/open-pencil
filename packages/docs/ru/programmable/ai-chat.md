---
title: AI chat
description: Встроенный AI assistant с более чем 90 инструментами для создания и изменения дизайна.
---

# AI chat

Нажмите <kbd>⌘</kbd><kbd>J</kbd> или <kbd>Ctrl</kbd> + <kbd>J</kbd>, чтобы открыть AI assistant. Опишите задачу обычным языком: assistant умеет создавать фигуры, менять стили и layout, работать с components и анализировать документ.

## Настройка

1. Откройте панель AI chat.
2. Нажмите значок настроек.
3. Добавьте model и настройте provider, model ID, credentials и capabilities.
4. Сохраните model и назначьте его для роли **Design agent**.

Можно создать несколько переиспользуемых models и отдельно назначить их для дизайна, review, быстрых задач и обработки изображений. Models с одним provider connection используют сохранённые для него credentials.

### Providers

| Provider | Models | Настройка |
|----------|--------|-----------|
| **OpenRouter** | Claude, GPT, Gemini, DeepSeek, Qwen и другие | API key с [openrouter.ai](https://openrouter.ai) |
| **Anthropic** | Claude Sonnet 4.6, Claude Opus 4.6 | API key с [console.anthropic.com](https://console.anthropic.com) |
| **OpenAI** | GPT-5.3 Codex, GPT-4.1, o3, o4-mini | API key с [platform.openai.com](https://platform.openai.com) |
| **Google AI** | Gemini 3.1 Pro, Gemini 3 Flash | API key с [aistudio.google.dev](https://aistudio.google.dev) |
| **Z.ai** | GLM-5.1, GLM-5, GLM-4.7 и семейство GLM-4.5 | API key из [документации Z.ai](https://docs.z.ai/devpack/quick-start) |
| **MiniMax** | MiniMax M3, M2.7, M2.7-highspeed, M2.5, M2.1 | API key с [platform.minimax.io](https://platform.minimax.io/user-center/basic-information/interface-key) |
| **OpenAI-compatible** | Любой endpoint в формате OpenAI API | Собственные base URL и key; можно выбрать Completions API или Responses API |
| **Anthropic-compatible** | Любой endpoint в формате Anthropic API | Собственные base URL и key |

Отдельный backend и подписка OpenPencil не требуются: запросы отправляются provider напрямую с вашим key. В браузере они зависят от CORS policy provider. Разные model deployments также по-разному поддерживают streaming tool calls. Результаты проверок и инструкции по их воспроизведению находятся в разделе [Совместимость BYOK providers и models](/programmable/byok-provider-compatibility).

### Внешние MCP connections

В desktop-версии ACP agents могут использовать доверенные удалённые серверы [Model Context Protocol](https://modelcontextprotocol.io/). Откройте **Settings → MCP connections**, добавьте именованный Streamable HTTP endpoint, при необходимости сохраните bearer token и включите connection.

Token хранится в настроенном credential backend, а не в обычных settings, и загружается только при запуске ACP session.

Удалённый server должен работать через HTTPS. Для локальной разработки разрешены loopback endpoints через HTTP. Включайте только server, которому доверяете: его tools могут читать внешние данные и выполнять действия с переданными credentials. Встроенный design MCP server OpenPencil подключается автоматически, поэтому добавлять его здесь не нужно.

## Возможности

Assistant использует более 90 tools:

- **Create:** frames, shapes, text, components и pages; JSX для сложных layouts.
- **Style:** fills, strokes, effects, opacity, corner radius и blend modes.
- **Layout:** Auto layout, grid, alignment, spacing и sizing.
- **Components:** создание components, instances и component sets, управление overrides.
- **Variables:** создание и изменение variables, collections и modes, привязка к fills.
- **Query:** поиск объектов, XPath selectors, чтение properties, получение списка pages, fonts и selection.
- **Inspect:** `get_jsx` для двустороннего представления JSX, `diff_jsx` для структурного сравнения и `describe` для определения роли объекта и возможных проблем дизайна.
- **Analyze:** palette, typography audit, проверка spacing и поиск clusters.
- **Export:** PNG, SVG и JSX с классами Tailwind; визуальная проверка через `export_image`.
- **Vector:** boolean operations и изменение paths.

## Визуальная проверка

После создания или изменения дизайна assistant может вызвать `export_image`, получить снимок результата и сопоставить его с исходным запросом. Так обнаруживаются проблемы layout, отсутствующие элементы и неверные цвета, которые нельзя заметить по одному текстовому ответу.

## Примеры запросов

- «Создай карточку с заголовком, описанием и синей кнопкой».
- «Сделай одинаковый радиус углов у всех кнопок на этой странице».
- «Какие шрифты используются в этом файле?»
- «Замени фон выделенного frame на gradient от синего к фиолетовому».
- «Экспортируй выделенный frame в SVG».
- «Найди все текстовые объекты с font size меньше 12».
- «Опиши роль выделенного component».
- «Покажи JSX этого frame».

## Советы

- Перед запросом выделите нужные объекты: assistant видит selection.
- Точно указывайте цвета, размеры и положение.
- В одном сообщении можно изменить несколько объектов.
- Если результат не подходит, используйте Undo: все изменения AI можно отменить.
- После каждого tool call layout пересчитывается автоматически.

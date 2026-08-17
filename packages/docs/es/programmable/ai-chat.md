---
title: AI Chat
description: AI Assistant integrado con más de 90 Tools para crear y modificar diseños.
---

# AI Chat

Pulsa <kbd>⌘</kbd><kbd>J</kbd> o <kbd>Ctrl</kbd><kbd>J</kbd>. El Assistant puede crear Shapes, modificar Styles, configurar Layout, trabajar con Components y analizar el documento.

## Configuración

1. Abre AI Chat.
2. Selecciona el Settings icon.
3. Añade un Model y configura Provider, Model ID, Credentials y Capabilities.
4. Guarda el Model y asígnalo a **Design agent**.

Puedes guardar varios Models y asignarlos por separado a Design, Reviews, Tasks rápidas e Image input. Los Models que comparten una Provider connection reutilizan el mismo Credential almacenado de forma segura.

### Providers

| Provider | Ejemplos | Configuración |
|----------|----------|---------------|
| **OpenRouter** | Claude, GPT, Gemini, DeepSeek, Qwen y otros | API key de [openrouter.ai](https://openrouter.ai) |
| **Anthropic** | Claude Sonnet 4.6, Claude Opus 4.6 | API key de [console.anthropic.com](https://console.anthropic.com) |
| **OpenAI** | GPT-5.3 Codex, GPT-4.1, o3, o4-mini | API key de [platform.openai.com](https://platform.openai.com) |
| **Google AI** | Gemini 3.1 Pro, Gemini 3 Flash | API key de [aistudio.google.dev](https://aistudio.google.dev) |
| **Z.ai** | GLM-5.1, GLM-5, GLM-4.7 y GLM-4.5 family | API key según la [documentación de Z.ai](https://docs.z.ai/devpack/quick-start) |
| **MiniMax** | MiniMax M3, M2.7, M2.7-highspeed, M2.5 y M2.1 | API key de [platform.minimax.io](https://platform.minimax.io/user-center/basic-information/interface-key) |
| **OpenAI-compatible** | Endpoint con OpenAI API format | Base URL y Key propios; Completions o Responses API |
| **Anthropic-compatible** | Endpoint con Anthropic API format | Base URL y Key propios |

OpenPencil no utiliza un Backend intermedio para estas conexiones. Las Requests se envían directamente al Provider. En el navegador se aplican sus CORS policies. La fiabilidad de Streaming tool calls también varía entre Model deployments. Consulta [Compatibilidad BYOK](/programmable/byok-provider-compatibility) para ver mediciones y pasos de reproducción.

### Conexiones MCP externas

Los ACP agents de la aplicación de escritorio pueden usar servidores remotos de [Model Context Protocol](https://modelcontextprotocol.io/) que sean de confianza. En **Settings → MCP connections**, añade un Streamable HTTP endpoint con Name, guarda opcionalmente un Bearer token y habilita la Connection.

El Token se guarda en el Credential backend configurado, no en Settings normales, y solo se resuelve al iniciar la ACP session.

Los Remote servers deben usar HTTPS. Los Loopback HTTP endpoints se aceptan para desarrollo local. Revisa y confía en un Server antes de habilitarlo: sus Tools pueden leer datos externos o realizar Actions con las Credentials proporcionadas. El Design MCP server integrado se conecta automáticamente y no debe añadirse aquí.

## Tools

AI Chat dispone de más de 90 Tools:

- **Create:** Frames, Shapes, Text, Components y Pages; JSX para Layouts complejos;
- **Style:** Fills, Strokes, Effects, Opacity, Corner radius y Blend modes;
- **Layout:** Auto layout, Grid, Alignment, Spacing y Sizing;
- **Components:** Components, Instances, Component sets y Overrides;
- **Variables:** Variables, Collections, Modes y Fill bindings;
- **Query:** buscar Nodes, XPath selectors y leer Properties, Pages, Fonts y Selection;
- **Inspect:** `get_jsx`, `diff_jsx` y `describe` para Structure, Role y posibles Design issues;
- **Analyze:** Color palette, Typography, Spacing y Clusters repetidos;
- **Export:** PNG, SVG y JSX con Tailwind classes, además de `export_image` para verificación visual;
- **Vector:** Boolean operations y Path manipulation.

## Verificación visual

Después de modificar un diseño, el Assistant puede renderizarlo con `export_image` y compararlo con la solicitud. Así detecta problemas de Layout, elementos ausentes o Colors incorrectos.

## Ejemplos

- «Crea una Card con título, descripción y un Button azul».
- «Usa el mismo Corner radius en todos los Buttons de esta Page».
- «¿Qué Fonts usa este archivo?».
- «Cambia el Background del Frame seleccionado a un Gradient azul y morado».
- «Exporta el Frame seleccionado como SVG».
- «Encuentra todos los objetos de texto con Font size inferior a 12».
- «Describe la función del Component seleccionado».
- «Muestra el JSX de este Frame».

## Consejos

- Selecciona los objetos antes de escribir; el Assistant conoce la Selection.
- Indica Colors, Sizes y Positions con precisión.
- Un solo mensaje puede modificar varios objetos.
- Los cambios de AI se pueden revertir con Undo.
- El Layout se recalcula después de cada Tool call.

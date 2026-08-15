---
title: AI Chat
description: Integrierter AI Assistant mit mehr als 90 Tools zum Erstellen und Bearbeiten von Designs.
---

# AI Chat

<kbd>⌘</kbd><kbd>J</kbd> beziehungsweise <kbd>Strg</kbd><kbd>J</kbd> öffnet den AI Assistant. Eine Anweisung kann Shapes erstellen, Styles ändern, Layout konfigurieren, Components bearbeiten oder das Dokument analysieren.

## Einrichtung

1. AI-Chat-Panel öffnen.
2. Settings icon wählen.
3. Ein Model hinzufügen und Provider, Model ID, Credentials und Capabilities konfigurieren.
4. Model speichern und der Rolle **Design agent** zuweisen.

Mehrere wiederverwendbare Models können getrennt für Design, Reviews, schnelle Tasks und Image input zugewiesen werden. Models derselben Provider connection verwenden dasselbe sicher gespeicherte Credential.

### Provider

| Provider | Beispiele | Einrichtung |
|----------|-----------|-------------|
| **OpenRouter** | Claude, GPT, Gemini, DeepSeek, Qwen und weitere | API key von [openrouter.ai](https://openrouter.ai) |
| **Anthropic** | Claude Sonnet 4.6, Claude Opus 4.6 | API key von [console.anthropic.com](https://console.anthropic.com) |
| **OpenAI** | GPT-5.3 Codex, GPT-4.1, o3, o4-mini | API key von [platform.openai.com](https://platform.openai.com) |
| **Google AI** | Gemini 3.1 Pro, Gemini 3 Flash | API key von [aistudio.google.dev](https://aistudio.google.dev) |
| **Z.ai** | GLM-5.1, GLM-5, GLM-4.7 und GLM-4.5 family | API key aus der [Z.ai-Dokumentation](https://docs.z.ai/devpack/quick-start) |
| **MiniMax** | MiniMax M3, M2.7, M2.7-highspeed, M2.5 und M2.1 | API key von [platform.minimax.io](https://platform.minimax.io/user-center/basic-information/interface-key) |
| **OpenAI-compatible** | Endpoint im OpenAI API format | Eigene Base URL und Key; Completions oder Responses API |
| **Anthropic-compatible** | Endpoint im Anthropic API format | Eigene Base URL und Key |

OpenPencil besitzt für diese Verbindungen kein vermittelndes Backend. Requests gehen direkt an den Provider. Im Browser gelten dessen CORS policies. Model deployments unterscheiden sich außerdem darin, wie zuverlässig sie Tool calls streamen. Gemessene Ergebnisse und Reproduction steps stehen unter [BYOK-Kompatibilität](/programmable/byok-provider-compatibility).

### Externe MCP connections

Desktop-ACP-Agents können vertrauenswürdige Remote-Server des [Model Context Protocol](https://modelcontextprotocol.io/) verwenden. Unter **Settings → MCP connections** einen benannten Streamable-HTTP-Endpoint hinzufügen, optional ein Bearer token speichern und die Connection aktivieren.

Tokens werden im konfigurierten Credential backend statt in gewöhnlichen Settings gespeichert und erst beim Start einer ACP session gelesen.

Remote server müssen HTTPS verwenden; für lokale Entwicklung sind Loopback-HTTP-Endpoints erlaubt. Einen Server nur aktivieren, wenn er vertrauenswürdig ist: Seine Tools können externe Daten lesen oder Aktionen mit den bereitgestellten Credentials ausführen. Der integrierte Design-MCP-Server ist automatisch verbunden und muss hier nicht eingetragen werden.

## Tools

Der Assistant verfügt über mehr als 90 Tools:

- **Create:** Frames, Shapes, Text, Components und Pages; JSX für komplexe Layouts;
- **Style:** Fills, Strokes, Effects, Opacity, Corner radius und Blend modes;
- **Layout:** Auto Layout, Grid, Alignment, Spacing und Sizing;
- **Components:** Components, Instances, Component sets und Overrides;
- **Variables:** Variables, Collections, Modes und Fill bindings;
- **Query:** Nodes suchen, XPath selectors, Properties, Pages, Fonts und Selection lesen;
- **Inspect:** `get_jsx`, `diff_jsx` und `describe` für Structure, Role und mögliche Design issues;
- **Analyze:** Color palette, Typography, Spacing und wiederkehrende Clusters;
- **Export:** PNG, SVG und JSX mit Tailwind classes sowie `export_image` zur visuellen Prüfung;
- **Vector:** Boolean operations und Path manipulation.

## Visuelle Prüfung

Nach Änderungen kann der Assistant das Ergebnis mit `export_image` rendern und mit der Anfrage vergleichen. Dadurch werden Layoutfehler, fehlende Elemente und abweichende Colors sichtbar, die in einer rein textuellen Antwort unbemerkt bleiben könnten.

## Beispiele

- „Erstelle eine Card mit Titel, Beschreibung und einem blauen Button.“
- „Verwende für alle Buttons auf dieser Seite denselben Corner radius.“
- „Welche Fonts verwendet diese Datei?“
- „Ändere den Background des ausgewählten Frame in einen Gradient von Blau zu Violett.“
- „Exportiere den ausgewählten Frame als SVG.“
- „Finde alle Text objects mit einer Font size unter 12.“
- „Beschreibe die Funktion des ausgewählten Component.“
- „Zeige das JSX dieses Frame.“

## Hinweise

- Vor der Anfrage die betreffenden Objekte auswählen; der Assistant kennt die aktuelle Selection.
- Colors, Sizes und Positionen möglichst genau angeben.
- Eine Nachricht kann mehrere Objekte ändern.
- Änderungen durch AI können mit Undo zurückgenommen werden.
- Nach jedem Tool call wird das Layout neu berechnet.

---
layout: doc
title: IA y automatización
description: Automatiza OpenPencil mediante AI Chat, CLI, JSX, MCP y APIs.
---

# IA y automatización

OpenPencil trata los archivos de diseño como datos estructurados. Las operaciones del editor — crear Shapes, modificar Fills, configurar Auto layout o exportar Assets — también están disponibles desde CLI, AI agents y APIs.

La interfaz y la automatización usan el mismo Core. Una operación se comporta igual si se inicia desde la UI, un Script o un Agent.

## AI Chat

El Assistant integrado puede ejecutar más de 90 Tools. Una instrucción puede cambiar las Shadows de varios Buttons, crear un Component con Dark variant o exportar todos los Frames de una Page con Scale 2×.

[AI Chat →](./ai-chat)

## Collaboration

OpenPencil sincroniza documentos P2P mediante WebRTC. Basta con compartir el Room link; no se necesita cuenta ni servidor central. Live cursors y Follow mode muestran a los demás participantes. Yjs CRDT combina los cambios simultáneos.

[Collaboration →](./collaboration)

## JSX renderer

Una UI se puede describir de forma declarativa con JSX. Una sola llamada crea un Tree completo con Frames, Text, Auto layout, Fills y Strokes.

En la otra dirección, OpenPencil exporta una Selection como JSX o HTML con Tailwind classes. El resultado sirve como base para Implementation, Code review o un paso posterior con AI.

[JSX renderer →](./jsx-renderer)

## CLI

La CLI examina, exporta y analiza archivos `.fig` sin abrir el editor. Puede listar Pages y Nodes, buscar objetos, extraer Design tokens y renderizar PNG. Para automatización ofrece JSON output.

Mediante RPC, también puede controlar el documento abierto en la aplicación de escritorio.

[Examinar archivos](./cli/inspecting) · [Export](./cli/exporting) · [Analizar diseños](./cli/analyzing) · [Scripts](./cli/scripting)

## Servidor MCP

Claude Code, Cursor, Windsurf y otros MCP clients pueden usar los mismos 90 Tools que AI Chat. El servidor admite stdio y HTTP con Sessions.

[Servidor MCP →](/programmable/mcp-server)

## Plataforma abierta

OpenPencil se publica con licencia MIT, guarda los documentos localmente y ofrece acceso programático a sus operaciones. Los archivos `.fig` se pueden examinar, transformar, procesar en CI o proporcionar como Context a un LLM sin depender de un Hosting provider concreto.

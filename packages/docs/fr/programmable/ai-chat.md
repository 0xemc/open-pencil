---
title: AI Chat
description: AI Assistant intégré avec plus de 90 Tools pour créer et modifier des designs.
---

# AI Chat

Appuyez sur <kbd>⌘</kbd><kbd>J</kbd> ou <kbd>Ctrl</kbd><kbd>J</kbd>. L’Assistant peut créer des Shapes, modifier des Styles, configurer le Layout, travailler avec des Components et analyser le document.

## Configuration

1. Ouvrez AI Chat.
2. Sélectionnez le Settings icon.
3. Ajoutez un Model et configurez Provider, Model ID, Credentials et Capabilities.
4. Enregistrez le Model et attribuez-le à **Design agent**.

Plusieurs Models peuvent être enregistrés et attribués séparément au Design, aux Reviews, aux Tasks rapides et à l’Image input. Les Models partageant une Provider connection réutilisent le même Credential stocké de manière sécurisée.

### Providers

| Provider | Exemples | Configuration |
|----------|----------|---------------|
| **OpenRouter** | Claude, GPT, Gemini, DeepSeek, Qwen et autres | API key de [openrouter.ai](https://openrouter.ai) |
| **Anthropic** | Claude Sonnet 4.6, Claude Opus 4.6 | API key de [console.anthropic.com](https://console.anthropic.com) |
| **OpenAI** | GPT-5.3 Codex, GPT-4.1, o3, o4-mini | API key de [platform.openai.com](https://platform.openai.com) |
| **Google AI** | Gemini 3.1 Pro, Gemini 3 Flash | API key de [aistudio.google.dev](https://aistudio.google.dev) |
| **Z.ai** | GLM-5.1, GLM-5, GLM-4.7 et famille GLM-4.5 | API key selon la [documentation Z.ai](https://docs.z.ai/devpack/quick-start) |
| **MiniMax** | MiniMax M3, M2.7, M2.7-highspeed, M2.5 et M2.1 | API key de [platform.minimax.io](https://platform.minimax.io/user-center/basic-information/interface-key) |
| **OpenAI-compatible** | Endpoint au format OpenAI API | Base URL et Key propres ; Completions ou Responses API |
| **Anthropic-compatible** | Endpoint au format Anthropic API | Base URL et Key propres |

OpenPencil n’utilise aucun Backend intermédiaire pour ces connexions. Les Requests sont envoyées directement au Provider. Dans le Browser, ses CORS policies s’appliquent. La fiabilité des Streaming tool calls varie également selon les Model deployments. Consultez la [compatibilité BYOK](/programmable/byok-provider-compatibility) pour les mesures et étapes de reproduction.

### Connexions MCP externes

Les ACP agents de l’application de bureau peuvent utiliser des serveurs [Model Context Protocol](https://modelcontextprotocol.io/) distants et approuvés. Dans **Settings → MCP connections**, ajoutez un Streamable HTTP endpoint nommé, enregistrez éventuellement un Bearer token et activez la Connection.

Le Token est conservé dans le Credential backend configuré, et non dans les Settings ordinaires. Il n’est résolu qu’au démarrage de l’ACP session.

Les Remote servers doivent utiliser HTTPS. Les Loopback HTTP endpoints sont acceptés pour le développement local. N’activez qu’un Server de confiance : ses Tools peuvent lire des données externes ou effectuer des Actions avec les Credentials fournis. Le Design MCP server intégré est connecté automatiquement et ne doit pas être ajouté ici.

## Tools

AI Chat dispose de plus de 90 Tools :

- **Create :** Frames, Shapes, Text, Components et Pages ; JSX pour les Layouts complexes ;
- **Style :** Fills, Strokes, Effects, Opacity, Corner radius et Blend modes ;
- **Layout :** Auto layout, Grid, Alignment, Spacing et Sizing ;
- **Components :** Components, Instances, Component sets et Overrides ;
- **Variables :** Variables, Collections, Modes et Fill bindings ;
- **Query :** rechercher des Nodes et XPath selectors, lire Properties, Pages, Fonts et Selection ;
- **Inspect :** `get_jsx`, `diff_jsx` et `describe` pour Structure, Role et Design issues ;
- **Analyze :** Color palette, Typography, Spacing et Clusters ;
- **Export :** PNG, SVG et JSX avec Tailwind classes, ainsi que `export_image` pour la vérification visuelle ;
- **Vector :** Boolean operations et Path manipulation.

## Vérification visuelle

Après une modification, l’Assistant peut rendre le résultat avec `export_image` et le comparer à la demande. Il détecte ainsi les erreurs de Layout, les éléments manquants et les Colors incorrectes.

## Exemples

- « Crée une Card avec un titre, une description et un Button bleu. »
- « Utilise le même Corner radius pour tous les Buttons de cette Page. »
- « Quels Fonts ce fichier utilise-t-il ? »
- « Remplace le Background du Frame sélectionné par un Gradient bleu et violet. »
- « Exporte le Frame sélectionné en SVG. »
- « Trouve tous les objets texte dont la Font size est inférieure à 12. »
- « Décris la fonction du Component sélectionné. »
- « Affiche le JSX de ce Frame. »

## Conseils

- Sélectionnez les objets avant la demande ; l’Assistant connaît la Selection.
- Indiquez précisément Colors, Sizes et Positions.
- Un message peut modifier plusieurs objets.
- Les changements AI peuvent être annulés avec Undo.
- Le Layout est recalculé après chaque Tool call.

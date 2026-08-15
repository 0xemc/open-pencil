---
layout: home
title: OpenPencil — графический редактор с открытым исходным кодом
description: Открытая альтернатива Figma с поддержкой .fig, встроенным AI и программным доступом ко всем операциям.

hero:
  name: OpenPencil
  text: Графический редактор с открытым исходным кодом
  tagline: Открывает файлы Figma. Включает AI. Предоставляет полный программный доступ. Подходит для создания собственных редакторов.
  actions:
    - theme: brand
      text: Открыть в браузере
      link: https://app.openpencil.dev/demo
    - theme: alt
      text: Скачать
      link: https://github.com/open-pencil/open-pencil/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/open-pencil/open-pencil

features:
  - icon: 📂
    title: Совместимость с Figma
    details: Открывает .fig без предварительного преобразования. Поддерживает Copy и Paste между Figma и OpenPencil. Binary codec Kiwi сохраняет данные при импорте и экспорте.
  - icon: ⚡
    title: Автоматизация
    details: Headless CLI просматривает, экспортирует и анализирует .fig. Команда eval предоставляет Figma Plugin API. Доступны Tailwind CSS и JSON output для CI и scripts.
  - icon: 🧩
    title: Не только приложение
    details: Vue SDK позволяет создавать собственные интерфейсы редактирования, встраивать OpenPencil в другие продукты и собирать специализированные редакторы на общем core.
  - icon: 🤖
    title: Встроенный AI
    details: AI chat использует 90 tools для создания объектов, настройки styles и layout и анализа tokens. MCP server подключается к Claude Code, Cursor и Windsurf.
  - icon: 📖
    title: Открытый исходный код
    details: Лицензия MIT. Можно изучать и изменять редактор, движок, file codec и CLI.
  - icon: 🖥️
    title: Бесплатно и локально
    details: Учётная запись, отдельный server и постоянное соединение с интернетом не нужны. Desktop app занимает около 7 МБ; также доступна web app.
  - icon: 👥
    title: Совместная работа
    details: Peer-to-peer WebRTC без центрального server. Отправьте ссылку и редактируйте документ вместе с live cursors и Follow mode.
---

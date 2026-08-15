---
title: Export mit der CLI
description: PNG, JPG, WEBP, SVG, `.fig`, JSX und HTML exportieren oder Dokumentformate konvertieren.
---

# Export mit der CLI

Die CLI exportiert Rasterbilder, SVG, Teile eines Dokuments als `.fig`, JSX und HTML.

## Formate

```sh
openpencil export design.fig                           # PNG, Standard
openpencil export design.fig -f jpg -s 2 -q 90        # JPG mit 2× und Quality 90
openpencil export design.fig -f webp -s 3             # WEBP mit 3×
openpencil export design.fig -f svg                   # SVG
openpencil export design.fig -f fig --page "Page 1"   # einzelne Page als .fig
openpencil export design.fig -f fig --node 1:23        # einzelner Node als .fig
openpencil export design.fig -f html --css tailwind    # HTML fragment mit Tailwind classes
```

Options:

- `-f`: `png`, `jpg`, `webp`, `svg`, `jsx`, `html` oder `fig`;
- `-s`: Scale von 1 bis 4;
- `-q`: Quality von 0 bis 100, nur für JPG und WEBP;
- `-o`: Output path;
- `--page`: Page name;
- `--node`: Node ID.

## JSX

```sh
openpencil export design.fig -f jsx --style tailwind
```

Output:

```html
<div className="flex flex-col gap-4 p-6 bg-white rounded-xl">
  <p className="text-2xl font-bold text-[#1D1B20]">Card Title</p>
  <p className="text-sm text-[#49454F]">Description text</p>
</div>
```

`--style openpencil` erzeugt das native JSX format des [JSX renderer](../jsx-renderer).

## HTML

Standardmäßig entsteht ein HTML fragment mit Inline styles. Alternativ können Tailwind utility classes ausgegeben werden:

```sh
openpencil export design.fig -f html
openpencil export design.fig -f html --css tailwind
```

`--html standalone` erzeugt ein vollständiges, direkt im Browser zu öffnendes Dokument mit Reset styles und Page wrapper:

```sh
openpencil export design.fig -f html --html standalone --css inline
openpencil export design.fig -f html --html standalone --css tailwind
openpencil export design.fig -f html --html standalone --css tailwind --assets external
```

Standalone Tailwind wird beim Export kompiliert und benötigt keine Tailwind browser runtime. Mit `--assets external` schreibt OpenPencil CSS und extrahierte Images neben die HTML-Datei. Zusammen mit externen Assets kann `--fonts assets` die im SceneGraph erkannten Fonts über konfigurierte Web-font provider auflösen und lokale `@font-face`-Dateien erzeugen.

Standalone HTML ist für Übergabe, Inspektion und Weiterverarbeitung gedacht, nicht als pixelgenauer Ersatz für den Canvas renderer. HTML export ist nur im File mode verfügbar.

## Thumbnail

```sh
openpencil export design.fig --thumbnail --width 1920 --height 1080
```

## Live document

Ohne Dateiname exportiert die CLI aus der laufenden Desktop-App:

```sh
openpencil export -f png    # Screenshot des aktuellen Canvas
```

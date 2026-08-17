---
title: Export con la CLI
description: Exportar PNG, JPG, WEBP, SVG, `.fig`, JSX y HTML o convertir formatos de documento.
---

# Export con la CLI

La CLI exporta Images, SVG, partes de un documento como `.fig`, JSX y HTML.

## Formatos

```sh
openpencil export design.fig                           # PNG predeterminado
openpencil export design.fig -f jpg -s 2 -q 90        # JPG a 2×, Quality 90
openpencil export design.fig -f webp -s 3             # WEBP a 3×
openpencil export design.fig -f svg                   # SVG
openpencil export design.fig -f fig --page "Page 1"   # una Page como .fig
openpencil export design.fig -f fig --node 1:23        # un Node como .fig
openpencil export design.fig -f html --css tailwind    # HTML fragment con Tailwind classes
```

Options:

- `-f`: `png`, `jpg`, `webp`, `svg`, `jsx`, `html` o `fig`;
- `-s`: Scale de 1 a 4;
- `-q`: Quality de 0 a 100, solo para JPG y WEBP;
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

`--style openpencil` genera el formato JSX nativo del [JSX renderer](../jsx-renderer).

## HTML

Por defecto, el Export produce un HTML fragment con Inline styles. También puede usar Tailwind utility classes:

```sh
openpencil export design.fig -f html
openpencil export design.fig -f html --css tailwind
```

`--html standalone` crea un documento completo que se puede abrir directamente en el navegador, con Reset styles y Page wrapper:

```sh
openpencil export design.fig -f html --html standalone --css inline
openpencil export design.fig -f html --html standalone --css tailwind
openpencil export design.fig -f html --html standalone --css tailwind --assets external
```

Standalone Tailwind se compila durante el Export y no necesita Tailwind browser runtime. `--assets external` escribe el CSS y los Images extraídos junto al archivo HTML. Con Assets externos, `--fonts assets` resuelve los Fonts detectados en SceneGraph mediante los Web-font providers configurados y genera archivos `@font-face` locales.

Standalone HTML está pensado para Handoff, Inspection y procesamiento posterior, no como sustituto pixel-perfect del Canvas renderer. HTML export solo está disponible en File mode.

## Thumbnail

```sh
openpencil export design.fig --thumbnail --width 1920 --height 1080
```

## Documento abierto

Omite el archivo para exportar desde la aplicación de escritorio:

```sh
openpencil export -f png    # Screenshot del canvas actual
```

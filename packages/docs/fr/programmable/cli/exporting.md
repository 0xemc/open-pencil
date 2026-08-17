---
title: Export avec la CLI
description: Exporter en PNG, JPG, WEBP, SVG, `.fig`, JSX et HTML ou convertir des formats de document.
---

# Export avec la CLI

La CLI exporte des Images, du SVG, des parties de document en `.fig`, du JSX et du HTML.

## Formats

```sh
openpencil export design.fig                           # PNG par défaut
openpencil export design.fig -f jpg -s 2 -q 90        # JPG à 2×, Quality 90
openpencil export design.fig -f webp -s 3             # WEBP à 3×
openpencil export design.fig -f svg                   # SVG
openpencil export design.fig -f fig --page "Page 1"   # une Page en .fig
openpencil export design.fig -f fig --node 1:23        # un Node en .fig
openpencil export design.fig -f html --css tailwind    # HTML fragment avec Tailwind classes
```

Options :

- `-f` : `png`, `jpg`, `webp`, `svg`, `jsx`, `html` ou `fig` ;
- `-s` : Scale de 1 à 4 ;
- `-q` : Quality de 0 à 100, uniquement pour JPG et WEBP ;
- `-o` : Output path ;
- `--page` : Page name ;
- `--node` : Node ID.

## JSX

```sh
openpencil export design.fig -f jsx --style tailwind
```

Output :

```html
<div className="flex flex-col gap-4 p-6 bg-white rounded-xl">
  <p className="text-2xl font-bold text-[#1D1B20]">Card Title</p>
  <p className="text-sm text-[#49454F]">Description text</p>
</div>
```

`--style openpencil` produit le format JSX natif du [JSX renderer](../jsx-renderer).

## HTML

Par défaut, l’Export crée un HTML fragment avec Inline styles. Des Tailwind utility classes peuvent aussi être générées :

```sh
openpencil export design.fig -f html
openpencil export design.fig -f html --css tailwind
```

`--html standalone` produit un document complet ouvrable dans le Browser, avec Reset styles et Page wrapper :

```sh
openpencil export design.fig -f html --html standalone --css inline
openpencil export design.fig -f html --html standalone --css tailwind
openpencil export design.fig -f html --html standalone --css tailwind --assets external
```

Standalone Tailwind est compilé pendant l’Export et ne nécessite aucune Tailwind browser runtime. `--assets external` écrit le CSS et les Images extraites à côté du fichier HTML. Avec des Assets externes, `--fonts assets` résout les Fonts détectés dans SceneGraph via les Web-font providers configurés et génère des fichiers `@font-face` locaux.

Standalone HTML est destiné au Handoff, à l’Inspection et aux traitements ultérieurs, pas à remplacer le Canvas renderer au pixel près. HTML export n’est disponible qu’en File mode.

## Thumbnail

```sh
openpencil export design.fig --thumbnail --width 1920 --height 1080
```

## Document ouvert

Omettez le fichier pour exporter depuis l’application de bureau :

```sh
openpencil export -f png    # Screenshot du canvas actuel
```

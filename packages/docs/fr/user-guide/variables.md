---
title: Variables
description: Design variables, Collections, Modes et Color bindings dans OpenPencil.
---

# Variables

Les Variables stockent des Design tokens réutilisables, tels que Colors et valeurs de Spacing. Les Properties des objets peuvent leur être liées. Lorsqu’une Variable change, tous les objets associés sont mis à jour.

## Ouvrir Variables

Lorsqu’aucun objet n’est sélectionné, l’onglet Design affiche les Page properties. Le Settings icon de la section Variables ouvre le Variables dialog.

## Collections

Les Variables sont organisées en Collections. Chaque Collection apparaît dans un onglet.

- Click change de Collection.
- Double-click sur le Name lance le changement de nom.

## Modes

Une Collection peut contenir plusieurs Modes, par exemple Light et Dark. Ils apparaissent sous forme de Columns dans la Variables table.

## Modifier les Variables

- **Créer :** choisissez **Create variable**.
- **Name :** cliquez sur la Name cell.
- **Value :** cliquez sur la Cell du Mode correspondant.
- **Search :** filtrez la liste avec la Search bar.

### Color variables

Les Color values sont modifiés directement dans le tableau avec un Color input et un Picker.

Les Types `FLOAT`, `STRING` et `BOOLEAN` existent dans le modèle de données, mais ne disposent pas encore d’une Editing UI complète.

## Bindings de Fill et Stroke

Le Variable picker des sections Fill et Stroke relie une Color variable à la Color property correspondante.

- Sélectionnez une Variable pour créer le Binding. Le Field affiche un Badge violet avec son Name.
- Supprimez le Binding via l’Action dédiée du Picker.

Ouvrir le Field ou le Picker ne modifie pas le Binding. Seule une modification réelle du Value peut, selon le Control, détacher le Binding ou modifier la Variable elle-même.

## Conseils

- Utilisez les Collections pour grouper les Tokens associés, par exemple `Primitives` pour les Colors de base et `Semantic` pour les Tokens fonctionnels.
- Les Modes permettent de définir les Themes Light et Dark dans une même Collection.
- Les Aliases permettent à une Variable de référencer une autre Variable, même dans une autre Collection.

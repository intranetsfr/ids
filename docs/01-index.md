---
title: Introduction
---

# Intranets Design System

> Système de design utilitaire basé sur la philosophie **Atom** — des classes atomiques composables pour construire n'importe quelle interface.

---

## Installation

### Via CDN

Ajouter dans le `<head>` de chaque page :

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
<link rel="stylesheet" href="https://ids.intranets.fr/css/intranets-ds.min.css">
```

Ajouter avant `</body>` :

```html
<script src="https://ids.intranets.fr/js/intranets-ds.min.js"></script>
```

### Via npm

```bash
npm install intranets-design-system
```

Référencer dans `angular.json` ou votre bundler :

```json
"styles": [
  "node_modules/intranets-design-system/css/intranets-ds.min.css"
]
```

---

## Vue d'ensemble des composants

| Composant | Description | Classes principales |
|---|---|---|
| **Grid** | Grille flexbox 12/8/4 colonnes | `.ids-grid`, `.ids-cell--{n}-col` |
| **Space** | Margin, padding, gap, border-radius | `.ids-margin--*`, `.ids-padding--*`, `.ids-gap--*`, `.ids-radius--*` |
| **Textes** | Taille de police responsive | `.ids-fs--{taille}` |
| **Palette** | Couleurs Material Design (fond + texte) | `.ids-color--{nom}-{teinte}`, `.ids-color-text--*` |
| **Theming** | Styles de base & tokens CSS | `--color-primary`, `--color-secondary`, … |
| **Boutons** | Éléments `<button>` natifs stylisés | Via theming + utilitaires |
| **Formulaires** | `<input>`, `<select>`, `<textarea>`, `<fieldset>` | Via theming |
| **Tableau** | `<table>` natif stylisé | Via theming |
| **Sidenav** | Navigation latérale animée CSS | `<sidenav>`, `<drawer>` |

---

## Breakpoints

| Nom | Largeur min | Colonnes | Suffixe de classe |
|---|---|---|---|
| Phone | — | 4 | `-phone` |
| Tablet | 480px | 8 | `-tablet` |
| Desktop | 840px | 12 | `-desktop` |

La plupart des classes utilitaires (margin, padding, gap, font-size) acceptent un suffixe responsive :

```html
<div class="ids-padding--16 ids-padding--8-phone ids-padding--24-desktop">
  Padding adaptatif selon le breakpoint
</div>
```

---

## Tokens de design

Les couleurs sont exposées via des CSS custom properties dans `:root` :

```css
--ids-color--{nom}-{teinte}   /* ex : --ids-color--indigo-500 */
```

Le thème se personnalise en surchargeant les variables sémantiques :

```css
:root {
    --color-primary:   var(--ids-color--indigo-A700);
    --color-secondary: var(--ids-color--indigo-A100);
    --color-success:   var(--ids-color--green-500);
    --color-warning:   var(--ids-color--yellow-500);
    --color-error:     var(--ids-color--red-500);
    --color-info:      var(--ids-color--blue-500);
}
```

---

## Philosophie

Le IDS suit une approche **utilitaire atomique** :

- Chaque classe fait **une seule chose** (margin, padding, couleur, taille…)
- Les composants se construisent en **combinant** ces classes
- Les styles de base (theming) s'appliquent sur les **éléments natifs** HTML sans classes supplémentaires
- Le **thème** se change globalement via des CSS custom properties, sans toucher au markup

```html
<!-- Exemple : carte construite entièrement avec des utilitaires -->
<div class="ids-radius--8 ids-padding--16 ids-color--grey-100">
  <h2 class="ids-fs--20 ids-color-text--indigo-700">Titre</h2>
  <p class="ids-fs--14 ids-margin-top--8">Contenu de la carte.</p>
  <button class="ids-radius--4 ids-margin-top--16">Action</button>
</div>
```

---

## Icônes

Le IDS utilise **Material Symbols Outlined** (Google Fonts) :

```html
<span class="material-symbols-outlined">favorite</span>
<span class="material-symbols-outlined ids-fs--32">home</span>
```

Référence complète : [fonts.google.com/icons](https://fonts.google.com/icons)

---

*Intranets Design System v2.0 — Licence Apache 2.0*

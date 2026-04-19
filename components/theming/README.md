# Theming

Le theming IDS fournit les **styles de base** pour tous les éléments HTML natifs ainsi que les **tokens de design** (CSS custom properties).

## Intégration

Inclure le fichier CSS compilé et la police d'icônes :

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
<link rel="stylesheet" href="/css/intranets-ds.min.css">
<script src="/js/intranets-ds.min.js"></script>
```

## Tokens de design (CSS custom properties)

Surcharger ces variables dans `:root` pour personnaliser l'ensemble du thème :

```css
:root {
    /* Couleurs primaire / secondaire */
    --color-primary:   var(--ids-color--indigo-A700);
    --color-secondary: var(--ids-color--indigo-A100);

    /* Sémantique */
    --color-success: var(--ids-color--green-500);
    --color-warning: var(--ids-color--yellow-500);
    --color-error:   var(--ids-color--red-500);
    --color-info:    var(--ids-color--blue-500);

    /* Typographie */
    --font-family-base: 'Arial', system-ui, sans-serif;
    --font-family-mono: monospace;

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 300ms ease;
    --transition-slow: 500ms ease;
}
```

Toutes les variables `--ids-color--*` sont disponibles depuis la palette IDS. Voir le composant **Palette** pour la liste complète.

## Éléments stylisés

Le theming applique des styles sur les éléments natifs sans nécessiter de classes supplémentaires :

| Élément | Description |
|---|---|
| `html`, `body` | Box-sizing, font, line-height, scroll behavior |
| `h1`–`h6` | Couleur primaire, line-height 1.2 |
| `p`, `a`, `strong`, `em`, `code`, `blockquote` | Typographie de base |
| `input`, `textarea`, `select` | Bordure, focus, disabled |
| `input[type="checkbox"]`, `input[type="radio"]` | Apparence custom, états checked/disabled |
| `input[type="range"]`, `input[type="file"]` | Styling natif étendu |
| `button` | Fond secondaire, couleur primaire, transitions |
| `table`, `th`, `td` | Collapse, hover, en-têtes colorés |
| `nav ul`, `nav a` | Flex, sans puces |
| `:focus-visible` | Outline 2px couleur primaire |

## Accessibilité

- Les états `:focus-visible` sont gérés distinctement de `:focus`.
- `::selection` utilise `--color-secondary` comme fond.
- Les éléments `disabled` ont `opacity: 0.6` et `cursor: not-allowed`.

## Exemples de personnalisation

### Changer le thème couleur

```css
:root {
    --color-primary:   var(--ids-color--teal-700);
    --color-secondary: var(--ids-color--teal-100);
}
```

### Modifier la police

```css
:root {
    --font-family-base: 'Roboto', system-ui, sans-serif;
}
```

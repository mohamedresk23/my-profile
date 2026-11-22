# my-profile

Personal portfolio of **Mohamed Al-Shahat Abdul-Aziz** — Frontend Tech Lead (React & Next.js).

**Live:** https://mohamedresk23.github.io/my-profile/

A bilingual (English / العربية) single-page portfolio with light and dark themes, built with plain HTML, CSS and JavaScript. It has no build step and no dependencies.

## What's inside

- **Hero**: an animated code editor types a product-grid template (Twig, Liquid or JSX), then a demo storefront "renders" from it. The add-to-cart buttons work.
- **About**, **Experience** (the timeline line draws as you scroll), **Skills**, **Projects** (filter by technology, with animated reordering) and **Contact** (copy email to clipboard).
- Opens in English and dark mode by default. Arabic is a full RTL layout, not a mirrored afterthought. A visitor's language and theme choices are remembered.
- Respects `prefers-reduced-motion`: every animation has a static fallback.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Edit content

All text lives in [`assets/js/data.js`](assets/js/data.js), in both `en` and `ar`:

- `links`: email, phone, GitHub and LinkedIn. Leave a value empty (`""`) to hide it.
- `projects.items[].link`: add a URL to show a link button on that project card.
- `careerStart`: the "years building for the web" counter is calculated from this date.

## Structure

```
index.html
assets/
  css/style.css    design tokens, layout, animations
  js/data.js       all content (EN + AR)
  js/main.js       rendering, i18n, theme, scroll animations, demo
  favicon.svg
```

## Deploy

Hosted on GitHub Pages from the `main` branch (root folder). Every push to `main` redeploys the site automatically. After editing CSS or JS, bump the `?v=` number on the asset links in `index.html` so returning visitors get the new files.

Icons: [Lucide](https://lucide.dev) (ISC license), inlined as SVG.

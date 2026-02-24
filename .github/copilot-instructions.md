# Copilot Instructions for grbwski

This repository is a tiny, single‑page public site. There is no build system,
no server code, and no external dependencies except a couple of fonts and a
hero image. The goal of AI coding agents working in this workspace is to
quickly understand the simple layout and styling conventions so they can make
productive edits without breaking the aesthetic or performance.

## Project structure

- `index.html` – the only HTML document. All markup lives here (header, hero,
  sections, footer). New content should generally be added as another
  `section.fade-section` within `<main class="content">`.
- `styles.css` – global styles and layout. Uses a reset at the top, mobile‑first
  rules, and a few custom animations (`fadeUp`, `bounce`). Class names are
  descriptive/hyphenated; the site does not use BEM or a CSS preprocessor.
- `script.js` – vanilla DOM/scroll logic. Implements two effects:
  * hero parallax & fade (scroll listener updates `.hero-bg` transform and
    `.hero` opacity)
  * intersection‑observer based fade‑in of `.fade-section` elements
- `images/` – static assets (currently just `hero.webp`). Images are referenced
  from HTML/CSS. Preload the hero image in `<head>` for faster paint.
- `README.md` – a short project description.

There is no `package.json`, no tests, and nothing under `.github/` besides this
file.

## How to work here

1. **Local preview:** open `index.html` in any browser (or use a Live Server
   extension). Edits take effect immediately; there is no build step.
2. **Additions/changes:** modify HTML, CSS, or JS directly. Keep the file sizes
   small – the site is meant to be lightweight.
3. **Images:** drop them into `images/` and reference them with relative paths.
   If you add a new hero or background, preload it in the `<head>` like the
   existing `hero.webp` quiz.
4. **Deployment:** not specified in code; assume ordinary git push (GitHub
   Pages is likely). Do not add Node‑specific tooling unless a future task
   explicitly introduces it.

## Coding conventions & patterns

- **Class naming:** simple hyphenated words (`site-header`, `hero-overlay`).
- **Responsiveness:** use `clamp()` for fluid typography and media queries only
  where absolutely needed (see `.hero` background-attachment rule).
- **Animations:** defined in `styles.css` with `@keyframes` and triggered by
  adding/removing classes (`.visible` for fade sections).
- **JavaScript:** avoid jQuery or frameworks; use `querySelector`/`querySelectorAll`.
  Throttling/debouncing is unnecessary for the tiny scroll handler.
- **No external libraries:** everything must work in a modern evergreen browser
  without bundling.

## Patterns worth knowing

- The hero section uses `position: fixed` background with a CSS overlay and a
  separate `div.hero-bg` manipulated by JS for parallax. When editing, keep the
  DOM structure the same so the JS continues to work.
- New content blocks should have the `fade-section` class so they participate
  in the scroll‑fade animation handled by the IntersectionObserver.
- The header branding link is just `/`; absolute links to external profiles open
  in a new tab (`target="_blank"`).
- All colors and spacing values are hard‑coded; there is no variables file.

## Common workflows

- **Updating text/content:** edit `index.html`; preserve indentation and
  existing structure.
- **Styling changes:** modify `styles.css`; keep rules simple and avoid
  over‑specific selectors (the CSS is intentionally minimal).
- **Adding interactivity:** extend `script.js` in the existing module style
  (no IIFE or build). If more JS is required, keep it modular and self‑contained.

> **Note:** because the repository is so small, an AI agent can reason about
> every line in seconds. When asked to implement a new feature, start by
> scanning all three files to stay aligned with existing patterns.

## What not to do

- Do not introduce build tools or dependencies without explicit instructions.
- Avoid rewriting the whole page; incremental changes are preferred.
- Don't assume a backend or API – the content is static.

---

This file acts as the authoritative guide for Copilot-like agents. If something
in the code changes or additional files are added, update these instructions
accordingly.

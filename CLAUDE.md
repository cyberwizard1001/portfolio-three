# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Astro dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview production build
- `npm run astro -- <cmd>` — run arbitrary astro CLI commands (e.g. `astro check`)

No test suite or linter is configured.

## Architecture

This is an Astro 5 portfolio site styled as a desktop OS / window-manager UI (waybar, window chrome, vim-style statusline). Deployed to GitHub Pages under base path `/portfolio-three/` (see `astro.config.mjs`); `site`/`base` must stay in sync with the GH Pages repo name.

### Content collections (`src/content/config.ts`)

- `projects` — case studies, loaded from `src/content/projects/*.md`. Each entry's frontmatter is a `sections` array of typed blocks (`component` + `props`), rendered dynamically.
- `projectTldrs` — optional companion files in `src/content/project-tldrs/<slug>.md`, matched to a project by `id`/slug. If present, the project page shows a toggle to swap between the full case study and the TLDR.

### Project page (`src/pages/projects/[slug].astro`)

Each project's `sections` array is rendered through a `blockComponents` map (component name string -> imported `.astro` component in `src/components/project-blocks/`). To add a new section type:
1. Create the component in `src/components/project-blocks/`.
2. Add it to the `blockComponents` map and the `component` enum in `src/content/config.ts`.
3. Reference it by name in a project's frontmatter `sections`.

Sections are split into:
- `heroSections` (`ProjectHero`) and `moreProjectsSections` (`MoreProjects`) — rendered outside the window chrome.
- `bodySections` — everything else, rendered inside `WindowChrome` along with the markdown `Content` and (if present) the TLDR toggle/content.

If a project has no `sections`, a default minimal set (`ProjectHero`, `ProjectGallery`, `ProjectMeta`) is generated from top-level frontmatter fields.

### Theming (`src/styles/tokens.css`)

Themes are CSS variable sets selected via `[data-theme="N"]` on `<html>`, persisted to `localStorage` (`theme`, `mode`) and applied via inline script in `Layout.astro` before paint to avoid flash. Themes are numbered 1-5: 1 default, 2 Catppuccin Mocha, 3 Gruvbox, 4 Dracula, 5 High Contrast. Each theme has a dark (default) and light (`[data-mode="light"]`) variant defined in `tokens.css`, grouped together in numeric order.

### WindowChrome (`src/components/WindowChrome.astro`)

Shared "window" wrapper (title bar + body) used for the project case-study window. Has a named `actions` slot in the title bar (used by the TLDR toggle) and a default slot for body content.

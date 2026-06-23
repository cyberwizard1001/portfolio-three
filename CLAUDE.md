# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Astro dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview production build
- `npm run astro -- <cmd>` — run arbitrary astro CLI commands (e.g. `astro check`)

No test suite or linter is configured.

## Visual debugging

Don't reach for Playwright, headless Chrome, or other browser automation to inspect layout/spacing issues when the user has already provided a screenshot or a clear description of the visual problem. Diagnose from the code (CSS box model, margins/padding, component structure) and the provided image/description first. Only fall back to a real browser if the code-level analysis can't explain what's shown.

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

### Grid background vs. vim window

`grid-bg` (defined in `src/styles/global.css`) marks empty/structural space — page padding, hero areas, CTA strips. Any new prose content (paragraphs, body text) should NOT sit directly on `grid-bg`; it goes inside a `WindowChrome` "vim window" (see `colophon.astro`, `accessibility.astro`, `ai.astro` for the pattern: sticky scroll-jacked window + `vim-statusline` footer). Never apply `grid-bg` to the window or its body — only to the page-level wrapper around it.

`grid-bg` is just a CSS background-image — it does not stop at child element boundaries. `.window` itself has no opaque background (only `.win-bar` does), so if the content slotted into `WindowChrome` is transparent, a `grid-bg` ancestor's grid lines show straight through the window body. This is why every window-body content block in this codebase sets its own `background: var(--bg1)` (e.g. `.colo-window-body` in colophon.astro, `ProjectDecisionLog.astro`, `ProjectFindingsGrid.astro`, and the panel classes in `about.astro`). When adding a new panel/section that lives inside a `WindowChrome`, always give its content wrapper an explicit `background: var(--bg1)` — don't rely on `.window`'s border to visually seal it off.

### Theming (`src/styles/tokens.css`)

Themes are CSS variable sets selected via `[data-theme="N"]` on `<html>`, persisted to `localStorage` (`theme`, `mode`) and applied via inline script in `Layout.astro` before paint to avoid flash. Themes are numbered 1-5: 1 default, 2 Catppuccin Mocha, 3 Gruvbox, 4 Dracula, 5 High Contrast. Each theme has a dark (default) and light (`[data-mode="light"]`) variant defined in `tokens.css`, grouped together in numeric order.

### WindowChrome (`src/components/WindowChrome.astro`)

Shared "window" wrapper (title bar + body) used for the project case-study window. Has a named `actions` slot in the title bar (used by the TLDR toggle) and a default slot for body content.

### Project-block layout gotchas (eyebrow/title/image grids)

Several `project-blocks` components (`ProjectTextImage`, `ProjectImageCarousel`) use a 2-column grid with an `eyebrow` label, a title/body text block, and an image/carousel panel, with a `reverse` prop swapping columns. Two recurring bugs:

- **Eyebrow + title spacing**: keep the eyebrow `<span>` *inside* the same wrapper div as the title (margin-controlled spacing), not as a sibling grid row. If eyebrow is a separate grid row, any `row-gap` on the grid (e.g. the mobile single-column breakpoint) inserts a full row-gap between the eyebrow and title, not just the small label gap you want.
- **Text/image vertical misalignment with `reverse`**: when the text block and image/carousel swap `grid-column` between normal and `reverse` variants, give both items an explicit `grid-row: 1` (don't leave it to auto-placement). Without it, the shorter item can end up bottom-anchored instead of top-anchored within the row, even with `align-items: start` on the grid container.
- **Caption + pagination dots double-margin**: when an image panel has both a caption and a dots/counter row underneath, put them in one flex row (`justify-content: space-between`) inside the same padded panel — don't stack them as separate siblings each with their own top margin, which compounds into a visually oversized gap.

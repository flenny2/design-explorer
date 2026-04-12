# Design Explorer

Interactive front-end design learning app — explore typography, color, layout, components, and design systems.

## Stack
- Vite + React (JSX, no TypeScript)
- CSS custom properties (no Tailwind — users see real CSS property names)
- react-router-dom for routing, react-colorful for color picker
- Google Fonts loaded via <link> in index.html

## Structure
- `src/pages/<section>/` — each explorer section (typography, color, layout, components, systems)
- `src/components/` — Sidebar, StepperControl, SliderControl, SelectControl, ToggleControl, CssDisplay, SideBySide, SampleCard
- `src/data/` — config files (fonts.js, palettes.js, layoutPatterns.js, designSystems.js)
- `src/utils/` — color.js (HSL/RGB/Hex + WCAG contrast), css.js (formatting), controlNav.js (keyboard nav between controls)

## Patterns
- Every interactive section follows: Controls → Live Preview → CssDisplay (shows CSS output)
- Use StepperControl (not SelectControl) for browsable options — left/right cycles values
- Up/down arrow keys navigate between controls within a panel (all controls participate via controlNav.js)
- Focus states use `:has(:focus)` on `.control-group` to highlight the entire row (label + input)
- CssDisplay starts collapsed by default — click to expand
- State lives in each page via useState — no global state needed
- Avoid direct DOM manipulation (e.target.style) — use React state for dynamic styles
- CssDisplay accepts `selector` + `styles` object, or `raw` CSS string
- Design system themes use CSS variable maps applied via inline styles on scoped containers

## Commands
- `npm install` — install dependencies (first time or after pulling)
- `npm run dev` — start dev server (http://localhost:5173)
- `npm run build` — production build (zero-config, no errors expected)
- `npm run preview` — preview production build locally

## Routes
- `/` — Home (overview cards)
- `/typography` — Font controls, pairings, type scale
- `/color` — Picker, palette generator, contrast checker, named palettes
- `/layout` — Flexbox playground, grid playground, spacing scale, layout patterns
- `/components` — Buttons, cards, forms, navbars
- `/systems` — Design system previews, side-by-side comparison, CSS breakdowns

## Gotchas
- `create-vite` cancels on non-empty dirs (even `.claude/`) — scaffold manually if needed
- Google Fonts are preloaded in index.html — add new fonts there before referencing in data/fonts.js
- Card/component variants need distinct background contexts (glassmorphic needs gradient, neumorphic needs gray)
- `--app-border` must be dark enough to be visible in light mode — currently #c8ccd4

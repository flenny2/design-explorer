# Design Explorer

what: interactive front-end design learning app — explore typography, color, layout, components, design systems
stack: Vite + React (JSX, no TypeScript) · CSS custom properties (no Tailwind) · react-router-dom · react-colorful
app: `src/` — pages/<section>, components, data (configs), utils; per-page useState, no global store
corpus: `research/` — standalone machine-first design-research knowledge base (538 sourced entries, 15 datasets, 3 essays); NOT wired into the app
run: `npm run dev` (:5173) · `npm run build` · `npm run validate:corpus`
branches: main is current — corpus + validator already merged (Jul-2026); local `add-design-research-corpus` & `auto/87-fed-corpus-validator` are merged leftovers
updated: 2026-07-13

## Stack
- Vite + React (JSX, no TypeScript)
- CSS custom properties (no Tailwind — users see real CSS property names)
- react-router-dom for routing, react-colorful for color picker
- Google Fonts loaded via <link> in index.html

## Structure
- `src/pages/<section>/` — each explorer section (advisor, typography, color, layout, components, systems)
- `src/components/` — Sidebar, StepperControl, SliderControl, SelectControl, ToggleControl, CssDisplay, SideBySide, SampleCard, VideoSection
- `src/data/` — config files (fonts.js, palettes.js, layoutPatterns.js, designSystems.js, advisorData.js, colorScience.js, videos.js)
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
- `npm run validate:corpus` — validate the `research/` corpus against `research/SCHEMA.md` (runs `research/validate.js`)

## Routes
- `/` — Home (overview cards)
- `/advisor` — Design Advisor: pick app type + vibe, get tailored design brief with reasoning
- `/typography` — Font controls, pairings, type scale
- `/color` — Color wheel, psychology, temperature, contrast science, design rules, picker, palette generator, contrast checker, color blindness sim, named palettes
- `/layout` — Flexbox playground, grid playground, spacing scale, layout patterns
- `/components` — Buttons, cards, forms, navbars
- `/systems` — Design system previews, side-by-side comparison, CSS breakdowns

## Color Section Architecture
- Color theory is split into separate section components (not one monolith): ColorWheelSection, ColorPsychologySection, ColorTemperatureSection, ContrastAndRulesSection, ColorAccessibilitySection
- All color theory components share `ColorTheory.css` (imported in ColorExplorer.jsx), classes prefixed `ct-`
- Expert quotes use a local `Quote` component in each file (not shared) — keeps each section self-contained
- Color blindness simulation uses Viénot 1999 matrices in `simulateCB()` — uses hexToRgb/rgbToHex from utils/color.js

## Video Embeds
- VideoSection component uses click-to-load pattern: shows thumbnail from img.youtube.com, loads iframe only on play
- Uses youtube-nocookie.com for privacy-enhanced embeds
- Video data lives in `src/data/videos.js`, organized by section key (color, typography, layout, components, systems)

## Data Scale
- 45 named palettes across 9 categories (warm, cool, earth, pastel, neon, mono, neutral, brand, retro)
- 16 design systems with 5 annotated CSS variables each
- 14 layout patterns, 16 font pairings, 15 app types, 10 vibes
- Expert quotes sourced from verified publications (Albers, Itten, Goethe, Newton, Tufte, Norman, Rams, Vignelli)
- All color science claims fact-checked — see commit history for corrections

## Research Corpus (`research/`)
- Standalone machine-first knowledge base — reference material for design work, **not imported by the app** (`src/data/` configs are separate and unchanged).
- 538 sourced entries across 15 datasets (`research/data/*.json`) + 3 theory essays (`research/essays/*.md`). `research/INDEX.md` = human overview, `research/SCHEMA.md` = the entry contract, `research/manifest.json` = machine routing table.
- Every entry carries a `confidence` mark (`verified` / `well-known` / `needs-check`); 0 remain `needs-check` as of the 2026-07-07 verification pass.
- Entry `related` fields hold `id`s that may cross-reference other datasets — dangling `related` ids are caught by the validator (see history for a Jul-12 dangling-link cleanup).
- `research/validate.js` (run via `npm run validate:corpus`) checks the corpus against SCHEMA; `tests/fixtures/bad-corpus/` holds intentionally-broken fixtures that the validator must reject.

## Gotchas
- `create-vite` cancels on non-empty dirs (even `.claude/`) — scaffold manually if needed
- Google Fonts are preloaded in index.html — add new fonts there before referencing in data/fonts.js
- Card/component variants need distinct background contexts (glassmorphic needs gradient, neumorphic needs gray)
- `--app-border` must be dark enough to be visible in light mode — currently #c8ccd4
- Port 5173 may be in use — Vite auto-increments to 5174+
- Factual claims in educational content (colorScience.js, advisorData.js) have been fact-checked — when editing, verify claims against primary sources
- WCAG large text threshold is 18pt (24px), not 18px — a common error
- Color blindness prevalence: deuteranomaly (~5% males) vs deuteranopia (~1%) — don't conflate
- GitHub remote: https://github.com/flenny2/design-explorer

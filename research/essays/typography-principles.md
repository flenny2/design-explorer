---
topic: typography-principles
title: Typography Principles for Front-End Design
tags: [typography, type-anatomy, type-scale, measure, leading, kerning, hierarchy, font-pairing, web-fonts, variable-fonts, vertical-rhythm, readability]
sources:
  - { title: "Butterick's Practical Typography", url: "https://practicaltypography.com/", publisher: "Matthew Butterick" }
  - { title: "Thinking with Type", url: "https://thinkingwithtype.com/", publisher: "Ellen Lupton" }
  - { title: "Google Fonts Knowledge", url: "https://fonts.google.com/knowledge", publisher: "Google Fonts" }
  - { title: "Typewolf — Typography Guide", url: "https://www.typewolf.com/cheatsheet", publisher: "Typewolf" }
  - { title: "font-display (MDN)", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display", publisher: "MDN Web Docs" }
confidence: well-known
last_updated: 2026-07-07
---

## The anatomy of type

Type is described with a shared vocabulary of parts. Knowing these terms makes every
other decision (spacing, pairing, sizing) precise rather than vague.

- **Baseline** — the invisible line most letters sit on. It is the anchor for vertical
  alignment.
- **x-height** — the height of the lowercase "x," i.e., the body of lowercase letters
  without ascenders or descenders. A large x-height (relative to cap height) generally
  improves small-size and on-screen legibility; it is one of the single most important
  metrics when comparing fonts.
- **Cap height** — the height of a flat-topped capital (e.g., "H") from the baseline.
- **Ascender** — the part of a lowercase letter rising above the x-height (b, d, h, k, l).
- **Descender** — the part dropping below the baseline (g, j, p, q, y).
- **Counter** — the enclosed or partly enclosed negative space inside letters like "o,"
  "e," "a," "P."
- **Aperture** — the opening of a partly closed counter (the gap in "c," "e," "s," "a").
  Open apertures aid legibility at distance and small sizes (a reason Frutiger and Inter
  read well).
- **Stem** — the main vertical (or main) stroke of a letter.
- **Bowl** — the curved stroke enclosing a counter (as in "b," "d," "o").
- **Serif** — the small finishing stroke at the end of a main stroke; **sans-serif** faces
  omit these.
- **Terminal** — the end of a stroke that has no serif; can be flared (Optima), ball
  (Georgia, Bodoni), or sheared.
- **Stroke contrast** — the difference between thick and thin strokes. Low contrast reads
  as sturdy/neutral (Helvetica, Futura); high contrast reads as elegant/fragile
  (Didot, Bodoni).
- **Axis / stress** — the angle of the thin parts of curved strokes. Old-style faces have
  an angled (humanist) axis; modern (Didone) faces have a strict vertical axis.
- **Overshoot** — round and pointed glyphs (o, A, v) are drawn slightly taller/shorter than
  flat ones so they appear optically the same size.

Sources: Thinking with Type (Ellen Lupton); Google Fonts Knowledge — "Anatomy of a typeface."

## Type classification

A working front-end taxonomy — enough to reason about tone and pairing without needing the
full Vox-ATypI academic system:

- **Serif** subdivides by era:
  - *Old-style / Garalde* (Garamond, Caslon, Minion): low contrast, angled axis, warm.
  - *Transitional* (Baskerville, Times New Roman, Georgia): more contrast, near-vertical
    axis.
  - *Modern / Didone* (Bodoni, Didot, Playfair Display): extreme contrast, hairline serifs,
    vertical stress — elegant but fragile at small sizes.
- **Slab serif / Egyptian** (Clarendon, Rockwell, Courier): thick, block-like serifs.
  Bracketed slabs (Clarendon) feel sturdy-friendly; geometric slabs (Rockwell) feel
  industrial.
- **Sans-serif** subdivides by construction:
  - *Grotesque / neo-grotesque* (Akzidenz-Grotesk, Helvetica, Univers, Inter): neutral,
    even, mechanical.
  - *Geometric* (Futura, Avenir, Gotham, Montserrat): built from circles and straight
    lines; clean, modern, sometimes cold.
  - *Humanist* (Gill Sans, Frutiger, Optima, Open Sans): calligraphic proportions and
    open apertures; warm and highly legible.
- **Script** (Lobster, formal/casual connected faces): mimics handwriting or brush
  lettering; display use only.
- **Display / decorative** (Trajan, Cooper Black, Bebas Neue, Papyrus): designed for large
  sizes and personality, not body text.
- **Monospace** (Courier, JetBrains Mono, Fira Code, Cascadia Code): every glyph occupies
  the same width; essential for code alignment.

Rule of thumb: classification predicts *tone*. The further a face sits from neutral
grotesque, the more it "speaks," and the more sparingly it should be used.

Source: Typewolf typography guide; Thinking with Type.

## The modular type scale

Rather than picking font sizes arbitrarily, a **modular scale** multiplies a base size by a
constant **ratio** to generate a harmonious sequence — the same idea as musical intervals.

Common ratios (from a 16px base):

- **1.2 (minor third)** — subtle, good for dense UIs: 16 → 19.2 → 23 → 27.6 …
- **1.25 (major third)** — versatile, common default: 16 → 20 → 25 → 31.25 …
- **1.333 (perfect fourth)** — clear, editorial contrast: 16 → 21.3 → 28.4 → 37.9 …
- **1.414 (augmented fourth / √2)** — used in print/paper systems.
- **1.5 (perfect fifth)** — bold, dramatic jumps for marketing pages.
- **1.618 (golden ratio)** — largest common step; big display contrast.

Practical guidance: pick one ratio, round the results to sensible pixel/rem values, and
reuse them as design tokens (e.g., CSS custom properties `--fs-1 … --fs-6`). Larger ratios
suit landing pages with few sizes; smaller ratios suit information-dense apps with many
tiers. CSS `clamp()` lets a single size scale fluidly between viewport widths while staying
inside scale-derived min/max bounds.

Source: modularscale.com concept; Butterick's Practical Typography — "font size."

## Measure (line length)

**Measure** is the length of a line of text. The widely cited comfortable range is
**45–75 characters per line** (including spaces), with **66** often quoted as ideal for
single-column body text; **40–50** suits narrow/multi-column layouts.

- Too long (>80 chars): the eye struggles to find the start of the next line; reading
  fatigues.
- Too short (<40 chars): the eye returns too often, breaking rhythm and hyphenating badly.

On the web, set measure with `max-width` on the text container. A robust trick is the `ch`
unit: `max-width: 66ch` targets roughly 66 characters directly. Measure, font size, and
leading are interdependent — longer measures need more leading to keep lines trackable.

Source: Butterick's Practical Typography — "line length"; Thinking with Type.

## Leading (line-height)

**Leading** (rhymes with "sledding," from the strips of lead once inserted between metal
lines) is the vertical space between baselines; in CSS it is **`line-height`**.

- Body text on screen: roughly **1.4–1.6** (unitless) is a safe default; ~1.5 is a common
  baseline.
- Longer measures and larger x-heights need *more* leading; short measures and headings
  need *less*.
- Headlines and large display type usually want tight leading (1.0–1.2) because the letters
  are already visually dense.
- Prefer **unitless** `line-height` in CSS so it scales proportionally with inherited font
  sizes (a fixed px line-height fails when descendants change size).

Source: Butterick's Practical Typography — "line spacing"; MDN — line-height.

## Kerning and tracking

These two are frequently confused:

- **Kerning** — adjusting the space between *specific letter pairs* (e.g., "AV," "To,"
  "Wa") so the spacing looks optically even. High-quality fonts ship kerning tables; browsers
  apply them via `font-kerning`. It is a *pairwise* correction.
- **Tracking (letter-spacing)** — adjusting spacing *uniformly across a run* of text. In CSS
  this is `letter-spacing`.

Guidance: add slight positive tracking to **all-caps** and small-caps runs (capitals are
spaced for mixed-case by default and look cramped set solid). Add slight *negative* tracking
to very large headlines to tighten them. Never track lowercase body text loosely — it harms
readability. As the old maxim goes, letterspacing lowercase is a typographic sin.

Source: Butterick's Practical Typography — "letterspacing"; Thinking with Type.

## Hierarchy

**Hierarchy** is the visual ranking that tells a reader what to read first, second, and
third. It is created by contrast, not just size. Levers, roughly in order of strength:

1. **Size** — the bluntest and most obvious signal.
2. **Weight** — bold vs regular; often cleaner than size for creating a second tier.
3. **Color / value** — a muted gray for secondary text, full-contrast for primary.
4. **Space** — proximity and whitespace group and separate; often more elegant than size.
5. **Case & style** — all-caps labels, italics for asides, small caps for run-in heads.
6. **Position & alignment** — where something sits on the grid.

Best practice: establish **3–4 clear levels** (e.g., page title, section head, body,
caption) and reuse them consistently as tokens. Ambiguous hierarchy — two elements that look
almost but not quite the same — is worse than none. Change *one or two* attributes decisively
rather than nudging several a little.

Source: Thinking with Type; Google Fonts Knowledge — "hierarchy."

## Font pairing principles

Pairing fonts well is mostly about **contrast with a shared quality**:

- **Contrast, don't clash.** Pair fonts that differ clearly (a serif with a sans, or two
  distinctly different sans-serifs). Two fonts that are *similar but not identical* look like
  a mistake.
- **Share a mood or era.** Successful pairs usually agree on tone (both geometric-modern, or
  both warm-humanist) even while contrasting in structure.
- **The superfamily shortcut.** Families designed as Sans + Serif + Mono siblings (IBM Plex,
  Source Sans/Serif, Roboto/Roboto Slab, PT Sans/Serif) pair automatically because they share
  proportions and x-height. Lowest-risk option.
- **Match x-heights.** A serif and sans with similar x-heights sit together comfortably at
  the same point size.
- **Assign clear roles.** One face for display/headings, one for body. Don't let both
  compete.
- **Limit the count.** Two families is plenty for most sites; a third only for a specific,
  reasoned job (e.g., a mono for code). Use weights and sizes for variety instead of more
  families.
- **Pair a neutral with a personality.** A characterful display face reads best against a
  quiet, neutral body face (and vice versa).

Source: Typewolf — "How to choose and pair fonts"; Google Fonts Knowledge — "pairing."

## Font pairing recipes

Classic, safe combinations (heading + body). Each pairs contrast with a shared sensibility.

1. **Playfair Display + Source Sans** — high-contrast Didone display over a calm humanist
   sans; elegant editorial default.
2. **Helvetica (or Neue Haas Grotesk) + Georgia** — neutral grotesque headings, warm
   transitional serif body; timeless and highly legible.
3. **Montserrat + Merriweather** — geometric sans headline, screen-optimized serif body;
   a hugely popular free web pairing.
4. **Futura + Garamond** — geometric-modernist caps against a classical old-style serif;
   the "fashion editorial" look.
5. **Gill Sans + Sabon** — humanist British sans with a refined Garamond-based serif; warm
   and bookish.
6. **Inter + Georgia** — modern UI sans for interface chrome, serif for long-form reading.
7. **Bebas Neue + Roboto** — bold condensed all-caps posters over a neutral body; strong,
   contemporary marketing feel.
8. **IBM Plex Sans + IBM Plex Serif** — superfamily pairing; effortless harmony, technical
   tone.
9. **Lato + Merriweather** — friendly humanist sans with a sturdy reading serif; a reliable
   corporate/blog combo.
10. **Oswald / Bebas Neue + Open Sans** — tall condensed display headings with an open,
    neutral body sans.
11. **Baskerville + Univers (or Avenir)** — transitional serif headlines with a clean
    geometric/neo-grotesque sans body; classic-meets-modern.
12. **Proxima Nova + Freight/Georgia** — the quintessential 2010s startup pairing: geometric
    sans headings, serif body for warmth.
13. **Cooper Black + a plain grotesque (Helvetica/Arial)** — retro, friendly display heading
    disciplined by a neutral body.
14. **Roboto Slab + Roboto** — superfamily slab-and-sans pairing for a modern, sturdy tone.

Source: Typewolf font-pairing guides; Google Fonts Knowledge.

## Web font performance, FOUT and FOIT

Custom web fonts must download before they can render, creating a race between the fallback
and the web font. Two failure modes:

- **FOIT (Flash of Invisible Text)** — the browser hides text until the font loads. If the
  font is slow (or fails), users see *nothing* — the worst outcome for perceived performance
  and accessibility.
- **FOUT (Flash of Unstyled Text)** — the browser shows a fallback font immediately, then
  swaps to the web font when ready. Text is always readable; the tradeoff is a visible
  "reflow/flicker."

Controls and best practices:

- **`font-display`** in `@font-face` chooses the behavior: `swap` (favor FOUT — text visible
  immediately), `optional` (use the web font only if it's essentially instant; best for
  performance and avoids layout shift), `fallback` (brief block, short swap window), `block`
  (FOIT-like), `auto` (browser default).
- **`preload`** the critical font files (`<link rel="preload" as="font" crossorigin>`) so
  they start downloading early.
- **Subset** fonts to the characters/scripts you actually use to cut file size.
- Serve **WOFF2** (best compression) with WOFF as fallback.
- Choose fallback fonts with similar metrics, or use **`size-adjust`** / the `@font-face`
  metric overrides (`ascent-override`, etc.) to minimize the layout shift (CLS) when the web
  font swaps in.
- **Self-hosting** fonts (vs a third-party CDN) removes a cross-origin connection and can
  improve both performance and privacy.

Source: MDN — `font-display`; web.dev — "Best practices for fonts."

## Variable fonts

A **variable font** is a single font file that contains a continuous range of variation
along one or more **axes**, rather than shipping a separate file per weight/width/style.

- **Registered axes** have standard tags: `wght` (weight), `wdth` (width), `slnt` (slant),
  `ital` (italic), `opsz` (optical size). Fonts may also define **custom axes** (e.g.,
  grade, casual).
- In CSS, control them with `font-variation-settings` (low-level, e.g.
  `"wght" 480, "opsz" 28`) or, preferably, the high-level properties (`font-weight`,
  `font-stretch`, `font-optical-sizing`) when supported.
- **Benefits:** one file can replace many, cutting requests and bytes; any intermediate value
  is available (e.g., weight 437), enabling fine-tuned hierarchy and smooth animation.
- **`opsz` (optical size)** is especially valuable — it lets letterforms adapt detail and
  spacing to size automatically, echoing what metal type did with separate cuts (as SF Pro's
  Display/Text split does manually).
- Examples in the corpus: Inter, Roboto Flex, IBM Plex, and Segoe UI Variable ship variable
  versions.

Source: Google Fonts Knowledge — "Introduction to variable fonts"; MDN — variable fonts guide.

## Vertical rhythm

**Vertical rhythm** is the practice of aligning text and spacing to a consistent vertical
grid (a **baseline grid**), so successive lines and blocks fall on regular intervals — the
typographic equivalent of ruled paper.

- Pick a **base unit** (commonly the body `line-height`, e.g., 24px) and make margins,
  padding, and other line-heights **multiples** of it (or clean fractions).
- The payoff is a calm, orderly page where columns and elements align across the layout.
- Strict baseline alignment is hard to maintain perfectly on the web (variable content,
  images, differing font metrics), so treat it as a *guiding discipline* rather than an
  absolute: consistent, rhythmic spacing tokens (a spacing scale) capture most of the benefit
  without pixel-perfect baseline snapping.

Source: Thinking with Type; "Compose to a Vertical Rhythm" (24ways) concept.

## Readability vs legibility

These terms are often used interchangeably but describe different things:

- **Legibility** is a property of the *typeface* — how easily individual characters can be
  distinguished from one another (is the "I" distinct from "l" and "1"? are apertures open?).
  It is designed into the font (Frutiger, Georgia, Inter score high; many display faces score
  low by intent).
- **Readability** is a property of the *typesetting* — how easily a *passage* can be read.
  It depends on how you use the font: size, measure, leading, contrast, spacing, and
  hierarchy.

The practical implication: you can make a legible font unreadable (a great serif at 10px, in
light gray, on a 120-character line, with tight leading), and you can make a modest font
reasonably readable with good settings. Legibility is chosen once (font selection);
readability is earned continuously (every layout decision above). Optimize both, but most
front-end wins live in readability.

Source: Butterick's Practical Typography; Thinking with Type; Typewolf.

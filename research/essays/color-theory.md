---
topic: color-theory
title: Color Theory for Front-End Design
tags: [color, oklch, wcag, contrast, harmony, palette, dark-mode, gradients]
sources:
  - { title: "Understanding SC 1.4.3: Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum", publisher: "W3C WAI" }
  - { title: "Understanding SC 1.4.11: Non-text Contrast", url: "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html", publisher: "W3C WAI" }
  - { title: "OKLCH in CSS: why we moved from RGB and HSL", url: "https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl", publisher: "Evil Martians" }
  - { title: "Radix Colors — Scales", url: "https://www.radix-ui.com/colors/docs/palette-composition/scales", publisher: "Radix" }
  - { title: "Refactoring UI", url: "https://www.refactoringui.com/", publisher: "Adam Wathan & Steve Schoger" }
  - { title: "Material Design — The color system", url: "https://m2.material.io/design/color/the-color-system.html", publisher: "Google" }
confidence: well-known
last_updated: 2026-07-07
---

## Color models: RGB, HSL, HSB/HSV, CMYK, LAB, OKLCH

A color model is a way of describing a color numerically. Different models trade
off between how hardware works, how humans think, and how uniformly the numbers
map to perception.

- **RGB** — additive mixing of Red, Green, Blue light, the native model of
  screens. In CSS usually written as `#RRGGBB` hex or `rgb()`. Intuitive for
  hardware, unintuitive for humans: there is no single "make it lighter" knob.
- **HSL / HSB(HSV)** — cylindrical remappings of RGB into Hue (0–360°),
  Saturation, and Lightness (HSL) or Brightness/Value (HSV). Far easier to reason
  about than raw RGB, which is why HSL became the go-to for hand-tuned palettes.
  Its flaw: it is *not* perceptually uniform. Two HSL colors with the same L can
  look very different in brightness (yellow at L=50% looks much lighter than blue
  at L=50%).
- **CMYK** — subtractive Cyan, Magenta, Yellow, Key(black) for print inks. A
  smaller gamut than screen RGB; relevant when a design must be printed, not for
  on-screen work.
- **LAB (CIELAB)** — a device-independent model designed around human vision, with
  L for lightness and a/b for color axes. Distances in LAB approximate perceived
  color difference, which is why serious palette tools compute in LAB-family
  spaces rather than RGB.
- **OKLCH** — a modern, perceptually-uniform model (a cylindrical form of the OKLab
  space) with **L**ightness, **C**hroma, and **H**ue. Now a first-class CSS color
  function: `oklch(70% 0.15 250)`.

### Why OKLCH matters for UI

The practical payoff of perceptual uniformity: **equal L means equal perceived
brightness**, regardless of hue. That fixes the everyday problems of HSL. If you
build a palette by holding L constant and rotating hue, every color reads as the
same brightness — so buttons, tags, and chart series feel balanced. Generating a
tint/shade ramp by stepping L gives evenly-spaced steps instead of the bunched-up,
muddy middles you get in HSL. OKLCH also addresses wide-gamut Display-P3 screens,
which sRGB hex cannot reach, and its predictable lightness makes hitting contrast
targets far more reliable. (Evil Martians, "OKLCH in CSS: why we moved from RGB
and HSL".)

## The color wheel and harmonies

The color wheel arranges hues in a circle; harmonies are recipes based on angular
relationships. They are starting points, not laws.

- **Complementary** — two hues opposite each other (~180° apart), e.g. blue/orange.
  Maximum contrast and vibrancy; use one as dominant and the other as a small
  accent to avoid vibration.
- **Analogous** — 2–4 hues adjacent on the wheel (~30° apart). Calm, cohesive;
  common for serene or natural palettes. Pick one to dominate.
- **Triadic** — three hues evenly spaced (~120° apart). Vibrant and balanced;
  again let one lead.
- **Tetradic (double-complementary)** — two complementary pairs (a rectangle on
  the wheel). Rich but hard to balance; usually one dominates and the rest support.
- **Split-complementary** — a base hue plus the two hues adjacent to its
  complement. Keeps strong contrast but is more forgiving than pure complementary.
- **Monochromatic** — a single hue varied by lightness and saturation. Safe,
  elegant, and the backbone of most UI neutral/primary ramps.

## Warm vs cool

Hues are loosely grouped into **warm** (reds, oranges, yellows) and **cool**
(blues, greens, violets). Warm colors tend to feel active and appear to advance
toward the viewer; cool colors tend to feel calm and recede. This is a perceptual
tendency useful for depth and emphasis (a warm accent on a cool UI pops), not a
strict rule — temperature is relative and depends on neighboring colors.

## Tints, shades, tones — and saturation vs value

Starting from a pure hue:

- **Tint** = hue + white (lighter, often less saturated).
- **Shade** = hue + black (darker).
- **Tone** = hue + gray (muted; reduced saturation at similar lightness).

Two independent controls drive this:

- **Saturation (chroma)** — how pure/intense the color is, from gray to fully
  vivid.
- **Value / brightness (lightness)** — how light or dark it is.

Understanding these as separate axes is what lets you build a coherent ramp:
typically you vary lightness the most, pull saturation *down* at the very light and
very dark ends (fully-saturated near-black or near-white looks artificial), and
keep hue roughly constant.

## Color psychology (with a caveat)

Colors carry associations — blue with trust/calm, red with urgency/passion, green
with growth/success, yellow with optimism/caution, black with luxury/formality.
These are genuinely useful for setting tone, but the associations are **culturally
contingent and context-dependent**, not universal. White signals purity in much of
the West but mourning in parts of East Asia; red means danger in one context and
prosperity/luck in another. Treat psychology as a soft input informed by your
specific audience, not a deterministic rule.

## The 60-30-10 rule

A practical proportion for balancing a palette: roughly **60%** a dominant
(usually neutral) color, **30%** a secondary color, and **10%** an accent. Applied
to UI, that often maps to a neutral background dominating, a supporting color for
large secondary surfaces, and a saturated accent reserved for the primary action.
The point isn't the exact numbers — it's that one color should dominate, one
support, and one punctuate, so nothing fights for attention.

## WCAG contrast ratios

The Web Content Accessibility Guidelines set minimum text-contrast ratios so
content is readable. Success Criterion **1.4.3 (Contrast, Minimum, Level AA)**
requires:

- **4.5:1** for normal text.
- **3:1** for **large text**, where large text is defined as **18pt (≈24px), or
  14pt bold (≈18.66px) and larger**. (This is a commonly-botched fact — the
  threshold is 18*pt* = 24px, not 18px.)

Success Criterion **1.4.11 (Non-text Contrast, Level AA)** additionally requires
**3:1** for user-interface components and meaningful graphics — things like input
borders, icons, and focus indicators — so controls remain perceivable even when
they contain no text.

Level AAA (1.4.6) raises the bar to **7:1** normal / **4.5:1** large. Contrast
ratio ranges from 1:1 (identical) to 21:1 (pure black on pure white). Verify with
a tool such as the WebAIM Contrast Checker rather than eyeballing. (W3C WAI,
Understanding SC 1.4.3 and 1.4.11.)

## Building a UI color system

A production UI palette is organized by role, not by "favorite colors":

- **Neutral / gray scale** — the workhorse. Backgrounds, surfaces, borders, and
  most text come from a neutral ramp (often subtly tinted toward the brand hue).
- **Primary / brand** — the signature color, used sparingly for primary actions
  and key emphasis.
- **Accent / secondary** — supporting colors for highlights and secondary actions.
- **Semantic** — fixed meanings: success (green), warning (amber/yellow), error
  (red), info (blue). Keep these consistent app-wide.

Each role is expressed as a **tint ramp** — commonly **9 to 11 steps** (e.g.
Tailwind's 50–950, Material's 50–900, or Radix's role-mapped 12-step scales).
Steps are assigned to jobs rather than picked ad hoc: light steps for backgrounds
and hover fills, mid steps for borders, the saturated middle steps for solid
fills/buttons, and the darkest steps for accessible text. Radix formalizes this:
steps 1–2 backgrounds, 3–5 component fills, 6–8 borders, 9–10 solid colors, 11–12
text. (Radix Colors — Scales; Refactoring UI.) Generating these ramps in OKLCH (or
a LAB-based tool) gives perceptually even steps and predictable contrast.

## Dark mode color considerations

Dark mode is not "invert the light theme." Key adjustments:

- **Avoid pure black backgrounds.** Use a very dark gray (e.g. `#121212`-ish); pure
  black plus pure white maximizes contrast to a harsh, vibrating extreme and makes
  shadows/elevation impossible to show.
- **Don't use pure-saturated colors on dark surfaces.** Highly saturated hues
  "vibrate" and strain the eye against dark backgrounds; desaturate and lighten
  brand colors for dark themes.
- **Re-check contrast, both directions.** A color that passes on white can fail on
  dark, and light text on dark needs its own verification.
- **Convey elevation with lighter surfaces, not just shadows.** In dark UIs, closer
  surfaces are typically *lighter* gray rather than casting stronger shadows.
- **Provide separate semantic values** for dark mode so success/warning/error stay
  legible. Perceptual models (OKLCH) make deriving a matched dark ramp much easier.

## Gradients

Gradients blend between two or more colors. CSS supports several types:

- **Linear** — colors transition along a straight axis at a given angle
  (`linear-gradient(90deg, ...)`). The default workhorse for backgrounds and
  buttons.
- **Radial** — colors radiate outward from a center point in circles/ellipses
  (`radial-gradient(...)`). Good for spotlight/glow effects.
- **Conic** — colors sweep around a center point by angle
  (`conic-gradient(...)`). Used for pie/donut charts and color wheels.
- **Mesh gradients** — multiple color points blended across a 2D surface for soft,
  organic, multi-directional blends. Not a single native CSS primitive (typically
  produced with layered radial gradients, SVG, or a generator), but a dominant
  modern aesthetic.

Two craft notes: (1) blending through an intermediate hue can create a muddy "gray
dead zone" — interpolating in a perceptual space (CSS supports
`in oklch` / `in oklab` interpolation) avoids it and keeps the midpoint vivid; and
(2) keep gradient endpoints close in hue and lightness for subtle, professional
results, or push them apart deliberately for bold, expressive ones.

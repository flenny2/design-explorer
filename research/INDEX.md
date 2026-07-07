# Front-End Design Research Corpus

> Machine-first knowledge base for front-end & visual design. Contract: `SCHEMA.md`. Machine routing table: `manifest.json`.

**538 sourced entries** across **15 datasets** + **3 theory essays**. All entries carry a `confidence` mark; 0 remain `needs-check`.

## Datasets (`data/*.json`)

| File | Title | Entries | Sources | Needs-check |
|------|-------|--------:|--------:|------------:|
| `accessibility.json` | Web Accessibility (WCAG, ARIA & Assistive Tech) | 29 | 36 | 0 |
| `books-and-reading.json` | Canonical Design, UX, Typography & Front-End Reading | 26 | 30 | 0 |
| `color-tools.json` | Color Tools & Resources for Designers and Developers | 22 | 25 | 0 |
| `design-laws.json` | Design Laws, UX Principles & Heuristics | 46 | 51 | 0 |
| `design-movements.json` | Design Movements, Styles, and Eras | 29 | 38 | 0 |
| `design-systems.json` | Major Design Systems and UI Component Libraries | 34 | 67 | 0 |
| `iconic-palettes.json` | Iconic Brand Palettes & Classic Color Schemes | 35 | 47 | 0 |
| `iconic-websites.json` | Iconic, Landmark & Award-Winning Websites and Product UIs | 50 | 78 | 0 |
| `influential-designers.json` | Influential Designers, Typographers & Design Studios | 45 | 90 | 0 |
| `inspiration-galleries.json` | Design Inspiration Galleries & Award Sites | 29 | 29 | 0 |
| `layout-patterns.json` | Reusable Front-End Layout & Page Patterns | 41 | 45 | 0 |
| `motion-interaction.json` | Motion & Interaction Design Principles | 23 | 41 | 0 |
| `tools.json` | Design & Front-End Tools | 37 | 41 | 0 |
| `typefaces.json` | Iconic and Important Typefaces | 47 | 63 | 0 |
| `ui-components.json` | Standard UI Components & Design Best Practices | 45 | 59 | 0 |
| **TOTAL** | | **538** | **740** | **0** |

## Theory essays (`essays/*.md`)

| File | Title | Sections |
|------|-------|---------:|
| `color-theory.md` | Color Theory for Front-End Design | 10 |
| `layout-and-grids.md` | Layout & Grid Systems for the Web | 18 |
| `typography-principles.md` | Typography Principles for Front-End Design | 13 |

## How to use this corpus

- Each `data/*.json` = `{topic,title,description,count,entries[]}`; every entry has `id,name,category,tags,summary,significance,key_facts[],sources[],confidence` (+ optional `org,creator,year,era,defining_traits,examples,url,related`).
- **Trust filter:** `confidence` = `verified` (checked against a cited source) / `well-known` (canonical general knowledge, real URL) / `needs-check` (re-verify first).
- **Cross-links:** entry `related` fields hold `id`s (may point into other files).

## Verification log (2026-07-07)

All 33 previously-flagged `needs-check` items were verified via web search. Four factual corrections were applied:
- `iconic-websites/persepolis-reimagined`: was mislabeled an Awwwards *Site of the Year* winner → it is Awwwards *Site of the Day*, by **Media.Monks** for the **Getty Villa**.
- `iconic-websites/bloomberg-businessweek`: removed unsupported Awwwards claim → reframed around the **Richard Turley** Businessweek redesign (2010–14).
- `iconic-websites/simply-chocolate`: corrected award tier → Awwwards **E-Commerce** Site of the Year 2017 + CSSDA 2017.
- `iconic-websites/minh-pham-portfolio`: fixed a wrong source URL (pointed at a different designer) → `minhpham.design`, Awwwards SOTD + Honorable Mention.

_No `needs-check` items remain._


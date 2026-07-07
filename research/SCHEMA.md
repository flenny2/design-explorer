# Research Corpus Schema (v1.0)

This directory (`research/`) is a **machine-first knowledge base** on front-end &
visual design. It is written to be parsed and navigated by an AI model in a future
session, and secondarily read by humans. Every dataset follows the contract below so
files are mergeable, queryable, and self-describing.

## Layout

```
research/
  SCHEMA.md          <- this file (the contract)
  INDEX.md           <- human-readable table of contents
  manifest.json      <- machine routing table (generated after data files exist)
  data/*.json        <- enumerable datasets (records with identical fields)
  essays/*.md        <- prose-heavy theory with YAML frontmatter
```

## Dataset file format (`data/*.json`)

Each JSON file is one object:

```jsonc
{
  "topic": "design-systems",          // kebab-case, matches filename stem
  "title": "Major Design Systems",
  "description": "One sentence on what this dataset covers.",
  "schema_version": "1.0",
  "count": 27,                          // MUST equal entries.length
  "last_updated": "2026-07-07",
  "entries": [ /* Entry objects, see below */ ]
}
```

### Entry object

Required fields in **every** entry. Optional/topic-specific fields may be added but
keep names consistent across files (reuse the vocabulary below before inventing new keys).

```jsonc
{
  "id": "material-design",             // REQUIRED. stable, unique-in-file, kebab-case
  "name": "Material Design",           // REQUIRED. human display name
  "category": "design-system",         // REQUIRED. coarse type (see per-file docs)
  "tags": ["google", "mobile", "web"], // REQUIRED. lowercase keywords for filtering
  "summary": "1-2 factual sentences.", // REQUIRED. what it IS, neutrally
  "significance": "Why it matters / its influence.", // REQUIRED
  "key_facts": ["fact", "fact"],       // REQUIRED. array of atomic, checkable facts
  "sources": [                          // REQUIRED. >=1 real, resolvable URL
    { "title": "...", "url": "https://...", "publisher": "...", "accessed": "2026-07-07" }
  ],
  "confidence": "verified",            // REQUIRED. see scale below

  // Common OPTIONAL fields — use whichever fit the topic:
  "org": "Google",                     // owning company/person/foundry
  "creator": "Person or team",
  "year": 2014,                         // single year (int)
  "year_introduced": 2014,
  "era": "2010s",                       // decade or movement label
  "defining_traits": ["elevation", "bold color"],
  "examples": ["Gmail", "Android"],    // concrete real-world instances
  "url": "https://m3.material.io",     // canonical homepage/spec
  "related": ["fluent-design"]         // ids of related entries (any file)
}
```

### `confidence` scale
- `verified` — confirmed this session against a cited primary/authoritative source.
- `well-known` — established, widely-documented fact from general knowledge; source is canonical but not deeply re-checked.
- `needs-check` — plausible but unverified; a future pass should confirm. Never leave a claim unmarked if uncertain.

## Essay file format (`essays/*.md`)

Markdown with YAML frontmatter:

```markdown
---
topic: design-principles
title: Core Visual Design Principles
tags: [hierarchy, contrast, gestalt]
sources:
  - { title: "...", url: "https://...", publisher: "..." }
confidence: well-known
last_updated: 2026-07-07
---

## Section (use ## headings, one concept each)
Prose...
```

## Rules for contributors (human or agent)
1. **Never fabricate a URL.** Every source must be a real page you found via search/fetch. If you can't source a claim, mark it `needs-check` and say so in `key_facts`.
2. **Facts must be atomic and checkable** — "Helvetica was designed in 1957 by Max Miedinger" not "Helvetica is iconic."
3. **Prefer volume of *distinct* entries** over padding one entry. This corpus optimizes for breadth + sourcing.
4. **Reuse `id`s across files** to cross-link via `related`.
5. `count` must equal `entries.length`. Valid JSON only (no trailing commas, no comments in the real files).

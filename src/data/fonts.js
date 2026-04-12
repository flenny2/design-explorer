export const fontFamilies = [
  { value: "'Inter', sans-serif", label: 'Inter' },
  { value: "'Roboto', sans-serif", label: 'Roboto' },
  { value: "'DM Sans', sans-serif", label: 'DM Sans' },
  { value: "'Montserrat', sans-serif", label: 'Montserrat' },
  { value: "'Space Grotesk', sans-serif", label: 'Space Grotesk' },
  { value: "'Playfair Display', serif", label: 'Playfair Display' },
  { value: "'Merriweather', serif", label: 'Merriweather' },
  { value: "'Lora', serif", label: 'Lora' },
  { value: "'Source Serif 4', serif", label: 'Source Serif 4' },
  { value: "'Fraunces', serif", label: 'Fraunces' },
  { value: "'Fira Code', monospace", label: 'Fira Code' },
  { value: "'JetBrains Mono', monospace", label: 'JetBrains Mono' },
  { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', label: 'System UI' },
  { value: 'Georgia, serif', label: 'Georgia' },
  { value: '"Courier New", monospace', label: 'Courier New' },
]

export const fontPairings = [
  {
    name: 'Classic Editorial',
    heading: "'Playfair Display', serif",
    body: "'Source Serif 4', serif",
    description: 'Elegant serif pairing. Playfair brings drama to headlines while Source Serif keeps body text readable.',
  },
  {
    name: 'Modern Clean',
    heading: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    description: 'Geometric heading meets neutral body. Space Grotesk adds personality without sacrificing clarity.',
  },
  {
    name: 'Tech Forward',
    heading: "'DM Sans', sans-serif",
    body: "'Inter', sans-serif",
    description: 'Two clean sans-serifs that feel technical and precise. DM Sans is slightly more distinctive for headings.',
  },
  {
    name: 'Warm & Inviting',
    heading: "'Fraunces', serif",
    body: "'DM Sans', sans-serif",
    description: 'Soft, friendly serif heading with a clean sans-serif body. Great for lifestyle and creative brands.',
  },
  {
    name: 'Bold Statement',
    heading: "'Montserrat', sans-serif",
    body: "'Merriweather', serif",
    description: 'Strong geometric heading contrasts with a traditional serif body. High visual contrast between elements.',
  },
  {
    name: 'Developer Docs',
    heading: "'Space Grotesk', sans-serif",
    body: "'JetBrains Mono', monospace",
    description: 'Clean heading with monospaced body. Perfect for technical documentation and code-heavy content.',
  },
  {
    name: 'Elegant Contrast',
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
    description: 'Maximum serif/sans-serif contrast. The ornate heading makes clean body text feel even more readable.',
  },
  {
    name: 'Humanist Mix',
    heading: "'Lora', serif",
    body: "'Roboto', sans-serif",
    description: 'Warm calligraphic serif with a friendly sans-serif. Approachable and professional.',
  },

  // ── New Pairings ──────────────────────────────────────

  {
    name: 'Scandinavian Minimal',
    heading: "'DM Sans', sans-serif",
    body: "'Inter', sans-serif",
    description: 'Nordic-inspired simplicity. Two geometric sans-serifs that feel clean, contemporary, and unpretentious.',
  },
  {
    name: 'Luxury Brand',
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
    description: 'High-contrast elegance. The ornate Playfair headline creates drama that Montserrat\'s clean geometry anchors.',
  },
  {
    name: 'Startup Fresh',
    heading: "'Space Grotesk', sans-serif",
    body: "'DM Sans', sans-serif",
    description: 'Forward-thinking and energetic. Space Grotesk\'s geometric character leads, DM Sans keeps body copy grounded.',
  },
  {
    name: 'Academic',
    heading: "'Source Serif 4', serif",
    body: "'Inter', sans-serif",
    description: 'Scholarly authority meets modern readability. Source Serif carries intellectual weight while Inter stays effortless.',
  },
  {
    name: 'Rich Editorial',
    heading: "'Fraunces', serif",
    body: "'Lora', serif",
    description: 'Double-serif richness. Fraunces brings personality to headlines while Lora provides graceful long-form reading.',
  },
  {
    name: 'Creative Portfolio',
    heading: "'Montserrat', sans-serif",
    body: "'Lora', serif",
    description: 'Bold geometric headlines with refined serif body. The contrast between structural and flowing creates visual energy.',
  },
  {
    name: 'News & Media',
    heading: "'Merriweather', serif",
    body: "'Roboto', sans-serif",
    description: 'Classic newsroom combination. Merriweather\'s authoritative headline presence meets Roboto\'s neutral readability.',
  },
  {
    name: 'Monospace Stack',
    heading: "'JetBrains Mono', monospace",
    body: "'Fira Code', monospace",
    description: 'Full monospace for developer-focused interfaces. JetBrains Mono headlines with Fira Code body — pure code aesthetic.',
  },
]

export const typeScale = [
  { name: 'Display', size: '3.5rem', weight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', tag: 'h1' },
  { name: 'H1', size: '2.5rem', weight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', tag: 'h1' },
  { name: 'H2', size: '2rem', weight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', tag: 'h2' },
  { name: 'H3', size: '1.5rem', weight: 600, lineHeight: 1.3, letterSpacing: '-0.01em', tag: 'h3' },
  { name: 'H4', size: '1.25rem', weight: 600, lineHeight: 1.4, letterSpacing: '0', tag: 'h4' },
  { name: 'Body Large', size: '1.125rem', weight: 400, lineHeight: 1.6, letterSpacing: '0', tag: 'p' },
  { name: 'Body', size: '1rem', weight: 400, lineHeight: 1.6, letterSpacing: '0', tag: 'p' },
  { name: 'Body Small', size: '0.875rem', weight: 400, lineHeight: 1.5, letterSpacing: '0.01em', tag: 'p' },
  { name: 'Caption', size: '0.75rem', weight: 500, lineHeight: 1.4, letterSpacing: '0.03em', tag: 'span' },
  { name: 'Overline', size: '0.7rem', weight: 600, lineHeight: 1.4, letterSpacing: '0.1em', tag: 'span' },
]

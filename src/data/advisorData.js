export const appTypes = [
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Single-page marketing site focused on conversion — hero, features, social proof, and a clear call-to-action.',
    layoutAdvice: 'Stacked full-width sections with a dominant hero',
    layoutReason: 'Landing pages guide the eye top-to-bottom through a narrative arc. Each section is one beat: hook, explain, prove, close. Full-width sections create natural reading breaks that prevent scroll fatigue.',
    density: 'Low — generous whitespace',
    densityReason: 'Every element competes for attention. Fewer elements means clearer messaging. Research shows landing pages with a single CTA convert 266% more than those with multiple competing actions.',
    components: ['hero section', 'feature grid', 'testimonials', 'pricing table', 'CTA buttons'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Product catalog with filtering, detailed product pages, cart, and checkout flow.',
    layoutAdvice: 'Grid-based product layout with sidebar filters',
    layoutReason: 'Shoppers browse visually. A product grid lets them scan 12-24 items at once, while persistent sidebar filters narrow results without losing context. The grid should be 3-4 columns — enough variety without overwhelm.',
    density: 'Medium — balanced product density',
    densityReason: 'Too few products per page feels sparse and untrustworthy. Too many causes decision paralysis. The sweet spot is 12-24 visible products with clear visual hierarchy between featured and standard items.',
    components: ['product cards', 'filter sidebar', 'search bar', 'breadcrumbs', 'cart widget', 'star ratings'],
  },
  {
    id: 'blog',
    name: 'Blog / Magazine',
    description: 'Content-driven site emphasizing readability, article discovery, and long-form engagement.',
    layoutAdvice: 'Centered content column with optional sidebar',
    layoutReason: 'Reading comfort demands a 60-75 character line length (about 600-720px). A centered column with generous margins achieves this naturally. The sidebar provides discovery without interrupting the reading flow.',
    density: 'Low to medium — readability first',
    densityReason: 'Long-form content needs breathing room. Generous line-height (1.6-1.8), paragraph spacing, and pull quotes break up walls of text and meaningfully improve reading comprehension compared to dense layouts.',
    components: ['article cards', 'reading progress bar', 'author bio', 'related posts', 'newsletter signup'],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Personal showcase for creative work — projects, case studies, and about/contact sections.',
    layoutAdvice: 'Gallery grid with full-screen project details',
    layoutReason: 'Portfolios are visual-first. A masonry or uniform grid lets work speak for itself. Project detail pages should be immersive — full-width images with minimal chrome. The navigation should disappear when viewing work.',
    density: 'Very low — let the work breathe',
    densityReason: 'A portfolio is curated, not comprehensive. Showing 6-12 best projects beats showing 50 mediocre ones. Each piece needs space to make an impression before the viewer moves on.',
    components: ['project cards', 'image gallery', 'case study layout', 'contact form', 'skills list'],
  },
  {
    id: 'saas',
    name: 'SaaS Dashboard',
    description: 'Data-rich application interface with navigation, data visualization, and workflow tools.',
    layoutAdvice: 'Sidebar navigation with header and content panels',
    layoutReason: 'Dashboards have deep navigation hierarchies. A persistent sidebar provides constant wayfinding — users always know where they are and can jump anywhere. The main content area should be flexible enough for tables, charts, and forms.',
    density: 'High — information-dense but organized',
    densityReason: 'Power users expect density. The key is organized density: clear visual grouping, consistent spacing, and strong typographic hierarchy so the eye can parse sections quickly despite the volume of information.',
    components: ['sidebar nav', 'data cards', 'charts', 'tables', 'form inputs', 'notification badges'],
  },
  {
    id: 'social',
    name: 'Social Platform',
    description: 'User-generated content feed with profiles, interactions, messaging, and engagement features.',
    layoutAdvice: 'Single-column feed with floating actions',
    layoutReason: 'Feed-based interfaces work best in a single column because content widths vary (text, images, videos). A centered feed with consistent card widths creates a predictable scroll rhythm. Floating action buttons keep creation always accessible.',
    density: 'Medium — scannable feed',
    densityReason: 'Social feeds need to balance engagement with scanability. Each post should be self-contained with clear boundaries. Enough density to feel active and alive, but enough spacing that individual posts register.',
    components: ['post cards', 'avatar badges', 'reaction buttons', 'comment threads', 'story bubbles', 'messaging'],
  },
  {
    id: 'docs',
    name: 'Documentation',
    description: 'Technical reference with search, navigation hierarchy, code examples, and version switching.',
    layoutAdvice: 'Three-column: sidebar nav, content, table of contents',
    layoutReason: 'Documentation users need three things simultaneously: where they are in the hierarchy (left sidebar), the content itself (center), and what is on the current page (right TOC). This three-pane layout is the industry standard because it solves all three at once.',
    density: 'Medium — scannable with deep detail on demand',
    densityReason: 'Docs are reference material, not leisure reading. Users scan for specific information. Short paragraphs, code blocks, tables, and collapsible sections let them find answers fast without reading linearly.',
    components: ['sidebar tree', 'code blocks', 'search bar', 'breadcrumbs', 'version selector', 'copy buttons'],
  },
  {
    id: 'corporate',
    name: 'Corporate / Enterprise',
    description: 'Company website communicating trust, professionalism, and services to business clients.',
    layoutAdvice: 'Structured sections with clear information hierarchy',
    layoutReason: 'Corporate sites serve multiple audiences (clients, investors, job seekers). Structured sections with clear headings act as signposts. The layout should feel organized and predictable — surprises undermine trust in a business context.',
    density: 'Low to medium — professional spacing',
    densityReason: 'Whitespace communicates premium quality. Corporate sites with generous spacing are perceived as more trustworthy. The content should feel curated and deliberate, not crammed.',
    components: ['hero banner', 'service cards', 'team grid', 'testimonials', 'contact form', 'stats counters'],
  },
  {
    id: 'agency',
    name: 'Creative Agency',
    description: 'Portfolio and services site for a design, marketing, or development agency — showcasing capability and culture.',
    layoutAdvice: 'Bold, asymmetric layouts with scroll-driven reveals',
    layoutReason: 'An agency site IS the portfolio. The layout itself demonstrates design capability. Asymmetric grids, unexpected scroll behaviors, and bold type choices show clients what the agency can do before they even read the copy.',
    density: 'Low — theatrical spacing',
    densityReason: 'Agency sites are performances, not information dumps. Each section should feel like a scene change. Dramatic spacing between elements creates anticipation and makes each piece of content feel important.',
    components: ['full-screen hero', 'case studies', 'team photos', 'client logos', 'process timeline', 'contact CTA'],
  },
  {
    id: 'restaurant',
    name: 'Restaurant / Food',
    description: 'Menu, location, hours, reservations, and food photography for a dining establishment.',
    layoutAdvice: 'Image-forward with clear practical information',
    layoutReason: 'Restaurant sites serve two user intents: "does this look good?" (photos) and "can I go there?" (hours, location, menu, reservations). The layout must satisfy both — visual appetite appeal up top, practical details readily accessible.',
    density: 'Low — appetite appeal through space',
    densityReason: 'Food photography needs room to breathe. Cramped layouts make food look cheap. White space around dish photos increases perceived quality and appetite appeal — the same principle used in high-end menu design.',
    components: ['hero with food photo', 'menu sections', 'reservation form', 'location map', 'hours display', 'gallery'],
  },
  {
    id: 'fitness',
    name: 'Fitness / Health',
    description: 'Gym, wellness app, or health service — schedules, programs, progress tracking, community.',
    layoutAdvice: 'Card-based with strong visual motivation',
    layoutReason: 'Fitness interfaces need to motivate action. Card-based layouts with progress indicators, countdown timers, and achievement badges create a game-like feel that drives engagement. The layout should make starting a workout feel as easy as tapping a card.',
    density: 'Medium — energetic but not overwhelming',
    densityReason: 'Fitness users want quick access to their routine. Information density should feel energetic and actionable, not cluttered. Bold typography and high-contrast CTAs create urgency without anxiety.',
    components: ['workout cards', 'progress rings', 'schedule grid', 'trainer profiles', 'achievement badges', 'timer'],
  },
  {
    id: 'education',
    name: 'Education Platform',
    description: 'Course catalog, lesson player, quizzes, progress tracking, and student community.',
    layoutAdvice: 'Progressive disclosure with clear learning paths',
    layoutReason: 'Education platforms must reduce cognitive load. Progressive disclosure — showing only the current lesson with a sidebar showing progress — prevents overwhelm. The layout should feel like a guided path, not a firehose of information.',
    density: 'Low to medium — learning-optimized',
    densityReason: 'Learning requires focus. The content area should feel calm and distraction-free when a student is in a lesson, but richer and more browsable in the course catalog. Two density modes for two contexts.',
    components: ['course cards', 'lesson player', 'progress bar', 'quiz interface', 'discussion board', 'certificates'],
  },
  {
    id: 'finance',
    name: 'Finance / Fintech',
    description: 'Banking, investment, or financial tools — accounts, transactions, charts, and secure workflows.',
    layoutAdvice: 'Clean dashboard with tabular data and charts',
    layoutReason: 'Financial interfaces handle sensitive data. The layout must communicate precision and security. Clean grids, aligned numbers, and consistent formatting reduce errors. Charts should have ample space for labels and legends.',
    density: 'High — precise and organized',
    densityReason: 'Financial users need detail. Account balances, transaction histories, and portfolio breakdowns require density — but every number must be instantly parseable. Consistent alignment and monospaced numbers are non-negotiable.',
    components: ['account cards', 'transaction tables', 'charts', 'transfer forms', 'security badges', 'alerts'],
  },
  {
    id: 'news',
    name: 'News / Media',
    description: 'Breaking news, articles, categories, multimedia content, and real-time updates.',
    layoutAdvice: 'Hierarchical grid with featured story prominence',
    layoutReason: 'News sites must communicate editorial hierarchy at a glance. The most important story gets the most space. A 2:1 or 3:1 featured-to-secondary ratio instantly tells readers what matters most right now.',
    density: 'High — maximum content above the fold',
    densityReason: 'News readers scan headlines. Density above the fold is critical because each visible headline is a potential click. But density must be organized with clear visual hierarchy — not every headline can shout equally.',
    components: ['featured article', 'headline grid', 'category tabs', 'breaking banner', 'video player', 'sidebar trending'],
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    description: 'Touch-first application — bottom navigation, gesture-driven, thumb-zone optimized.',
    layoutAdvice: 'Bottom navigation with card-based content',
    layoutReason: 'Mobile apps live in the thumb zone. Bottom navigation keeps primary actions within easy reach. Card-based content creates natural tap targets. The layout should assume one-handed use and favor vertical scrolling over horizontal complexity.',
    density: 'Low — touch-target optimized',
    densityReason: 'Touch targets need at least 44pt (Apple) or 48dp (Material Design). This naturally limits density. Mobile density should feel spacious and confident, with each element clearly tappable. Cramped mobile interfaces cause mis-taps and frustration.',
    components: ['bottom tab bar', 'content cards', 'pull-to-refresh', 'floating action button', 'swipe actions', 'bottom sheet'],
  },
]

export const vibes = [
  {
    id: 'minimal',
    name: 'Minimal & Clean',
    description: 'Whitespace-driven, understated typography, and barely-there UI elements. Content is the decoration.',
    palette: {
      colors: ['#111111', '#555555', '#888888', '#e5e5e5', '#ffffff'],
      name: 'Near-Monochrome',
      reason: 'Minimal design restricts the palette to near-blacks, whites, and one muted gray range. This forces hierarchy through spacing and typography rather than color — which is the whole point of minimalism.',
    },
    typography: {
      heading: "'Inter', sans-serif",
      headingName: 'Inter',
      body: "'Inter', sans-serif",
      bodyName: 'Inter',
      reason: 'Same font at different weights creates cohesion. Inter is invisible in the best way — it never calls attention to itself, letting content dominate.',
    },
    radius: '2px',
    radiusReason: 'Barely-there radius avoids the harshness of sharp corners without introducing any playfulness.',
    shadow: 'none',
    shadowReason: 'No shadows. Minimal design achieves separation through spacing alone. Shadows add visual weight that contradicts the ethos.',
    transition: 'all 0.15s ease',
  },
  {
    id: 'bold',
    name: 'Bold & Expressive',
    description: 'Large type, saturated colors, high contrast, and confident visual statements. Designed to be noticed.',
    palette: {
      colors: ['#1a1a2e', '#e63946', '#457b9d', '#f1faee', '#a8dadc'],
      name: 'High-Contrast Accent',
      reason: 'Bold design needs one color that dominates (the red) against a dark backdrop. The contrasting blue-teal provides balance, and light neutrals give the eye places to rest between intense moments.',
    },
    typography: {
      heading: "'Montserrat', sans-serif",
      headingName: 'Montserrat',
      body: "'Inter', sans-serif",
      bodyName: 'Inter',
      reason: 'Montserrat at heavy weights feels architectural and commanding. Paired with Inter at normal weight, the contrast between heading and body creates dramatic visual hierarchy.',
    },
    radius: '8px',
    radiusReason: 'Enough radius to feel modern and approachable, not so much that it softens the boldness.',
    shadow: '0 4px 12px rgba(0,0,0,0.15)',
    shadowReason: 'Medium-depth shadows add dimensionality that supports the bold aesthetic. Elements should feel like they have physical presence.',
    transition: 'all 0.2s ease',
  },
  {
    id: 'warm',
    name: 'Warm & Friendly',
    description: 'Rounded forms, warm colors, generous spacing, and soft shadows. Approachable and inviting.',
    palette: {
      colors: ['#5c3d2e', '#e07a5f', '#f2cc8f', '#81b29a', '#f4f1de'],
      name: 'Mediterranean Warmth',
      reason: 'Warm terracotta, golden yellow, and sage green evoke sunlit landscapes. These colors trigger comfort associations — think clay pots, warm bread, and natural materials. The palette avoids pure black for a softer feel.',
    },
    typography: {
      heading: "'Fraunces', serif",
      headingName: 'Fraunces',
      body: "'DM Sans', sans-serif",
      bodyName: 'DM Sans',
      reason: 'Fraunces has soft, organic curves that feel handmade and personal. DM Sans for body text balances warmth with readability — its open apertures and humanist touches feel friendly without being childish.',
    },
    radius: '12px',
    radiusReason: 'Generous radius creates soft, pillow-like shapes that feel safe and inviting. Rounded corners are psychologically associated with approachability.',
    shadow: '0 2px 8px rgba(0,0,0,0.08)',
    shadowReason: 'Very soft shadows — just enough to create gentle depth without any harshness. Like natural sunlight casting barely-visible shadows.',
    transition: 'all 0.25s ease',
  },
  {
    id: 'professional',
    name: 'Professional & Polished',
    description: 'Refined, structured, trustworthy. Clean lines, measured spacing, and a restrained color palette.',
    palette: {
      colors: ['#1b3a5c', '#2e5f8a', '#4a7c9b', '#89b0c4', '#e8f0f5'],
      name: 'Corporate Blue',
      reason: 'Blue is the most universally trusted color in business. This blue-to-white gradient creates hierarchy from dark (primary actions) to light (backgrounds) while maintaining a cohesive, professional tone throughout.',
    },
    typography: {
      heading: "'Space Grotesk', sans-serif",
      headingName: 'Space Grotesk',
      body: "'Inter', sans-serif",
      bodyName: 'Inter',
      reason: 'Space Grotesk signals precision and modernity. Its geometric construction feels engineered and trustworthy. Inter body text is the professional baseline — universally readable and respectably neutral.',
    },
    radius: '4px',
    radiusReason: 'Conservative radius — polished enough to feel modern but restrained enough to communicate seriousness.',
    shadow: '0 1px 3px rgba(0,0,0,0.1)',
    shadowReason: 'Subtle, tight shadows create clean elevation without drama. Professional interfaces use depth sparingly.',
    transition: 'all 0.2s ease',
  },
  {
    id: 'elegant',
    name: 'Elegant & Luxurious',
    description: 'Serif typography, deep tones, gold or champagne accents, and theatrical white space.',
    palette: {
      colors: ['#1a1a2e', '#2c2c3e', '#c9a84c', '#e8d5a3', '#f4efe1'],
      name: 'Midnight Gold',
      reason: 'Dark navy and gold is the oldest luxury color combination — from illuminated manuscripts to haute couture packaging. The deep background makes gold accents glow, and the warm ivory provides a parchment-like surface.',
    },
    typography: {
      heading: "'Playfair Display', serif",
      headingName: 'Playfair Display',
      body: "'Source Serif 4', serif",
      bodyName: 'Source Serif 4',
      reason: 'Double-serif pairing is the hallmark of luxury design. Playfair brings high-contrast stroke variation (thick/thin) that evokes engraving and calligraphy. Source Serif 4 maintains the elegance at readable sizes.',
    },
    radius: '0px',
    radiusReason: 'Zero radius communicates precision and refinement. Luxury brands favor sharp geometry — it suggests meticulous craftsmanship.',
    shadow: 'none',
    shadowReason: 'No shadows. Elegant design creates depth through contrast (dark/light) and spacing, not artificial elevation effects.',
    transition: 'all 0.3s ease',
  },
  {
    id: 'playful',
    name: 'Playful & Fun',
    description: 'Bright saturated colors, rounded everything, bouncy interactions, and joyful energy.',
    palette: {
      colors: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181'],
      name: 'Confetti',
      reason: 'Maximum hue variety creates visual excitement. Each color is saturated and warm-shifted, creating a palette that feels energetic and optimistic. Playful design breaks the rule of "limit to 2-3 colors" on purpose.',
    },
    typography: {
      heading: "'DM Sans', sans-serif",
      headingName: 'DM Sans',
      body: "'Roboto', sans-serif",
      bodyName: 'Roboto',
      reason: 'DM Sans has subtly rounded terminals that feel friendly and approachable. At bold weights it is cheerful without being childish. Roboto body text is casual and familiar — the font everyone already knows.',
    },
    radius: '16px',
    radiusReason: 'Large radius makes everything feel like a toy — rounded, safe, and fun to interact with. Pill-shaped buttons and bubbly cards reinforce the playful vibe.',
    shadow: '0 4px 12px rgba(0,0,0,0.1)',
    shadowReason: 'Medium shadows make elements feel like colorful blocks floating on the page. The dimensionality adds to the toy-like quality.',
    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  {
    id: 'dark',
    name: 'Dark & Moody',
    description: 'Dark backgrounds, dramatic lighting, muted accent colors, and atmospheric depth.',
    palette: {
      colors: ['#0a0a0f', '#1a1a2e', '#2d2d44', '#6c6c8a', '#a0a0bf'],
      name: 'Deep Space',
      reason: 'Layered dark values create depth without light. The progression from near-black to muted lavender establishes a tonal hierarchy that works entirely in the dark range — no white needed. Muted rather than bright accents prevent eye strain.',
    },
    typography: {
      heading: "'Space Grotesk', sans-serif",
      headingName: 'Space Grotesk',
      body: "'Inter', sans-serif",
      bodyName: 'Inter',
      reason: 'Geometric sans-serifs on dark backgrounds feel futuristic and refined. Space Grotesk geometric precision catches light well on dark backgrounds. Inter at 300-400 weight renders cleanly against dark surfaces.',
    },
    radius: '8px',
    radiusReason: 'Moderate radius softens the darkness. Too sharp and it feels hostile; too round and it conflicts with the moody atmosphere.',
    shadow: '0 4px 20px rgba(0,0,0,0.4)',
    shadowReason: 'Dark-on-darker shadows create subtle depth. On dark backgrounds, shadows work through opacity changes rather than color contrast.',
    transition: 'all 0.3s ease',
  },
  {
    id: 'retro',
    name: 'Retro & Vintage',
    description: 'Warm tones, serif fonts, hard shadows, chunky borders, and nostalgic craftsmanship.',
    palette: {
      colors: ['#2c1810', '#c0392b', '#e67e22', '#f0c040', '#faf3e0'],
      name: 'Print Shop',
      reason: 'These are letterpress colors — deep brown ink, warm red, amber, gold, and cream paper. The warm shift across the entire palette creates a cohesive nostalgic feel. Predominantly warm tones — vintage design gravitates toward warmth, evoking aged paper and oxidized inks.',
    },
    typography: {
      heading: "'Merriweather', serif",
      headingName: 'Merriweather',
      body: "'Lora', serif",
      bodyName: 'Lora',
      reason: 'Double-serif evokes print tradition. Merriweather is sturdy and authoritative like a newspaper masthead. Lora adds calligraphic warmth for body text — the kind of font you would find in a well-loved book.',
    },
    radius: '4px',
    radiusReason: 'Slight radius — enough to avoid looking modern/sharp, matching the softened-by-age quality of vintage objects.',
    shadow: '3px 3px 0 rgba(0,0,0,0.15)',
    shadowReason: 'Hard offset shadows (no blur) mimic the dimensional quality of letterpress printing, where ink physically presses into paper.',
    transition: 'all 0.15s ease',
  },
  {
    id: 'futuristic',
    name: 'Futuristic & Tech',
    description: 'Dark interfaces, neon accents, sharp geometry, glowing effects, and sci-fi energy.',
    palette: {
      colors: ['#0a0a1a', '#12122a', '#00ff88', '#00d4ff', '#e0e0ff'],
      name: 'Neon Terminal',
      reason: 'The classic sci-fi palette: near-black backgrounds with fully saturated neon highlights. Green and cyan recall terminal screens and heads-up displays. The neon-on-dark pairing creates maximum visual impact with minimum color usage.',
    },
    typography: {
      heading: "'Space Grotesk', sans-serif",
      headingName: 'Space Grotesk',
      body: "'JetBrains Mono', monospace",
      bodyName: 'JetBrains Mono',
      reason: 'Monospace body text says "this interface is a machine." Space Grotesk headings are geometric and mechanical. Together they create a coherent tech-forward voice that feels like using advanced software.',
    },
    radius: '4px',
    radiusReason: 'Sharp but not razor-sharp. Futuristic design favors precision geometry — chamfered edges rather than rounded ones.',
    shadow: '0 0 20px rgba(0, 255, 136, 0.15)',
    shadowReason: 'Colored glow shadows are the key — they simulate neon light emission rather than physical depth. The accent color glows outward, creating the sci-fi lighting effect.',
    transition: 'all 0.2s ease',
  },
  {
    id: 'organic',
    name: 'Organic & Natural',
    description: 'Earth tones, rounded forms, soft textures, and a sense of connection to the natural world.',
    palette: {
      colors: ['#2d3a2d', '#5c7a4a', '#8fae6b', '#c4d4a0', '#f0f2e6'],
      name: 'Forest Floor',
      reason: 'Greens from deep shade to sun-dappled canopy. This palette mirrors the light gradient you see walking into a forest — dark at the base, bright overhead. Organic color should feel found, not manufactured.',
    },
    typography: {
      heading: "'Lora', serif",
      headingName: 'Lora',
      body: "'Inter', sans-serif",
      bodyName: 'Inter',
      reason: 'Lora serif headings feel rooted and traditional — like carved wooden signage. Inter body text provides modern readability without fighting the organic tone. The serif/sans contrast mimics nature meeting structure.',
    },
    radius: '20px',
    radiusReason: 'Very rounded — approaching blob shapes. Nature has no straight lines or sharp corners. High radius creates organic, pebble-like forms.',
    shadow: '0 2px 12px rgba(0,0,0,0.06)',
    shadowReason: 'Barely-there shadows like dappled sunlight filtering through leaves. Organic design avoids dramatic depth in favor of gentle, ambient presence.',
    transition: 'all 0.3s ease',
  },
]

export function generateBrief(appType, vibe) {
  const brief = {
    summary: `${vibe.name} meets ${appType.name}: ${appType.layoutAdvice.toLowerCase()} styled with ${vibe.description.charAt(0).toLowerCase() + vibe.description.slice(1)}`,

    palette: {
      ...vibe.palette,
      appContext: `For a ${appType.name.toLowerCase()}, ${vibe.palette.reason.charAt(0).toLowerCase() + vibe.palette.reason.slice(1)}`,
    },

    typography: {
      ...vibe.typography,
      appContext: `${appType.name}s benefit from this pairing because ${vibe.typography.reason.charAt(0).toLowerCase() + vibe.typography.reason.slice(1)}`,
    },

    layout: {
      recommendation: appType.layoutAdvice,
      reason: appType.layoutReason,
    },

    components: {
      radius: vibe.radius,
      radiusReason: vibe.radiusReason,
      shadow: vibe.shadow,
      shadowReason: vibe.shadowReason,
      list: appType.components,
    },

    density: {
      level: appType.density,
      reason: appType.densityReason,
    },

    cssVariables: {
      '--brief-bg': vibe.palette.colors[4],
      '--brief-surface': '#ffffff',
      '--brief-primary': vibe.palette.colors[2] || vibe.palette.colors[0],
      '--brief-primary-text': isLight(vibe.palette.colors[2] || vibe.palette.colors[0]) ? '#1a1a1a' : '#ffffff',
      '--brief-text': vibe.palette.colors[0],
      '--brief-text-muted': vibe.palette.colors[1],
      '--brief-border': vibe.palette.colors[3],
      '--brief-radius': vibe.radius,
      '--brief-shadow': vibe.shadow,
      '--brief-font-heading': vibe.typography.heading,
      '--brief-font-body': vibe.typography.body,
      '--brief-transition': vibe.transition,
    },
  }

  // For dark vibes, adjust surface and text colors
  if (vibe.id === 'dark' || vibe.id === 'futuristic') {
    brief.cssVariables['--brief-bg'] = vibe.palette.colors[0]
    brief.cssVariables['--brief-surface'] = vibe.palette.colors[1]
    brief.cssVariables['--brief-text'] = vibe.palette.colors[4]
    brief.cssVariables['--brief-text-muted'] = vibe.palette.colors[3]
    brief.cssVariables['--brief-border'] = vibe.palette.colors[2] + '40'
    brief.cssVariables['--brief-primary'] = vibe.id === 'futuristic' ? vibe.palette.colors[2] : vibe.palette.colors[3]
    brief.cssVariables['--brief-primary-text'] = vibe.palette.colors[0]
  }

  // Elegant adjustments
  if (vibe.id === 'elegant') {
    brief.cssVariables['--brief-bg'] = vibe.palette.colors[0]
    brief.cssVariables['--brief-surface'] = vibe.palette.colors[1]
    brief.cssVariables['--brief-text'] = vibe.palette.colors[4]
    brief.cssVariables['--brief-text-muted'] = vibe.palette.colors[3]
    brief.cssVariables['--brief-border'] = vibe.palette.colors[2] + '30'
    brief.cssVariables['--brief-primary'] = vibe.palette.colors[2]
    brief.cssVariables['--brief-primary-text'] = vibe.palette.colors[0]
  }

  return brief
}

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

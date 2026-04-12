export const colorWheelHues = [
  { angle: 0, name: 'Red', hex: '#ff0000', type: 'primary' },
  { angle: 30, name: 'Red-Orange', hex: '#ff4500', type: 'tertiary' },
  { angle: 60, name: 'Orange', hex: '#ff8800', type: 'secondary' },
  { angle: 90, name: 'Yellow-Orange', hex: '#ffbb00', type: 'tertiary' },
  { angle: 120, name: 'Yellow', hex: '#ffee00', type: 'primary' },
  { angle: 150, name: 'Yellow-Green', hex: '#88dd00', type: 'tertiary' },
  { angle: 180, name: 'Green', hex: '#00cc00', type: 'secondary' },
  { angle: 210, name: 'Blue-Green', hex: '#00aa88', type: 'tertiary' },
  { angle: 240, name: 'Blue', hex: '#0044ff', type: 'primary' },
  { angle: 270, name: 'Blue-Violet', hex: '#4400cc', type: 'tertiary' },
  { angle: 300, name: 'Violet', hex: '#8800cc', type: 'secondary' },
  { angle: 330, name: 'Red-Violet', hex: '#cc0066', type: 'tertiary' },
]

export const colorRelationships = [
  {
    name: 'Complementary',
    id: 'complementary',
    description: 'Two colors opposite each other on the color wheel (180 degrees apart). Maximum contrast, maximum energy.',
    usage: 'Use for CTAs that need to pop, error/success pairs, or high-impact visual statements. The complement of your primary color is your most powerful accent.',
    angles: [0, 180],
  },
  {
    name: 'Analogous',
    id: 'analogous',
    description: 'Three colors side by side on the wheel (within 60 degrees). Harmonious and low-contrast.',
    usage: 'Ideal for creating serene, cohesive designs. Nature frequently uses analogous palettes — think of a sunset (red-orange-yellow) or forest (yellow-green-blue-green).',
    angles: [0, 30, 330],
  },
  {
    name: 'Triadic',
    id: 'triadic',
    description: 'Three colors evenly spaced (120 degrees apart). Balanced and vibrant.',
    usage: 'Works well for illustrations, data visualization, and playful interfaces where you need 3 distinct but balanced colors. Comic books and pop art love triadic palettes.',
    angles: [0, 120, 240],
  },
  {
    name: 'Split Complementary',
    id: 'split',
    description: 'One base color plus the two colors adjacent to its complement. High contrast with more nuance.',
    usage: 'Easier to use than pure complementary because it provides contrast without the full tension. Great for beginners who want visual interest without clashing.',
    angles: [0, 150, 210],
  },
  {
    name: 'Tetradic (Square)',
    id: 'tetradic',
    description: 'Four colors evenly spaced (90 degrees apart). Rich and complex.',
    usage: 'Best when one color dominates and the others are accents. Complex palettes need careful balance — if all four fight for attention, the result feels chaotic.',
    angles: [0, 90, 180, 270],
  },
  {
    name: 'Monochromatic',
    id: 'monochromatic',
    description: 'A single hue at different saturation and lightness levels. Cohesive and elegant.',
    usage: 'The safest color scheme — it cannot clash. Perfect for creating depth within a brand color, status indicators (light-to-dark warning states), or sophisticated single-color interfaces.',
    angles: [0],
  },
]

export const colorPsychology = [
  {
    hue: 'Red',
    hex: '#e63946',
    associations: ['energy', 'urgency', 'passion', 'danger', 'appetite'],
    industries: ['food', 'entertainment', 'emergency', 'retail sales'],
    uiUsage: 'Errors, destructive actions, sale badges, notifications. Red draws the eye faster than any other color — it is the universal "pay attention" signal.',
    science: 'Red light has the longest wavelength (~700nm) and is among the first colors processed by the visual system. It is widely believed to increase physiological arousal and appetite — which is why fast food brands favor it — though research suggests the effects are context-dependent.',
  },
  {
    hue: 'Orange',
    hex: '#e67e22',
    associations: ['creativity', 'enthusiasm', 'warmth', 'playfulness', 'value'],
    industries: ['creative agencies', 'children\'s products', 'food', 'fitness'],
    uiUsage: 'Warnings (less severe than red), "popular" or "recommended" badges, creative tool accents. Orange combines red\'s energy with yellow\'s optimism.',
    science: 'Orange (~590-620nm) is one of the most visible colors in daylight, which is why it is used for safety equipment and traffic cones. In UI, it commands attention without the alarm of red.',
  },
  {
    hue: 'Yellow',
    hex: '#f0c040',
    associations: ['optimism', 'attention', 'caution', 'intelligence', 'warmth'],
    industries: ['construction', 'transportation', 'children\'s products', 'energy'],
    uiUsage: 'Warnings, highlights, "new" badges, tooltips. Yellow has the highest luminance of any hue, making it excellent for drawing attention to specific elements.',
    science: 'Yellow (~570-590nm) stimulates the most light-sensitive part of the retina. The brain processes it quickly, which is why yield signs and school buses use it. Too much yellow causes visual fatigue.',
  },
  {
    hue: 'Green',
    hex: '#27ae60',
    associations: ['growth', 'health', 'nature', 'money', 'safety', 'permission'],
    industries: ['healthcare', 'finance', 'agriculture', 'sustainability', 'wellness'],
    uiUsage: 'Success states, confirmations, "go" signals, health indicators, positive trends. Green means "everything is OK" across nearly all cultures.',
    science: 'Green (~495-570nm) is at the center of the visible spectrum and is the color the human eye is most sensitive to. We can distinguish more shades of green than any other color — an evolutionary advantage from navigating forest environments.',
  },
  {
    hue: 'Blue',
    hex: '#2980b9',
    associations: ['trust', 'calm', 'professionalism', 'technology', 'depth', 'stability'],
    industries: ['technology', 'finance', 'healthcare', 'corporate', 'social media'],
    uiUsage: 'Primary actions, links, information states, backgrounds. Blue is the most universally liked color and the default choice for establishing trust.',
    science: 'Blue light (~450-495nm) has short wavelengths that scatter easily in the atmosphere (which is why the sky is blue). In screens, blue triggers relaxation responses and is associated with distance and openness.',
  },
  {
    hue: 'Purple',
    hex: '#8e44ad',
    associations: ['luxury', 'creativity', 'wisdom', 'mystery', 'royalty', 'spirituality'],
    industries: ['beauty', 'luxury goods', 'creative tools', 'education', 'wellness'],
    uiUsage: 'Premium features, creative tool accents, brand differentiation. Purple is rare in nature, which gives it an inherent sense of specialness and premium quality.',
    science: 'Violet (~380-450nm) is at the extreme short end of visible light. True violet (spectral) differs from the purple we see on screens (which is a mix of red + blue). This dual nature — being simultaneously warm and cool — gives purple its mysterious quality.',
  },
  {
    hue: 'Pink',
    hex: '#e84393',
    associations: ['romance', 'playfulness', 'softness', 'youth', 'compassion'],
    industries: ['beauty', 'fashion', 'dating', 'children\'s products', 'wellness'],
    uiUsage: 'Social/sharing features, like/love actions, wellness indicators. Hot pink is energetic and modern; soft pink is calming and nurturing.',
    science: 'Pink does not exist on the visible spectrum — it is a non-spectral color that the brain constructs by combining red and violet (the two ends of the spectrum). This makes pink a uniquely human perception.',
  },
  {
    hue: 'Brown',
    hex: '#8b6f47',
    associations: ['reliability', 'earthiness', 'warmth', 'craftsmanship', 'comfort'],
    industries: ['coffee', 'outdoor recreation', 'artisanal goods', 'real estate', 'leather'],
    uiUsage: 'Warm backgrounds, organic/natural themes, vintage aesthetics. Brown grounds a design and makes it feel tangible and trustworthy.',
    science: 'Brown is a low-saturation, low-lightness version of orange. It doesn\'t appear in the rainbow — like pink, it requires context. A brown surface surrounded by brighter colors appears more brown; in isolation, it looks orange.',
  },
  {
    hue: 'Black',
    hex: '#1a1a1a',
    associations: ['power', 'elegance', 'sophistication', 'formality', 'authority'],
    industries: ['luxury', 'fashion', 'technology', 'automotive', 'editorial'],
    uiUsage: 'Text, backgrounds for premium products, dark mode surfaces. True black (#000) can be harsh on screens — most designers use near-blacks (#1a1a1a, #0a0a0f) for a softer feel.',
    science: 'Black is the absence of visible light. On screens (which emit light), we simulate black by turning pixels to their minimum output — which is never truly zero, which is why dark mode still has visible "glow" in dark rooms.',
  },
  {
    hue: 'White',
    hex: '#f8f8f8',
    associations: ['purity', 'simplicity', 'space', 'cleanliness', 'modernity'],
    industries: ['healthcare', 'technology', 'minimalist brands', 'real estate'],
    uiUsage: 'Backgrounds, cards, breathing room. White space is not empty — it is an active design element that directs attention and creates hierarchy.',
    science: 'White is all wavelengths of visible light combined. On screens, white (#fff) is maximum output from all three (RGB) sub-pixels. Extended exposure to pure white causes eye fatigue — most reading interfaces use off-whites (#f8f8f8, #fafafa).',
  },
]

export const contrastScience = {
  overview: 'Contrast ratio measures the difference in luminance between foreground and background colors. It ranges from 1:1 (no contrast) to 21:1 (black on white). Higher ratios mean better readability.',
  formula: 'Contrast = (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color\'s relative luminance and L2 is the darker color\'s. Relative luminance accounts for how the eye perceives different wavelengths (green appears brighter than blue at equal intensity).',
  levels: [
    {
      ratio: '21:1',
      example: { fg: '#000000', bg: '#ffffff' },
      label: 'Maximum',
      description: 'Black on white. Maximum possible contrast. Good for body text, essential for accessibility.',
    },
    {
      ratio: '7:1',
      example: { fg: '#595959', bg: '#ffffff' },
      label: 'AAA Normal',
      description: 'WCAG AAA for normal text (under 18px). The gold standard for accessibility — comfortable for virtually all users including those with moderate vision impairment.',
    },
    {
      ratio: '4.5:1',
      example: { fg: '#767676', bg: '#ffffff' },
      label: 'AA Normal',
      description: 'WCAG AA for normal text. The minimum acceptable standard for body text. Most design systems target this as their baseline.',
    },
    {
      ratio: '3:1',
      example: { fg: '#949494', bg: '#ffffff' },
      label: 'AA Large',
      description: 'WCAG AA for large text (18pt/24px+, or 14pt bold). Large text is more legible, so it needs less contrast. Also applies to UI components and graphical objects.',
    },
    {
      ratio: '~2:1',
      example: { fg: '#b0b0b0', bg: '#ffffff' },
      label: 'Below AA',
      description: 'Fails all WCAG standards. May be acceptable for decorative text or disabled states, but never for readable content.',
    },
    {
      ratio: '~1.6:1',
      example: { fg: '#cccccc', bg: '#ffffff' },
      label: 'Very Low',
      description: 'Nearly invisible. The text is there, but reading it requires effort. This is what inaccessible design looks like.',
    },
  ],
  wcagVsApca: 'WCAG 2.x treats dark-on-light the same as light-on-dark. APCA (the next-generation algorithm) recognizes that light text on dark backgrounds needs higher contrast than dark text on light backgrounds, because our visual system is adapted for bright backgrounds (like paper in sunlight).',
}

export const colorTemperature = {
  explanation: 'Color temperature divides the wheel into warm (red, orange, yellow) and cool (blue, green, violet). Warm colors advance — they appear to come toward the viewer. Cool colors recede — they appear to move away. This spatial illusion is one of the most powerful tools in design.',
  warmColors: {
    range: 'Red through Yellow (0-60 degrees on the color wheel)',
    psychological: 'Warm colors increase arousal, energy, and perceived closeness. They stimulate appetite (used extensively in food branding) and create urgency (sale signs, deadlines).',
    spatialEffect: 'Warm objects appear closer and larger than they actually are.',
    bestFor: 'CTAs, highlights, accent elements, food photography, energy/fitness brands',
  },
  coolColors: {
    range: 'Green through Blue-Violet (120-270 degrees)',
    psychological: 'Cool colors promote calm, focus, and perceived distance. They lower perceived temperature and heart rate. They build trust and feel reliable.',
    spatialEffect: 'Cool objects appear farther away and smaller than they actually are.',
    bestFor: 'Backgrounds, large surfaces, data dashboards, healthcare/finance/tech brands',
  },
  neutrals: {
    range: 'True gray has no temperature. Most "grays" in design are warm (beige-shifted) or cool (blue-shifted).',
    impact: 'Warm grays feel cozy and approachable. Cool grays feel professional and modern. The temperature of your grays should match your brand temperature.',
  },
  gradient: [
    { temp: 'Very Warm', hex: '#ff4500', label: 'Red-Orange' },
    { temp: 'Warm', hex: '#ff8800', label: 'Orange' },
    { temp: 'Slightly Warm', hex: '#ffcc00', label: 'Yellow' },
    { temp: 'Neutral Warm', hex: '#88cc44', label: 'Yellow-Green' },
    { temp: 'Neutral', hex: '#888888', label: 'True Gray' },
    { temp: 'Neutral Cool', hex: '#44aaaa', label: 'Teal' },
    { temp: 'Slightly Cool', hex: '#2288cc', label: 'Blue' },
    { temp: 'Cool', hex: '#4444cc', label: 'Blue-Violet' },
    { temp: 'Very Cool', hex: '#6644aa', label: 'Violet' },
  ],
}

export const designRules = {
  sixtyThirtyTen: {
    name: '60-30-10 Rule',
    description: 'Borrowed from interior design: 60% dominant color (usually neutral/background), 30% secondary color (supporting surfaces and text), 10% accent color (CTAs, highlights, icons). This ratio creates visual balance that feels harmonious without being boring.',
    example: {
      dominant: { percent: 60, role: 'Background & large surfaces', typical: 'White, light gray, or your lightest brand color' },
      secondary: { percent: 30, role: 'Cards, headers, secondary elements', typical: 'Darker neutral, or your secondary brand color' },
      accent: { percent: 10, role: 'Buttons, links, icons, highlights', typical: 'Your primary brand color — the one that pops' },
    },
  },
  contrastHierarchy: {
    name: 'Contrast Creates Hierarchy',
    description: 'The element with the highest contrast against its background draws the eye first. Use this to create a visual reading order: primary CTA has the highest contrast, secondary actions have medium contrast, and tertiary information has the lowest contrast.',
  },
  colorCoding: {
    name: 'Semantic Color Coding',
    description: 'Reserve specific colors for specific meanings. Once a user learns that green = success and red = error, inconsistent usage creates confusion.',
    conventions: [
      { color: '#22c55e', meaning: 'Success / Positive / Go', hex: '#22c55e' },
      { color: '#ef4444', meaning: 'Error / Danger / Destructive', hex: '#ef4444' },
      { color: '#f59e0b', meaning: 'Warning / Caution / Attention', hex: '#f59e0b' },
      { color: '#3b82f6', meaning: 'Info / Neutral / Link', hex: '#3b82f6' },
    ],
  },
}

export const colorBlindness = {
  overview: 'About 8% of men and 0.5% of women have some form of color vision deficiency. Designing for color blindness means never using color as the ONLY way to convey information — always pair color with text, icons, or patterns.',
  types: [
    {
      name: 'Protanopia',
      prevalence: '~1% of males',
      description: 'Missing L-cones (long wavelength / red). Reds appear dark and shift toward brown/green. Cannot distinguish red from green.',
      confusedPairs: ['red/green', 'red/brown', 'green/brown'],
      matrix: [0.567, 0.433, 0, 0.558, 0.442, 0, 0, 0.242, 0.758],
    },
    {
      name: 'Deuteranopia',
      prevalence: '~1% deuteranopia + ~5% deuteranomaly (most common overall)',
      description: 'Reduced or absent M-cones (medium wavelength / green). Green shifts toward red. The most common color vision deficiency — red and green become difficult to distinguish.',
      confusedPairs: ['red/green', 'green/yellow', 'blue/purple'],
      matrix: [0.625, 0.375, 0, 0.7, 0.3, 0, 0, 0.3, 0.7],
    },
    {
      name: 'Tritanopia',
      prevalence: '~0.01% (very rare)',
      description: 'Missing S-cones (short wavelength / blue). Blues and yellows are confused. Rare but affects some people taking certain medications.',
      confusedPairs: ['blue/green', 'yellow/violet', 'blue/black'],
      matrix: [0.95, 0.05, 0, 0, 0.433, 0.567, 0, 0.475, 0.525],
    },
  ],
  safePalette: {
    description: 'A color-blind safe palette uses blue and orange as the primary contrast pair (distinguishable by all three types). Avoid relying on red vs. green.',
    colors: ['#0077bb', '#ee7733', '#009988', '#cc3311', '#33bbee', '#ee3377'],
    names: ['Blue', 'Orange', 'Teal', 'Red', 'Cyan', 'Magenta'],
  },
}

export const perceptualFacts = [
  {
    name: 'Simultaneous Contrast',
    description: 'A color appears to shift toward the complement of its surrounding color. The same gray looks warm on a blue background and cool on an orange background.',
    takeaway: 'Always test your colors in context, not in isolation. A carefully chosen gray can look completely wrong when placed on a colored background.',
  },
  {
    name: 'Color Constancy',
    description: 'Your brain adjusts color perception to compensate for lighting changes. A white shirt looks white to you in warm tungsten light or cool daylight, even though the actual wavelengths hitting your eye are very different.',
    takeaway: 'Users will perceive your colors differently on warm-tinted (Night Shift) vs. cool-tinted displays. Test on both.',
  },
  {
    name: 'Chromatic Adaptation',
    description: 'After staring at a color for 30+ seconds, the cone cells responsible for that color fatigue. When you look away, you see an afterimage in the complementary color.',
    takeaway: 'Avoid large areas of intense, saturated color that users stare at for long periods — it causes visual fatigue and color distortion.',
  },
  {
    name: 'The Helmholtz-Kohlrausch Effect',
    description: 'Saturated colors appear brighter than desaturated colors of the same luminance. A vivid red looks brighter than a gray with identical luminance.',
    takeaway: 'When matching perceived brightness across different hues, you may need to darken saturated colors or lighten desaturated ones. Luminance alone is not enough.',
  },
  {
    name: 'Hunt Effect',
    description: 'As overall illumination increases, colors appear more saturated. In dark environments, colors appear muted. This is why dark mode interfaces often need slightly more saturated accent colors.',
    takeaway: 'Colors that look vibrant in your bright office may appear dull on a user\'s dimmed phone screen at night.',
  },
  {
    name: 'Bezold Effect',
    description: 'Changing just one color in a pattern can shift the perceived hue of adjacent colors. Adding a white outline to colored stripes makes them look lighter; a black outline makes them look darker.',
    takeaway: 'Small color changes can have cascading perceptual effects across your whole design. When you change one color in a palette, check how it affects the perception of neighboring colors.',
  },
]

export const expertInsights = {
  colorWheel: [
    {
      quote: 'In visual perception a color is almost never seen as it really is — as it physically is. This fact makes color the most relative medium in art.',
      author: 'Josef Albers',
      credential: 'Color theorist, Yale School of Art',
      source: 'Interaction of Color, 1963',
    },
    {
      quote: 'He who wishes to become a master of color must see, feel, and experience each individual color in its endless combinations with all other colors.',
      author: 'Johannes Itten',
      credential: 'Bauhaus master, color theory pioneer',
      source: 'The Art of Color, 1961',
    },
  ],
  psychology: [
    {
      quote: 'Colors are forces, radiant energies that affect us positively or negatively, whether we are aware of it or not.',
      author: 'Johannes Itten',
      credential: 'Bauhaus master, color theory pioneer',
      source: 'The Art of Color, 1961',
    },
    {
      quote: 'Colours are light\'s suffering and joy.',
      author: 'Johann Wolfgang von Goethe',
      credential: 'Poet, natural philosopher',
      source: 'Theory of Colours, 1810',
    },
  ],
  contrast: [
    {
      quote: 'Clutter and confusion are failures of design, not attributes of information.',
      author: 'Edward Tufte',
      credential: 'Statistician, data visualization pioneer',
      source: 'Envisioning Information, 1990',
    },
  ],
  practice: [
    {
      quote: 'Styles come and go. Good design is a language, not a style.',
      author: 'Massimo Vignelli',
      credential: 'Modernist designer, NYC subway map',
      source: '',
    },
    {
      quote: 'Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects.',
      author: 'Dieter Rams',
      credential: 'Industrial designer, head of design at Braun',
      source: 'Less but Better, 1995',
    },
  ],
  accessibility: [
    {
      quote: 'Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.',
      author: 'Don Norman',
      credential: 'Cognitive scientist, co-founder of Nielsen Norman Group',
      source: 'The Design of Everyday Things, 2013',
    },
    {
      quote: 'Attractive things do work better — their attractiveness produces positive emotions, causing mental processes to be more creative, more tolerant of minor difficulties.',
      author: 'Don Norman',
      credential: 'Cognitive scientist, co-founder of Nielsen Norman Group',
      source: 'Emotional Design, 2004',
    },
  ],
  perception: [
    {
      quote: 'What counts here — first and last — is not so-called knowledge of so-called facts, but vision — seeing.',
      author: 'Josef Albers',
      credential: 'Color theorist, Yale School of Art',
      source: 'Interaction of Color, 1963',
    },
    {
      quote: 'Light it self is a Heterogeneous mixture of differently refrangible Rays.',
      author: 'Isaac Newton',
      credential: 'Mathematician, physicist',
      source: 'Letter to Henry Oldenburg, Philosophical Transactions, 1672',
    },
  ],
}

export const designPrinciples = [
  {
    name: 'Fitts\'s Law',
    author: 'Paul Fitts, 1954',
    description: 'The time to acquire a target is a function of the distance to and size of the target.',
    application: 'Make important interactive elements large and place them near the user\'s cursor or finger. This is why primary buttons are bigger than secondary ones, and why mobile nav is at the bottom of the screen.',
  },
  {
    name: 'Hick\'s Law',
    author: 'William Hick & Ray Hyman, 1952',
    description: 'The time it takes to make a decision increases with the number and complexity of choices.',
    application: 'Minimize choices when response time matters. Break complex tasks into smaller steps. Highlight the recommended option to reduce decision paralysis.',
  },
  {
    name: 'Miller\'s Law',
    author: 'George A. Miller, 1956',
    description: 'The average person can hold 7 (plus or minus 2) items in working memory.',
    application: 'Chunk information into groups of 5-9 items. This is why phone numbers are broken into segments and navigation menus should be kept concise.',
  },
  {
    name: 'Gestalt: Proximity',
    author: 'Berlin School of Psychology, 1920s',
    description: 'Elements near each other are perceived as belonging to the same group.',
    application: 'Use spacing to create logical groupings. Items in a form that relate to each other should be closer together than unrelated fields.',
  },
  {
    name: 'Gestalt: Similarity',
    author: 'Berlin School of Psychology, 1920s',
    description: 'Elements sharing visual characteristics (color, shape, size) are perceived as related.',
    application: 'Use consistent colors and shapes for elements with the same function. All primary buttons should look the same; all status indicators should follow the same visual pattern.',
  },
]

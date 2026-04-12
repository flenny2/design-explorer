export function formatCss(selector, styles) {
  const entries = Object.entries(styles).filter(([, v]) => v !== undefined && v !== '')
  if (entries.length === 0) return ''

  const props = entries
    .map(([prop, value]) => {
      const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
      return `  ${cssProp}: ${value};`
    })
    .join('\n')

  return `${selector} {\n${props}\n}`
}

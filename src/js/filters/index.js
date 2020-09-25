export const cssVarValue = value => {
  if (!value) return ''
  return getComputedStyle(document.documentElement).getPropertyValue(value)
}

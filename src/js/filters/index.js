export const cssVarValue = value => {
  if (!value) return ''
  return getComputedStyle(document.documentElement).getPropertyValue(value)
}

export const cssVarName = (value, name) => {
  if (!value) return ''
  return value.replace(`${name}`, '')
}

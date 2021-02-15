export const injectFiles = file => file.keys().forEach(file)

export const cssVars = [...document.styleSheets]
  .filter(sheet => sheet.href === null || sheet.href.includes('main'))
  .reduce((acc, sheet) => (acc = [
    ...acc,
    ...[...sheet.cssRules].reduce((def, rule) => (def = rule.selectorText === ':root' ? [...def, ...[...rule.style].filter(name => name.startsWith("--"))]: def), [])
  ]),[]);

export const cssColorVars = cssVars
  .filter(variable => variable.includes('--color'))
  .map(color => color.replace('--color-', ''))

cssColorVars.push('current')
cssColorVars.push('trsp')

export const breakpoints = [
  {value: '', text: 'Default'},
  {value: ':sm', text: 'Small - 420px'},
  {value: ':md', text: 'Medium - 768px'},
  {value: ':lg', text: 'Large - 1024px'},
  {value: ':xl', text: 'Extra large - 1280px'},
]

export const cssVars = [...document.styleSheets]
  .filter(sheet => sheet.href === null || sheet.href.includes('main'))
  .reduce((acc, sheet) => (acc = [
    ...acc,
    ...[...sheet.cssRules].reduce((def, rule) => (def = rule.selectorText === ':root' ? [...def, ...[...rule.style].filter(name => name.startsWith("--"))]: def), [])
  ]),[]);

export const cssColorVars = cssVars.filter(variable => variable.includes('--color'))

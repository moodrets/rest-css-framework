import {cssColorVars} from '../store/index'

export const colorsArrayBuilder = (classNames, firstItemProps) => {
  const colorsArray = []

  cssColorVars.map((color, idx) => {
    let colorObject = {value: `${classNames}${color.replace('--color-', '')}`}
    if (firstItemProps && idx === 0) {
      colorObject = {
        ...colorObject,
        ...firstItemProps
      }
    }
    colorsArray.push(colorObject)
  })

  colorsArray.push(
    {value: `${classNames}current`},
    {value: `${classNames}trsp`},
  )

  return colorsArray
}

import React from 'react'

const SvgIcon = props => {

  const iconClassNames = [
    'svg-icon'
  ]

  if (props.addClass) {
    iconClassNames.push(props.addClass)
  }

  return (
    <div className={iconClassNames.join(' ')}>
      <svg><use xlinkHref={'#' + props.name}></use></svg>
    </div>
  )
}

export default SvgIcon

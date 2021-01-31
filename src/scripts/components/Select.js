import React from 'react'
import {Link} from 'react-router-dom'

const RsSelect = props => {
  return (
    <>
      <div className="d-f fw-wr mb-3">
        <strong className="mr-4" className={props.titleColor}>{props.title}</strong>
        {props.link ? (<Link className="td-n td-u:h txt-theme-1 ml-4" to={props.link}>({props.linkText})</Link>) : ''}
      </div>
      <select onChange={props.selectEmit} className="p-4 bdr bdr-wd-2 bdr-secondary bdr-primary:f rds-5 out-n wd-full">
        {props.items ? props.items.map((item, i) => (<option className={item.optionClass} key={i} value={item.value}>{item.text}</option>)) : ''}
      </select>
    </>
  )
}

export default RsSelect

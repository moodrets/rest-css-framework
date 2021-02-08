import React, {useState} from 'react'
import {cssColorVars} from '@helpers'
import RsSelect from '@components/Select'

const Colors = () => {

  const [utilType, setUtilType] = useState('txt')
  const [colorState, setColorState] = useState('')
  const utilTypeSelect = [
    {value: 'txt', text: 'Text'},
    {value: 'bdr', text: 'Border'},
    {value: 'sh', text: 'Shadow'},
    {value: 'bg', text: 'Background'},
  ]

  const colorStateSelect = [
    {value: '', text: 'default'},
    {value: ':h', text: 'hover'},
    {value: ':f', text: 'focus'},
    {value: ':fw', text: 'focus-within'},
    {value: ':fv', text: 'focus-visible'},
    {value: ':gh', text: 'group-hover'},
    {value: ':gf', text: 'group-focus'},
    {value: ':ga', text: 'group-active'},
  ]

  return (
    <div className="rs-colors">
      <h1 className="mt-0">Colors</h1>
      <p className="mb-9">Extend or replace colors list in file <strong className="txt-warning-1 font-we-700">base/_vars.scss</strong></p>
      <div className="case case-cells-1 case-cells-2:md ml-5-neg">
        <div className="cell pl-5 pb-5">
          <RsSelect
            title="Utility type"
            titleColor="txt-primary-1"
            items={utilTypeSelect}
            selectEmit={e=>setUtilType(e.target.value)}
          ></RsSelect>
        </div>
        <div className="cell pl-5 pb-5">
          <RsSelect
            title="Color states"
            titleColor="txt-success"
            items={colorStateSelect}
            selectEmit={e=>setColorState(e.target.value)}
          ></RsSelect>
        </div>
        <div className="cell pl-5 pb-5"></div>
      </div>
      {cssColorVars.map((color, index) => (
        <div className="sh-1 p-3 mb-3" key={index}>
          <div className="case case-cells-1 case-cells-3:md ai-c">
            <div className="cell pb-3 pb-0:md">
              .<span className="txt-primary-1">{utilType}-</span>{color}<span className="txt-success">{colorState}</span>
            </div>
            <div className="cell pb-3 pb-0:md">
              <div className={"sz-4 sh-1 rds-round mr-4" + ` bg-${color}`}></div>
            </div>
            <div className="cell pb-3 pb-0:md">
              <div className={`txt-${color}`}>{color}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Colors

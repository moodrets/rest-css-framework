import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import RsSelect from '@components/Select'

const BorderRadius = () => {

  const [breakpoint, setBreakpoint] = useState('')
  const BorderRadiusClasses = [
    {value: 'rds-1'},
    {value: 'rds-2'},
    {value: 'rds-3'},
    {value: 'rds-4'},
    {value: 'rds-5'},
    {value: 'rds-6'},
    {value: 'rds-7'},
    {value: 'rds-8'},
    {value: 'rds-9'},
    {value: 'rds-10'},
    {value: 'rds-11'},
    {value: 'rds-12'},
    {value: 'rds-0'},
    {value: 'rds-round'},
    {value: 'rds-pill'},

    {value: 'rds-tl-1', sectionName: 'Border radius top left', sectionColor: 'primary'},
    {value: 'rds-tl-2'},
    {value: 'rds-tl-3'},
    {value: 'rds-tl-4'},
    {value: 'rds-tl-5'},
    {value: 'rds-tl-6'},
    {value: 'rds-tl-7'},
    {value: 'rds-tl-8'},
    {value: 'rds-tl-9'},
    {value: 'rds-tl-10'},
    {value: 'rds-tl-11'},
    {value: 'rds-tl-12'},
    {value: 'rds-tl-0'},
    {value: 'rds-tl-round'},
    {value: 'rds-tl-pill'},

    {value: 'rds-tr-1', sectionName: 'Border radius top right', sectionColor: 'success'},
    {value: 'rds-tr-2'},
    {value: 'rds-tr-3'},
    {value: 'rds-tr-4'},
    {value: 'rds-tr-5'},
    {value: 'rds-tr-6'},
    {value: 'rds-tr-7'},
    {value: 'rds-tr-8'},
    {value: 'rds-tr-9'},
    {value: 'rds-tr-10'},
    {value: 'rds-tr-11'},
    {value: 'rds-tr-12'},
    {value: 'rds-tr-0'},
    {value: 'rds-tr-round'},
    {value: 'rds-tr-pill'},

    {value: 'rds-bl-1', sectionName: 'Border radius bottom left', sectionColor: 'theme-2'},
    {value: 'rds-bl-2'},
    {value: 'rds-bl-3'},
    {value: 'rds-bl-4'},
    {value: 'rds-bl-5'},
    {value: 'rds-bl-6'},
    {value: 'rds-bl-7'},
    {value: 'rds-bl-8'},
    {value: 'rds-bl-9'},
    {value: 'rds-bl-10'},
    {value: 'rds-bl-11'},
    {value: 'rds-bl-12'},
    {value: 'rds-bl-0'},
    {value: 'rds-bl-round'},
    {value: 'rds-bl-pill'},

    {value: 'rds-br-1', sectionName: 'Border radius bottom right', sectionColor: 'danger-1'},
    {value: 'rds-br-2'},
    {value: 'rds-br-3'},
    {value: 'rds-br-4'},
    {value: 'rds-br-5'},
    {value: 'rds-br-6'},
    {value: 'rds-br-7'},
    {value: 'rds-br-8'},
    {value: 'rds-br-9'},
    {value: 'rds-br-10'},
    {value: 'rds-br-11'},
    {value: 'rds-br-12'},
    {value: 'rds-br-0'},
    {value: 'rds-br-round'},
    {value: 'rds-br-pill'},
  ]

  return(
    <div className="rs-border-radius">
      <h1 className="mt-0">Border radius</h1>
      <p className="mb-9">Change border radius utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/border-radius.scss</strong></p>
      <div className="case case-cells-1 case-cells-2:md ml-5-neg mb-6">
        <div className="cell pl-5 pb-5">
          <RsSelect
            title="Breakpoints"
            titleColor="txt-success-1"
            items={breakpoints}
            selectEmit={e=>setBreakpoint(e.target.value)}
          ></RsSelect>
        </div>
        <div className="cell pl-5 pb-5">
        </div>
      </div>
      {BorderRadiusClasses.map((item, i) => (
        <div key={i}>
          {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
          <div className="sh-1 p-3 mb-3">
            <div className="case case-cells-1 case-cells-2:md ai-c">
              <div className="cell pb-3 pb-0:md">
                <div className="font-we-500 txt-dark txt-op-60">
                  {item.value}<span className="txt-success-1 txt-op-100">{breakpoint}</span>
                </div>
              </div>
              <div className="cell pb-3 pb-0:md">
                <div className={`wd-10 he-5 bdr bdr-wd-2 d-ib ${item.value}`}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BorderRadius

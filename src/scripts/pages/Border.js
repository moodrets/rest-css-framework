import React, { useState } from 'react'
import {breakpoints} from '@helpers'
import {cssColorVars} from '@helpers'
import RsSelect from '@components/Select'

const Borders = () => {

  const [breakpoint, setBreakpoint] = useState('')
  const [borderColor, setBorderColor] = useState('')
  const borderColors = cssColorVars.map(item => {
    return {
      value: `bdr-${item}`,
      text: `${item}`,
      optionClass: `txt-${item}`
    }
  })

  const bordersClassList = [
    {value: 'bdr'},
    {value: 'bdr-l'},
    {value: 'bdr-r'},
    {value: 'bdr-t'},
    {value: 'bdr-b'},
    {value: 'bdr-x'},
    {value: 'bdr-y'},
    {value: 'bdr-n'},

    {value: 'bdr bdr-wd-1', sectionName: 'Border width', sectionColor: 'success'},
    {value: 'bdr bdr-wd-2'},
    {value: 'bdr bdr-wd-3'},
    {value: 'bdr bdr-wd-4'},
    {value: 'bdr bdr-wd-5'},
    {value: 'bdr bdr-wd-6'},
    {value: 'bdr bdr-wd-7'},
    {value: 'bdr bdr-wd-8'},
    {value: 'bdr bdr-wd-9'},
    {value: 'bdr bdr-wd-10'},
    {value: 'bdr bdr-wd-11'},
    {value: 'bdr bdr-wd-12'},
    {value: 'bdr bdr-wd-0'},

    {value: 'bdr bdr-t-wd-1'},
    {value: 'bdr bdr-t-wd-2'},
    {value: 'bdr bdr-t-wd-3'},
    {value: 'bdr bdr-t-wd-4'},
    {value: 'bdr bdr-t-wd-5'},
    {value: 'bdr bdr-t-wd-6'},
    {value: 'bdr bdr-t-wd-7'},
    {value: 'bdr bdr-t-wd-8'},
    {value: 'bdr bdr-t-wd-9'},
    {value: 'bdr bdr-t-wd-10'},
    {value: 'bdr bdr-t-wd-11'},
    {value: 'bdr bdr-t-wd-12'},
    {value: 'bdr bdr-t-wd-0'},

    {value: 'bdr bdr-r-wd-1'},
    {value: 'bdr bdr-r-wd-2'},
    {value: 'bdr bdr-r-wd-3'},
    {value: 'bdr bdr-r-wd-4'},
    {value: 'bdr bdr-r-wd-5'},
    {value: 'bdr bdr-r-wd-6'},
    {value: 'bdr bdr-r-wd-7'},
    {value: 'bdr bdr-r-wd-8'},
    {value: 'bdr bdr-r-wd-9'},
    {value: 'bdr bdr-r-wd-10'},
    {value: 'bdr bdr-r-wd-11'},
    {value: 'bdr bdr-r-wd-12'},
    {value: 'bdr bdr-r-wd-0'},

    {value: 'bdr bdr-b-wd-1'},
    {value: 'bdr bdr-b-wd-2'},
    {value: 'bdr bdr-b-wd-3'},
    {value: 'bdr bdr-b-wd-4'},
    {value: 'bdr bdr-b-wd-5'},
    {value: 'bdr bdr-b-wd-6'},
    {value: 'bdr bdr-b-wd-7'},
    {value: 'bdr bdr-b-wd-8'},
    {value: 'bdr bdr-b-wd-9'},
    {value: 'bdr bdr-b-wd-10'},
    {value: 'bdr bdr-b-wd-11'},
    {value: 'bdr bdr-b-wd-12'},
    {value: 'bdr bdr-b-wd-0'},

    {value: 'bdr bdr-l-wd-1'},
    {value: 'bdr bdr-l-wd-2'},
    {value: 'bdr bdr-l-wd-3'},
    {value: 'bdr bdr-l-wd-4'},
    {value: 'bdr bdr-l-wd-5'},
    {value: 'bdr bdr-l-wd-6'},
    {value: 'bdr bdr-l-wd-7'},
    {value: 'bdr bdr-l-wd-8'},
    {value: 'bdr bdr-l-wd-9'},
    {value: 'bdr bdr-l-wd-10'},
    {value: 'bdr bdr-l-wd-11'},
    {value: 'bdr bdr-l-wd-12'},
    {value: 'bdr bdr-l-wd-0'},

    {value: 'bdr bdr-x-wd-1'},
    {value: 'bdr bdr-x-wd-2'},
    {value: 'bdr bdr-x-wd-3'},
    {value: 'bdr bdr-x-wd-4'},
    {value: 'bdr bdr-x-wd-5'},
    {value: 'bdr bdr-x-wd-6'},
    {value: 'bdr bdr-x-wd-7'},
    {value: 'bdr bdr-x-wd-8'},
    {value: 'bdr bdr-x-wd-9'},
    {value: 'bdr bdr-x-wd-10'},
    {value: 'bdr bdr-x-wd-11'},
    {value: 'bdr bdr-x-wd-12'},
    {value: 'bdr bdr-x-wd-0'},

    {value: 'bdr bdr-y-wd-1'},
    {value: 'bdr bdr-y-wd-2'},
    {value: 'bdr bdr-y-wd-3'},
    {value: 'bdr bdr-y-wd-4'},
    {value: 'bdr bdr-y-wd-5'},
    {value: 'bdr bdr-y-wd-6'},
    {value: 'bdr bdr-y-wd-7'},
    {value: 'bdr bdr-y-wd-8'},
    {value: 'bdr bdr-y-wd-9'},
    {value: 'bdr bdr-y-wd-10'},
    {value: 'bdr bdr-y-wd-11'},
    {value: 'bdr bdr-y-wd-12'},
    {value: 'bdr bdr-y-wd-0'},

    {value: 'bdr bdr-dsh', sectionName: 'Border style', sectionColor: 'warning'},
    {value: 'bdr bdr-dt'},
    {value: 'bdr bdr-sl'},
    {value: 'bdr bdr-t-dsh'},
    {value: 'bdr bdr-t-dt'},
    {value: 'bdr bdr-t-sl'},
    {value: 'bdr bdr-r-dsh'},
    {value: 'bdr bdr-r-dt'},
    {value: 'bdr bdr-r-sl'},
    {value: 'bdr bdr-b-dsh'},
    {value: 'bdr bdr-b-dt'},
    {value: 'bdr bdr-b-sl'},
    {value: 'bdr bdr-l-dsh'},
    {value: 'bdr bdr-l-dt'},
    {value: 'bdr bdr-l-sl'},
    {value: 'bdr bdr-x-dsh'},
    {value: 'bdr bdr-x-dt'},
    {value: 'bdr bdr-x-sl'},
    {value: 'bdr bdr-y-dsh'},
    {value: 'bdr bdr-y-dt'},
    {value: 'bdr bdr-y-sl'},

    {value: 'bdr bdr-op-100', sectionName: 'Border opacity', sectionColor: 'info'},
    {value: 'bdr bdr-op-90'},
    {value: 'bdr bdr-op-80'},
    {value: 'bdr bdr-op-70'},
    {value: 'bdr bdr-op-60'},
    {value: 'bdr bdr-op-50'},
    {value: 'bdr bdr-op-40'},
    {value: 'bdr bdr-op-30'},
    {value: 'bdr bdr-op-20'},
    {value: 'bdr bdr-op-10'},
    {value: 'bdr bdr-op-0'},
  ];

  return (
    <div className="rs-borders">
      <h1 className="mt-0">Border</h1>
      <p className="mb-3">Change border utilities in file <strong className="txt-warning-1 font-we-700">utils/border.scss</strong></p>
      <p className="mb-9">Border colors values copied from file <strong className="txt-warning-1 font-we-700">base/_vars.scss</strong></p>
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
          <RsSelect
            title="Border colors"
            titleColor="txt-info-1"
            link="/colors"
            linkText="colors utility"
            items={borderColors}
            selectEmit={e=>setBorderColor(e.target.value)}
          ></RsSelect>
        </div>
      </div>
      {bordersClassList.map((item, i) => (<div key={i}>
        {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
        <div className="sh-1 p-3 mb-3">
          <div className="case case-cells-1 case-cells-2:md ai-c">
            <div className="cell pb-3 pb-0:md">
              <div className="font-we-500 txt-dark txt-op-60">
                {item.value}<span className="txt-success-1 txt-op-100">{breakpoint}</span> <span className="txt-info-1 txt-op-100">{borderColor}</span>
              </div>
            </div>
            <div className="cell pb-3 pb-0:md">
              <div className={`p-5 ${item.value} ${borderColor}`}></div>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Borders

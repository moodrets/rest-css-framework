import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import RsSelect from '@components/Select'

const Order = () => {

  const [breakpoint, setBreakpoint] = useState('')

  const orderClassList = [
    {value: 'or-0', text: 'order: 1;', sectionName: 'Order classlist'},
    {value: 'or-1', text: 'order: 1;'},
    {value: 'or-2', text: 'order: 3;'},
    {value: 'or-4', text: 'order: 4;'},
    {value: 'or-5', text: 'order: 5;'},
    {value: 'or-6', text: 'order: 6;'},
    {value: 'or-7', text: 'order: 7;'},
    {value: 'or-8', text: 'order: 8;'},
    {value: 'or-9', text: 'order: 9;'},
    {value: 'or-10', text: 'order: 10;'},
    {value: 'or-11', text: 'order: 11;'},
    {value: 'or-12', text: 'order: 12;'},
    {value: 'or-f', text: 'order: -1; (first)'},
    {value: 'or-l', text: 'order: 13; (last)'},
  ]

  return (
    <div className="rs-order">
      <h1 className="mt-0">Order</h1>
      <p className="mb-9">Change order utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/order.scss</strong></p>
      <div className="case case-cells-1 case-cells-2:md ml-5-neg mb-6">
        <div className="cell pl-5 pb-5">
          <RsSelect
            title="Breakpoints"
            titleColor="txt-success-1"
            items={breakpoints}
            selectEmit={e=>setBreakpoint(e.target.value)}
          ></RsSelect>
        </div>
      </div>
      {orderClassList.map((item, i) => (<div key={i}>
        {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
        <div className="sh-1 p-3 mb-3">
          <div className="case case-cells-1 case-cells-3:md ai-c">
            <div className="cell pb-3 pb-0:md">
              <div className="font-we-500 txt-dark txt-op-60">
                {item.value}<span className="txt-success-1 txt-op-100">{breakpoint}</span>
              </div>
            </div>
            <div className="cell pb-3 pb-0:md">
              <div className="font-we-500">{item.text}</div>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Order

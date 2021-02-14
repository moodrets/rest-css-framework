import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import RsSelect from '@components/Select'
import {Link} from 'react-router-dom'

const CaseCells = () => {

  const [breakpoint, setBreakpoint] = useState('')
  const caseCellsClassList = [
    {value: 'case', text: '(wrapper) <br> display: flex; <br> flex-wrap: wrap;', sectionName: 'Case classlist'},
    {value: 'case case-cells-1', sectionName: 'Case cells (set columns behavior with wrapper class)', sectionColor: 'primary'},
    {value: 'case case-cells-2'},
    {value: 'case case-cells-3'},
    {value: 'case case-cells-4'},
    {value: 'case case-cells-5'},
    {value: 'case case-cells-6'},
    {value: 'case case-cells-7'},
    {value: 'case case-cells-8'},
    {value: 'case case-cells-9'},
    {value: 'case case-cells-10'},
    {value: 'case case-cells-11'},
    {value: 'case case-cells-12'},
    {value: 'cell', text: 'child', sectionName: 'Cells classlist'},
    {value: 'cell cell-1', sectionName: 'Case cells (set columns behavior with child class)', sectionColor: 'success'},
    {value: 'cell cell-2'},
    {value: 'cell cell-3'},
    {value: 'cell cell-4'},
    {value: 'cell cell-5'},
    {value: 'cell cell-6'},
    {value: 'cell cell-7'},
    {value: 'cell cell-8'},
    {value: 'cell cell-9'},
    {value: 'cell cell-10'},
    {value: 'cell cell-11'},
    {value: 'cell cell-12'},
  ]

  return (
    <div className="rs-case-cells">
      <h1 className="mt-0">Case Cells (like bootstrap 'row, col')</h1>
      <p className="mb-9">Change case, cells utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/case-cells.scss</strong></p>
      <div className="font-we-700 font-sz-16 txt-info-2">Examples (try in <Link className="txt-primary" to="/playground">playground</Link>)</div>
      <pre className="p-5 my-4 bdr bdr-secondary-2 rds-4 bg-secondary">
        {`<div class="case case-cells-1 case-cells-3:md">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>`}
      </pre>
      <pre className="p-5 my-4 bdr bdr-secondary-2 rds-4 bg-secondary">
        {`<div class="case">
  <div class="cell cell-3:md"></div>
  <div class="cell cell-6:lg"></div>
  <div class="cell cell-1:xl"></div>
</div>`}
      </pre>
      <pre className="p-5 my-4 bdr bdr-secondary-2 rds-4 bg-secondary">
        {`<div class="case case-cells-1 case-cells-3:md">
  <div class="cell"></div>
  <div class="cell cell-2:md"></div>
  <div class="cell cell-2:md"></div>
</div>`}
      </pre>
      <p className="mb-4">For gap use <Link className="txt-primary font-we-600" to="/margin">margin</Link>, <Link className="txt-primary font-we-600" to="/padding">padding</Link> utils</p>
      <pre className="p-5 my-4 bdr bdr-secondary-2 rds-4 bg-secondary">
        {`<div class="case case-cells-1 case-cells-3:md ml-5-neg">
  <div class="cell pl-5 pb-5"></div>
  <div class="cell cell-2:md pl-5 pb-5"></div>
  <div class="cell cell-2:md pl-5 pb-5"></div>
</div>`}
      </pre>
      <p className="mb-4">Combine with <Link className="txt-primary font-we-600" to="/flex">flexbox</Link> utility</p>
      <pre className="p-5 my-4 bdr bdr-secondary-2 rds-4 bg-secondary">
        {`<div class="case case-cells-1 case-cells-3:md ai-fs jc-c">
  <div class="cell"></div>
  <div class="cell cell-2:md"></div>
  <div class="cell cell-2:md or-f:lg"></div>
</div>`}
      </pre>
      <div className="case case-cells-1 case-cells-2:md mt-9 ml-5-neg mb-6">
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
      {caseCellsClassList.map((item, i) => (<div key={i}>
        {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
        <div className="sh-1 p-3 mb-3">
          <div className="case case-cells-1 case-cells-2:md ai-c">
            <div className="cell pb-3 pb-0:md">
              <div className="font-we-500 txt-dark txt-op-60">
                {item.value}<span className="txt-success-1 txt-op-100">{breakpoint}</span>
              </div>
            </div>
            <div className="cell pb-3 pb-0:md" dangerouslySetInnerHTML={{__html: item.text}}>
            </div>
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default CaseCells

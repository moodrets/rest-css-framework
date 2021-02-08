import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import RsSelect from '@components/Select'

const Flex = () => {

  const [breakpoint, setBreakpoint] = useState('')

  const flexClassList = [
    {value: 'd-f', text: 'display: flex;', sectionName: 'Flexbox classlist'},
    {value: 'd-if', text: 'display: inline-flex;'},

    {value: 'fw-wr', text: 'flex-wrap: wrap;', sectionName: 'Flex wrap', sectionColor: 'info-1'},
    {value: 'fw-nw', text: 'flex-wrap: nowrap;'},
    {value: 'fw-wrr', text: 'flex-wrap: wrap-reverse;'},
    {value: 'fw-inh', text: 'flex-wrap: inherit;'},

    {value: 'fd-r', text: 'flex-direction: row;', sectionName: 'Flex direction', sectionColor: 'warning-1'},
    {value: 'fd-rr', text: 'flex-direction: row-reverse;'},
    {value: 'fd-c', text: 'flex-direction: column;'},
    {value: 'fd-cr', text: 'flex-direction: column-reverse;'},
    {value: 'fd-inh', text: 'flex-direction: inherit;'},

    {value: 'fl-ch-n', text: '> * {flex: none;}', sectionName: 'Flex parent class for childs', sectionColor: 'success-1'},
    {value: 'fl-ch-fill', text: '> * {flex: 1 1 0;}'},

    {value: 'fl-n', text: 'flex: none;', sectionName: 'Flex item (child)', sectionColor: 'success'},
    {value: 'fl-fill', text: 'flex: 1 1 0;'},

    {value: 'fl-sh-0', text: 'flex-shrink: 0;', sectionName: 'Flex shrink (child)', sectionColor: 'danger'},
    {value: 'fl-sh-1', text: 'flex-shrink: 1;'},
    {value: 'fl-sh-inh', text: 'flex-shrink: inherit;'},

    {value: 'fl-gr-0', text: 'flex-grow: 0;', sectionName: 'Flex grow (child)', sectionColor: 'theme-1'},
    {value: 'fl-gr-1', text: 'flex-grow: 1;'},
    {value: 'fl-gr-inh', text: 'flex-grow: inherit;'},

    {value: 'jc-st', text: 'justify-content: stretch;', sectionName: 'Justify content', sectionColor: 'primary'},
    {value: 'jc-s', text: 'justify-content: start;'},
    {value: 'jc-e', text: 'justify-content: end;'},
    {value: 'jc-l', text: 'justify-content: left;'},
    {value: 'jc-r', text: 'justify-content: right;'},
    {value: 'jc-c', text: 'justify-content: center;'},
    {value: 'jc-fs', text: 'justify-content: flex-start;'},
    {value: 'jc-fe', text: 'justify-content: flex-end;'},
    {value: 'jc-bs', text: 'justify-content: baseline;'},
    {value: 'jc-fbs', text: 'justify-content: first baseline;'},
    {value: 'jc-lbs', text: 'justify-content: last baseline;'},
    {value: 'jc-sb', text: 'justify-content: space-between;'},
    {value: 'jc-sa', text: 'justify-content: space-around;'},
    {value: 'jc-se', text: 'justify-content: space-evenly;'},
    {value: 'jc-sc', text: 'justify-content: safe center;'},
    {value: 'jc-uc', text: 'justify-content: unsafe center;'},
    {value: 'jc-inh', text: 'justify-content: inherit;'},

    {value: 'ji-a', text: 'justify-items: auto;', sectionName: 'Justify items', sectionColor: 'primary-1'},
    {value: 'ji-nl', text: 'justify-items: normal;'},
    {value: 'ji-st', text: 'justify-items: stretch;'},
    {value: 'ji-c', text: 'justify-items: center;'},
    {value: 'ji-s', text: 'justify-items: start;'},
    {value: 'ji-e', text: 'justify-items: end;'},
    {value: 'ji-ss', text: 'justify-items: self-start;'},
    {value: 'ji-se', text: 'justify-items: self-end;'},
    {value: 'ji-l', text: 'justify-items: left;'},
    {value: 'ji-r', text: 'justify-items: right;'},
    {value: 'ji-bs', text: 'justify-items: baseline;'},
    {value: 'ji-fbs', text: 'justify-items: first baseline;'},
    {value: 'ji-lbs', text: 'justify-items: last baseline;'},
    {value: 'ji-sc', text: 'justify-items: safe center;'},
    {value: 'ji-uc', text: 'justify-items: unsafe center;'},
    {value: 'ji-inh', text: 'justify-items: inherit;'},

    {value: 'jsl-a', text: 'justify-self: auto;', sectionName: 'Justify self', sectionColor: 'primary-2'},
    {value: 'jsl-nl', text: 'justify-self: normal;'},
    {value: 'jsl-st', text: 'justify-self: stretch;'},
    {value: 'jsl-c', text: 'justify-self: center;'},
    {value: 'jsl-s', text: 'justify-self: start;'},
    {value: 'jsl-e', text: 'justify-self: end;'},
    {value: 'jsl-ss', text: 'justify-self: self-start;'},
    {value: 'jsl-se', text: 'justify-self: self-end;'},
    {value: 'jsl-l', text: 'justify-self: left;'},
    {value: 'jsl-r', text: 'justify-self: right;'},
    {value: 'jsl-bs', text: 'justify-self: baseline;'},
    {value: 'jsl-fbs', text: 'justify-self: first baseline;'},
    {value: 'jsl-lbs', text: 'justify-self: last baseline;'},
    {value: 'jsl-sc', text: 'justify-self: safe center;'},
    {value: 'jsl-uc', text: 'justify-self: unsafe center;'},
    {value: 'jsl-inh', text: 'justify-self: inherit;'},

    {value: 'ai-nl', text: 'align-items: normal;', sectionName: 'Align items', sectionColor: 'theme-1'},
    {value: 'ai-st', text: 'align-items: stretch;'},
    {value: 'ai-c', text: 'align-items: center;'},
    {value: 'ai-s', text: 'align-items: start;'},
    {value: 'ai-e', text: 'align-items: end;'},
    {value: 'ai-fs', text: 'align-items: flex-start;'},
    {value: 'ai-fe', text: 'align-items: flex-end;'},
    {value: 'ai-bs', text: 'align-items: baseline;'},
    {value: 'ai-fbs', text: 'align-items: first baseline;'},
    {value: 'ai-lbs', text: 'align-items: last baseline;'},
    {value: 'ai-sc', text: 'align-items: safe center;'},
    {value: 'ai-uc', text: 'align-items: unsafe center;'},
    {value: 'ai-inh', text: 'align-items: inherit;'},

    {value: 'ac-nl', text: 'align-content: nl;', sectionName: 'Align content', sectionColor: 'theme-2'},
    {value: 'ac-st', text: 'align-content: stretch;'},
    {value: 'ac-c', text: 'align-content: center;'},
    {value: 'ac-s', text: 'align-content: start;'},
    {value: 'ac-e', text: 'align-content: end;'},
    {value: 'ac-fs', text: 'align-content: flex-start;'},
    {value: 'ac-fe', text: 'align-content: flex-end;'},
    {value: 'ac-bs', text: 'align-content: baseline;'},
    {value: 'ac-fbs', text: 'align-content: first baseline;'},
    {value: 'ac-lbs', text: 'align-content: last baseline;'},
    {value: 'ac-sb', text: 'align-content: space-between;'},
    {value: 'ac-sa', text: 'align-content: space-around;'},
    {value: 'ac-se', text: 'align-content: space-evenly;'},
    {value: 'ac-sc', text: 'align-content: safe center;'},
    {value: 'ac-uc', text: 'align-content: unsafe center;'},
    {value: 'ac-inh', text: 'align-content: inherit;'},

    {value: 'as-a', text: 'align-self: auto;', sectionName: 'Align self', sectionColor: 'warning'},
    {value: 'as-st', text: 'align-self: stretch;'},
    {value: 'as-nl', text: 'align-self: normal;'},
    {value: 'as-c', text: 'align-self: center;'},
    {value: 'as-s', text: 'align-self: start;'},
    {value: 'as-e', text: 'align-self: end;'},
    {value: 'as-fs', text: 'align-self: flex-start;'},
    {value: 'as-fe', text: 'align-self: flex-end;'},
    {value: 'as-ss', text: 'align-self: self-start;'},
    {value: 'as-se', text: 'align-self: self-end;'},
    {value: 'as-bs', text: 'align-self: baseline;'},
    {value: 'as-fbs', text: 'align-self: first baseline;'},
    {value: 'as-lbs', text: 'align-self: last baseline;'},
    {value: 'as-sc', text: 'align-self: safe center;'},
    {value: 'as-uc', text: 'align-self: unsafe center;'},
    {value: 'as-inh', text: 'align-self: inherit;'},
  ]

  return(
    <div className="rs-flex">
      <h1 className="mt-0">Flexbox</h1>
      <p className="mb-9">Change flex utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/flex.scss</strong></p>
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
      {flexClassList.map((item, i) => (<div key={i}>
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

export default Flex

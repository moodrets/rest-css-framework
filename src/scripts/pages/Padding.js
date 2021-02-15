import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import RsSelect from '@components/Select'

const Padding = () => {

  const [breakpoint, setBreakpoint] = useState('')
  const paddingClassList = [

    {value: 'p-1', text: 'padding: 4px;', sectionName: 'Padding classlist'},
    {value: 'p-2', text: 'padding: 6px;',},
    {value: 'p-3', text: 'padding: 8px;',},
    {value: 'p-4', text: 'padding: 10px;',},
    {value: 'p-5', text: 'padding: 12px;',},
    {value: 'p-6', text: 'padding: 14px;',},
    {value: 'p-7', text: 'padding: 16px;',},
    {value: 'p-8', text: 'padding: 20px;',},
    {value: 'p-9', text: 'padding: 30px;',},
    {value: 'p-10', text: 'padding: 40px;',},
    {value: 'p-11', text: 'padding: 50px;',},
    {value: 'p-12', text: 'padding: 60px;',},
    {value: 'p-13', text: 'padding: 80px;',},
    {value: 'p-0', text: 'padding: 0;',},

    {value: 'pt-1', text: 'padding-top: 4px;', sectionName: 'Padding top', sectionColor: 'info'},
    {value: 'pt-2', text: 'padding-top: 6px;',},
    {value: 'pt-3', text: 'padding-top: 8px;',},
    {value: 'pt-4', text: 'padding-top: 10px;',},
    {value: 'pt-5', text: 'padding-top: 12px;',},
    {value: 'pt-6', text: 'padding-top: 14px;',},
    {value: 'pt-7', text: 'padding-top: 16px;',},
    {value: 'pt-8', text: 'padding-top: 20px;',},
    {value: 'pt-9', text: 'padding-top: 30px;',},
    {value: 'pt-10', text: 'padding-top: 40px;',},
    {value: 'pt-11', text: 'padding-top: 50px;',},
    {value: 'pt-12', text: 'padding-top: 60px;',},
    {value: 'pt-13', text: 'padding-top: 80px;',},
    {value: 'pt-0', text: 'padding-top: 0;',},

    {value: 'pr-1', text: 'padding-right: 4px;', sectionName: 'Padding right', sectionColor: 'success'},
    {value: 'pr-2', text: 'padding-right: 6px;',},
    {value: 'pr-3', text: 'padding-right: 8px;',},
    {value: 'pr-4', text: 'padding-right: 10px;',},
    {value: 'pr-5', text: 'padding-right: 12px;',},
    {value: 'pr-6', text: 'padding-right: 14px;',},
    {value: 'pr-7', text: 'padding-right: 16px;',},
    {value: 'pr-8', text: 'padding-right: 20px;',},
    {value: 'pr-9', text: 'padding-right: 30px;',},
    {value: 'pr-10', text: 'padding-right: 40px;',},
    {value: 'pr-11', text: 'padding-right: 50px;',},
    {value: 'pr-12', text: 'padding-right: 60px;',},
    {value: 'pr-13', text: 'padding-right: 80px;',},
    {value: 'pr-0', text: 'padding-right: 0;',},

    {value: 'pb-1', text: 'padding-bottom: 4px;', sectionName: 'Padding bottom', sectionColor: 'danger'},
    {value: 'pb-2', text: 'padding-bottom: 6px;',},
    {value: 'pb-3', text: 'padding-bottom: 8px;',},
    {value: 'pb-4', text: 'padding-bottom: 10px;',},
    {value: 'pb-5', text: 'padding-bottom: 12px;',},
    {value: 'pb-6', text: 'padding-bottom: 14px;',},
    {value: 'pb-7', text: 'padding-bottom: 16px;',},
    {value: 'pb-8', text: 'padding-bottom: 20px;',},
    {value: 'pb-9', text: 'padding-bottom: 30px;',},
    {value: 'pb-10', text: 'padding-bottom: 40px;',},
    {value: 'pb-11', text: 'padding-bottom: 50px;',},
    {value: 'pb-12', text: 'padding-bottom: 60px;',},
    {value: 'pb-13', text: 'padding-bottom: 80px;',},
    {value: 'pb-0', text: 'padding-bottom: 0;',},

    {value: 'pl-1', text: 'padding-left: 4px;', sectionName: 'Padding left', sectionColor: 'primary'},
    {value: 'pl-2', text: 'padding-left: 6px;',},
    {value: 'pl-3', text: 'padding-left: 8px;',},
    {value: 'pl-4', text: 'padding-left: 10px;',},
    {value: 'pl-5', text: 'padding-left: 12px;',},
    {value: 'pl-6', text: 'padding-left: 14px;',},
    {value: 'pl-7', text: 'padding-left: 16px;',},
    {value: 'pl-8', text: 'padding-left: 20px;',},
    {value: 'pl-9', text: 'padding-left: 30px;',},
    {value: 'pl-10', text: 'padding-left: 40px;',},
    {value: 'pl-11', text: 'padding-left: 50px;',},
    {value: 'pl-12', text: 'padding-left: 60px;',},
    {value: 'pl-13', text: 'padding-left: 80px;',},
    {value: 'pl-0', text: 'padding-left: 0;',},

    {value: 'px-1', text: 'padding-left: 4px; <br> padding-right: 4px;', sectionName: 'Padding horizontal', sectionColor: 'warning'},
    {value: 'px-2', text: 'padding-left: 6px; <br> padding-right: 6px;',},
    {value: 'px-3', text: 'padding-left: 8px; <br> padding-right: 8px;',},
    {value: 'px-4', text: 'padding-left: 10px; <br> padding-right: 10px;',},
    {value: 'px-5', text: 'padding-left: 12px; <br> padding-right: 12px;',},
    {value: 'px-6', text: 'padding-left: 14px; <br> padding-right: 14px;',},
    {value: 'px-7', text: 'padding-left: 16px; <br> padding-right: 16px;',},
    {value: 'px-8', text: 'padding-left: 20px; <br> padding-right: 20px;',},
    {value: 'px-9', text: 'padding-left: 30px; <br> padding-right: 30px;',},
    {value: 'px-10', text: 'padding-left: 40px; <br> padding-right: 40px;',},
    {value: 'px-11', text: 'padding-left: 50px; <br> padding-right: 50px;',},
    {value: 'px-12', text: 'padding-left: 60px; <br> padding-right: 60px;',},
    {value: 'px-13', text: 'padding-left: 80px; <br> padding-right: 80px;',},
    {value: 'px-0', text: 'padding-left: 0; <br> padding-right: 0;',},

    {value: 'py-1', text: 'padding-top: 4px; <br> padding-bottom: 4px;', sectionName: 'Padding vertical', sectionColor: 'danger-2'},
    {value: 'py-2', text: 'padding-top: 6px; <br> padding-bottom: 6px;',},
    {value: 'py-3', text: 'padding-top: 8px; <br> padding-bottom: 8px;',},
    {value: 'py-4', text: 'padding-top: 10px; <br> padding-bottom: 10px;',},
    {value: 'py-5', text: 'padding-top: 12px; <br> padding-bottom: 12px;',},
    {value: 'py-6', text: 'padding-top: 14px; <br> padding-bottom: 14px;',},
    {value: 'py-7', text: 'padding-top: 16px; <br> padding-bottom: 16px;',},
    {value: 'py-8', text: 'padding-top: 20px; <br> padding-bottom: 20px;',},
    {value: 'py-9', text: 'padding-top: 30px; <br> padding-bottom: 30px;',},
    {value: 'py-10', text: 'padding-top: 40px; <br> padding-bottom: 40px;',},
    {value: 'py-11', text: 'padding-top: 50px; <br> padding-bottom: 50px;',},
    {value: 'py-12', text: 'padding-top: 60px; <br> padding-bottom: 60px;',},
    {value: 'py-13', text: 'padding-top: 80px; <br> padding-bottom: 80px;',},
    {value: 'py-0', text: 'padding-top: 0; <br> padding-bottom: 0;',},
  ]

  return (
    <div className="rs-padding">
      <h1 className="mt-0">Padding</h1>
      <p className="mb-3">Change padding utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/padding.scss</strong></p>
      <p className="mb-9">Spacing values <span className="txt-danger">($spacing-list, $spacing-negative-list)</span> in file <strong className="txt-warning-1 font-we-700">base/_vars.scss</strong></p>
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
      {paddingClassList.map((item, i) => (<div key={i}>
        {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
        <div className="sh-1 p-3 mb-3">
          <div className="case case-cells-1 case-cells-2:md ai-c">
            <div className="cell pb-3 pb-0:md">
              <div className="font-we-500 txt-dark txt-op-60">
                {item.value}<span className="txt-success-1 txt-op-100">{breakpoint}</span>
              </div>
            </div>
            <div className="cell pb-3 pb-0:md" dangerouslySetInnerHTML={{__html: item.text}}></div>
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Padding

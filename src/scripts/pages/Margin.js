import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import RsSelect from '@components/Select'

const Margin = () => {

  const [breakpoint, setBreakpoint] = useState('')
  const marginClassList = [

    {value: 'm-1', text: 'margin: 4px;', sectionName: 'Margin classlist'},
    {value: 'm-2', text: 'margin: 6px;',},
    {value: 'm-3', text: 'margin: 8px;',},
    {value: 'm-4', text: 'margin: 10px;',},
    {value: 'm-5', text: 'margin: 12px;',},
    {value: 'm-6', text: 'margin: 14px;',},
    {value: 'm-7', text: 'margin: 16px;',},
    {value: 'm-8', text: 'margin: 20px;',},
    {value: 'm-9', text: 'margin: 30px;',},
    {value: 'm-10', text: 'margin: 40px;',},
    {value: 'm-11', text: 'margin: 50px;',},
    {value: 'm-12', text: 'margin: 60px;',},
    {value: 'm-13', text: 'margin: 80px;',},
    {value: 'm-0', text: 'margin: 0;',},
    {value: 'm-1-neg', text: 'margin: -4px;',},
    {value: 'm-2-neg', text: 'margin: -6px;',},
    {value: 'm-3-neg', text: 'margin: -8px;',},
    {value: 'm-4-neg', text: 'margin: -10px;',},
    {value: 'm-5-neg', text: 'margin: -12px;',},
    {value: 'm-6-neg', text: 'margin: -14px;',},
    {value: 'm-7-neg', text: 'margin: -16px;',},
    {value: 'm-8-neg', text: 'margin: -20px;',},
    {value: 'm-9-neg', text: 'margin: -30px;',},
    {value: 'm-10-neg', text: 'margin: -40px;',},
    {value: 'm-11-neg', text: 'margin: -50px;',},
    {value: 'm-12-neg', text: 'margin: -60px;',},
    {value: 'm-13-neg', text: 'margin: -80px;',},

    {value: 'mt-1', text: 'margin-top: 4px;', sectionName: 'Margin top', sectionColor: 'info'},
    {value: 'mt-2', text: 'margin-top: 6px;',},
    {value: 'mt-3', text: 'margin-top: 8px;',},
    {value: 'mt-4', text: 'margin-top: 10px;',},
    {value: 'mt-5', text: 'margin-top: 12px;',},
    {value: 'mt-6', text: 'margin-top: 14px;',},
    {value: 'mt-7', text: 'margin-top: 16px;',},
    {value: 'mt-8', text: 'margin-top: 20px;',},
    {value: 'mt-9', text: 'margin-top: 30px;',},
    {value: 'mt-10', text: 'margin-top: 40px;',},
    {value: 'mt-11', text: 'margin-top: 50px;',},
    {value: 'mt-12', text: 'margin-top: 60px;',},
    {value: 'mt-13', text: 'margin-top: 80px;',},
    {value: 'mt-0', text: 'margin-top: 0;',},
    {value: 'mt-1-neg', text: 'margin-top: -4px;',},
    {value: 'mt-2-neg', text: 'margin-top: -6px;',},
    {value: 'mt-3-neg', text: 'margin-top: -8px;',},
    {value: 'mt-4-neg', text: 'margin-top: -10px;',},
    {value: 'mt-5-neg', text: 'margin-top: -12px;',},
    {value: 'mt-6-neg', text: 'margin-top: -14px;',},
    {value: 'mt-7-neg', text: 'margin-top: -16px;',},
    {value: 'mt-8-neg', text: 'margin-top: -20px;',},
    {value: 'mt-9-neg', text: 'margin-top: -30px;',},
    {value: 'mt-10-neg', text: 'margin-top: -40px;',},
    {value: 'mt-11-neg', text: 'margin-top: -50px;',},
    {value: 'mt-12-neg', text: 'margin-top: -60px;',},
    {value: 'mt-13-neg', text: 'margin-top: -80px;',},

    {value: 'mr-1', text: 'margin-right: 4px;', sectionName: 'Margin right', sectionColor: 'success'},
    {value: 'mr-2', text: 'margin-right: 6px;',},
    {value: 'mr-3', text: 'margin-right: 8px;',},
    {value: 'mr-4', text: 'margin-right: 10px;',},
    {value: 'mr-5', text: 'margin-right: 12px;',},
    {value: 'mr-6', text: 'margin-right: 14px;',},
    {value: 'mr-7', text: 'margin-right: 16px;',},
    {value: 'mr-8', text: 'margin-right: 20px;',},
    {value: 'mr-9', text: 'margin-right: 30px;',},
    {value: 'mr-10', text: 'margin-right: 40px;',},
    {value: 'mr-11', text: 'margin-right: 50px;',},
    {value: 'mr-12', text: 'margin-right: 60px;',},
    {value: 'mr-13', text: 'margin-right: 80px;',},
    {value: 'mr-0', text: 'margin-right: 0;',},
    {value: 'mr-1-neg', text: 'margin-right: -4px;',},
    {value: 'mr-2-neg', text: 'margin-right: -6px;',},
    {value: 'mr-3-neg', text: 'margin-right: -8px;',},
    {value: 'mr-4-neg', text: 'margin-right: -10px;',},
    {value: 'mr-5-neg', text: 'margin-right: -12px;',},
    {value: 'mr-6-neg', text: 'margin-right: -14px;',},
    {value: 'mr-7-neg', text: 'margin-right: -16px;',},
    {value: 'mr-8-neg', text: 'margin-right: -20px;',},
    {value: 'mr-9-neg', text: 'margin-right: -30px;',},
    {value: 'mr-10-neg', text: 'margin-right: -40px;',},
    {value: 'mr-11-neg', text: 'margin-right: -50px;',},
    {value: 'mr-12-neg', text: 'margin-right: -60px;',},
    {value: 'mr-13-neg', text: 'margin-right: -80px;',},

    {value: 'mb-1', text: 'margin-bottom: 4px;', sectionName: 'Margin bottom', sectionColor: 'danger'},
    {value: 'mb-2', text: 'margin-bottom: 6px;',},
    {value: 'mb-3', text: 'margin-bottom: 8px;',},
    {value: 'mb-4', text: 'margin-bottom: 10px;',},
    {value: 'mb-5', text: 'margin-bottom: 12px;',},
    {value: 'mb-6', text: 'margin-bottom: 14px;',},
    {value: 'mb-7', text: 'margin-bottom: 16px;',},
    {value: 'mb-8', text: 'margin-bottom: 20px;',},
    {value: 'mb-9', text: 'margin-bottom: 30px;',},
    {value: 'mb-10', text: 'margin-bottom: 40px;',},
    {value: 'mb-11', text: 'margin-bottom: 50px;',},
    {value: 'mb-12', text: 'margin-bottom: 60px;',},
    {value: 'mb-13', text: 'margin-bottom: 80px;',},
    {value: 'mb-0', text: 'margin-bottom: 0;',},
    {value: 'mb-1-neg', text: 'margin-bottom: -4px;',},
    {value: 'mb-2-neg', text: 'margin-bottom: -6px;',},
    {value: 'mb-3-neg', text: 'margin-bottom: -8px;',},
    {value: 'mb-4-neg', text: 'margin-bottom: -10px;',},
    {value: 'mb-5-neg', text: 'margin-bottom: -12px;',},
    {value: 'mb-6-neg', text: 'margin-bottom: -14px;',},
    {value: 'mb-7-neg', text: 'margin-bottom: -16px;',},
    {value: 'mb-8-neg', text: 'margin-bottom: -20px;',},
    {value: 'mb-9-neg', text: 'margin-bottom: -30px;',},
    {value: 'mb-10-neg', text: 'margin-bottom: -40px;',},
    {value: 'mb-11-neg', text: 'margin-bottom: -50px;',},
    {value: 'mb-12-neg', text: 'margin-bottom: -60px;',},
    {value: 'mb-13-neg', text: 'margin-bottom: -80px;',},

    {value: 'ml-1', text: 'margin-left: 4px;', sectionName: 'Margin left', sectionColor: 'primary'},
    {value: 'ml-2', text: 'margin-left: 6px;',},
    {value: 'ml-3', text: 'margin-left: 8px;',},
    {value: 'ml-4', text: 'margin-left: 10px;',},
    {value: 'ml-5', text: 'margin-left: 12px;',},
    {value: 'ml-6', text: 'margin-left: 14px;',},
    {value: 'ml-7', text: 'margin-left: 16px;',},
    {value: 'ml-8', text: 'margin-left: 20px;',},
    {value: 'ml-9', text: 'margin-left: 30px;',},
    {value: 'ml-10', text: 'margin-left: 40px;',},
    {value: 'ml-11', text: 'margin-left: 50px;',},
    {value: 'ml-12', text: 'margin-left: 60px;',},
    {value: 'ml-13', text: 'margin-left: 80px;',},
    {value: 'ml-0', text: 'margin-left: 0;',},
    {value: 'ml-1-neg', text: 'margin-left: -4px;',},
    {value: 'ml-2-neg', text: 'margin-left: -6px;',},
    {value: 'ml-3-neg', text: 'margin-left: -8px;',},
    {value: 'ml-4-neg', text: 'margin-left: -10px;',},
    {value: 'ml-5-neg', text: 'margin-left: -12px;',},
    {value: 'ml-6-neg', text: 'margin-left: -14px;',},
    {value: 'ml-7-neg', text: 'margin-left: -16px;',},
    {value: 'ml-8-neg', text: 'margin-left: -20px;',},
    {value: 'ml-9-neg', text: 'margin-left: -30px;',},
    {value: 'ml-10-neg', text: 'margin-left: -40px;',},
    {value: 'ml-11-neg', text: 'margin-left: -50px;',},
    {value: 'ml-12-neg', text: 'margin-left: -60px;',},
    {value: 'ml-13-neg', text: 'margin-left: -80px;',},

    {value: 'mx-1', text: 'margin-left: 4px; <br> margin-right: 4px;', sectionName: 'Margin horizontal', sectionColor: 'warning'},
    {value: 'mx-2', text: 'margin-left: 6px; <br> margin-right: 6px;',},
    {value: 'mx-3', text: 'margin-left: 8px; <br> margin-right: 8px;',},
    {value: 'mx-4', text: 'margin-left: 10px; <br> margin-right: 10px;',},
    {value: 'mx-5', text: 'margin-left: 12px; <br> margin-right: 12px;',},
    {value: 'mx-6', text: 'margin-left: 14px; <br> margin-right: 14px;',},
    {value: 'mx-7', text: 'margin-left: 16px; <br> margin-right: 16px;',},
    {value: 'mx-8', text: 'margin-left: 20px; <br> margin-right: 20px;',},
    {value: 'mx-9', text: 'margin-left: 30px; <br> margin-right: 30px;',},
    {value: 'mx-10', text: 'margin-left: 40px; <br> margin-right: 40px;',},
    {value: 'mx-11', text: 'margin-left: 50px; <br> margin-right: 50px;',},
    {value: 'mx-12', text: 'margin-left: 60px; <br> margin-right: 60px;',},
    {value: 'mx-13', text: 'margin-left: 80px; <br> margin-right: 80px;',},
    {value: 'mx-0', text: 'margin-left: 0; <br> margin-right: 0;',},
    {value: 'mx-1-neg', text: 'margin-left: -4px; <br> margin-right: -4px;',},
    {value: 'mx-2-neg', text: 'margin-left: -6px; <br> margin-right: -6px;',},
    {value: 'mx-3-neg', text: 'margin-left: -8px; <br> margin-right: -8px;',},
    {value: 'mx-4-neg', text: 'margin-left: -10px; <br> margin-right: -10px;',},
    {value: 'mx-5-neg', text: 'margin-left: -12px; <br> margin-right: -12px;',},
    {value: 'mx-6-neg', text: 'margin-left: -14px; <br> margin-right: -14px;',},
    {value: 'mx-7-neg', text: 'margin-left: -16px; <br> margin-right: -16px;',},
    {value: 'mx-8-neg', text: 'margin-left: -20px; <br> margin-right: -20px;',},
    {value: 'mx-9-neg', text: 'margin-left: -30px; <br> margin-right: -30px;',},
    {value: 'mx-10-neg', text: 'margin-left: -40px; <br> margin-right: -40px;',},
    {value: 'mx-11-neg', text: 'margin-left: -50px; <br> margin-right: -50px;',},
    {value: 'mx-12-neg', text: 'margin-left: -60px; <br> margin-right: -60px;',},
    {value: 'mx-13-neg', text: 'margin-left: -80px; <br> margin-right: -80px;',},

    {value: 'my-1', text: 'margin-top: 4px; <br> margin-bottom: 4px;', sectionName: 'Margin vertical', sectionColor: 'danger-2'},
    {value: 'my-2', text: 'margin-top: 6px; <br> margin-bottom: 6px;',},
    {value: 'my-3', text: 'margin-top: 8px; <br> margin-bottom: 8px;',},
    {value: 'my-4', text: 'margin-top: 10px; <br> margin-bottom: 10px;',},
    {value: 'my-5', text: 'margin-top: 12px; <br> margin-bottom: 12px;',},
    {value: 'my-6', text: 'margin-top: 14px; <br> margin-bottom: 14px;',},
    {value: 'my-7', text: 'margin-top: 16px; <br> margin-bottom: 16px;',},
    {value: 'my-8', text: 'margin-top: 20px; <br> margin-bottom: 20px;',},
    {value: 'my-9', text: 'margin-top: 30px; <br> margin-bottom: 30px;',},
    {value: 'my-10', text: 'margin-top: 40px; <br> margin-bottom: 40px;',},
    {value: 'my-11', text: 'margin-top: 50px; <br> margin-bottom: 50px;',},
    {value: 'my-12', text: 'margin-top: 60px; <br> margin-bottom: 60px;',},
    {value: 'my-13', text: 'margin-top: 80px; <br> margin-bottom: 80px;',},
    {value: 'my-0', text: 'margin-top: 0; <br> margin-bottom: 0;',},
    {value: 'my-1-neg', text: 'margin-top: -4px; <br> margin-bottom: -4px;',},
    {value: 'my-2-neg', text: 'margin-top: -6px; <br> margin-bottom: -6px;',},
    {value: 'my-3-neg', text: 'margin-top: -8px; <br> margin-bottom: -8px;',},
    {value: 'my-4-neg', text: 'margin-top: -10px; <br> margin-bottom: -10px;',},
    {value: 'my-5-neg', text: 'margin-top: -12px; <br> margin-bottom: -12px;',},
    {value: 'my-6-neg', text: 'margin-top: -14px; <br> margin-bottom: -14px;',},
    {value: 'my-7-neg', text: 'margin-top: -16px; <br> margin-bottom: -16px;',},
    {value: 'my-8-neg', text: 'margin-top: -20px; <br> margin-bottom: -20px;',},
    {value: 'my-9-neg', text: 'margin-top: -30px; <br> margin-bottom: -30px;',},
    {value: 'my-10-neg', text: 'margin-top: -40px; <br> margin-bottom: -40px;',},
    {value: 'my-11-neg', text: 'margin-top: -50px; <br> margin-bottom: -50px;',},
    {value: 'my-12-neg', text: 'margin-top: -60px; <br> margin-bottom: -60px;',},
    {value: 'my-13-neg', text: 'margin-top: -80px; <br> margin-bottom: -80px;',},
  ]

  return (
    <div className="rs-margin">
      <h1 className="mt-0">Margin</h1>
      <p className="mb-3">Change margin utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/margin.scss</strong></p>
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
      {marginClassList.map((item, i) => (<div key={i}>
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

export default Margin

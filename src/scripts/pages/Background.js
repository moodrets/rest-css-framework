import React, {useState} from 'react'
import {breakpoints} from '@helpers'
import {cssColorVars} from '@helpers'
import RsSelect from '@components/Select'
import pic from '@img/pic.png'

const Background = () => {

  const [breakpoint, setBreakpoint] = useState('')
  const [colorState, setColorState] = useState('')
  const colorStateSelect = [
    {value: '', text: 'default'},
    {value: ':h', text: 'hover'},
    {value: ':f', text: 'focus'},
    {value: ':fw', text: 'focus-within'},
    {value: ':fv', text: 'focus-visible'},
    {value: ':pl', text: 'placeholder'},
    {value: ':gh', text: 'group-hover'},
    {value: ':gf', text: 'group-focus'},
    {value: ':ga', text: 'group-active'},
  ]
  const inlineStyle = {
    width: '100px',
    height: '100px',
    backgroundImage: `url(${pic})`,
  }

  const backgroundClassList = []

  backgroundClassList.push({value: 'bg-n', text: 'background: none;', sectionName: 'Background classlist'})

  cssColorVars.map((item, i) => {
    let colorItem = null
    if (i === 0) {
      colorItem = {
        sectionName: 'Background colors',
        sectionColor: 'secondary-2',
        value: `bg-${item}`,
        demonstrate: true,
        type: 'color'
      }
    } else {
      colorItem = {
        value: `bg-${item}`,
        demonstrate: true,
        type: 'color'
      }
    }

    backgroundClassList.push(colorItem)
  })

  backgroundClassList.push(...[

    {value: 'bg-op-100', addClass: 'bg-success', demonstrate: true, sectionName: 'Background color opacity', sectionColor: 'success-2'},
    {value: 'bg-op-90', addClass: 'bg-success-1', demonstrate: true},
    {value: 'bg-op-80', addClass: 'bg-success-2', demonstrate: true},
    {value: 'bg-op-70', addClass: 'bg-info', demonstrate: true},
    {value: 'bg-op-60', addClass: 'bg-info-1', demonstrate: true},
    {value: 'bg-op-50', addClass: 'bg-info-2', demonstrate: true},
    {value: 'bg-op-40', addClass: 'bg-warning', demonstrate: true},
    {value: 'bg-op-30', addClass: 'bg-warning-1', demonstrate: true},
    {value: 'bg-op-20', addClass: 'bg-warning-2', demonstrate: true},
    {value: 'bg-op-10', addClass: 'bg-primary', demonstrate: true},
    {value: 'bg-op-0', addClass: 'bg-primary-1', demonstrate: true},

    {value: 'bg-gr-primary', demonstrate: true, sectionName: 'Background gradient', sectionColor: 'success'},
    {value: 'bg-gr-secondary', demonstrate: true},
    {value: 'bg-gr-success', demonstrate: true},
    {value: 'bg-gr-warning', demonstrate: true},
    {value: 'bg-gr-info', demonstrate: true},
    {value: 'bg-gr-danger', demonstrate: true},

    {value: 'bg-pos-t', addClass: 'bg-rep-nr', pic: true, text: 'background-position: top;', sectionName: 'Background position', sectionColor: 'info'},
    {value: 'bg-pos-b', addClass: 'bg-rep-nr', pic: true, text: 'background-position: bottom;',},
    {value: 'bg-pos-r', addClass: 'bg-rep-nr', pic: true, text: 'background-position: right;',},
    {value: 'bg-pos-l', addClass: 'bg-rep-nr', pic: true, text: 'background-position: left;',},
    {value: 'bg-pos-c', addClass: 'bg-rep-nr', pic: true, text: 'background-position: center;',},
    {value: 'bg-pos-lt', addClass: 'bg-rep-nr', pic: true, text: 'background-position: left top;',},
    {value: 'bg-pos-lb', addClass: 'bg-rep-nr', pic: true, text: 'background-position: left bottom;',},
    {value: 'bg-pos-rt', addClass: 'bg-rep-nr', pic: true, text: 'background-position: right top;',},
    {value: 'bg-pos-rb', addClass: 'bg-rep-nr', pic: true, text: 'background-position: right bottom;',},

    {value: 'bg-rep', pic: true, text: 'background-repeat: repeat;', sectionName: 'Background repeat', sectionColor: 'warning'},
    {value: 'bg-rep-y', pic: true, text: 'background-repeat: repeat-y;',},
    {value: 'bg-rep-x', pic: true, text: 'background-repeat: repeat-x;',},
    {value: 'bg-rep-nr', pic: true, text: 'background-repeat: no-repeat;',},


    {value: 'bg-att-sc', addClass: 'bg-rep-nr', pic: true, text: 'background-attachment: scroll;', sectionName: 'Background attachment', sectionColor: 'danger'},
    {value: 'bg-att-lc', addClass: 'bg-rep-nr', pic: true, text: 'background-attachment: local;'},
    {value: 'bg-att-fx', pic: true, text: 'background-attachment: fixed;'},

    {value: 'bg-sz-cv', addClass: 'bg-rep-nr', pic: true, text: 'background-size: cover;', sectionName: 'Background size', sectionColor: 'primary'},
    {value: 'bg-sz-cn', addClass: 'bg-rep-nr', pic: true, text: 'background-size: contain;'},
    {value: 'bg-sz-a', addClass: 'bg-rep-nr', pic: true, text: 'background-size: auto;'},

    {value: 'bg-cl-bb', addClass: 'bg-rep-nr bg-pos-l-t', pic: true, text: 'background-clip: border-box;', sectionName: 'Background clip', sectionColor: 'theme-2'},
    {value: 'bg-cl-pb', addClass: 'bg-rep-nr bg-pos-l-t', pic: true, text: 'background-clip: padding-box;'},
    {value: 'bg-cl-cb', addClass: 'bg-rep-nr bg-pos-l-t', pic: true, text: 'background-clip: content-box;'},
    {value: 'bg-cl-txt', addClass: 'bg-rep-nr bg-pos-l-t', pic: true, text: 'background-clip: text;'},
  ])

  return (
    <div className="rs-background">
      <h1 className="mt-0">Background</h1>
      <p className="mb-3">Change background utilities values, class names in file <strong className="txt-warning-1 font-we-700">utils/background.scss</strong></p>
      <p className="mb-9">Background colors values copied from file <strong className="txt-warning-1 font-we-700">base/_vars.scss</strong></p>
      <div className="case case-cells-1 case-cells-2:md ml-5-neg">
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
            title="Color states"
            titleColor="txt-success"
            items={colorStateSelect}
            selectEmit={e=>setColorState(e.target.value)}
          ></RsSelect>
        </div>
      </div>
      {backgroundClassList.map((item, i) => (
        <div key={i}>
          {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
          <div className="sh-1 p-3 mb-3">
            <div className="case case-cells-1 case-cells-2:md ai-c">
              <div className="cell pb-3 pb-0:md">
                <div className="font-we-500 txt-dark txt-op-60">
                  {item.value}{item.type !== 'color' ? <span className="txt-success-1 txt-op-100">{breakpoint}</span> : <span className="txt-success txt-op-100">{colorState}</span>}
                </div>
              </div>
              <div className="cell pb-3 pb-0:md">
                {item.demonstrate ? <div className={`${item.value} ${item.addClass} rds-pill sz-5 sh-1`}></div> : ''}
                <div className="d-f ai-c">
                  {item.pic ? <div className={`${item.value} ${item.addClass} bdr bdr-secondary rds-3 bdr-wd-2 p-3 mr-4`} style={inlineStyle}></div> : ''}
                  {item.text ? <div>{item.text}</div> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Background

import React from 'react'

const BoxSizing = () => {

  const boxSizingClassList = [
    {value: 'bx-bb', text: 'box-sizing: border-box'},
    {value: 'bx-cb', text: 'box-sizing: content-box'},
    {value: 'bx-bb-all', text: '* {box-sizing: border-box}'},
    {value: 'bx-cb-all', text: '* {box-sizing: content-box}'},
  ]

  return (
    <div className="rs-box-sizing">
      <h1 className="mt-0">Box sizing</h1>
      <p className="mb-9">Change box sizing utility values, class names in file <strong className="txt-warning-1 font-we-700">utils/box-sizing.scss</strong></p>
      {boxSizingClassList.map((item, i) => (
        <div key={i}>
          {item.sectionName ? (<div className={`font-sz-18 font-we-700 my-8 txt-${item.sectionColor}`}>{item.sectionName}</div>) : ''}
          <div className="sh-1 p-3 mb-3">
            <div className="case case-cells-1 case-cells-2:md ai-c">
              <div className="cell pb-3 pb-0:md">
                <div className="font-we-500 txt-dark txt-op-60">
                  {item.value}
                </div>
              </div>
              <div className="cell pb-3 pb-0:md">
                {item.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BoxSizing

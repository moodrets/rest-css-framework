import React from 'react'
import {useState} from 'react'

const PlaygroundItem = () => {

  const [classList, setClassList] = useState('parent-element bdr p-3')
  const [childs, setChilds] = useState([])

  const childsChange = (value = '', id) => {

    if (value === 'remove' && id ) {
      setChilds(childs.filter(child => child.id !== id))
      return
    }

    if (value && id) {
      setChilds(()=>{
        return childs.map(child=>{
          if (child.id === id) {
            child.classList = value
          }
          return child
        })
      })
    } else {
      setChilds(()=>[...childs, {
        id: `r-child-${Date.now()}`,
        classList: value,
      }])
    }
  }

  return(
    <div className="mb-4 sh-2 p-5 pos-rel">
      <div className="d-f bdr-b bdr-secondary pb-5 mb-5">
        <button onClick={e=>childsChange()} className="button bg-primary txt-light rds-3 py-2 px-3 mr-2 font-we-500">Append child</button>
      </div>
      <div>
        <div className="mb-4 font-we-500 txt-success">Change elements classList (with space): <span className="txt-warning-1">all added nodes contenteditable</span></div>
        <textarea value={classList} onInput={e=>setClassList(e.target.value)} className="rsz-y wd-full mb-7 p-3 out-n rds-4 bdr bdr-wd-2 bdr-secondary"></textarea>
        <div className="case case-cells-1 case-cells-2:md ml-4-neg mb-4">
          {childs.map((child, childIndex)=>(
            <div className="cell d-f ai-c pb-4 pl-4" key={childIndex}>
              <span className="mr-4 font-we-500 txt-primary f-n">{childIndex+1}</span>
              <input onInput={e=>childsChange(e.target.value, child.id)} type="text" className="out-n rds-4 bdr bdr-wd-2 bdr-secondary d-b wd-full p-3" placeholder="Child element classList" />
              <span className="f-n button bg-danger d-f ai-c jc-c rds-pill ml-4 sz-4 txt-c txt-light font-sz-18 lh-18" onClick={e=>childsChange('remove', child.id)}>&times;</span>
            </div>
          ))}
         </div>
      </div>
      <div suppressContentEditableWarning="true" contentEditable className={classList + ' out-n'}>
        {childs.map((child)=>( <div id={`${child.id}`} className={child.classList} suppressContentEditableWarning="true" contentEditable key={child.id}>some child text</div> ))}
      </div>
    </div>
  )
}

export default PlaygroundItem

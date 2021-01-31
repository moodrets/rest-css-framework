import React from 'react'
import {useState} from 'react'

const PlaygroundItem = () => {

  const [classList, setClassList]  = useState('')

  return(
    <div className="mb-4 sh-2 p-5 pos-rel">
      <textarea onInput={e=>setClassList(e.target.value)} placeholder="Element class list (with space)" className="wd-full mb-7 p-3 out-n rds-4 bdr bdr-wd-2 bdr-secondary"></textarea>
      <div suppressContentEditableWarning="true" className={classList + ' out-n'} contentEditable>Element some text (editable)</div>
    </div>
  )
}

export default PlaygroundItem

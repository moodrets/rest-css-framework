import React from 'react'
import {useState} from 'react'
import PlaygroundItem from './PlayGroundItem'

const Playground = () => {

  const [elements, setElement] = useState([])

  return (
    <div className="rs-playground">
      <h1 className="mt-0">Playground</h1>
      <p className="mb-9">
        <button onClick={e=>setElement(()=>[...elements, {}])} className="button bg-success bg-success-1:h txt-light p-4 rds-5 trs-03">Add Element</button>
      </p>
      {elements ? elements.map((element, index) => (<PlaygroundItem key={index} />)) : ''}
    </div>
  )
}

export default Playground

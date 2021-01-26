import React from 'react'
import Header from '@components/Header'
import Aside from '@components/Aside'
import RouterView from './router/index'

const App = () => {
  return(
    <div className="pb-9">
      <Header />
      <div className="container mx-a px-4 px-6:lg font-sz-16">
        <div className="case ml-8-neg:lg">
          <aside className="cell cell-12 cell-3:lg pl-8:lg d-n d-b:lg">
            <Aside></Aside>
          </aside>
          <main className="cell cell-12 cell-9:lg pl-8:lg">
            <RouterView></RouterView>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

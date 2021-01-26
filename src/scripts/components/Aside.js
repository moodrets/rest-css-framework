import React from 'react'
import {NavLink} from 'react-router-dom'
import {routes} from '../router/index'

export default () => {

  const styles = {
    height: 'calc(100vh - 110px)'
  }

  return (
    <div className="rs-aside-menu d-f fd-c ai-fe ov-y-a pos-sti pos-t-13 pr-3" style={styles}>
      {routes.map((route, i) => (
        <NavLink
          exact
          className="font-we-500 txt-r font-sz-15 mb-4 py-2 bdr-b bdr-b-wd-2 bdr-primary d-b txt-primary td-n"
          activeClassName="txt-success bdr-success bdr-success:h"
          to={route.path}
          key={i}
        >{route.name}</NavLink>
      ))}
    </div>
  )
}

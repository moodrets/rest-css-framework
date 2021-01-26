import React from 'react'
import {Switch, Route} from 'react-router-dom'

// pages
import Home from '@pages/Home'
import Colors from '@pages/Colors'
import Borders from '@pages/Borders'

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/colors',
    component: Colors,
    name: 'Colors',
  },
  {
    path: '/borders',
    component: Borders,
    name: 'Borders',
  }
]

const RouterView = () => {
  return (
    <Switch>
      {routes.map((route, i) => (<Route exact key={i} {...route}></Route>))}
    </Switch>
  )
}

export default RouterView

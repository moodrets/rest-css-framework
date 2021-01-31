import React from 'react'
import {Switch, Route} from 'react-router-dom'

// pages
import Home from '@pages/Home'
import Colors from '@pages/Colors'
import Border from '@pages/Border'
import BorderRadius from '@pages/BorderRadius'
import Playground from '@pages/Playground/Playground'

export const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/playground',
    component: Playground,
    name: 'Playground',
  },
  {
    path: '/colors',
    component: Colors,
    name: 'Colors',
  },
  {
    path: '/border',
    component: Border,
    name: 'Border',
  },
  {
    path: '/border-radius',
    component: BorderRadius,
    name: 'Border radius',
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

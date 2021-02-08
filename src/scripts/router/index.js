import React from 'react'
import {Switch, Route} from 'react-router-dom'

// pages
import Home from '@pages/Home'
import Colors from '@pages/Colors'
import Border from '@pages/Border'
import BorderRadius from '@pages/BorderRadius'
import Playground from '@pages/Playground/Playground'
import Flex from '@pages/Flex'
import Order from '@pages/Order'
import Background from '@pages/Background'

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
  },
  {
    path: '/background',
    component: Background,
    name: 'Background',
  },
  {
    path: '/flex',
    component: Flex,
    name: 'Flexbox',
  },
  {
    path: '/order',
    component: Order,
    name: 'Order',
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

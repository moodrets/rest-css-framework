import React from 'react'
import {Switch, Route} from 'react-router-dom'

// pages
import About from '@pages/About'
import Colors from '@pages/Colors'
import CaseCells from '@pages/CaseCells'
import BoxSizing from '@pages/BoxSizing'
import Border from '@pages/Border'
import BorderRadius from '@pages/BorderRadius'
import Playground from '@pages/Playground/Playground'
import Flex from '@pages/Flex'
import Order from '@pages/Order'
import Background from '@pages/Background'
import Margin from '@pages/Margin'
import Padding from '@pages/Padding'

export const routes = [
  {path: '/', component: About, name: 'About'},
  {path: '/playground', component: Playground, name: 'Playground'},
  {path: '/colors', component: Colors, name: 'Colors'},
  {path: '/case-cells', component: CaseCells, name: 'Case-Cells'},
  {path: '/box-sizing', component: BoxSizing, name: 'Box sizing'},
  {path: '/border', component: Border, name: 'Border'},
  {path: '/border-radius', component: BorderRadius, name: 'Border radius'},
  {path: '/background', component: Background, name: 'Background'},
  {path: '/flex', component: Flex, name: 'Flexbox'},
  {path: '/order', component: Order, name: 'Order'},
  {path: '/margin', component: Margin, name: 'Margin'},
  {path: '/padding', component: Padding, name: 'Padding'},
]

const RouterView = () => {
  return (
    <Switch>
      {routes.map((route, i) => (<Route exact key={i} {...route}></Route>))}
    </Switch>
  )
}

export default RouterView

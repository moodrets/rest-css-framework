import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '@/pages/Main'
import Flex from '@/pages/Flex'
import Breakpoints from '@/pages/Breakpoints'
import Colors from '@/pages/Colors'
import Spacings from '@/pages/Spacings'
import Border from '@/pages/Border'
import Icons from '@/pages/Icons'
import Buttons from '@/pages/Buttons'
import Radius from '@/pages/Radius'

export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/breakpoints',
    name: 'Breakpoints',
    component: Breakpoints
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons,
    header: 'Elements'
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons,
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors,
    header: 'Utilities'
  },
  {
    path: '/spacings',
    name: 'Spacings',
    component: Spacings
  },
  {
    path: '/borders',
    name: 'Borders',
    component: Border
  },
  {
    path: '/radius',
    name: 'Radius',
    component: Radius
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Flex
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Flex from '@/pages/Flex'
import Breakpoints from '@/pages/Breakpoints'
import Colors from '@/pages/Colors'
import Spacings from '@/pages/Spacings'
import Border from '@/pages/Border'
import Icons from '@/pages/Icons'
import Buttons from '@/pages/Buttons'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    header: 'Utils'
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

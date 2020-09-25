import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
import store from './store/'

// components
import App from './App.vue'
import SvgIcon from '@/components/Icon'
Vue.component('svg-icon', SvgIcon)

// uses
Vue.use(VueCompositionAPI)

// filters
import {cssVarValue} from '@/filters/index.js'
Vue.filter('cssVarValue', cssVarValue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#framework-app")

import '../styles/main.scss'

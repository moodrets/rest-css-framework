import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'
import SvgIcon from '@/components/Icon'

Vue.component('svg-icon', SvgIcon)
Vue.use(VueCompositionAPI)

new Vue({
  router,
  render: h => h(App)
}).$mount("#framework-app")

import '../styles/main.scss'

import '../styles/main.scss'
import sprite from  './common/sprite.js'
document.body.insertAdjacentHTML('beforeEnd', sprite)

import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)

// components
import Icon from './components/Icon.vue'
import Select from './components/Select.vue'

app.component('svg-icon', Icon)
app.component('rs-select', Select)

// uses
import router from './routes/index.js'

app.use(router).mount("#framework-app")

// filters
app.config.globalProperties.$filters = {
  cssVarName(value, removeablePrefix){
    return value.replace(removeablePrefix, '')
  }
}

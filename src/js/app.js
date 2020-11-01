import '../styles/main.scss'
import sprite from  './common/sprite.js'
import App from './App.svelte'

const app = new App({
  target: document.querySelector('#framework-app'),
})

window.app = app
document.body.insertAdjacentHTML('beforeEnd', sprite)

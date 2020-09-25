import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cssVars: []
  },
  mutations: {
    PUSH_CSS_VARS(state, list) {
      state.cssVars.push(...list)
    },
  },
  getters: {
    colorVars(state) {
      const colorVars = state.cssVars.filter(prop => prop.includes('--color')).sort((a, b) => a.localeCompare(b));
      return colorVars
    },
    breakpointVars(state) {
      return state.cssVars.filter(prop => prop.includes('--breakpoint'))
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cssVars: [],
    svgIconsList: [],
  },
  mutations: {
    PUSH_CSS_VARS(state, list) {
      state.cssVars.push(...list)
    },
    PUSH_SVG_ICON(state, list){
      state.svgIconsList.push(...list)
    }
  },
  getters: {
    colorVars(state) {
      const colorVars = state.cssVars.filter(prop => prop.includes('--color')).sort((a, b) => a.localeCompare(b));
      return colorVars
    },
    breakpointsVars(state) {
      return state.cssVars.filter(prop => prop.includes('--breakpoint'))
    },
    radiusVars(state) {
      return state.cssVars.filter(prop => prop.includes('--radius'))
    },
    spacingsVars(state) {
      return state.cssVars.filter(prop => prop.includes('--spacing'))
    },
    svgIcons(state){
      return state.svgIconsList
    }
  }
})

export default store

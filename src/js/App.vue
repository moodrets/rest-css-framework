<template>
  <div id="framework-app">
    <Header></Header>
    <main class="rs-main mt-7 mt-9:lg font-sz-17">
      <div class="container px-5 px-7:md">
        <div class="case case-gap-9:lg">
          <div class="cell cell-12 cell-3:lg d-n d-b:lg">
            <Aside></Aside>
          </div>
          <div class="cell cell-12 cell-9:lg">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>
    <MobileMenu ref="rs-mobile-menu"></MobileMenu>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import Aside from '@/components/Aside'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'

export default {
  name: 'App',
  components: {
    Aside,
    Header,
    MobileMenu
  },
  methods: {
    ...mapMutations(['PUSH_CSS_VARS']),
    ...mapMutations(['PUSH_SVG_ICON']),
  },
  mounted(){

    const cssVars = [...document.styleSheets]
      .filter(sheet => sheet.href === null || sheet.href.includes('main'))
      .reduce((acc, sheet) => (acc = [
        ...acc,
        ...[...sheet.cssRules].reduce((def, rule) => (def = rule.selectorText === ':root' ? [...def, ...[...rule.style].filter(name => name.startsWith("--"))]: def), [])
      ]),[]);

    this.PUSH_CSS_VARS(cssVars)

    const sprite = document.querySelector('#svg-sprite')
    if (sprite) {
      const icons = [...sprite.querySelectorAll('symbol')].map(icon => icon.getAttribute('id'))
      this.PUSH_SVG_ICON(icons)
    }
  }
}
</script>

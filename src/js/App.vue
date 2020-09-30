<template>
  <div id="framework-app">
    <Header></Header>
    <main class="rs-main mt-7 mt-9:lg font-sz-17">
      <div class="container px-5 px-7:md">
        <div class="row gap-9:lg">
          <div class="col col-12 col-3:lg d-n d-b:lg">
            <Aside></Aside>
          </div>
          <div class="col col-12 col-9:lg">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import Aside from '@/components/Aside'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Aside,
    Header,
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

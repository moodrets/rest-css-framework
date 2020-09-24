<template>
  <div id="framework-app">
    <Header></Header>
    <main class="rs-main mt-7 mt-9:lg font-sz-17">
      <div class="container">
        <div class="row gap-md no-gap-b">
          <div class="col col-12 col-3:lg">
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

import Aside from '@/components/Aside'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Aside,
    Header,
  }
}
</script>

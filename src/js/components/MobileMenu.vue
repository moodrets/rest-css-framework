<template>
  <div class="rs-mobile-menu pos-fx pos-cover-0 z-100 trf-toggle:is-active" :class="visible ? 'is-active' : 'vs-h'" @click="clickHandler">
    <div class="bg-dark pos-fx pos-cover-0 z-1-neg op-70 pe-n"></div>
    <div class="p-6 wd-280 bg-light sh-2 trs-03 trf trf-slide-left pos-fx pos-cover-0 pos-r-a ov-y-a">
      <div class="mb-3" v-for="route in routes" :key="route.name" @click="toggle">
        <h3 class="font-we-500" v-if="route.header">{{route.header}}</h3>
        <router-link
          class="button bg-theme font-we-500 rds-3 py-3 px-5 d-b txt-l wd-100 font-sz-16"
          active-class="bg-theme-2 txt-light"
          :exact="route.name === 'Main'"
          tag="button"
          :to="route.path"
        >{{route.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>

  import { routes } from '@/router/index.js'
  const routesList = routes

  export default {
    data(){
      return {
        visible: false,
        routes: routesList
      }
    },
    methods: {
      toggle(){
        this.visible = !this.visible

        if ( this.visible ) {
          document.body.classList.add('ov-h')
        } else {
          document.body.classList.remove('ov-h')
        }

      },
      clickHandler(event){
        if (event.target.classList.contains('rs-mobile-menu')) {
          this.toggle()
        }
      }
    }
  }
</script>

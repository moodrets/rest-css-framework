<template>
  <div class="rs-mobile-menu pos-fx pos-cover z-100 trs-toggle" :class="visible ? 'is-open' : 'vs-h'" @click="clickHandler">
    <div class="bg-dark pos-fx pos-cover z-1-neg op-70 pe-n"></div>
    <div class="p-6 wd-280 bg-light sh-2 trf trs trs-slide-left pos-fx pos-l-0 pos-t-0 pos-b-0 ov-y-a">
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

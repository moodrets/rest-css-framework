<template>
  <aside class="rs-aside">
    <div class="mb-3" v-for="route in routes" :key="route.name">
      <h3 class="font-500" v-if="route.header">{{route.header}}</h3>
      <router-link
        class="button bg-theme font-500 rds-3 py-3 px-6 d-b txt-l wd-100 font-sz-18"
        active-class="bg-theme-2 txt-light"
        :exact="route.name === 'Home'"
        tag="button"
        :to="route.path"
      >{{route.name}}</router-link>
    </div>
  </aside>
</template>

<script>

  import { routes } from '@/router/index.js'
  import { reactive } from '@vue/composition-api'

  const routesList = routes

  export default {
    setup(){

      const routes = reactive(routesList)

      return {
        routes
      }
    },
  }
</script>

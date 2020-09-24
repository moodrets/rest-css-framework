<template>
  <div class="rs-aside">
    <router-link
      class="button bg-theme font-700 rds-3 py-3 px-6 mb-3 d-b txt-l wd-1 font-sz-18"
      active-class="bg-theme-1 txt-light"
      v-for="route in routes"
      :key="route.name"
      :exact="route.name === 'Home'"
      tag="button"
      :to="route.path"
    >{{route.name}}</router-link>
  </div>
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

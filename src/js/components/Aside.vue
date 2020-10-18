<template>
  <aside class="rs-aside">
    <div class="mb-3" v-for="route in routes" :key="route.name">
      <h3 class="font-we-500" v-if="route.header">{{route.header}}</h3>
      <router-link
        class="button bg-theme font-we-500 rds-3 py-3 px-5 d-b txt-l wd-100 font-sz-16"
        active-class="bg-theme-2 txt-light"
        :exact="route.name === 'Main'"
        tag="button"
        :to="route.path"
      >{{route.name}}</router-link>
    </div>
  </aside>
</template>

<script>

  import { routes } from '@/router/index.js'
  const routesList = routes

  export default {
    data(){
      return {
        routes: routesList
      }
    }
  }
</script>

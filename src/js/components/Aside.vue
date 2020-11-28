<template>
  <div class="rs-aside-menu d-f fd-c ai-fe ov-y-a pos-sti pos-t-13 pr-3" style="height: calc(100vh - 110px)">
    <router-link
      class="font-we-500 txt-r font-sz-15 mb-4 py-2 bdr-b bdr-b-wd-2 bdr-primary bdr-dark:h d-b txt-primary txt-primary:v td-n"
      v-for="route in routesMenu"
      :key="route.name"
      :to="route.path"
    >{{route.name}}</router-link>
  </div>
</template>

<script>

  import {routes} from '../routes/index'
  import {reactive} from 'vue'

  export default {
    setup(){

      const routesMenu = reactive(routes)

      return {
        routesMenu
      }
    }
  }
</script>

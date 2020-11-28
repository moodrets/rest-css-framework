<template>
  <div class="pb-9">
    <Header></Header>
    <section class="container mx-a px-4 px-6:lg font-sz-16">
      <div class="case ml-8-neg:lg">
        <aside class="cell cell-12 cell-3:lg pl-8:lg d-n d-b:lg">
          <Aside></Aside>
        </aside>
        <main class="cell cell-12 cell-9:lg pl-8:lg">
          <router-view></router-view>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Aside from './components/Aside.vue'

  export default {
    components: {
      Header,
      Aside
    }
  }
</script>

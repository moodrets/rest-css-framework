<template>
  <Header></Header>
  <section class="container mx-a px-4 px-6:lg">
    <div class="case ml-8-neg:lg">
      <aside class="cell cell-12 cell-3:lg pl-8:lg d-n d-b:lg">

      </aside>
      <main class="cell cell-12 cell-9:lg pl-8:lg">
        <router-view></router-view>
      </main>
    </div>
  </section>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      Header
    }
  }
</script>

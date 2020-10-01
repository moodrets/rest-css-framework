<template>
  <header class="rs-header bg-theme py-3 sh-2 pos-sti pos-l-0 pos-r-0 pos-t-0 z-10">
    <div class="container d-f ai-c jc-sb px-5 px-7:md">
      <div @click="openMobileMenu" class="mr-5 cur-p d-n:lg">
        <svg-icon name="rs-menu" add-class="sz-5"></svg-icon>
      </div>
      <div class="rs-logo">
        <router-link to="/" class="d-ib txt-dark">
          <svg-icon add-class="sz-5" name="rs-logo"></svg-icon>
        </router-link>
      </div>
      <div class="d-f ai-c">
        <svg-icon add-class="sz-5" name="rs-github" target="_blank" href="https://github.com/moodrets/rest-css-framework"></svg-icon>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      openMobileMenu(){
        this.$root.$children[0].$refs['rs-mobile-menu'].toggle()
      }
    }
  }
</script>

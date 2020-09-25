<template>
  <div class="rs-icons">
    <h1 class="mt-0">Icons</h1>
    <div class="mt-10">
      <svg-icon v-for="icon in svgIcons" :key="icon" :name="icon"></svg-icon>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['svgIcons'])
    }
  }
</script>

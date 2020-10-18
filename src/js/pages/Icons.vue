<template>
  <div class="rs-icons">
    <h1 class="mt-0">Icons</h1>
    <div class="mt-10 d-f fw-wr">
      <div class="d-f ai-c mb-7 mr-7" v-for="icon in svgIcons" :key="icon">
        <svg-icon add-class="sz-3 mr-4" :name="icon"></svg-icon>
        <div class="font-we-300">{{icon}}</div>
      </div>
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

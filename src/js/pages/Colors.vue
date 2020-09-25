<template>
  <div class="rs-colors">
    <h1 class="mt-0">Colors</h1>
    <p>These colors are used for background, text, svg icon and border classes</p>
    <div class="row cols-1 cols-2:md cols-3:lg">
      <div class="col d-f ai-c" v-for="(color, index) in colorVars" :key="index">
        <div class="fl-n d-ib p-8 mr-5 rds-round sh-2" :class="`bg-${color.replace('--color-', '')}`"></div>
        <h4>{{color.replace('--color-', '')}}</h4>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    computed:{
      ...mapGetters(['colorVars'])
    }
  }
</script>

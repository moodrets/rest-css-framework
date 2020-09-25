<template>
  <div class="rs-breakpoints">
    <h1 class="mt-0">Breakpoints</h1>
    <div v-for="breakpoint in breakpointVars" :key="breakpoint">
      <p><strong>{{breakpoint.replace('--', '')}}:</strong> <mark>{{breakpoint|cssVarValue}}</mark> - <i>var({{breakpoint}})</i></p>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {
    computed:{
      ...mapGetters(['breakpointVars'])
    }
  }
</script>

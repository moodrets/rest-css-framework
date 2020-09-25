<template>
  <div class="rs-breakpoints">
    <h1 class="mt-0">Breakpoints</h1>
    <div class="p-5 sh-1 mb-3" v-for="breakpoint in breakpointsVars" :key="breakpoint">
      <strong>{{breakpoint.replace('--', '')}}:</strong> <mark>{{breakpoint|cssVarValue}}</mark> - var({{breakpoint}})
    </div>
  </div>
</template>

<script>

  import breakpoints from '@/mixins/breakpoints.js'

  export default {
    mixins: [breakpoints]
  }
</script>

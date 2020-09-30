<template>
  <div class="rs-breakpoints">
    <h1 class="mt-0">Breakpoints</h1>
    <div class="d-n d-f:md row p-3 sh-1 mb-3">
      <div class="col col-4"><strong>name</strong></div>
      <div class="col col-4"><strong>value</strong></div>
      <div class="col col-4"><strong>variable</strong></div>
    </div>
    <div class="row ai-c cols-1 cols-3:md p-5 sh-1 mb-3" v-for="breakpoint in breakpointsVars" :key="breakpoint">
      <div class="col">{{breakpoint|cssVarName('--')}}</div>
      <div class="col">
        <div class="d-ib p-2 bg-primary txt-light rds-2 font-700">
          {{breakpoint|cssVarValue}}
        </div>
      </div>
      <div class="col">var({{breakpoint}})</div>
    </div>
  </div>
</template>

<script>

  import breakpoints from '@/mixins/breakpoints.js'

  export default {
    mixins: [breakpoints]
  }
</script>

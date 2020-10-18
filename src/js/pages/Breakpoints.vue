<template>
  <div class="rs-breakpoints">
    <h1 class="mt-0">Breakpoints</h1>
    <div class="d-n d-f:md case p-3 sh-1 mb-3">
      <div class="cell cell-4"><strong>name</strong></div>
      <div class="cell cell-4"><strong>value</strong></div>
      <div class="cell cell-4"><strong>variable</strong></div>
    </div>
    <div class="case ai-c case-cells-1 case-cells-3:md p-5 sh-1 mb-3" v-for="breakpoint in breakpointsVars" :key="breakpoint">
      <div class="cell">{{breakpoint|cssVarName('--')}}</div>
      <div class="cell">
        <div class="d-ib p-2 bg-primary txt-light rds-2 font-we-700">
          {{breakpoint|cssVarValue}}
        </div>
      </div>
      <div class="cell">var({{breakpoint}})</div>
    </div>
  </div>
</template>

<script>

  import breakpoints from '@/mixins/breakpoints.js'

  export default {
    mixins: [breakpoints]
  }
</script>

<template>
  <div class="rs-colors">
    <h1 class="mt-0">Colors</h1>
    <p>These colors are used for background, text, svg icon and border classes</p>
    <div class="mt-10 row cols-1 cols-2:md cols-3:lg">
      <div class="col d-f ai-c" v-for="(color, index) in colorVars" :key="index">
        <div class="fl-n d-ib p-8 mr-5 rds-round sh-2" :class="`bg-${color.replace('--color-', '')}`"></div>
        <h4 class="m-0">{{color.replace('--color-', '')}}</h4>
      </div>
    </div>
    <div class="row cols-1 cols-2:md cols-4:lg mt-5">
      <div class="col" v-for="state in colorsState" :key="state.name">
        <h2>{{state.name}}</h2>
        <div
          class="mb-4"
          :class="[`txt-${color.replace('--color-', '')}${state.className ? ':' + state.className : ''}`]"
          v-for="(color, index) in colorVars" :key="index">{{color.replace('--color-', '')}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import colors from '@/mixins/colors.js'

  export default {
    mixins: [colors],
    data(){
      return {
        colorsState: [
          {
            name: 'default',
            className: ''
          },
          {
            name: 'hover',
            className: 'h'
          },
          {
            name: 'focus',
            className: 'f'
          },
          {
            name: 'active',
            className: 'a'
          },
        ]
      }
    }
  }
</script>

<template>
  <div class="rs-colors">
    <h1 class="mt-0">Colors</h1>
    <p>These colors are used for background-color, text, svg icon and border classes</p>

    <div class="row">
      <div class="col col-12 col-6:md">
        <h3 class="mt-0 txt-theme-2 font-500">State</h3>
        <div class="rs-select">
          <select ref="state-select" v-rs-select v-model="colorsState">
            <option value="">Default</option>
            <option value=":h">Hover</option>
            <option value=":f">Focus</option>
            <option value=":a">Active</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary font-500 rds-4 txt-theme-3">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="txt-primary{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="bg-warning{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="bdr bdr-success{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="svg-icon txt-secondary{{colorsState}}"</code>
    <div class="mt-10">
      <div class="d-n d-f:md row no-gap p-3 sh-1 mb-3">
        <div class="col col-4"><strong>text</strong></div>
        <div class="col col-4"><strong>background-color</strong></div>
        <div class="col col-4"><strong>variable</strong></div>
      </div>
      <div class="row cols-1 cols-3:md ai-c no-gap p-3 sh-1 mb-3" v-for="(color, index) in colorVars" :key="index">
        <div class="col">
          <div
            tabindex="0"
            class="font-500"
            :class="`txt-`+(color.includes('light') || color.includes('trsp') ? 'secondary-2' : color.replace('--color-', ''))+colorsState">{{color|cssVarName('--color-')}}</div>
        </div>
        <div class="col">
          <div class="d-f ai-c fl-n-ch mb-4 mb-0:md">
            <div tabindex="0" class="d-if sh-2 p-8 rds-round mt-4 mt-0:md mr-5" :class="`bg-`+color.replace('--color-', '')+colorsState"></div>
            <div class="ml-4 font-500 txt-success" v-if="stateText">{{stateText}}</div>
          </div>
        </div>
        <div class="col">
          <div :class="`txt-`+(color.includes('light') || color.includes('trsp') ? 'secondary-2' : color.replace('--color-', ''))+colorsState">var({{color}})</div>
        </div>
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
        colorsState: '',
        stateText: ''
      }
    },
    watch: {
      colorsState(){
        if (this.colorsState === ':h') {
          this.stateText = 'hover me'
        }
        if (this.colorsState === ':f') {
          this.stateText = 'focus me'
        }
        if (this.colorsState === ':a') {
          this.stateText = 'press me'
        }
        if (this.colorsState === '') {
          this.stateText = ''
        }
      }
    },
    mounted(){
      console.log(this.$refs['state-select'].options[this.$refs['state-select'].selectedIndex].innerText)
    }
  }
</script>

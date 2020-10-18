<template>
  <div class="rs-colors">
    <h1 class="mt-0">Colors</h1>
    <p>These colors are used for background-color, text, shadow, border and svg icon classes</p>

    <div class="d-f fw-wr case case-gap-7">
      <div class="cell cell-12 cell-6:md">
        <h3 class="mt-0 mb-4 txt-info-2 font-we-500">State</h3>
        <div class="rs-select bdr bdr-wd-2 bdr-secondary bdr-primary:fw pos-rel rds-4">
          <select class="op-0 pos-abs pos-cover sz-100" ref="state-select" v-rs-select v-model="colorsState">
            <option value="">Default</option>
            <option value=":h">Hover</option>
            <option value=":f">Focus</option>
            <option value=":fw">Focus within</option>
            <option value=":a">Active</option>
          </select>
          <div class="rs-select__value p-4 pr-10 font-we-500">
            <svg-icon name="rs-arrow-down" add-class="pos-abs pe-n pos-r-7 pos-t-50 trf trf-tr-y-50-neg sz-1 pos-cn-y"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="txt-primary{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="bg-warning{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="bdr bdr-success{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="sh sh-secondary{{colorsState}}"</code>
    <code class="my-4 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="svg-icon txt-secondary{{colorsState}}"</code>
    <div class="mt-10">
      <div class="d-n d-f:md case p-3 sh-1 mb-3">
        <div class="cell cell-4"><strong>class</strong></div>
        <div class="cell cell-4"><strong>background-cellor</strong></div>
        <div class="cell cell-4"><strong>variable</strong></div>
      </div>
      <div class="case d-f fw-wr case-cells-1 case-cells-3:md ai-c p-3 sh-1 mb-3" v-for="(color, index) in colorVars" :key="index">
        <div class="cell">
          <div
            tabindex="0"
            class="font-we-500"
            :class="`txt-`+(color.includes('light') || color.includes('trsp') ? 'secondary-2' : color.replace('--color-', ''))+colorsState">.txt-{{color|cssVarName('--color-')}}</div>
        </div>
        <div class="cell">
          <div class="d-f ai-c fl-n-ch my-4 my-0:md">
            <div tabindex="0" class="d-if sh-2 p-8 rds-round mr-5" :class="`bg-`+color.replace('--color-', '')+colorsState"></div>
            <div class="ml-4 font-we-500 txt-success" v-if="stateText">{{stateText}}</div>
          </div>
        </div>
        <div class="cell">
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
        if (this.colorsState === ':fw') {
          this.stateText = 'focus within'
        }
        if (this.colorsState === ':a') {
          this.stateText = 'press me'
        }
        if (this.colorsState === '') {
          this.stateText = ''
        }
      }
    },
  }
</script>

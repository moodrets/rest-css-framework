<template>
  <div class="rs-border" v-cloak>
    <h1 class="mt-0">Borders</h1>
    <div class="case case-gap-7 case-cells-1 case-cells-2:md case-cells-4:lg">
      <div class="cell">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Border width</h4>
        <div class="rs-select pos-rel">
          <select class="pos-abs pos-cover op-0 sz-100" v-rs-select v-model="borderWidth">
            <option :value="iter" v-for="iter in 10" :key="iter">{{iter}}px</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down" add-class="sz-1 pos-abs pos-r-7 pos-cn-y pe-n"></svg-icon>
          </div>
        </div>
      </div>

      <div class="cell">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Border color</h4>
        <div class="rs-select pos-rel">
          <select class="pos-abs pos-cover op-0 sz-100" v-rs-select v-model="borderColor">
            <option :value="color.replace('--color-', '')" v-for="color in colorVars" :key="color">var({{color}})</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down" add-class="sz-1 pos-abs pos-r-7 pos-cn-y pe-n"></svg-icon>
          </div>
        </div>
      </div>

      <div class="cell">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Border style</h4>
        <div class="rs-select pos-rel">
          <select class="pos-abs pos-cover op-0 sz-100" v-rs-select v-model="borderStyle">
            <option :value="style.value" v-for="style in borderStyleValues" :key="style.value">{{style.text}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down" add-class="sz-1 pos-abs pos-r-7 pos-cn-y pe-n"></svg-icon>
          </div>
        </div>
      </div>

      <div class="cell">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Border none</h4>
        <div class="rs-select pos-rel">
          <select class="pos-abs pos-cover op-0 sz-100" v-rs-select v-model="borderNone">
            <option :value="item.value" v-for="item in borderNoneValues" :key="item.value">{{item.text}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down" add-class="sz-1 pos-abs pos-r-7 pos-cn-y pe-n"></svg-icon>
          </div>
        </div>
      </div>

      <div class="cell cell-6:lg">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Border radius (<router-link to="/radius">radius utility</router-link>)</h4>
        <div class="rs-select pos-rel">
          <select class="pos-abs pos-cover op-0 sz-100" v-rs-select v-model="borderRadius">
            <option :value="item.replace('--radius-', '')" v-for="item in radiusVars" :key="item">var({{item}})</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down" add-class="sz-1 pos-abs pos-r-7 pos-cn-y pe-n"></svg-icon>
          </div>
        </div>
      </div>

      <div class="cell cell-6:lg">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Border class and breakpoints <span class="txt-danger">(higher priority)</span></h4>
        <div class="rs-select pos-rel">
          <select class="pos-abs pos-cover op-0 sz-100" v-rs-select v-model="borderBreakpoints">
            <option :value="item.value" v-for="item in borderBreakpointsValues" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down" add-class="sz-1 pos-abs pos-r-7 pos-cn-y pe-n"></svg-icon>
          </div>
        </div>
      </div>

    </div>
    <div class="p-5 mt-5 bdr" :class="borderClass">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nemo ipsum libero! Perferendis, illo vitae dolore, temporibus magnam mollitia, pariatur iure vero velit at maiores dicta excepturi exercitationem amet facilis.
    </div>
    <code class="my-7 d-b p-5 bdr bdr-secondary-1 bg-secondary rds-2">class="{{borderClass}}"</code>

    <div class="mt-10">
      <div class="d-n d-f:md case case-cells-1 case-cells-2:md p-5 sh-1 mb-3">
        <div class="cell"><strong>class</strong></div>
        <div class="cell"><strong>element</strong></div>
      </div>
      <div class="case ai-c case-cells-1 case-cells-2:md p-5 sh-1 mb-3" v-for="item in borderClassList" :key="item.className">
        <div class="cell txt-primary-2 font-500">{{item.className}}</div>
        <div class="cell"><div class="p-6 mt-4 mt-0:md" :class="item.className.replace(/\./g,'')"></div></div>
      </div>
    </div>

  </div>
</template>

<script>

  import colors from '@/mixins/colors.js'
  import radius from '@/mixins/radius.js'

  export default {
    mixins: [colors, radius],
    data(){
      return {
        borderWidth: 4,
        borderColor: 'secondary',
        borderStyle: 'sl',
        borderNone: '',
        borderRadius: '0',
        borderBreakpoints: '',
        borderBreakpointsValues: [
          {value: '', name: 'default'},
          {value: 'l-n:sm', name: 'None left small'},
          {value: 'r-n:md', name: 'None right medium'},
          {value: 't-n:lg', name: 'None top large'},
          {value: 'b-n:xl', name: 'None bottom extra large'},
          {value: 'dt:sm', name: 'Dotted small'},
          {value: 'sl:md', name: 'Solid medium'},
          {value: 'dsh:lg', name: 'Dashed large'},
        ],
        borderStyleValues: [
          {value: 'dsh', text: 'Dashed'},
          {value: 'dt', text: 'Dotted'},
          {value: 'sl', text: 'Solid'},
          {value: 't-dsh', text: 'Top dashed'},
          {value: 't-dt', text: 'Top dotted'},
          {value: 't-sl', text: 'Top solid'},
          {value: 'r-dsh', text: 'Right dashed'},
          {value: 'r-dt', text: 'Right dotted'},
          {value: 'r-sl', text: 'Right solid'},
          {value: 'l-dsh', text: 'Left dashed'},
          {value: 'l-dt', text: 'Left dotted'},
          {value: 'l-sl', text: 'Left solid'},
          {value: 'b-dsh', text: 'Bottom dashed'},
          {value: 'b-dt', text: 'Bottom dotted'},
          {value: 'b-sl', text: 'Bottom solid'},
        ],
        borderNoneValues: [
          {value: '', text: 'default'},
          {value: 'n', text: 'None'},
          {value: 't-n', text: 'Top none'},
          {value: 'l-n', text: 'Left none'},
          {value: 'r-n', text: 'Right none'},
          {value: 'b-n', text: 'Bottom none'},
          {value: 'x-n', text: 'Horizontal none'},
          {value: 'y-n', text: 'Vertical none'},
        ],
        borderClassList: [
          {className: '.bdr'},
          {className: '.bdr:sm'},
          {className: '.bdr:md'},
          {className: '.bdr:lg'},
          {className: '.bdr:xl'},
          {className: '.bdr-l'},
          {className: '.bdr-l:sm'},
          {className: '.bdr-l:md'},
          {className: '.bdr-l:lg'},
          {className: '.bdr-l:xl'},
          {className: '.bdr-r'},
          {className: '.bdr-r:sm'},
          {className: '.bdr-r:md'},
          {className: '.bdr-r:lg'},
          {className: '.bdr-r:xl'},
          {className: '.bdr-t'},
          {className: '.bdr-t:sm'},
          {className: '.bdr-t:md'},
          {className: '.bdr-t:lg'},
          {className: '.bdr-t:xl'},
          {className: '.bdr-b'},
          {className: '.bdr-b:sm'},
          {className: '.bdr-b:md'},
          {className: '.bdr-b:lg'},
          {className: '.bdr-b:xl'},
          {className: '.bdr-x'},
          {className: '.bdr-x:sm'},
          {className: '.bdr-x:md'},
          {className: '.bdr-x:lg'},
          {className: '.bdr-x:xl'},
          {className: '.bdr-y'},
          {className: '.bdr-y:sm'},
          {className: '.bdr-y:md'},
          {className: '.bdr-y:lg'},
          {className: '.bdr-y:xl'},
          {className: '.bdr .bdr-n'},
          {className: '.bdr .bdr-n:sm'},
          {className: '.bdr .bdr-n:md'},
          {className: '.bdr .bdr-n:lg'},
          {className: '.bdr .bdr-n:xl'},
          {className: '.bdr .bdr-l-n'},
          {className: '.bdr .bdr-l-n:sm'},
          {className: '.bdr .bdr-l-n:md'},
          {className: '.bdr .bdr-l-n:lg'},
          {className: '.bdr .bdr-l-n:xl'},
          {className: '.bdr .bdr-r-n'},
          {className: '.bdr .bdr-r-n:sm'},
          {className: '.bdr .bdr-r-n:md'},
          {className: '.bdr .bdr-r-n:lg'},
          {className: '.bdr .bdr-r-n:xl'},
          {className: '.bdr .bdr-t-n'},
          {className: '.bdr .bdr-t-n:sm'},
          {className: '.bdr .bdr-t-n:md'},
          {className: '.bdr .bdr-t-n:lg'},
          {className: '.bdr .bdr-t-n:xl'},
          {className: '.bdr .bdr-b-n'},
          {className: '.bdr .bdr-b-n:sm'},
          {className: '.bdr .bdr-b-n:md'},
          {className: '.bdr .bdr-b-n:lg'},
          {className: '.bdr .bdr-b-n:xl'},
          {className: '.bdr .bdr-sl'},
          {className: '.bdr .bdr-sl:sm'},
          {className: '.bdr .bdr-sl:md'},
          {className: '.bdr .bdr-sl:lg'},
          {className: '.bdr .bdr-sl:xl'},
          {className: '.bdr .bdr-dt'},
          {className: '.bdr .bdr-dt:sm'},
          {className: '.bdr .bdr-dt:md'},
          {className: '.bdr .bdr-dt:lg'},
          {className: '.bdr .bdr-dt:xl'},
          {className: '.bdr .bdr-dsh'},
          {className: '.bdr .bdr-dsh:sm'},
          {className: '.bdr .bdr-dsh:md'},
          {className: '.bdr .bdr-dsh:lg'},
          {className: '.bdr .bdr-dsh:xl'},
          {className: '.bdr .bdr-wd-1'},
          {className: '.bdr .bdr-wd-2'},
          {className: '.bdr .bdr-wd-3'},
          {className: '.bdr .bdr-wd-4'},
          {className: '.bdr .bdr-wd-5'},
          {className: '.bdr .bdr-wd-6'},
          {className: '.bdr .bdr-wd-7'},
          {className: '.bdr .bdr-wd-8'},
          {className: '.bdr .bdr-wd-9'},
          {className: '.bdr .bdr-wd-10'},
          {className: '.bdr .bdr-inh'},
          {className: '.bdr .bdr-inh:sm'},
          {className: '.bdr .bdr-inh:md'},
          {className: '.bdr .bdr-inh:lg'},
          {className: '.bdr .bdr-inh:xl'},
          {className: '.bdr .bdr-current'},
          {className: '.bdr .bdr-current:sm'},
          {className: '.bdr .bdr-current:md'},
          {className: '.bdr .bdr-current:lg'},
          {className: '.bdr .bdr-current:xl'},
          {className: '.bdr .bdr-trsp'},
          {className: '.bdr .bdr-trsp:sm'},
          {className: '.bdr .bdr-trsp:md'},
          {className: '.bdr .bdr-trsp:lg'},
          {className: '.bdr .bdr-trsp:xl'},
        ]
      }
    },
    computed: {
      borderClass(){
        return `bdr bdr-wd-${this.borderWidth} bdr-${this.borderColor} bdr-${this.borderStyle}${this.borderNone ? ' bdr-'+this.borderNone : ''} rds-${this.borderRadius}${this.borderBreakpoints ? ' bdr-'+this.borderBreakpoints : ''}`
      }
    },
    mounted(){
      setTimeout(()=>{
        this.colorVars.map(color => {
          this.borderClassList.push({className: `.bdr .bdr-${color.replace('--color-', '')}`})
        })
      }, 0)
    }
  }
</script>

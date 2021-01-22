<template>
  <h1 class="mt-0">Colors</h1>
  <div class="mb-8">
    <p>Extend or replace colors list in file <strong class="txt-warning-1 font-we-700">_vars.scss</strong></p>
  </div>
  <div class="case case-cells-1 case-cells-2:md mb-8 ml-5-neg">
    <div class="cell pl-5 pb-5">
      <rs-select
        title="Color utility"
        titleColor="success"
        :items="colorUtilities"
        @selectValueChange="changeUtilies"
      ></rs-select>
    </div>
    <div class="cell pl-5 pb-5">
      <rs-select
        title="Color states"
        titleColor="primary"
        link="/states"
        linkText="Pseudo"
        :items="states"
        @selectValueChange="changeState"
      ></rs-select>
    </div>
  </div>
  <div class="sh-1 p-2 mb-3" v-for="color in colors" :key="color">
    <div class="case case-cells-1 case-cells-3:md ai-c">
      <div class="cell pb-3 pb-0:md">
        <div class="font-we-500">
          <span class="txt-success">.{{statesValue[0] !== ':pl' ? colorValue[0] : 'txt'}}</span>-{{$filters.cssVarName(color, '--color-')}}<span class="txt-primary">{{statesValue[0]}}</span>
        </div>
      </div>
      <div class="cell pb-3 pb-0:md">
        <div class="sz-4 sh-1 rds-round mr-4" :class="'bg-'+$filters.cssVarName(color, '--color-')"></div>
      </div>
      <div class="cell pb-3 pb-0:md">
        <div :class="'txt-'+$filters.cssVarName(color, '--color-')">{{$filters.cssVarName(color, '--color-')}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import {cssColorVars} from '../store/index'
  import {reactive, ref} from 'vue'

  export default {
    setup(){

      const colors = cssColorVars
      const colorValue = ref(['txt', 'text'])
      const statesValue = ref(['', 'default'])
      const colorUtilities = reactive([
        {value: 'txt', text: 'text'},
        {value: 'bg', text: 'background'},
        {value: 'sh', text: 'shadow'},
        {value: 'bdr', text: 'border'},
      ])

      const states = reactive([
        {value: '', text: 'default'},
        {value: ':h', text: 'hover'},
        {value: ':f', text: 'focus'},
        {value: ':fw', text: 'focus-within'},
        {value: ':fv', text: 'focus-visible'},
        {value: ':pl', text: 'placeholder'},
      ])

      const changeUtilies = e => {
        colorValue.value = e
      }

      const changeState = e => {
        statesValue.value = e
      }

      return {
        colors,
        colorValue,
        colorUtilities,
        changeUtilies,
        states,
        statesValue,
        changeState
      }
    }
  }
</script>

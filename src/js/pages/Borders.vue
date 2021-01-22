<template>
  <div class="rs-borders">
    <h1 class="mt-0">Borders</h1>
    <p>Change classnames and values in file <strong class="txt-warning-1 font-we-700">utils/border.scss</strong></p>
    <div class="case case-cells-1 case-cells-2:md mb-8 ml-5-neg">
      <div class="cell pl-5 pb-5">
        <rs-select
          title="Border direction"
          :items="borderDirection"
          @selectValueChange="changeSelect($event, 'direction')"
        ></rs-select>
      </div>
      <div class="cell pl-5 pb-5">
        <rs-select
          title="Breakpoints"
          titleColor="primary"
          :items="breakpoints"
          @selectValueChange="changeSelect($event, 'breakpoint')"
        ></rs-select>
      </div>
      <div class="cell pl-5 pb-5">
        <rs-select
          title="Border width"
          titleColor="success"
          :items="borderWidth"
          @selectValueChange="changeSelect($event, 'width')"
        ></rs-select>
      </div>
    </div>
    <div
      class="p-4 ov-x-a font-sz-18 mb-8"
      :class="[
        border.direction+border.breakpoint,
        border.width
      ]"
    >
      {{border.direction}}<span class="txt-primary">{{border.breakpoint}}</span> <span class="txt-success">{{border.width}}</span>
    </div>
    <div class="font-sz-21 font-we-700 my-8">Border utility class names</div>
    <div v-for="item in borderAllClassList" :key="item.value">
      <div v-if="item.sectionName" class="font-sz-18 font-we-700 my-8" :class="`txt-${item.sectionColor}`">{{item.sectionName}}</div>
      <div class="sh-1 p-2 mb-3">
        <div class="case case-cells-1 case-cells-2:md ai-c">
          <div class="cell pb-3 pb-0:md">
            <div class="font-we-500 txt-dark txt-op-60">
              {{item.value}}
            </div>
          </div>
          <div class="cell pb-3 pb-0:md">
            <div class="p-5" :class="[item.value]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {reactive, ref} from 'vue'
  import {colorsArrayBuilder} from '../helpers/index'

  export default {
    setup(){

      const changeSelect = (e, model) => {
        console.log(e, model);
        border[model] = e[0]
      }

      const border = reactive({
        width: '',
        direction: 'bdr',
        breakpoint: ''
      })

      const breakpoints = reactive([
        {value: '', text: 'Default'},
        {value: ':sm', text: 'Small - 420px'},
        {value: ':md', text: 'Medium - 768px'},
        {value: ':lg', text: 'Large - 1024px'},
        {value: ':xl', text: 'Extra Large - 1280px'},
      ])

      const borderWidth = reactive([
        {value: '', text: 'Default'},
        {value: 'bdr-wd-1', text: 'Border width 1px'},
        {value: 'bdr-wd-2', text: 'Border width 2px'},
        {value: 'bdr-wd-3', text: 'Border width 3px'},
        {value: 'bdr-wd-4', text: 'Border width 4px'},
        {value: 'bdr-wd-5', text: 'Border width 5px'},
        {value: 'bdr-wd-5', text: 'Border width 5px'},
        {value: 'bdr-wd-6', text: 'Border width 6px'},
        {value: 'bdr-wd-7', text: 'Border width 7px'},
        {value: 'bdr-wd-8', text: 'Border width 8px'},
        {value: 'bdr-wd-9', text: 'Border width 8px'},
        {value: 'bdr-wd-10', text: 'Border width 10px'},
        {value: 'bdr-wd-11', text: 'Border width 11px'},
        {value: 'bdr-wd-12', text: 'Border width 12px'},
        {value: 'bdr-wd-0', text: 'Border width 0'},
      ])

      const borderDirection = reactive([
        {value: 'bdr', text: 'Default'},
        {value: 'bdr-t', text: 'Border top'},
        {value: 'bdr-l', text: 'Border left'},
        {value: 'bdr-r', text: 'Border right'},
        {value: 'bdr-b', text: 'Border bottom'},
        {value: 'bdr-y', text: 'Border vertical'},
        {value: 'bdr-x', text: 'Border horizontal'},
      ])

      const borderAllClassList = reactive([
        {value: 'bdr'},
        {value: 'bdr-l'},
        {value: 'bdr-r'},
        {value: 'bdr-t'},
        {value: 'bdr-b'},
        {value: 'bdr-x'},
        {value: 'bdr-y'},

        {value: 'bdr bdr-wd-1', sectionName: 'Border width', sectionColor: 'success'},
        {value: 'bdr bdr-wd-2'},
        {value: 'bdr bdr-wd-3'},
        {value: 'bdr bdr-wd-4'},
        {value: 'bdr bdr-wd-5'},
        {value: 'bdr bdr-wd-6'},
        {value: 'bdr bdr-wd-7'},
        {value: 'bdr bdr-wd-8'},
        {value: 'bdr bdr-wd-9'},
        {value: 'bdr bdr-wd-10'},
        {value: 'bdr bdr-wd-11'},
        {value: 'bdr bdr-wd-12'},
        {value: 'bdr bdr-wd-0'},

        {value: 'bdr bdr-t-wd-1'},
        {value: 'bdr bdr-t-wd-2'},
        {value: 'bdr bdr-t-wd-3'},
        {value: 'bdr bdr-t-wd-4'},
        {value: 'bdr bdr-t-wd-5'},
        {value: 'bdr bdr-t-wd-6'},
        {value: 'bdr bdr-t-wd-7'},
        {value: 'bdr bdr-t-wd-8'},
        {value: 'bdr bdr-t-wd-9'},
        {value: 'bdr bdr-t-wd-10'},
        {value: 'bdr bdr-t-wd-11'},
        {value: 'bdr bdr-t-wd-12'},
        {value: 'bdr bdr-t-wd-0'},

        {value: 'bdr bdr-r-wd-1'},
        {value: 'bdr bdr-r-wd-2'},
        {value: 'bdr bdr-r-wd-3'},
        {value: 'bdr bdr-r-wd-4'},
        {value: 'bdr bdr-r-wd-5'},
        {value: 'bdr bdr-r-wd-6'},
        {value: 'bdr bdr-r-wd-7'},
        {value: 'bdr bdr-r-wd-8'},
        {value: 'bdr bdr-r-wd-9'},
        {value: 'bdr bdr-r-wd-10'},
        {value: 'bdr bdr-r-wd-11'},
        {value: 'bdr bdr-r-wd-12'},
        {value: 'bdr bdr-r-wd-0'},

        {value: 'bdr bdr-b-wd-1'},
        {value: 'bdr bdr-b-wd-2'},
        {value: 'bdr bdr-b-wd-3'},
        {value: 'bdr bdr-b-wd-4'},
        {value: 'bdr bdr-b-wd-5'},
        {value: 'bdr bdr-b-wd-6'},
        {value: 'bdr bdr-b-wd-7'},
        {value: 'bdr bdr-b-wd-8'},
        {value: 'bdr bdr-b-wd-9'},
        {value: 'bdr bdr-b-wd-10'},
        {value: 'bdr bdr-b-wd-11'},
        {value: 'bdr bdr-b-wd-12'},
        {value: 'bdr bdr-b-wd-0'},

        {value: 'bdr bdr-l-wd-1'},
        {value: 'bdr bdr-l-wd-2'},
        {value: 'bdr bdr-l-wd-3'},
        {value: 'bdr bdr-l-wd-4'},
        {value: 'bdr bdr-l-wd-5'},
        {value: 'bdr bdr-l-wd-6'},
        {value: 'bdr bdr-l-wd-7'},
        {value: 'bdr bdr-l-wd-8'},
        {value: 'bdr bdr-l-wd-9'},
        {value: 'bdr bdr-l-wd-10'},
        {value: 'bdr bdr-l-wd-11'},
        {value: 'bdr bdr-l-wd-12'},
        {value: 'bdr bdr-l-wd-0'},

        {value: 'bdr bdr-x-wd-1'},
        {value: 'bdr bdr-x-wd-2'},
        {value: 'bdr bdr-x-wd-3'},
        {value: 'bdr bdr-x-wd-4'},
        {value: 'bdr bdr-x-wd-5'},
        {value: 'bdr bdr-x-wd-6'},
        {value: 'bdr bdr-x-wd-7'},
        {value: 'bdr bdr-x-wd-8'},
        {value: 'bdr bdr-x-wd-9'},
        {value: 'bdr bdr-x-wd-10'},
        {value: 'bdr bdr-x-wd-11'},
        {value: 'bdr bdr-x-wd-12'},
        {value: 'bdr bdr-x-wd-0'},

        {value: 'bdr bdr-y-wd-1'},
        {value: 'bdr bdr-y-wd-2'},
        {value: 'bdr bdr-y-wd-3'},
        {value: 'bdr bdr-y-wd-4'},
        {value: 'bdr bdr-y-wd-5'},
        {value: 'bdr bdr-y-wd-6'},
        {value: 'bdr bdr-y-wd-7'},
        {value: 'bdr bdr-y-wd-8'},
        {value: 'bdr bdr-y-wd-9'},
        {value: 'bdr bdr-y-wd-10'},
        {value: 'bdr bdr-y-wd-11'},
        {value: 'bdr bdr-y-wd-12'},
        {value: 'bdr bdr-y-wd-0'},

        {value: 'bdr bdr-dsh', sectionName: 'Border style', sectionColor: 'warning'},
        {value: 'bdr bdr-dt'},
        {value: 'bdr bdr-sl'},
        {value: 'bdr bdr-t-dsh'},
        {value: 'bdr bdr-t-dt'},
        {value: 'bdr bdr-t-sl'},
        {value: 'bdr bdr-r-dsh'},
        {value: 'bdr bdr-r-dt'},
        {value: 'bdr bdr-r-sl'},
        {value: 'bdr bdr-b-dsh'},
        {value: 'bdr bdr-b-dt'},
        {value: 'bdr bdr-b-sl'},
        {value: 'bdr bdr-l-dsh'},
        {value: 'bdr bdr-l-dt'},
        {value: 'bdr bdr-l-sl'},
        {value: 'bdr bdr-x-dsh'},
        {value: 'bdr bdr-x-dt'},
        {value: 'bdr bdr-x-sl'},
        {value: 'bdr bdr-y-dsh'},
        {value: 'bdr bdr-y-dt'},
        {value: 'bdr bdr-y-sl'},

        {value: 'bdr bdr-op-100', sectionName: 'Border opacity', sectionColor: 'info'},
        {value: 'bdr bdr-op-90'},
        {value: 'bdr bdr-op-80'},
        {value: 'bdr bdr-op-70'},
        {value: 'bdr bdr-op-60'},
        {value: 'bdr bdr-op-50'},
        {value: 'bdr bdr-op-40'},
        {value: 'bdr bdr-op-30'},
        {value: 'bdr bdr-op-20'},
        {value: 'bdr bdr-op-10'},
        {value: 'bdr bdr-op-0'},
      ])

      borderAllClassList.push(
        ...colorsArrayBuilder(
          'bdr bdr-',
          {sectionName: 'Border colors', sectionColor: 'warning'}
        )
      )

      return {
        border,
        borderAllClassList,
        borderWidth,
        borderDirection,
        breakpoints,
        changeSelect
      }
    },
  }
</script>

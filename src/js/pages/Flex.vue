<template>
  <div class="rs-flex">
    <h1 class="mt-0">Flex</h1>

    <div class="row gap-7 cols-1 cols-2:md cols-3:lg">

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Flex container height</h4>
        <div class="d-f ai-c">
          <input class="bdr bdr-wd-2 bdr-secondary rs-form-control p-4 rds-4" type="text" v-model="flexContainerHeight">
          <span class="ml-3">px</span>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Flex wrap</h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexWrap">
            <option :value="item.value" v-for="item in flexWrapList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Flex direction</h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexDirection">
            <option :value="item.value" v-for="item in flexDirectionList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Align items</h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexAlignItems">
            <option :value="item.value" v-for="item in flexAlignItemsList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Align content</h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexAlignContent">
            <option :value="item.value" v-for="item in flexAlignContentList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Align self <span class="txt-danger">(item 4)</span></h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexAlignSelf">
            <option :value="item.value" v-for="item in flexAlignSelfList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Justify items</h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexJustifyItems">
            <option :value="item.value" v-for="item in flexJustifyItemsList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Justify content</h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexJustifyContent">
            <option :value="item.value" v-for="item in flexJustifyContentList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 mb-4 txt-info-2 font-500">Justify self <span class="txt-danger">(item 4)</span></h4>
        <div class="rs-select">
          <select v-rs-select v-model="flexJustifySelf">
            <option :value="item.value" v-for="item in flexJustifySelfList" :key="item.value">{{item.name}}</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-wd-2 bdr-secondary font-500 rds-4">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

    </div>

    <div :style="{height: `${flexContainerHeight}px`}" class="p-5 bdr bdr-secondary-1 bg-secondary" :class="flexContainerClasses">
      <div class="p-6 sh-1 bg-light m-2">flex item 1</div>
      <div class="p-6 sh-1 bg-light m-2">flex item 2</div>
      <div class="p-6 sh-1 bg-light m-2">flex item 3</div>
      <div class="p-6 sh-1 bg-light m-2" :class="[{'bg-primary-2 txt-light': flexAlignSelf}, {'bg-primary-2 txt-light': flexJustifySelf}, flexItemClasses]">flex item 4</div>
      <div class="p-6 sh-1 bg-light m-2">flex item 5</div>
      <div class="p-6 sh-1 bg-light m-2">flex item 6</div>
    </div>
    <div class="mt-8 row cols-1 cols-2:md">
      <div class="col">
        <h4 class="mt-0 mb-4">Flex container classess</h4>
        <code class="my-7 d-b p-5 bdr bdr-secondary-1 bg-secondary rds-2">class="{{flexContainerClasses}}"</code>
      </div>
      <div class="col">
        <h4 class="mt-0 mb-4">Flex <span class="txt-danger">(item 4)</span> classess</h4>
        <code class="my-7 d-b p-5 bdr bdr-secondary-1 bg-secondary rds-2">class="{{flexItemClasses}}"</code>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: ()=>({
      flexContainerHeight: 300,
      flexBase: 'd-f',
      flexWrap: ' fw-wr',
      breakpoint: '',
      breakpointsList: [
        {value: '', name: 'No breakpoint'},
        {value: ':sm', name: 'Small (sm)'},
        {value: ':md', name: 'Medium (md)'},
        {value: ':lg', name: 'Large (lg)'},
        {value: ':xl', name: 'Extra large (xl)'}
      ],
      flexWrapList: [
        {value: '', name: 'default'},
        {value: ' fw-wr', name: 'wrap'},
        {value: ' fw-nw', name: 'nowrap'},
        {value: ' fw-wrr', name: 'wrap-reverse'},
      ],
      flexDirection: '',
      flexDirectionList: [
        {value: '', name: 'default'},
        {value: ' fd-r', name: 'row'},
        {value: ' fd-rr', name: 'row-reverse'},
        {value: ' fd-c', name: 'column'},
        {value: ' fd-cr', name: 'column-reverse'},
      ],
      flexAlignItems: '',
      flexAlignItemsList: [
        {value: '', name: 'default'},
        {value: ' ai-nl', name: 'normal'},
        {value: ' ai-st', name: 'stretch'},
        {value: ' ai-c', name: 'center'},
        {value: ' ai-s', name: 'start'},
        {value: ' ai-e', name: 'end'},
        {value: ' ai-fs', name: 'flex-start'},
        {value: ' ai-fe', name: 'flex-end'},
        {value: ' ai-b', name: 'baseline'},
        {value: ' ai-fb', name: 'first baseline'},
        {value: ' ai-lb', name: 'last baseline'},
        {value: ' ai-ss', name: 'self-start'},
        {value: ' ai-se', name: 'self-end'},
        {value: ' ai-sc', name: 'safe center'},
        {value: ' ai-uc', name: 'unsafe center'},
        {value: ' ai-inh', name: 'inherit'},
      ],
      flexAlignContent: '',
      flexAlignContentList: [
        {value: '', name: 'default'},
        {value: ' ac-nl', name: 'normal'},
        {value: ' ac-st', name: 'stretch'},
        {value: ' ac-c', name: 'center'},
        {value: ' ac-s', name: 'start'},
        {value: ' ac-e', name: 'end'},
        {value: ' ac-fs', name: 'flex-start'},
        {value: ' ac-fe', name: 'flex-end'},
        {value: ' ac-b', name: 'baseline'},
        {value: ' ac-fb', name: 'first baseline'},
        {value: ' ac-lb', name: 'last baseline'},
        {value: ' ac-ss', name: 'self-start'},
        {value: ' ac-se', name: 'self-end'},
        {value: ' ac-sc', name: 'safe center'},
        {value: ' ac-uc', name: 'unsafe center'},
        {value: ' ac-sb', name: 'space-between'},
        {value: ' ac-sa', name: 'space-around'},
        {value: ' ac-sev', name: 'space-evenly'},
        {value: ' ac-inh', name: 'inherit'},
      ],
      flexAlignSelf: '',
      flexAlignSelfList: [
        {value: '', name: 'default'},
        {value: 'as-nl', name: 'normal'},
        {value: 'as-st', name: 'stretch'},
        {value: 'as-c', name: 'center'},
        {value: 'as-s', name: 'start'},
        {value: 'as-e', name: 'end'},
        {value: 'as-fs', name: 'flex-start'},
        {value: 'as-fe', name: 'flex-end'},
        {value: 'as-b', name: 'baseline'},
        {value: 'as-fb', name: 'first baseline'},
        {value: 'as-lb', name: 'last baseline'},
        {value: 'as-ss', name: 'self-start'},
        {value: 'as-se', name: 'self-end'},
        {value: 'as-sc', name: 'safe center'},
        {value: 'as-uc', name: 'unsafe center'},
        {value: 'as-inh', name: 'inherit'},
      ],
      flexJustifyItems: '',
      flexJustifyItemsList: [
        {value: '', name: 'default'},
        {value: ' ji-nl', name: 'normal'},
        {value: ' ji-st', name: 'stretch'},
        {value: ' ji-c', name: 'center'},
        {value: ' ji-s', name: 'start'},
        {value: ' ji-e', name: 'end'},
        {value: ' ji-fs', name: 'flex-start'},
        {value: ' ji-fe', name: 'flex-end'},
        {value: ' ji-b', name: 'baseline'},
        {value: ' ji-fb', name: 'first baseline'},
        {value: ' ji-lb', name: 'last baseline'},
        {value: ' ji-ss', name: 'self-start'},
        {value: ' ji-se', name: 'self-end'},
        {value: ' ji-sc', name: 'safe center'},
        {value: ' ji-uc', name: 'unsafe center'},
        {value: ' ji-inh', name: 'inherit'},
      ],
      flexJustifyContent: '',
      flexJustifyContentList: [
        {value: '', name: 'default'},
        {value: ' jc-st', name: 'stretch'},
        {value: ' jc-c', name: 'center'},
        {value: ' jc-s', name: 'start'},
        {value: ' jc-e', name: 'end'},
        {value: ' jc-fs', name: 'flex-start'},
        {value: ' jc-fe', name: 'flex-end'},
        {value: ' jc-l', name: 'left'},
        {value: ' jc-r', name: 'right'},
        {value: ' jc-b', name: 'baseline'},
        {value: ' jc-fb', name: 'first baseline'},
        {value: ' jc-lb', name: 'last baseline'},
        {value: ' jc-ss', name: 'self-start'},
        {value: ' jc-se', name: 'self-end'},
        {value: ' jc-sc', name: 'safe center'},
        {value: ' jc-uc', name: 'unsafe center'},
        {value: ' jc-sb', name: 'space-between'},
        {value: ' jc-sa', name: 'space-around'},
        {value: ' jc-sev', name: 'space-evenly'},
        {value: ' jc-inh', name: 'inherit'},
      ],
      flexJustifySelf: '',
      flexJustifySelfList: [
        {value: '', name: 'default'},
        {value: ' js-nl', name: 'normal'},
        {value: ' js-st', name: 'stretch'},
        {value: ' js-c', name: 'center'},
        {value: ' js-s', name: 'start'},
        {value: ' js-e', name: 'end'},
        {value: ' js-l', name: 'left'},
        {value: ' js-r', name: 'right'},
        {value: ' js-fs', name: 'flex-start'},
        {value: ' js-fe', name: 'flex-end'},
        {value: ' js-b', name: 'baseline'},
        {value: ' js-fb', name: 'first baseline'},
        {value: ' js-lb', name: 'last baseline'},
        {value: ' js-ss', name: 'self-start'},
        {value: ' js-se', name: 'self-end'},
        {value: ' js-sc', name: 'safe center'},
        {value: ' js-uc', name: 'unsafe center'},
        {value: ' js-inh', name: 'inherit'},
      ],
    }),
    computed: {
      flexContainerClasses(){
        return `${this.flexBase}${this.flexDirection}${this.flexWrap}${this.flexAlignItems}${this.flexAlignContent}${this.flexJustifyContent}${this.flexJustifyItems}`
      },
      flexItemClasses(){
        return `${this.flexAlignSelf}${this.flexJustifySelf}`
      },
    }
  }
</script>

<template>
  <div class="rs-buttons" v-cloak>
    <h1 class="mt-0">Buttons</h1>
    <div class="row cols-1 cols-2:md cols-3:lg">

      <div class="col">
        <h4 class="mt-0 txt-theme-2 font-500">Button base type</h4>
        <div class="rs-select">
          <select v-rs-select v-model="buttonColor">
            <option value="">default</option>
            <option value="button-primary">primary</option>
            <option value="button-secondary">secondary</option>
            <option value="button-success">success</option>
            <option value="button-warning">warning</option>
            <option value="button-danger">danger</option>
            <option value="button-info">info</option>
            <option value="disabled">disabled</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary rds-4 font-500">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 txt-theme-2 font-500">Button border (<router-link to="/borders">border utility</router-link>)</h4>
        <div class="rs-select">
          <select v-rs-select v-model="buttonBorder">
            <option value="">Border none</option>
            <option value="bdr bdr-primary">Border primary</option>
            <option value="bdr bdr-secondary">Border secondary</option>
            <option value="bdr bdr-success">Border success</option>
            <option value="bdr bdr-warning">Border warning</option>
            <option value="bdr bdr-danger">Border danger 2px</option>
            <option value="bdr bdr-wd-2 bdr-primary">Border primary 2px</option>
            <option value="bdr bdr-wd-2 bdr-secondary">Border secondary 2px</option>
            <option value="bdr bdr-wd-2 bdr-success">Border success 2px</option>
            <option value="bdr bdr-wd-2 bdr-warning">Border warning 2px</option>
            <option value="bdr bdr-wd-2 bdr-danger">Border danger 2px</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary rds-4 font-500">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 txt-theme-2 font-500">Button padding (<router-link to="/spacings">spacing utility</router-link>)</h4>
        <div class="rs-select">
          <select v-rs-select v-model="buttonPadding">
            <option :value="spacing.replace('--spacing-', 'p-')" v-for="spacing in spacingsVars" :key="spacing">var({{spacing}})</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary rds-4 font-500">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <!-- (<router-link to="/radius">radius utility</router-link>) -->
        <h4 class="mt-0 txt-theme-2 font-500">Button radius</h4>
        <div class="rs-select">
          <select v-rs-select v-model="buttonRadius">
            <option :value="radius.replace('--radius-', 'rds-')" v-for="radius in radiusVars" :key="radius">var({{radius}})</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary rds-4 font-500">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 txt-theme-2 font-500">Background hover color</h4>
        <div class="rs-select">
          <select v-rs-select v-model="buttonBgColor">
            <option value="">Background color</option>
            <option value="bg-info:h">Background info</option>
            <option value="bg-info-1:h">Background info 1</option>
            <option value="bg-info-2:h">Background info 2</option>
            <option value="bg-theme:h">Background theme</option>
            <option value="bg-theme-1:h">Background theme 1</option>
            <option value="bg-theme-2:h">Background theme 2</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary rds-4 font-500">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col">
        <h4 class="mt-0 txt-theme-2 font-500">Text color (<router-link to="/colors">colors utility</router-link>)</h4>
        <div class="rs-select">
          <select v-rs-select v-model="buttonTextColor">
            <option value="">Text color</option>
            <option value="txt-info">Text info</option>
            <option value="txt-info-1">Text info 1</option>
            <option value="txt-info-2">Text info 2</option>
            <option value="txt-theme">Text theme</option>
            <option value="txt-theme-1">Text theme 1</option>
            <option value="txt-theme-2">Text theme 2</option>
          </select>
          <div class="rs-select__value p-4 pr-10 bdr bdr-secondary rds-4 font-500">
            <svg-icon name="rs-arrow-down"></svg-icon>
          </div>
        </div>
      </div>

      <div class="col col-12:md">
        <h4 class="mt-0 txt-theme-2 font-500">Button text</h4>
        <input class="rs-form-control p-4 bdr bdr-secondary rds-4" type="text" v-model="buttonText">
      </div>

    </div>
    <div class="my-5 my-8:md">
      <button :class="buttonClass">{{buttonText}}</button>
    </div>
    <code class="my-8 d-b p-3 rds-2 bdr bdr-secondary-2 bg-secondary">class="{{buttonClass}}"</code>
    <div class="my-5 my-8:md">
      <button class="button p-4 rds-3 button-success font-sz-15">
        <svg-icon add-class="mr-3" name="rs-settings"></svg-icon>
        <span>Button with icon</span>
      </button>
      <button class="button p-4 rds-3 button-danger font-sz-15">
        <span>Button with icon</span>
        <svg-icon add-class="ml-3" name="rs-trash"></svg-icon>
      </button>
    </div>


    <div class="mt-10">
      <div class="d-n d-f:md row no-gap cols-1 cols-2:md p-5 sh-1 mb-3">
        <div class="col"><strong>class</strong></div>
        <div class="col"><strong>element</strong></div>
      </div>
      <div class="row ai-c no-gap cols-1 cols-2:md p-5 sh-1 mb-3" v-for="item in buttonsList" :key="item.className">
        <div class="col txt-primary font-500">{{item.className}}</div>
        <div class="col"><buton class="font-sz-15 font-500 p-3 rds-3" :class="item.className.replace(/\./g,'')">Button element</buton></div>
      </div>
    </div>

  </div>
</template>

<script>

  import spacingVars from '@/mixins/spacings'
  import radiusVars from '@/mixins/radius'

  export default {
    mixins: [spacingVars, radiusVars],
    data(){
      return {
        buttonText: 'button',
        buttonBgColor: '',
        buttonTextColor: '',
        buttonBorder: 'bdr bdr-secondary',
        buttonColor: '',
        buttonPadding: 'p-3',
        buttonRadius: 'rds-1',
        buttonsList: [
          {className: '.button'},
          {className: '.button .button-primary'},
          {className: '.button .button-secondary'},
          {className: '.button .button-success'},
          {className: '.button .button-danger'},
          {className: '.button .button-info'},
          {className: '.button .button-warning'},
          {className: '.button .button-disabled'},
        ]
      }
    },
    computed: {
      buttonClass(){
        return `button ${this.buttonColor} ${this.buttonPadding} ${this.buttonRadius} ${this.buttonBorder} ${this.buttonBgColor} ${this.buttonTextColor} font-sz-18`
      },
    },
  }
</script>

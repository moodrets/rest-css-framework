<template>
  <div class="d-f fw-wr mb-3">
    <strong class="mr-4" :class="`txt-${titleColor}`">{{title}}</strong>
    <span v-if="link">
      <router-link :to="link" class="td-n td-u:h txt-theme-1">({{linkText}})</router-link>
    </span>
  </div>
  <select class="p-4 bdr bdr-wd-2 bdr-secondary bdr-primary:f rds-5 out-n wd-full" @change="changeSelect">
    <option :class="item.optionClass" v-for="item in selectOptions" :value="item.value" :key="item.value">{{item.text}}</option>
  </select>
</template>

<script>

  import {reactive} from 'vue'

  export default {
    props: [
      'items',
      'title',
      'titleColor',
      'link',
      'linkText'
    ],
    emits: ['selectValueChange'],
    setup(props, ctx){

      const selectOptions = reactive(props.items)

      const changeSelect = e => {
        ctx.emit('selectValueChange', [e.target.value, e.target.options[e.target.selectedIndex].text])
      }

      return {
        selectOptions,
        changeSelect
      }
    }
  }
</script>

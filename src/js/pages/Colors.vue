<template>
  <div class="rs-colors">
    <h1 class="mt-0">Colors</h1>
    <div class="row">
      <div class="col col-12 col-6:md col-4:lg" v-for="section in colors" :key="section.name">
        <h2 :class="`txt-${section.name.toLowerCase()}-1`">{{section.name}}</h2>
        <div class="d-ib p-8 mr-5 rds-round" :class="`bg-${color}`" v-for="color in section.colors" :key="color"></div>
      </div>
    </div>
  </div>
</template>

<script>

  import { reactive } from '@vue/composition-api'

  export default {
    setup(){

      const colors = reactive([
        {
          name: 'Theme',
          colors: ['theme', 'theme-1', 'theme-2']
        },
        {
          name: 'Primary',
          colors: ['primary', 'primary-1', 'primary-2']
        },
        {
          name: 'Secondary',
          colors: ['secondary', 'secondary-1', 'secondary-2']
        },
        {
          name: 'Success',
          colors: ['success', 'success-1', 'success-2']
        },
        {
          name: 'Warning',
          colors: ['warning', 'warning-1', 'warning-2']
        },
        {
          name: 'Danger',
          colors: ['danger', 'danger-1', 'danger-2']
        },
      ])

      return {
        colors
      }
    }
  }
</script>

<template>
  <div class="svg-icon" :class="addClass">
    <svg><use :xlink:href="'#'+name"></use></svg>
  </div>
</template>

<script>
  export default {
    props: ['addClass', 'name']
  }
</script>

<template>
  <div :class="['svg-icon', `svg-icon--${name}`, addClass]">
    <svg><use :xlink:href="`#${name}`"></use></svg>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'rs'
      },
      addClass: {
        type: String,
      }
    },
  }
</script>

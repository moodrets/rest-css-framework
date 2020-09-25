<template>
  <a v-if="href" :target="target" :href="href" :class="['svg-icon', `svg-icon--${name}`, addClass]">
    <svg><use :xlink:href="`#${name}`"></use></svg>
  </a>
  <div v-else :class="['svg-icon', `svg-icon--${name}`, addClass]">
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
      },
      href: {
        type: String
      },
      target: {
        type: String
      }
    },
  }
</script>

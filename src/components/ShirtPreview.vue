<template>
  <div class="fixed overflow-hidden rounded-lg shadow-lg bg-white w-82 h-82">
    <img
      :src="shirtSrc"
      alt=""
    >
    <p>
      {{ shirtSrc }}
    </p>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api'

  export default {
    name: 'ShirtPreview',
    props: {
      shirt: {
        type: String,
        required: true
      }
    },
    setup (props, ctx) {
      const shirtSrc = computed(() => {
        console.log(`@/assets/${props.shirt}.jpg`)
        return require(`@/assets/${props.shirt}.jpg`)
      })
      return {
        shirtSrc: shirtSrc
      }
    }
  }
</script>

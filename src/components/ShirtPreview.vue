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
    setup (props) {
      const shirtSrc = computed(() => {
        return require(`@/assets/${props.shirt}.jpg`)
      })
      return {
        shirtSrc
      }
    }
  }
</script>

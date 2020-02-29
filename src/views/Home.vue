<template>
  <div class="flex flex-col justify-center items-center h-full">
    <h1 class="text-4xl lg:text-6xl text-white font-bold">
      It's not.
    </h1>
    <earf />
  </div>
</template>

<script>
  import Earf from '@/components/Earf.vue'

  export default {
    name: 'Home',
    components: {
      Earf
    },
    setup (props, ctx) {
    }
  }
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-center bg-black w-full min-h-screen lg:h-screen"
    :style="{ backgroundImage: 'url(' + require('@/assets/stars-background.jpg') + ')' }"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-center bg-black w-full h-screen"
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

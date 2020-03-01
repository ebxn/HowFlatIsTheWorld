<template>
  <div id="app">
    <default-layout>
      <Home />
    </default-layout>
  </div>
</template>

<script>
  import DefaultLayout from '@/layouts/Default.vue'
  import Home from '@/views/Home.vue'

  export default {
    name: 'App',
    components: {
      DefaultLayout,
      Home
    }
  }
</script>

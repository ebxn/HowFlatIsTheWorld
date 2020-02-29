<template>
  <div id="app">
    <default-layout>
      <router-view :key="$route.fullPath" />
    </default-layout>
  </div>
</template>

<script>
  import DefaultLayout from '@/layouts/Default.vue'

  export default {
    name: 'App',
    components: {
      DefaultLayout
    },
    setup (props, ctx) {
    }
  }
</script>

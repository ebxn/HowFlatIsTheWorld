import Vue from 'vue'
import VueCompApi from '@vue/composition-api'
import App from './App.vue'
import './assets/tailwind.css'

Vue.use(VueCompApi)

/* eslint-disable */
console.log(
  '%c Ban Jemmy!',
  'color: white; font-weight: bold; font-size: 2rem; text-shadow: 1px 1px 3px black, 1px 1px 2px black;'
)
/* eslint-enable */

new Vue({
  render: h => h(App)
}).$mount('#app')

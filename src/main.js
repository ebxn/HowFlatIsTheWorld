import Vue from 'vue'
import VueCompApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueCompApi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

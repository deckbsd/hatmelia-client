import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import App from './App.vue'
import store from './store'

Vue.use(VueSocketio, 'http://localhost:3000/links-analyzer', store)

new Vue({
  el: '#app',
  render: h => h(App)
})

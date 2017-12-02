import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(VueSocketio, 'http://localhost:3000/links-analyzer', store)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

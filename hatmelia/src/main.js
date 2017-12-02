import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
const hatmelia_server = process.env.HATMELIA_SERVER || 'http://localhost:3000/links-analyzer'

Vue.use(Vuex)
Vue.use(VueSocketio, hatmelia_server, store)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

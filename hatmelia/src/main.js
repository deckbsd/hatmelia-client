import Vue from 'vue'
import VueSocketio from 'vue-socket.io'
import io from 'socket.io-client';
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

require ('status-indicator/styles.css')
const hatmelia_server = process.env.HATMELIA_SERVER || 'http://localhost:3000/links-analyzer'

const SocketInstance = io.connect(hatmelia_server, {
    query: {
        token: window.localStorage.getItem('auth')
    }
});


Vue.use(Vuex)
Vue.use(new VueSocketio({
  connection: SocketInstance
}), store)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        connected: false
    },
    mutations:{
        SOCKET_CONNECT: (state,  status ) => {
            state.connected = true;
        }
    }
})
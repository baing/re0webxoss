import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from '../router/index.js'
import VueSocketIO from 'vue-socket.io'

import { sync } from 'vuex-router-sync'
sync(store, router) // It adds a route module into the store, which contains the state representing the current route

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:2020',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


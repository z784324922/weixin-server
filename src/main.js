// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'lib-flexible'

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'

import './styles/index.less'
import store from "./vuex/store.js"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

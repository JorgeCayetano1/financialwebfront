import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import {routes} from '@/routes'
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new Router({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

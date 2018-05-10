import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'
import Nickname from '@/pages/nickname/Index.vue'

Vue.use(Router);

const routes = [
  { path: '*', component: Home },
  { path: '/nickname', component: Nickname },
];

export default new Router({
  routes,
  mode: 'history',
})

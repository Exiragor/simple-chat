import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'
import List from '@/pages/List.vue'

Vue.use(Router);

const routes = [
  { path: '*', component: Home },
  { path: '/list', component: List },
];

export default new Router({
  routes,
  mode: 'history',
})
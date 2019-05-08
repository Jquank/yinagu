import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('./views/brand-intro/brand-intro.vue')
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: () => import('./views/commodity/commodity.vue')
    }
  ]
})

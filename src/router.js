import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
Vue.use(Router)

export default new Router({
    linkActiveClass: 'router-active-class',
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
        },
        {
            path: '/goodsDetail/:id',
            name: 'goodsDetail',
            component: () => import('./views/goods-detail/goods-detail.vue')
        },
        {
            path: '/mall',
            name: 'mall',
            component: () => import('./views/mall/mall.vue')
        },
        {
            path: '/brandNews',
            name: 'brandNews',
            component: () => import('./views/news/news.vue')
        },
        {
            path: '/newsDetail/:id',
            name: 'newsDetail',
            component: () => import('./views/news-detail/news-detail.vue')
        },
        {
            path: '/store',
            name: 'store',
            component: () => import('./views/store/store.vue')
        },
        {
            path: '/recruitment',
            name: 'recruitment',
            component: () => import('./views/recruitment/recruitment.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/contact-us/contact-us.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('./views/search-result/search-result.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

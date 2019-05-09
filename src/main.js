import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'

import 'element-ui/lib/theme-chalk/index.css'
import 'common/less/index.less'

import insertDiv from '@/directive/insertDiv.js'
Vue.directive('insert-div', insertDiv)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

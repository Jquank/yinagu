import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'

import 'element-ui/lib/theme-chalk/index.css'
import 'common/less/index.less'

// import flexSort from '@/directive/flexSort.js'
// Vue.directive('flex-sort', flexSort)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

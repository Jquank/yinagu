import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element.js'

import 'element-ui/lib/theme-chalk/index.css'
import 'common/less/index.less'

import insertDiv from '@/directive/insertDiv.js'
import { $jsonp } from '@/api/http'
import * as filters from 'common/js/filters/index.js'
Vue.directive('insert-div', insertDiv)
Vue.prototype.$jsonp = $jsonp
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

export const eventBus = new Vue()
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

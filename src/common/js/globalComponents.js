import GoodsShowComponent from 'views/goods-show/goods-show.vue'
import LoadingComponent from 'components/loading.vue'

const GoodsShow = {
  install: function(Vue) {
    Vue.component('goods-show', GoodsShowComponent)
  }
}
const Loading = {
  install: function(Vue) {
    Vue.component('loading', LoadingComponent)
  }
}

export { GoodsShow, Loading }

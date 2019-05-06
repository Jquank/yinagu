<template>
  <div class="goods-show">
    <div class="goods-img">
      <img class="response-img" :src="url" @click="showGoodsDetail">
    </div>
    <div class="goods-name" @click="showGoodsDetail">
      <b>{{name}}</b>
    </div>
    <div class="goods-price">
      <span>RMB&nbsp;</span>
      {{price | priceFormat}}
    </div>
    <div class="goods-color">
      <div v-for="item in color.length" :key="item" class="single-color"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goods-show',
  props: {
    url: {
      type: String,
      default:
        'https://www.katespade.cn/images/thumbs/000/0005248_andi-_490.jpeg'
    },
    name: {
      type: String,
      default: 'andi 毛荷包'
    },
    price: {
      type: String,
      default: '3200'
    },
    color: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    this._getImgWidth()
  },
  methods: {
    _getImgWidth() {
      let img = document.querySelectorAll('.goods-img img')[0]
      img.onload = () => {
        this.$emit('imgloaded', img.width)
      }
    },
    showGoodsDetail() {
      this.$router.push({
        path: 'goodsDetail'
      })
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.goods-show {
  .goods-name {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .goods-price {
    text-align: center;
    padding-bottom: 20px;
  }
}
</style>

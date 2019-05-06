<template>
  <div class="new-goods">
    <div class="title">
      <b>新品（64）</b>
      <span>排序</span>
    </div>
    <div class="recommend">
      <div class="recommend-title">为您推荐</div>
      <m-swiper></m-swiper>
    </div>
    <div class="goods-list" ref="goodsList">
      <div v-for="(item, index) in list" :key="index">
        <goods-show @imgloaded="imgloaded"></goods-show>
      </div>
      <div class="item-holder" v-if="list.length%3===2"></div>
    </div>
    <loading v-if="loadingShow"></loading>
  </div>
</template>

<script>
import MSwiper from 'components/m-swiper'
import loadingMixin from 'common/js/mixins/loadingMixin'
export default {
  mixins: [loadingMixin],
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },
  created() {},
  mounted() {},
  methods: {
    imgloaded(width) {
      let holderImg = document.getElementsByClassName('item-holder')[0]
      holderImg.style.width = width + 'px'
    }
  },
  components: {
    MSwiper
  }
}
</script>

<style scoped lang="less">
@border-div: 1px solid #b4cdca;
.new-goods {
  padding-left: 160px;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-bottom: 40px;
    border-bottom: @border-div;
  }
  .recommend {
    border-bottom: @border-div;
    .recommend-title {
      margin: 0 0 15px;
      font-size: 18px;
      text-align: center;
    }
  }
  .goods-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item-holder {
      width: calc(~'100% / 3 - 30px');
      max-width: 368px;
    }
  }
}
</style>

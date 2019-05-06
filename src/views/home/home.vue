<template>
  <div class="home">
    <m-swiper :swiperSlides="swiperSlides"></m-swiper>
    <div class="banner-text">
      <div class="title">夏季换新 轻奢新品</div>
      <div class="subtitle">New Light and Luxury Products in Summer</div>
      <div class="detail-btn">DETAILS</div>
    </div>
  </div>
</template>

<script>
import MSwiper from 'components/m-swiper'
export default {
  data() {
    return {
      swiperSlides: [
        { src: require('./banner01.png') },
        { src: require('./banner01.png') },
        { src: require('./banner01.png') },
        { src: require('./banner01.png') }
      ]
    }
  },
  components: {
    MSwiper
  }
}
</script>

<style scoped lang="less">
.home {
  position: relative;
  .banner-text {
    position: absolute;
    left: 300px;
    top: 240px;
    z-index: 1000;
    .title {
      font-size: 70px;
      font-weight: bold;
    }
    .subtitle {
      font-size: 16px;
      font-weight: 400;
      margin-top: 10px;
    }
    .detail-btn {
      width: 100px;
      height: 36px;
      background: rgba(0, 0, 0, 1);
      color: #fff;
      text-align: center;
      line-height: 36px;
      margin-top: 45px;
    }
  }
}
</style>

<template>
  <div class="m-swiper" ref="mSwiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img @click="showGoodsDetail" class="response-img" :src="slide.src">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <template v-if="btn">
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </template>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    btn: {
      type: Boolean,
      default: false
    },
    swiperSlides: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  data() {
    return {
      swiperOption: {
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
        // loop: true,
        // slidesPerView: 3,
        // autoHeight: true
        // spaceBetween: 30
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted() {},
  methods: {
    showGoodsDetail() {},
    setSlideNum() {
      let width = this.$refs.mSwiper.clientWidth - 100
      if (width > 1000) {
        return 4
      } else if (width > 750) {
        return 3
      } else if (width > 500) {
        return 2
      } else {
        return 1
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="less">
.m-swiper {
  // padding: 0 50px;
  position: relative;
  .swiper-slide {
    text-align: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    outline: none;
  }
}
</style>
<style lang="less">
.swiper-pagination-bullets {
  bottom: 30px !important;
}
.swiper-pagination-bullet {
  width: 60px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 1);
}
</style>

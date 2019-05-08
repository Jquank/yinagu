<template>
  <div class="m-swiper" ref="mSwiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <div class="slide-wrapper1">
          <!-- 首页新品左侧文字 -->
          <div v-if="showLeftText" class="new-products">
            <div class="title">
              <div class="title-1">New products</div>
              <div class="title-2">
                <p>夏季</p>
                <p>新品</p>
              </div>
              <div>
                <div class="title-3">驼色/大衣</div>
                <div class="title-4">2019夏季新品复古蕾丝花边网纱收腰无袖连衣裙女中长款</div>
              </div>
              <div class="title-5">¥ 299</div>
            </div>
          </div>
          <div class="slide-img">
            <img @click="showGoodsDetail" class="response-img" :src="slide.src">
            <div v-if="showImgText" class="img-text">
              <span>YINAGU 2019气质连衣裙...</span>
              <span>更多></span>
            </div>
          </div>
        </div>
        <!-- 首页banner上面文字 -->
        <div v-if="showUpperText" class="banner-text">
          <div class="title">{{slide.title}}</div>
          <div class="subtitle">{{slide.subtitle}}</div>
          <div class="detail-btn">DETAILS</div>
        </div>
      </swiper-slide>
      <div v-if="showPagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 夏季新品的前进后退 -->
    <template v-if="showLeftText">
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </template>
    <!-- 多列轮播的前进后退 -->
    <template v-if="showBtn">
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </template>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props: {
        showBtn: {
            type: Boolean,
            default: false
        },
        showLeftText: {
            type: Boolean,
            default: false
        },
        showUpperText: {
            type: Boolean,
            default: false
        },
        showImgText: {
            type: Boolean,
            default: false
        },
        showPagination: {
            type: Boolean,
            default: false
        },
        swiperSlides: {
            type: Array,
            default: function() {
                return []
            }
        },
        swiperOption: {
            type: Object,
            default: function() {
                return {}
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
            //   swiperOption: {
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev'
            // },
            // loop: true,
            // slidesPerView: 3,
            // autoHeight: true
            // spaceBetween: 30
            // pagination: {
            //   el: '.swiper-pagination'
            // }
            //   }
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
    position: relative;
    .swiper-slide {
        text-align: center;
    }
    .swiper-button-prev,
    .swiper-button-next {
        outline: none;
    }

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
    .slide-wrapper1 {
        display: flex;
        .new-products {
            flex: 0 0 210px;
            display: flex;
            margin-right: 69px;
            .title {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                overflow: hidden;
                text-align: start;
                .title-1 {
                    font-size: 24px;
                }
                .title-2 {
                    & > p {
                        font-size: 88px;
                    }
                }
                .title-3 {
                    font-size: 18px;
                    color: #9a8658;
                    font-weight: bold;
                }
                .title-4 {
                    color: #9f9f9f;
                    margin-top: 16px;
                }
                .title-5 {
                    width: 80px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    background: rgb(154, 134, 88);
                    color: #fff;
                }
            }
            .show-img {
                flex: 1;
            }
        }
        .slide-img {
            flex: 1;
            .img-text {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                height: 21px;
                line-height: 21px;
                padding: 8px 5px 0;
                & > span:first-child {
                    display: inline-block;
                    font-size: 16px;
                    width: 225px;
                    text-align: start;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                & > span:last-child {
                    color: #9a8658;
                }
            }
        }
    }
}
</style>
<style lang="less">
// 分页器样式
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

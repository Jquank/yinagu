<template>
  <div class="m-swiper" ref="mSwiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <div class="slide-wrapper1">
          <!-- 大屏banner -->
          <div v-if="generalSwiper" class="slide-img1">
            <div class="img-wrapper1" @click="routerTo('/commodity')">
              <img class="response-img" :src="'http://'+slide.photo_path">
              <div v-if="showUpperText" class="upper-text">
                <p>{{slide.title}}</p>
                <p>{{slide.address}}</p>
                <p>{{slide.phone}}</p>
              </div>
            </div>
          </div>
          <!-- 多列banner -->
          <div v-if="showImgText" class="slide-img3">
            <div class="img-wrapper3">
              <img :src="'http://'+slide.photo_path" @click="routerTo('/goodsDetail/'+slide.id)">
            </div>
          </div>
        </div>
      </swiper-slide>
      <div v-if="showPagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>

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
        generalSwiper: {
            type: Boolean,
            default: false
        },
        detail: {
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
        return {}
    },
    mounted() {},
    methods: {
        routerTo(value) {
            this.$router.push({
                path: value
            })
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
    .swiper-container {
        overflow: visible;
    }
    .slide-wrapper1 {
        .slide-img1 {
            .img-wrapper1 {
                position: relative;
                .upper-text {
                    position: absolute;
                    bottom: -52px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 90%;
                    height: 105px;
                    background: #fff;
                    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    z-index: 101;
                    padding: 15px;
                    p:first-child {
                        font-size: 16px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        line-height: 30px;
                        color: rgba(0, 0, 0, 1);
                    }
                }
            }
        }
        .slide-img3 {
            .img-wrapper3 {
                img {
                    cursor: pointer;
                    height: 150px;
                    width: 110px;
                }
            }
        }
    }
}
</style>

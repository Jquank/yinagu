<template>
  <div class="m-swiper" ref="mSwiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperSlides.length">
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <div class="slide-wrapper1">
          <!-- 首页新品左侧文字 -->
          <div v-if="showLeftText" class="new-products">
            <div class="title">
              <div class="title-1">{{slide.e_title}}</div>
              <div class="title-2">
                <p>{{slide.title}}</p>
              </div>
              <div>
                <div class="title-3">{{slide.color}}</div>
                <div class="title-4">{{slide.describe}}</div>
              </div>
              <div class="title-5">{{'¥ '+slide.piece}}</div>
            </div>
          </div>
          <!-- 大屏banner -->
          <div v-if="generalSwiper" class="slide-img1">
            <div class="img-wrapper1" @click="routerTo('/commodity')">
              <img class="response-img" :src="'http://'+slide.photo_path">
            </div>
          </div>
          <!-- 新品banner -->
          <div v-if="showLeftText" class="slide-img2">
            <div class="img-wrapper2" @click="routerTo('/commodity')">
              <img :src="'http://'+slide.photo_path" class="response-img">
            </div>
            <!-- 夏季新品的前进按钮 -->
            <div v-if="showLeftText" class="swiper-button-next swiper-button-white" slot="button-next"></div>
          </div>
          <!-- 多列banner -->
          <div v-if="showImgText" class="slide-img3">
            <div class="img-wrapper3">
              <div class="hidden-model">
                <div @click="routerTo('/commodity')"></div>
              </div>
              <img class="response-image" :src="'http://'+slide.photo_path" @click="routerTo('/goodsDetail/123')">
            </div>
            <div class="img-text">
              <span>{{slide.goods_name}}</span>
              <span @click="routerTo('/commodity')">更多></span>
            </div>
          </div>
        </div>
        <!-- 首页banner上面文字 -->
        <!-- <div v-if="showUpperText" class="banner-text">
          <div class="title">{{slide.title}}</div>
          <div class="subtitle">{{slide.subtitle}}</div>
          <div class="detail-btn">DETAILS</div>
        </div>-->
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
    // position: relative;
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
        text-align: left;
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
            flex: 0 0 180px;
            display: flex;
            margin-right: 69px;
            .title {
                display: flex;
                flex-direction: column;
                // justify-content: space-around;
                overflow: hidden;
                text-align: start;
                .title-1 {
                    height: 60px;
                    font-size: 22px;
                }
                .title-2 {
                    & > p {
                        width: 180px;
                        font-size: 88px;
                        line-height: 115px;
                    }
                }
                .title-3 {
                    font-size: 18px;
                    color: #9a8658;
                    font-weight: bold;
                    margin-top: 30px;
                }
                .title-4 {
                    color: #9f9f9f;
                    margin-top: 16px;
                    height: 78px;
                    overflow: hidden;
                }
                .title-5 {
                    width: 80px;
                    height: 36px;
                    margin-top: 20px;
                    text-align: center;
                    line-height: 36px;
                    background: rgb(154, 134, 88);
                    color: #fff;
                }
            }
        }
        .slide-img2 {
            flex: 0 0 900px;
            text-align: left;
            height: 500px;
            position: relative;
            .img-wrapper2:hover {
                img {
                    transform: scale(1.2);
                }
                .swiper-button-next {
                    right: -130px !important;
                }
            }
            .img-wrapper2 {
                width: 900px;
                display: inline-block;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                overflow: hidden;
                img {
                    cursor: pointer;
                    transition: all 0.6s;
                }
            }
        }
        .slide-img3 {
            flex: 1;
            max-width: 320px;
            .img-wrapper3:hover {
                .hidden-model {
                    z-index: 10;
                    top: 0;
                }
                img {
                    transform: scale(1.2);
                }
            }
            .img-wrapper3 {
                position: relative;
                width: 100%;
                overflow: hidden;
                img {
                    cursor: pointer;
                    transition: all 0.6s;
                    height: 450px;
                    width: 320px;
                }
                // img:hover {
                //     transform: scale(1.2);
                // }
                .hidden-model {
                    position: absolute;
                    left: 0;
                    top: -100%;
                    width: 320px;
                    height: 450px;
                    background-color: #000;
                    opacity: 0.2;
                    z-index: -1;
                    transition: all 0.9s;
                    cursor: pointer;
                    & > div {
                        width: 300px;
                        height: 430px;
                        border: 2px solid #fff;
                        box-sizing: border-box;
                        margin: 10px;
                        cursor: pointer;
                        background: url('./model-logo.png') no-repeat center center;
                    }
                }
            }
            .img-text {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 17px 5px 20px;
                & > span:first-child {
                    width: 230px;
                    padding-right: 8px;
                    text-align: start;
                    font-size: 16px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                & > span:last-child:hover {
                    color: @theme-color;
                }
                & > span:last-child {
                    width: 45px;
                    text-align: left;
                    line-height: 18px;
                    cursor: pointer;
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
.swiper-pagination-bullet::before {
    position: relative;
    top: -10px;
    content: ' ';
    display: block;
    height: 28px;
}
.swiper-pagination-bullet {
    width: 60px;
    height: 8px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    opacity: 1;
}
.swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 1);
}
</style>

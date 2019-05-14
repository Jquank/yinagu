<template>
  <div class="goods-detail">
    <div class="bread-title">
      <p>所有分类 > MAXRIENY 2019夏季新...</p>
    </div>
    <div class="gallery">
      <div class="left">
        <swiper :options="swiperOption" v-if="swiperSlides.length">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <div ref="thumbnailWrapper" class="img-wrapper">
              <img class="response-img" @mouseenter="mouseEnterThumbnail(index,slide)" :src="slide.src">
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </div>
      <div class="center">
        <img ref="smallImg" @mousemove="mousemove" @mouseleave="mouseleave" class="response-img" src="./detail.png">
      </div>
      <div class="right">
        <div ref="bigImgWrapper" class="big-img" v-show="showBigImg">
          <img ref="bigImg" src="./detail.png">
        </div>
        <p class="title">MAXRIENY 2019夏季新品气质V领无袖连衣裙女蕾丝边收腰中长群显瘦</p>
        <p class="price">促销价：&nbsp;&nbsp;¥&nbsp;299.00</p>
        <div class="infomation">
          <p>重量：888 g</p>
          <p>尺码：155/80A/S</p>
          <p>未含税价格：¥ 8888.00</p>
          <p>库存：500 件</p>
        </div>
        <div class="color">
          <span>颜色：</span>
          <div class="color-wrapper">
            <div>red</div>
            <div>white</div>
            <div>black</div>
          </div>
        </div>
        <div class="detail-info">
          <div class="info-wrapper">
            <p>商品编号：41741408227</p>
            <p>店铺： 诗萌旗舰店商品</p>
            <p>毛重：1.0kg</p>
            <p>货号：9181276</p>
            <p>腰型：高腰组合</p>
            <p>规格：单件</p>
            <p>风格：休闲，文艺，通勤</p>
            <p>主要材质：聚酯纤维</p>
          </div>
          <div class="info-wrapper">
            <p>领型：圆领</p>
            <p>流行元素：不规则</p>
            <p>廓形：A型</p>
            <p>面料：其它</p>
            <p>袖长：长袖衣</p>
            <p>门襟：套头</p>
            <p>适用年龄：25-29周岁</p>
          </div>
          <div class="info-wrapper">
            <p>图案：纯色</p>
            <p>裙长：中长裙</p>
            <p>裙型：百褶裙</p>
            <p>袖型：常规</p>
            <p>上市时间：2019春季</p>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-wrapper">
      <p class="r-title">您可能还会喜欢</p>
      <p class="r-subtitle">Maybe You Would Like</p>
      <div class="content">
        <div class="content-wrapper">
          <div @click="routerTo" v-for="(item, index) in recommendList" :key="index" class="item-wrapper">
            <img src="./detail.png" class="response-img">
            <p>
              <span>YINAGU 2019气质连衣裙1111111</span>
              <span>¥ 299</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { addClass, removeClass } from 'common/js/dom/dom.js'
export default {
    data() {
        return {
            price: 1100,
            recommendList: [1, 2, 3, 4, 5],
            showBigImg: false,
            swiperSlides: [
                {
                    src: require('./detail.png')
                },
                {
                    src: require('./detail.png')
                },
                {
                    src: require('./detail.png')
                },
                {
                    src: require('./detail.png')
                },
                {
                    src: require('./detail.png')
                },
                {
                    src: require('./detail.png')
                }
            ],
            swiperOption: {
                direction: 'vertical',
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    mounted() {},
    methods: {
        routerTo() {
            this.$router.push({
                path: '/goodsDetail/456'
            })
        },
        mouseEnterThumbnail(index, item) {
            let children = this.$refs.thumbnailWrapper
            for (let i = 0; i < children.length; i++) {
                const child = children[i]
                if (index === i) {
                    addClass(child, 'hover-img')
                } else {
                    removeClass(child, 'hover-img')
                }
            }
        },
        mousemove(e) {
            this.showBigImg = true
            let x = e.clientX - this.$refs.smallImg.getBoundingClientRect().left
            let y = e.clientY - this.$refs.smallImg.getBoundingClientRect().top
            if (x < 0) x = 0
            if (y < 0) y = 0
            this.$refs.bigImg.style.left = -x + 'px'
            this.$refs.bigImg.style.top = -y + 'px'
        },
        mouseleave() {
            this.showBigImg = false
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style scoped lang="less">
.goods-detail {
    padding: 0 100px;
    .bread-title {
        padding: 50px 0 20px 17px;
        border-bottom: 1px solid rgb(216, 216, 216);
        color: #9f9f9f;
    }
    .gallery {
        display: flex;
        margin-top: 60px;
        .left {
            flex: 0 0 80px;
            margin-right: 100px;
            padding: 23px 0;
            height: 494px;
            .swiper-container {
                height: 494px;
                .img-wrapper {
                    max-width: 80px;
                    max-height: 110px;
                    overflow: hidden;
                    box-sizing: border-box;
                }
                .hover-img {
                    border: 2px solid @theme-color;
                }
            }
        }
        .center {
            flex: 0 0 384px;
            height: 540px;
            overflow: hidden;
            margin-right: 100px;
        }
        .right {
            flex: 1;
            position: relative;
            .big-img {
                position: absolute;
                width: 384px;
                height: 540px;
                overflow: hidden;
                & > img {
                    width: 768px;
                    height: auto;
                    display: inline-block;
                    position: relative;
                }
            }
            .title {
                font-size: 18px;
                font-weight: bold;
            }
            .price {
                margin-top: 10px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgb(216, 216, 216);
                font-size: 18px;
                color: @theme-color;
            }
            .infomation {
                margin: 20px 0;
                padding: 5px 0 5px 16px;
                background: #f1f1f1;
                p {
                    color: #2b2b2b;
                    line-height: 24px;
                }
                p:last-child {
                    margin-top: 20px;
                }
            }
            .color {
                display: flex;
                align-items: center;
                padding: 0 0 15px 16px;
                border-bottom: 1px solid rgb(216, 216, 216);
                .color-wrapper {
                    display: flex;
                    padding-left: 10px;
                    & > div {
                        margin-right: 8px;
                        width: 70px;
                        height: 42px;
                        text-align: center;
                        line-height: 42px;
                        background: red;
                    }
                }
            }
            .detail-info {
                height: 220px;
                box-sizing: border-box;
                margin-top: 20px;
                background: #f1f1f1;
                padding: 20px;
                display: flex;
                .info-wrapper {
                    margin-right: 110px;
                    p {
                        font-size: 12px;
                        line-height: 23px;
                        color: rgb(43, 43, 43);
                    }
                }
            }
        }
    }
    .recommend-wrapper {
        margin: 60px 0;
        .r-title {
            font-size: 30px;
            font-weight: 400;
            text-align: center;
        }
        .r-subtitle {
            text-align: center;
            color: rgb(159, 159, 159);
            padding-top: 5px;
        }
        .content {
            padding: 22px 22px 40px;
            margin-top: 50px;
            background: rgb(241, 241, 241);
            .content-wrapper {
                display: flex;
                margin-left: -20px;
                // .item-wrapper {
                //     overflow: hidden;
                //     img {
                //         cursor: pointer;
                //         transition: all 0.6s;
                //     }
                //     img:hover {
                //         transform: scale(1.2);
                //     }
                // }
            }
            .item-wrapper {
                max-width: 320px;
                // max-height: 450px;
                overflow: hidden;
                margin-left: 20px;
                & > p {
                    padding-top: 10px;
                    display: flex;
                    justify-content: space-between;
                    & > span:first-child {
                        font-size: 16px;
                        line-height: 24px;
                        width: calc(~'100% - 90px');
                        padding-left: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    & > span:last-child {
                        font-size: 20px;
                        line-height: 24px;
                        color: @theme-color;
                        width: 70px;
                        text-align: right;
                        padding-right: 5px;
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.goods-detail {
    .left {
        position: relative;
        // 前进后退按钮样式
        .swiper-button-prev,
        .swiper-button-next {
            margin-top: 0;
            width: 20px;
            height: 80px;
            background-size: 20px 80px;
            background-color: #9a8658;
            outline: none;
            transform: rotate(90deg);
        }
        .swiper-button-prev {
            top: -30px;
            left: calc(~'50% - 10px');
        }
        .swiper-button-next {
            top: calc(~'100% - 50px');
            left: calc(~'50% - 10px');
        }
        .swiper-button-prev.swiper-button-disabled,
        .swiper-button-next.swiper-button-disabled {
            opacity: 1;
            cursor: auto;
            pointer-events: none;
            background-color: #bbb8b8;
        }
    }
}
</style>

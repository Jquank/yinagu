<template>
  <div class="goods-detail">
    <div class="gallery">
      <div class="center">
        <img ref="smallImg" class="response-img" :src="'http://'+bigImgSrc">
      </div>
      <div class="left">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <div ref="thumbnailWrapper" :class="['img-wrapper',index===0?'hover-img':'']">
              <img class="response-image" @mouseenter="mouseEnterThumbnail(index,swiperSlides)" :src="'http://'+slide">
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </div>
      <div class="separate-line"></div>
      <div class="right">
        <p class="title">{{goodsDetailData.goodsName}}</p>
        <p class="price">促销价：&nbsp;&nbsp;¥&nbsp;{{price | priceFormat}}</p>
        <div class="infomation">
          <p>重量：{{goodsDetailData.weight}}g</p>
          <p>尺码：{{goodsDetailData.goods_size}}</p>
          <p>未含税价格：¥ {{goodsDetailData.no_tax_price | priceFormat}}</p>
          <p>库存：{{goodsDetailData.inventory}} 件</p>
        </div>
        <div class="color">
          <span>颜色：</span>
          <div
            ref="colorWrapper"
            class="color-wrapper"
            v-for="(color, index) in goodsDetailData.rColorList"
            :key="color.id"
          >
            <div @click="handleClickColor(index)" :class="index===0?'border-active':''">{{color.colorName}}</div>
          </div>
        </div>
        <div class="detail-info">
          <div class="info-wrapper" v-html="goodsDetailData.content"></div>
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
    name: 'goodsDetail',
    data() {
        return {
            price: 1100,
            swiperSlides: [],
            swiperOption: {
                spaceBetween: 20,
                slidesPerView: 3,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            goodsId: '',
            goodsDetailData: {},
            bigImgSrc: ''
        }
    },
    created() {
        this.goodsId = window.location.href.split('/').pop()
        this._getGoodsDetail()
    },
    methods: {
        handleClickColor(index) {
            this.swiperSlides = this.goodsDetailData.rColorList[index].imgs
            let children = this.$refs.colorWrapper
            this._activeToggleClass(children, 'border-active', index)
        },
        _getGoodsDetail() {
            this.$jsonp('/home/getGoodsDetails?goodsId=' + this.goodsId, function(err, data) {
                if (err) return err
                this.goodsDetailData = data.datas
                this.swiperSlides = this.goodsDetailData.rColorList[0].imgs
                this.bigImgSrc = this.swiperSlides[0]
            })
        },
        routerTo(id) {
            this.$router.push({
                path: `/goodsDetail/${id}`
            })
        },
        mouseEnterThumbnail(index, item) {
            let children = this.$refs.thumbnailWrapper
            this._activeToggleClass(children, 'hover-img', index)
            this.bigImgSrc = this.swiperSlides[index]
        },
        _activeToggleClass(children, className, activeIndex) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i]
                // if (activeIndex === 0) {
                //     removeClass(child, className)
                // }
                if (activeIndex === i) {
                    addClass(child, className)
                } else {
                    removeClass(child, className)
                }
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
.goods-detail {
    .gallery {
        .left {
            padding: 0 22px;
            margin: 15px 0;
            .swiper-container {
                width: 100%;
                overflow: hidden;
                .img-wrapper {
                    max-height: 80px;
                    box-sizing: border-box;
                    overflow: hidden;
                    img {
                        width: 100%;
                        max-height: 80px;
                        box-sizing: border-box;
                    }
                }
                .hover-img {
                    border: 2px solid @theme-color;
                }
            }
        }
        .center {
            img {
                width: 100%;
                max-height: 300px;
            }
        }
        .separate-line {
            height: 10px;
            background: rgba(243, 243, 243, 1);
        }
        .right {
            padding: 20px 15px;
            .title {
                font-size: 18px;
                font-weight: bold;
            }
            .price {
                margin-top: 10px;
                font-size: 16px;
                color: @theme-color;
            }
            .infomation {
                margin: 15px 0;
                padding: 5px 0 5px 10px;
                background: #f1f1f1;
                border-top: 1px solid rgb(216, 216, 216);
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
                margin: 15px 0 0;
                padding-left: 10px;
                .color-wrapper {
                    display: flex;
                    padding-left: 10px;
                    & > div.border-active {
                        border: 2px solid rgb(216, 216, 216);
                        box-shadow: 0 0 3px #000;
                    }
                    & > div {
                        margin-right: 8px;
                        padding: 0 10px;
                        height: 32px;
                        text-align: center;
                        line-height: 32px;
                        box-sizing: border-box;
                        font-size: 12px;
                    }
                }
            }
            .detail-info {
                margin-top: 20px;
                box-sizing: border-box;
                background: #f1f1f1;
                padding: 15px;
                .info-wrapper {
                    p {
                        font-size: 12px;
                        line-height: 23px;
                        color: rgb(43, 43, 43);
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
            width: 15px;
            height: 80px;
            background-size: 15px 80px;
            background-color: #9a8658;
            outline: none;
            top: 0;
        }
        .swiper-button-prev {
            left: 5px;
        }
        .swiper-button-next {
            right: 5px;
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

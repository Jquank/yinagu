<template>
  <div class="goods-detail">
    <div class="bread-title">
      <p>
        <span>全部分类</span>
        <span>&nbsp;>&nbsp;</span>
        <span>{{goodsType}}</span>
        <span>&nbsp;>&nbsp;</span>
        <span>{{goodsName}}</span>
      </p>
    </div>
    <div class="gallery">
      <div class="left">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <div ref="thumbnailWrapper" :class="['img-wrapper',index===0?'hover-img':'']">
              <img class="response-img" @mouseenter="mouseEnterThumbnail(index,swiperSlides)" :src="'http://'+slide">
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </div>
      <div class="center">
        <img
          ref="smallImg"
          @mousemove="mousemove"
          @mouseleave="mouseleave"
          class="response-image"
          :src="'http://'+bigImgSrc"
        >
      </div>
      <div class="right">
        <div ref="bigImgWrapper" class="big-img" v-show="showBigImg">
          <img ref="bigImg" :src="'http://'+bigImgSrc">
        </div>
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
          <div class="info-wrapper" v-for="p in goodsDetailData.content" :key="p" v-html="p"></div>
        </div>
      </div>
    </div>
    <div class="recommend-wrapper">
      <p class="r-title">您可能还会喜欢</p>
      <p class="r-subtitle">Maybe You Would Like</p>
      <div class="content">
        <div class="content-wrapper">
          <div @click="routerTo(item)" v-for="item in recommendList" :key="item.id" class="item-wrapper">
            <div class="img-wrapper">
              <img :src="'http://'+ item.photo_path" class="response-img">
            </div>
            <p>
              <span>{{item.goods_name}}</span>
              <span>¥ {{item.price}}</span>
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
    name: 'goodsDetail',
    data() {
        return {
            price: 1100,
            recommendList: [],
            showBigImg: false,
            swiperSlides: [],
            swiperOption: {
                direction: 'vertical',
                spaceBetween: 20,
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            goodsId: '',
            goodsDetailData: {},
            bigImgSrc: '',
            goodsType: '',
            goodsName: ''
        }
    },
    created() {
        this.goodsId = window.location.href.split('/').pop()
        this._getGoodsDetail()
    },
    methods: {
        handleClickColor(index) {
            this.swiperSlides = this.goodsDetailData.rColorList[index].imgs
            this.bigImgSrc = this.swiperSlides[0]
            let children = this.$refs.colorWrapper
            this._activeToggleClass(children, 'border-active', index)
        },
        _getGoodsDetail() {
            this.$jsonp('/home/getGoodsDetails?goodsId=' + this.goodsId, function(err, data) {
                if (err) return err
                this.goodsType = data.datas.type
                this.goodsName = data.datas.goodsName
                this.goodsDetailData = data.datas
                this.goodsDetailData.content = this.goodsDetailData.content.split('</p>').map(val => val + '</p>')
                let arr = []
                let len = this.goodsDetailData.content.length
                for (let i = 0, str = ''; i < len; i++) {
                    const el = this.goodsDetailData.content[i]
                    str += el
                    if (len < 9) {
                        arr.push(str)
                        str = ''
                    } else if (len < 17) {
                        if (i === 7) {
                            arr.push(str)
                            str = ''
                        }
                        if (i === len - 1) {
                            arr.push(str)
                        }
                    } else if (len < 25) {
                        if (i === 7) {
                            arr.push(str)
                            str = ''
                        }
                        if (i === 15) {
                            arr.push(str)
                            str = ''
                        }
                        if (i === len - 1) {
                            arr.push(str)
                        }
                    }
                }
                this.goodsDetailData.content = arr

                this.recommendList = this.goodsDetailData.rMayGoodsList
                this.swiperSlides = this.goodsDetailData.rColorList[0].imgs
                this.bigImgSrc = this.swiperSlides[0]
                console.log(this.goodsDetailData)
            })
        },
        routerTo(item) {
            this.goodsId = item.id
            this._getGoodsDetail()
            this.$router.push({
                path: `/goodsDetail/${item.id}`
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
                    console.log(i)

                    removeClass(child, className)
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
            img {
                width: 100%;
            }
            img:hover {
                cursor: move;
            }
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
                    & > div.border-active {
                        border: 2px solid rgb(216, 216, 216);
                        box-shadow: 0 0 3px #000;
                    }
                    & > div {
                        margin-right: 8px;
                        width: 70px;
                        height: 42px;
                        text-align: center;
                        line-height: 42px;
                        cursor: pointer;
                        box-sizing: border-box;
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
                overflow: hidden;
                margin-left: 20px;
                .img-wrapper {
                    width: 320px;
                    max-height: 450px;
                    overflow: hidden;
                }
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

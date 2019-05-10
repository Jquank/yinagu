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
                    <p>
                        重量：888 g
                    </p>
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
                <div class="detail-info"></div>
            </div>
        </div>
        <div class="introduce"></div>
        <div class="recommend-wrapper">
            <h3 class="t-center">您可能还会喜欢</h3>
            <div class="recommend">
                <div v-for="(item, index) in recommendList" :key="index" class="item">
                    <!-- <goods-show></goods-show> -->
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
            recommendList: [1, 2, 3, 4],
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
            .swiper-container {
                height: 500px;
                .img-wrapper {
                    max-width: 80px;
                    max-height: 115px;
                    box-sizing: border-box;
                }
                .hover-img {
                    border: 2px solid @theme-color;
                }
            }
        }
        .center {
            flex: 0 0 385px;
            height: 500px;
            margin-right: 100px;
            & > img {
            }
        }
        .right {
            flex: 1;
            position: relative;
            .big-img {
                position: absolute;
                width: 385px;
                height: 100%;
                overflow: hidden;
                & > img {
                    width: 770px;
                    height: auto;
                    display: inline-block;
                    position: relative;
                }
            }
            .title{
                font-size:18px;
                font-weight:bold;
            }
            .price{
                margin-top: 10px;
                padding-bottom: 20px;
                border-bottom:1px solid rgb(216,216,216);
                font-size:18px;
                color: @theme-color;
            }
            .infomation{
                margin: 20px 0;
                padding-left: 16px;
                background:#F1F1F1;
                p {
                    color: #2B2B2B;
                    line-height:24px;
                }
                p:last-child{
                    margin-top: 20px;
                }
            }
            .color {
                display: flex;
                align-items: center;
                padding: 0 0 15px 16px;
                border-bottom:1px solid rgb(216,216,216);
                .color-wrapper {
                    display: flex;
                    &>div{
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
                height: 275px;
                margin-top: 20px;
                background:#F1F1F1;
            }
        }
    }
    .recommend-wrapper {
        & > h3 {
            font-size: 24px;
            font-weight: 400;
        }
        .recommend {
            display: flex;
            justify-content: space-between;
            .item {
                width: 23%;
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

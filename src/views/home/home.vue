<template>
  <div class="home">
    <!-- banner -->
    <m-swiper
      class="swiper-slides1"
      :key="skey1"
      :swiperSlides="swiperSlides1"
      :swiperOption="swiperOption1"
      :showUpperText="true"
      :showPagination="true"
    ></m-swiper>
    <section class="home-section">
      <!-- 新品展示 -->
      <m-swiper
        class="swiper-slides2"
        :key="skey2"
        :swiperSlides="swiperSlides2"
        :swiperOption="swiperOption2"
        :showLeftText="true"
      ></m-swiper>
      <!-- 更多新品 -->
      <div class="more-news">
        <section-title title="更多新品" subtitle="More new products">
          <div slot="more" class="more-text">more ></div>
        </section-title>
        <m-swiper
          class="swiper-slides3"
          :key="skey3"
          :swiperSlides="swiperSlides3"
          :swiperOption="swiperOption3"
          :showImgText="true"
          :showBtn="true"
        ></m-swiper>
      </div>
      <!-- 跟多分类 -->
      <div class="more-categories">
        <section-title title="更多分类" subtitle="More categories"></section-title>
        <div class="categories">
          <div v-for="item in categories" :key="item.src" class="categories-item-wrapper">
            <div class="categories-item">
              <img :src="item.src" :alt="item.text" class="response-img">
            </div>
            <p>{{item.text}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MSwiper from 'components/m-swiper/m-swiper'
import SectionTitle from 'components/section-title/section-title'
export default {
    data() {
        return {
            skey1: '1',
            skey2: '2',
            skey3: '3',
            swiperSlides1: [
                {
                    src: require('./banner01.png'),
                    title: '夏季换新 轻奢新品',
                    subtitle: 'New Light and Luxury Products in Summer'
                },
                {
                    src: require('./banner01.png'),
                    title: '夏季换新 轻奢新品',
                    subtitle: 'New Light and Luxury Products in Summer'
                },
                {
                    src: require('./banner01.png'),
                    title: '夏季换新 轻奢新品',
                    subtitle: 'New Light and Luxury Products in Summer'
                }
            ],
            swiperOption1: {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                },
                pagination: {
                    el: '.swiper-slides1 .swiper-pagination'
                }
            },
            swiperSlides2: [
                { src: require('./banner02.png') },
                { src: require('./banner02.png') },
                { src: require('./banner02.png') }
            ],
            swiperOption2: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                speed: 800,
                navigation: {
                    nextEl: '.swiper-slides2 .swiper-button-next',
                    prevEl: '.swiper-slides2 .swiper-button-prev'
                }
            },
            swiperSlides3: [
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') },
                { src: require('./new01.png') }
                // { src: require('./new01.png') },
                // { src: require('./new01.png') },
                // { src: require('./new01.png') },
                // { src: require('./new01.png') }
            ],
            swiperOption3: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-slides3 .swiper-button-next',
                    prevEl: '.swiper-slides3 .swiper-button-prev'
                }
            },
            categories: [
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                },
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                },
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                },
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                },
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                },
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                },
                {
                    src: require('./kind01.png'),
                    text: '上衣/Jacket'
                }
            ]
        }
    },
    components: {
        MSwiper,
        SectionTitle
    }
}
</script>

<style scoped lang="less">
.home {
    position: relative;
    .home-section {
        padding: 0 290px;
        margin-top: 70px;
        .more-news {
            margin-top: 70px;
            .more-text {
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 16px;
            }
        }
        .more-categories {
            padding-top: 70px;
            .categories {
                display: flex;
                flex-wrap: wrap;
                .categories-item-wrapper {
                    flex: 0 0 19%;
                    margin-right: 1.25%;
                    box-sizing: border-box;
                    height: 290px;
                    &:nth-child(5n) {
                        margin-right: 0;
                    }
                    .categories-item {
                        border: 1px solid rgba(154, 134, 88, 1);
                        width: 200px;
                    }
                    & > p {
                        padding: 20px 0 0;
                        font-size: 16px;
                        line-height: 21px;
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.swiper-slides2 {
    .slide-img img {
        width: 100%;
    }
    // 前进后退按钮样式
    .swiper-button-next {
        top: 50%;
        right: -25px;
        margin-top: -25px;
        width: 50px;
        height: 50px;
        background-size: 25px 25px;
        background-color: #9a8658;
    }
    .swiper-button-next.swiper-button-disabled {
        opacity: 1;
        cursor: auto;
        pointer-events: none;
        background-color: #bbb8b8;
    }
}
.swiper-slides3 {
    position: relative;
    margin-bottom: 100px;
    .swiper-container {
        height: auto !important;
        margin-left: auto;
        margin-right: auto;
    }
    // 前进后退按钮样式
    .swiper-button-prev,
    .swiper-button-next {
        top: calc(~'100% + 30px');
        margin-top: 0;
        width: 50px;
        height: 50px;
        background-size: 25px 25px;
        background-color: #9a8658;
    }
    .swiper-button-prev {
        left: calc(~'50% - 80px');
    }
    .swiper-button-next {
        left: calc(~'50% + 30px');
    }
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
        opacity: 0.6;
        cursor: auto;
        pointer-events: none;
        background-color: #bbb8b8;
    }
}
</style>

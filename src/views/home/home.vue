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
      :generalSwiper="true"
      @click.native="routerTo('/commodity')"
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
          <div @click="moreNewProducts" slot="more" class="more-text">more ></div>
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
      <!-- 更多分类 -->
      <div class="more-categories">
        <section-title title="更多分类" subtitle="More categories"></section-title>
        <div class="categories" ref="categories">
          <div v-for="item in categories" :key="item.id" class="categories-item-wrapper">
            <div class="categories-item">
              <img :src="'http://'+item.photo_path" @click="routerTo('/commodity')" class="response-image">
            </div>
            <p>{{item.name}}</p>
          </div>
          <div v-for="n in len" :key="n" class="categories-item-wrapper"></div>
        </div>
      </div>
    </section>
    <!-- 品牌介绍 -->
    <div class="brand-intro">
      <section-title title="品牌介绍" subtitle="Brand introduction"></section-title>
      <div class="brand-wrapper">
        <div class="left">
          <p class="mb-10">YINAGU伊那古，品牌成立于2017年3月1日，总部坐落于美丽的“娱乐之城”长沙，公司目前拥有广州、杭州两大服装研发与生产基地。</p>
          <b>公司历史</b>
          <p class="mb-10">YINAGU伊那古女装品牌仅一年的时间，便在各省市主流商圈突破100家分店，现已发展成为一个集研发、生产、品牌销售于一体的服装企业。</p>
          <b>品牌理念</b>
          <p>YINAGU伊那古女装品牌一直致力于对时尚的不断追求，秉承着突破传统，精益求精的原则，力求在产品采购、研发上追求“快”节奏的同事，也让每一位女性消费者从视听至感受都享受到“时尚与舒适”伊那古女装为18-40岁时尚女性找到了适合她们的品牌服饰，东西方元素完全相融的设计，精挑细选的布料，细致入微的做工，为每一件产品都赋予了生命的灵魂。</p>
        </div>
        <div class="right">
          <b>品牌风格</b>
          <p class="mb-10">
            YINAGU伊那古品牌设计师团队长期以来与香港时尚设计师团队紧密合作，拥有灵敏的时尚嗅觉，演绎自信、优雅的时尚品味。
            坚持设计应该给予服装足够的搭配空间来满足现代都市女性注重独立的人格，追求品质的生活，关注新鲜与时尚的事物，在简约中表现积极向上的生活方式。主要的风格类型有：都市风情、怀旧复古、田园浪漫型。
          </p>
          <b>品牌推广</b>
          <p>YINAGU伊那古公司本着不断壮大，紧跟潮流的理念，不断引进人才，为公司注入新的血液，活力。以真诚的合作，共同发展为宗旨，实现所有合作伙伴的互利共赢。在此，诚邀有志之士携手步入新的未来！</p>
        </div>
      </div>
    </div>
    <!-- 首页新闻 -->
    <div class="home-news">
      <div v-for="item in newsList" :key="item.id" class="news-wrapper">
        <div class="img-wrapper">
          <img @click="routerTo('/newsDetail/123')" :src="'http://'+item.photo_path" class="response-img">
        </div>
        <div class="text-wrapper">
          <p class="date">{{item.time}}</p>
          <p @click="routerTo('/newsDetail/123')" class="title">{{item.title}}</p>
          <p class="subtitle">{{item.remark}}</p>
          <div @click="routerTo('/brandNews')" class="more-wrapper">
            <div class="read-more">Read more</div>
            <div class="read-more">Read more</div>
          </div>
        </div>
      </div>
    </div>
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
            swiperSlides1: [],
            swiperOption1: {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                },
                pagination: {
                    el: '.swiper-slides1 .swiper-pagination'
                }
            },
            swiperSlides2: [],
            swiperOption2: {
                slidesPerView: 1,
                spaceBetween: 250,
                loop: true,
                speed: 800,
                navigation: {
                    nextEl: '.swiper-slides2 .swiper-button-next',
                    prevEl: '.swiper-slides2 .swiper-button-prev'
                }
            },
            swiperSlides3: [],
            swiperOption3: {
                slidesPerView: 4,
                slidesPerColumn: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-slides3 .swiper-button-next',
                    prevEl: '.swiper-slides3 .swiper-button-prev'
                },
                breakpoints: {
                    1580: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1300: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            },
            categories: [],
            newsList: [],
            len: 0
        }
    },
    created() {
        this.$jsonp('/home/index', function(err, data) {
            if (err) return err
            this.swiperSlides1 = data.datas.rTopBanner
            this.swiperSlides2 = data.datas.rCenterBanner
            this.swiperSlides3 = data.datas.rAllGoodsList
            this.categories = data.datas.cateList
            this.newsList = data.datas.rArtList
        })
    },
    mounted() {
        this.$nextTick(() => {
            // let wrapper = this.$refs.categories
            // let length = wrapper.length
            // let firsrEl = wrapper.children[0]
            // let secondEl = wrapper.children[1]
            // console.log(wrapper.children)
            // // let width = firsrEl.width
            // // 两个item的间隙
            // let clearance =
            //     secondEl.getBoundingClientRect().right - firsrEl.getBoundingClientRect().right - secondEl.clientWidth
            // // 算出一行有多少个item
            // let everyItemNum = Math.floor((wrapper.clientWidth + clearance) / (firsrEl.clientWidth + clearance))
            // this.len = everyItemNum - (length % everyItemNum)
            // console.log(this.len)
        })
    },
    methods: {
        routerTo(value) {
            this.$router.push({
                path: value
            })
        },
        moreNewProducts() {
            this.$router.push({
                path: '/commodity'
            })
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
    margin-top: -1px;
    .home-section {
        width: 1340px;
        // padding: 0 15%;
        margin: 70px auto 0;
        .more-news {
            margin-top: 70px;
            .more-text:hover {
                color: @theme-color;
            }
            .more-text {
                position: absolute;
                bottom: 0;
                right: 0;
                font-size: 16px;
                cursor: pointer;
            }
        }
        .more-categories {
            padding-top: 70px;
            .categories::after {
                content: '';
                flex: auto;
            }
            .categories {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-left: -30px;
                .categories-item-wrapper {
                    margin-left: 30px;
                    .categories-item {
                        border: 1px solid rgba(154, 134, 88, 1);
                        width: 200px;
                    }
                    & > p {
                        padding: 20px 0 40px;
                        font-size: 16px;
                    }
                }
            }
        }
    }
    .brand-intro {
        height: 500px;
        padding-top: 80px;
        background-image: url('./brand.png');
        background-size: 100% 100%;
        .brand-wrapper {
            display: flex;
            justify-content: space-between;
            line-height: 19px;
            padding: 0 15%;
            .left {
                margin-right: 100px;
                overflow: hidden;
                max-height: 350px;
            }
            .right {
                max-height: 350px;
                overflow: hidden;
            }
        }
    }
    @media (max-width: 1480px) {
        .home-news {
            flex-wrap: wrap;
        }
    }
    .home-news {
        display: flex;
        justify-content: space-between;
        .news-wrapper {
            flex: 1;
            display: flex;
            padding-top: 20px;
            .img-wrapper {
                max-height: 480px;
                overflow: hidden;
                img {
                    cursor: pointer;
                    transition: all 0.6s;
                }
                img:hover {
                    transform: scale(1.2);
                }
            }
            .text-wrapper:hover {
                .read-more:first-child {
                    width: 150px !important;
                    border: 2px solid rgb(159, 159, 159) !important;
                    color: #fff;
                }
            }
            .text-wrapper {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 50px;
                background: rgb(243, 243, 243);
                // max-height: 480px;
                .date {
                    color: rgb(159, 159, 159);
                    font-size: 18px;
                    margin-top: 20px;
                }
                .title {
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: bold;
                    margin-top: 20px;
                    max-height: 48px;
                    overflow: hidden;
                    cursor: pointer;
                }
                .subtitle {
                    font-size: 16px;
                    line-height: 20px;
                    color: rgb(159, 159, 159);
                    max-height: 100px;
                    min-height: 80px;
                    margin-top: 30px;
                    overflow: hidden;
                }
                .more-wrapper {
                    position: relative;
                    .read-more {
                        width: 150px;
                        height: 50px;
                        border: 2px solid rgb(159, 159, 159);
                        color: rgb(159, 159, 159);
                        text-align: center;
                        line-height: 50px;
                        margin-top: 30px;
                        cursor: pointer;
                        box-sizing: border-box;
                    }
                    .read-more:first-child {
                        position: absolute;
                        border: none;
                        width: 0;
                        overflow: hidden;
                        transition: all 0.3s;
                        background: @theme-color;
                    }
                }
            }
        }
    }
}
</style>
<style lang="less">
.swiper-slides1 {
    .slide-img1,
    .slide-img1 img {
        width: 100%;
        cursor: pointer;
    }
}
.swiper-slides2 {
    .slide-img2 img {
        width: 100%;
    }
    // 前进按钮样式
    .swiper-button-next {
        top: 50%;
        right: -45px;
        margin-top: -45px;
        width: 90px;
        height: 90px;
        background-size: 25px 25px;
        background-color: #9a8658;
        z-index: 10px;
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
    .slide-img img {
        width: 100%;
    }
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

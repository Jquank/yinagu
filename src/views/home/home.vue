<template>
  <div class="home">
    <!-- banner -->
    <m-swiper
      class="swiper-slides1"
      :key="skey1"
      :swiperSlides="swiperSlides1"
      :swiperOption="swiperOption1"
      :generalSwiper="true"
    ></m-swiper>
    <section class="home-section">
      <!-- 新品 -->
      <div class="more-news">
        <section-title title="新品上市" subtitle="NEW PRODUCTS">
          <div @click="routerTo('/commodity')" slot="more" class="more-text">more ></div>
        </section-title>
        <div class="new-goods">
          <m-swiper
            class="swiper-slides3"
            :key="skey3"
            :showImgText="true"
            :swiperSlides="swiperSlides3"
            :swiperOption="swiperOption3"
          ></m-swiper>
          <div @click="routerTo('/commodity')" class="goods-list">
            <img src="./list-icon.png">
            <span>产品列表</span>
          </div>
        </div>
        <section-title title="门店展示" subtitle="STORE SHOW">
          <div @click="routerTo('/store')" slot="more" class="more-text">more ></div>
        </section-title>
        <m-swiper
          class="swiper-slides4"
          :key="skey4"
          :generalSwiper="true"
          :showUpperText="true"
          :swiperSlides="swiperSlides4"
          :swiperOption="swiperOption4"
        ></m-swiper>
        <section-title title="新闻动态" subtitle="NEWS DYNAMIC">
          <div @click="routerTo('/brandNews')" slot="more" class="more-text">more ></div>
        </section-title>
        <div class="home-news">
          <div v-for="item in newsList" :key="item.id" class="news-wrapper">
            <div class="img-wrapper">
              <img @click="routerTo('/newsDetail/123')" :src="'http://'+item.photo_path" class="response-img">
            </div>
            <div class="text-wrapper">
              <p class="date">{{item.time}}</p>
              <p @click="routerTo(`newsDetail/${item.id}`)" class="title">{{item.title}}</p>
              <p class="subtitle">{{item.remark}}</p>
            </div>
          </div>
          <div @click="routerTo('/brandNews')" class="news-list">
            <img src="./list-icon.png">
            <span>新闻列表</span>
          </div>
        </div>
        <section-title title="品牌介绍" subtitle="BRAND INTRODUCTION"></section-title>
        <div class="brand-intro">
          <div class="brand-wrapper">
            <p>YINAGU伊那古，品牌成立于2017年3月1日，总部坐落于美丽的“娱乐之城”长沙，公司目前拥有广州、杭州两大服装研发与生产基地。</p>
            <b>公司历史</b>
            <p class="history">YINAGU伊那古女装品牌仅一年的时间，便在各省市主流商圈突破100家分店，现已发展成为一个集研发、生产、品牌销售于一体的服装企业。</p>
            <div @click="routerTo('/brand')" class="more">更多 ></div>
          </div>
        </div>
        <section-title title="联系我们" subtitle="CONTACT US"></section-title>
        <div class="contact-us">
          <el-input v-model="name" placeholder="姓名 / Name"></el-input>
          <el-input v-model="phone" placeholder="手机 / Mobile" style="margin-top: 15px"></el-input>
          <el-input v-model="content" type="textarea" :rows="3" placeholder="内容 / Content" style="margin-top: 15px"></el-input>
          <div @click="onlineApply()" class="more">在线申请 ></div>
        </div>
        <div class="wx">
          <img src="./logo02.png">
          <div class="text-wrapper">
            <p>湖南省长沙市开福区新河街道湘江北路三段1500号北辰时代广场</p>
            <p>公司电话: 0731-89600627</p>
            <p>合作邮箱：124817821qq.com</p>
            <p class="wx-title">官方微信公众号</p>
            <img src="./wx.png">
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
            name: '',
            phone: '',
            content: '',
            skey1: '1',
            skey3: '3',
            skey4: '4',
            swiperSlides1: [],
            swiperOption1: {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                }
            },
            swiperSlides3: [],
            swiperOption3: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            newsList: [],
            len: 0,
            itemWidth: 0,
            swiperSlides4: [],
            swiperOption4: {
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                }
            }
        }
    },
    created() {
        this.$jsonp('/home/index', function(err, data) {
            if (err) return err
            this.swiperSlides1 = data.datas.rTopBanner
            this.swiperSlides3 = data.datas.rAllGoodsList
            this.newsList = data.datas.rArtList
            this.newsList.length = 1
        })
        this._getStoreList()
    },
    methods: {
        onlineApply() {
            this.$jsonp(`/home/submitContactUs?name=${this.name}&phone=${this.phone}&content=${this.content}`, function(
                err,
                data
            ) {
                if (err) return err
                alert(data.msg)
            })
        },
        _getStoreList(pid, cid) {
            pid = pid || ''
            cid = cid || ''
            this.$jsonp(`/home/getStoresList?province_id=${pid}&city_id=${cid}`, { name: 'callback2' }, function(
                err,
                data
            ) {
                if (err) return err
                this.swiperSlides4 = data.datas
            })
        },
        routerTo(value) {
            this.$router.push({
                path: value
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
    .more-text {
        color: @theme-color;
    }
    .new-goods {
        padding: 0 15px;
        .goods-list {
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(43, 43, 43, 1);
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(197, 197, 197, 1);
            img {
                margin-right: 10px;
            }
        }
    }
    .brand-intro {
        background-image: url('./brand.png');
        background-size: 100% 100%;
        .brand-wrapper {
            padding: 25px 15px;
            p:first-child {
                line-height: 24px;
                padding-bottom: 10px;
            }
            b::before {
                content: '.';
                display: inline-block;
                width: 8px;
                height: 25px;
                color: @theme-color;
                background-color: @theme-color;
                margin: 2px 10px 0 0;
            }
            b {
                font-size: 18px;
                font-family: Microsoft YaHei;
                line-height: 24px;
                color: @theme-color;
            }
            .history {
                padding: 15px 0;
                line-height: 24px;
            }
            .more {
                width: 65px;
                height: 36px;
                text-align: center;
                line-height: 36px;
                background: @theme-color;
                color: #fff;
                margin-top: 15px;
            }
        }
    }
    .home-news {
        padding: 0 15px;
        .news-list {
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgba(43, 43, 43, 1);
            padding: 15px 0;
            border-bottom: 1px solid rgba(197, 197, 197, 1);
            img {
                margin-right: 10px;
            }
        }
        .news-wrapper {
            border-top: 1px solid rgba(197, 197, 197, 1);
            padding: 15px 0;
            .img-wrapper {
                overflow: hidden;
                img {
                    width: 100%;
                    height: 200px;
                }
            }
            .text-wrapper {
                margin-top: 15px;
                .date {
                    font-size: 12px;
                    line-height: 17px;
                    color: rgba(159, 159, 159, 1);
                }
                .title {
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 25px;
                    color: rgba(0, 0, 0, 1);
                    margin-top: 6px;
                }
                .subtitle {
                    height: 68px;
                    overflow: hidden;
                    font-size: 14px;
                    line-height: 24px;
                    color: rgba(159, 159, 159, 1);
                    margin-top: 10px;
                }
            }
        }
    }
    .contact-us {
        padding: 25px 15px;
        background: rgba(243, 243, 243, 1);
        .more {
            width: 100px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            background: @theme-color;
            color: #fff;
            margin-top: 15px;
        }
    }
    .wx {
        .text-wrapper {
            padding: 0 18px;
            p {
                line-height: 24px;
                color: rgba(112, 112, 112, 1);
            }
            .wx-title {
                font-size: 16px;
                margin-top: 20px;
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
.swiper-slides4 {
    overflow: hidden;
    padding-bottom: 60px;
    .slide-img1,
    .slide-img1 img {
        width: 100%;
        cursor: pointer;
    }
}
.swiper-slides3 {
    padding: 15px 0;
    border-top: 1px solid rgba(197, 197, 197, 1);
    overflow: hidden;
    .slide-img img {
        width: 100%;
    }
    .swiper-container {
        height: auto !important;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>

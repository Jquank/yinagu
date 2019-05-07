<template>
    <div class="home">
        <!-- banner -->
        <m-swiper :key="skey1" :swiperSlides="swiperSlides1" :swiperOption="swiperOption1" :showUpperText="true"></m-swiper>
        <section class="home-section">
            <!-- 新品展示 -->
            <m-swiper :key="skey2" :swiperSlides="swiperSlides2" :swiperOption="swiperOption2" :showLeftText="true"></m-swiper>
            <!-- 更多新品 -->
            <div class="more-news">
                <div class="more-title-wrapper">
                    <div class="more-title-box">
                        <div class="title-wrapper">
                            <p class="subtitle">More new products</p>
                            <p class="title">更多新品</p>
                        </div>
                    </div>
                    <div class="more-text">more ></div>
                </div>
                <m-swiper :key="skey3" :swiperSlides="swiperSlides1" :swiperOption="swiperOption1" :showUpperText="true"></m-swiper>
            </div>
        </section>
    </div>
</template>

<script>
import MSwiper from 'components/m-swiper'
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
                }
            ],
            swiperOption1: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            swiperSlides2: [
                { src: require('./banner02.png') },
                { src: require('./banner02.png') }
            ],
            swiperOption2: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    components: {
        MSwiper
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
            .more-title-wrapper {
                position: relative;
                .more-text {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    font-size: 16px;
                }
                .more-title-box {
                    width: 180px;
                    height: 80px;
                    border: 2px solid rgb(112, 112, 112);
                    text-align: center;
                    margin: auto;
                    .title-wrapper {
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                        .subtitle {
                            line-height: 19px;
                        }
                        .title {
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 40px;
                        }
                    }
                }
            }
        }
    }
}
</style>

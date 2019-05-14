<template>
  <div class="news">
    <div class="news-wrapper">
      <div class="nav">
        <p class="all-categories">全部新闻</p>
        <ul ref="ulItem">
          <li @click="handleClickDate(index,item)" v-for="(item,index) in categories" :key="item.text">
            <a href="javascrpt:void(0)">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="news-content">
        <div class="title">
          <span class="all-text">全部（268条）</span>
          <div class="sort" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave">
            <span>排序</span>
            <img :src="sortSrc">
          </div>
          <div v-if="sortShow" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave" class="hover-wrapper">
            <p>最近一周</p>
            <p>最近一个月</p>
          </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <div v-for="item in list" :key="item" class="item-wrapper">
              <div class="img-wrapper">
                <img :src="item.src" class="response-img" @click="routerToDetail(item)">
              </div>
              <div class="text-wrapper">
                <p>2019/04/25</p>
                <p @click="routerToDetail(item)">引跑中国女装，伊那古用1111女装全渠道第四名奏响新销售赞歌</p>
                <p>2017年双11刚落下帷幕，在新鲜出炉的榜单中，中国知名服装品牌EIFINI伊芙丽以黑马之姿闯进全网女装TOP5，排名第四，领跑中国女装品牌。集团三品牌EIFINI伊芙丽、SEIFINI诗凡黎、MM麦檬在当天全网销售最终突破2.83亿元，同比增长78%，伊芙丽单品牌突破2.34亿元，同比增长96.6%，毛呢大衣品类位居天猫TOP1。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :page-sizes="[10, 30, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    text: '2019年5月'
                },
                {
                    text: '2019年4月'
                },
                {
                    text: '2019年3月'
                },
                {
                    text: '2019年2月'
                },
                {
                    text: '2019年1月'
                }
            ],
            list: [
                { src: require('./brand_new03.png') },
                { src: require('./brand_new04.png') },
                { src: require('./brand_new05.png') },
                { src: require('./brand_new06.png') },
                { src: require('./brand_new07.png') },
                { src: require('./brand_new08.png') }
            ],
            sortSrc: require('./d-sort.png'),
            sortShow: false
        }
    },
    mounted() {
        this.$refs.ulItem.children[0].className = 'li-active'
    },
    methods: {
        routerToDetail(item) {
            this.$router.push({
                path: `/newsDetail/123`
            })
        },
        sortMouseEnter() {
            this.sortShow = true
            this.sortSrc = require('./sort.png')
        },
        sortMouseLeave() {
            this.sortShow = false
            this.sortSrc = require('./d-sort.png')
        },
        handleClickDate(index, item) {
            let children = this.$refs.ulItem.children
            for (let i = 0; i < children.length; i++) {
                const li = children[i]
                if (index === i) {
                    li.className = 'li-active'
                } else {
                    li.className = ''
                }
            }
        }
    }
}
</script>
<style lang='less' scoped>
.news {
    .news-wrapper {
        display: flex;
        padding: 50px 80px 0 0;
        .nav {
            flex: 0 0 300px;
            width: 300px;
            margin: 0 70px 0 100px;
            .all-categories {
                height: 19px;
                line-height: 19px;
                color: rgb(159, 159, 159);
                padding: 0 0 0 18px;
                height: 40px;
            }
            li {
                &.li-active {
                    background: @theme-color;
                    a {
                        color: #fff;
                    }
                }
                padding-left: 18px;
                border-bottom: 1px solid rgba(216, 216, 216, 1);
                & > a {
                    display: inline-block;
                    width: 300px;
                    height: 50px;
                    line-height: 50px;
                }
            }
        }
        .news-content {
            flex: 1;
            & > .title {
                display: flex;
                justify-content: space-between;
                height: 40px;
                color: rgb(159, 159, 159);
                border-bottom: 1px solid rgb(216, 216, 216);
                line-height: 19px;
                position: relative;
                .sort {
                    width: 60px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    cursor: pointer;
                }
                .hover-wrapper {
                    position: absolute;
                    right: 0;
                    bottom: -100px;
                    z-index: 10;
                    width: 160px;
                    background: @theme-color;
                    text-align: center;
                    color: #ffffff;
                    & > p {
                        height: 50px;
                        line-height: 50px;
                        cursor: pointer;
                    }
                    & > p:first-child {
                        border-bottom: 1px solid rgb(216, 216, 216);
                    }
                }
            }
            .content {
                margin-top: 20px;
                .content-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-left: -20px;
                    .item-wrapper {
                        margin-left: 20px;
                        margin-top: 20px;
                        // min-width: 620px;
                        display: flex;
                        .img-wrapper {
                            width: 330px;
                            height: 330px;
                            overflow: hidden;
                            img {
                                cursor: pointer;
                                transition: all 0.6s;
                            }
                            img:hover {
                                transform: scale(1.2);
                            }
                        }
                        @media (max-width: 1900px) {
                            .text-wrapper {
                                width: calc(~'100% - 370px') !important;
                            }
                        }
                        .text-wrapper {
                            width: 288px;
                            padding: 30px 20px;
                            background: rgb(243, 243, 243);
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            & > p:first-child {
                                color: rgb(159, 159, 159);
                            }
                            & > p:nth-child(2) {
                                font-size: 20px;
                                font-weight: bold;
                                line-height: 26px;
                                cursor: pointer;
                            }
                            & > p:last-child {
                                line-height: 21px;
                                font-size: 16px;
                                color: rgb(159, 159, 159);
                                height: 105px;
                                overflow: hidden;
                            }
                        }
                    }
                }
            }
        }
    }
    .pagination {
        padding: 40px 0 50px;
        text-align: center;
    }
}
</style>

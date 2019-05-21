<template>
  <div class="news">
    <div class="news-wrapper">
      <div class="nav">
        <p class="all-news">全部新闻</p>
        <ul ref="ulItem">
          <li
            :class="index===0?'li-active':''"
            @click="handleClickDate(index,item)"
            v-for="(item,index) in timesList"
            :key="item"
          >
            <a href="javascript:void(0)">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="news-content">
        <div class="title">
          <span class="all-text">全部（{{allCount}}条）</span>
          <div class="sort" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave">
            <span>排序</span>
            <img :src="sortSrc">
          </div>
          <div v-if="sortShow" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave" class="hover-wrapper">
            <p @click="sort(1)">最近一周</p>
            <p @click="sort(2)">最近一个月</p>
          </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <div v-for="item in list" :key="item.id" class="item-wrapper">
              <div class="img-wrapper">
                <img :src="'http://'+item.photo_path" class="response-img" @click="routerToDetail(item)">
              </div>
              <div class="text-wrapper">
                <p>{{item.time}}</p>
                <p @click="routerToDetail(item)">{{item.title}}</p>
                <p @click="routerToDetail(item)">{{item.remark}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :page-sizes="[8, 30, 50, 100]"
        :page-size="8"
        layout="total, prev, pager, next, jumper"
        :total="allCount"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from 'common/js/dom/dom.js'
const ALLTIME = '全部时间'
export default {
    data() {
        return {
            timesList: [],
            list: [],
            sortSrc: require('./d-sort.png'),
            sortShow: false,
            allCount: 0,
            dateTime: '',
            rulesType: 2
        }
    },
    created() {
        this.timesList = window.location.href.split('/').pop()
        this._getTimesList()
        this._getNewsList()
    },
    methods: {
        handleCurrentChange(val) {
            this._getNewsList(this.dateTime, val, this.rulesType)
        },
        sort(val) {
            this.rulesType = val
            this._getNewsList(this.dateTime, 1, val)
        },
        _getTimesList() {
            this.$jsonp('/home/allArticleTimeList', function(err, data) {
                if (err) return err
                this.timesList = data.datas
                this.timesList.unshift(ALLTIME)
                this.dateTime = this.timesList[0]
            })
        },
        _getNewsList(dateTime, page, rulesType) {
            dateTime = dateTime || ''
            page = page || 1
            rulesType = rulesType || 2
            this.$jsonp(
                `/home/getArticleList?dateTime=${dateTime}&page=${page}&rulesType=${rulesType}`,
                { name: 'callback1' },
                function(err, data) {
                    if (err) return err
                    this.list = data.datas.artList
                    this.allCount = data.datas.allCount
                }
            )
        },
        routerToDetail(item) {
            this.$router.push({
                path: `/newsDetail/${item.id}`
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
            this._activeToggleClass(children, 'li-active', index)
            this._getNewsList(item === ALLTIME ? '' : item)
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
            .all-news {
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
                    @media (max-width: 1900px) {
                        .item-wrapper {
                            width: 100% !important;
                        }
                    }
                    .item-wrapper {
                        margin-left: 20px;
                        margin-top: 20px;
                        width: calc(~'50% - 20px');
                        display: flex;
                        .img-wrapper {
                            width: 330px;
                            max-height: 330px;
                            overflow: hidden;
                            img {
                                cursor: pointer;
                                transition: all 0.6s;
                            }
                            img:hover {
                                transform: scale(1.2);
                            }
                        }
                        .text-wrapper {
                            max-height: 330px;
                            flex: 1;
                            padding: 30px 20px;
                            background: rgb(243, 243, 243);
                            display: flex;
                            flex-direction: column;
                            & > p:first-child {
                                color: rgb(159, 159, 159);
                            }
                            & > p:nth-child(2) {
                                margin-top: 20px;
                                font-size: 20px;
                                font-weight: bold;
                                line-height: 26px;
                                cursor: pointer;
                            }
                            & > p:last-child {
                                margin-top: 15px;
                                line-height: 21px;
                                font-size: 16px;
                                color: rgb(159, 159, 159);
                                height: 126px;
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

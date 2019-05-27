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
      <div class="separate-line"></div>
      <div class="news-content">
        <div class="title">
          <span class="all-text">全部（{{allCount}}条）</span>
          <div class="sort" @click="toggleSortDrop">
            <span>排序</span>
            <img :src="sortSrc">
          </div>
          <div v-if="sortShow" class="hover-wrapper">
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
                <p class="title" @click="routerToDetail(item)">{{item.title}}</p>
                <p @click="routerToDetail(item)">Read more</p>
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
        layout="total, prev, pager, next"
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
            rulesType: 2,
            count: 0
        }
    },
    created() {
        this._getTimesList()
        this._getNewsList()
    },
    methods: {
        toggleSortDrop() {
            this.count++
            if (this.count % 2 === 1) {
                this.sortShow = true
                this.sortSrc = require('./sort.png')
            } else {
                this.sortShow = false
                this.sortSrc = require('./d-sort.png')
            }
        },
        handleCurrentChange(val) {
            this._getNewsList(this.dateTime, val, this.rulesType)
        },
        sort(val) {
            this.rulesType = val
            this._getNewsList(this.dateTime, 1, val)
            this.count++
            this.sortShow = false
            this.sortSrc = require('./d-sort.png')
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
            if (!dateTime || dateTime === ALLTIME) {
                dateTime = ''
            }
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
        handleClickDate(index, item) {
            this.dateTime = item
            let children = this.$refs.ulItem.children
            this._activeToggleClass(children, 'li-active', index)
            this._getNewsList(item)
        },
        _activeToggleClass(children, className, activeIndex) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i]
                if (activeIndex === i) {
                    addClass(child, className)
                } else {
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
        .nav {
            .all-news {
                line-height: 44px;
                color: #fff;
                background: @theme-color;
                padding-left: 15px;
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                padding: 10px 15px 20px;
            }
            li {
                height: 36px;
                line-height: 36px;
                padding: 0 15px;
                margin: 10px 10px 0 0;
                border: 1px solid rgba(204, 194, 171, 1);
                border-radius: 22px;
                text-align: center;
                a {
                    font-family: Microsoft YaHei;
                }
                &.li-active {
                    background: @theme-color;
                    a {
                        color: #fff;
                    }
                }
            }
        }
        .news-content {
            margin-top: 15px;
            & > .title {
                box-sizing: border-box;
                padding: 0 15px;
                display: flex;
                justify-content: space-between;
                height: 30px;
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
                padding: 15px;
                .content-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    .item-wrapper {
                        display: flex;
                        margin-top: 10px;
                        width: 100%;
                        .img-wrapper {
                            flex: 1;
                            overflow: hidden;
                            img {
                                max-height: 188px;
                            }
                        }
                        .text-wrapper {
                            flex: 1;
                            padding: 10px 5px 5px 18px;
                            font-size: 12px;
                            font-family: Microsoft YaHei;
                            max-height: 188px;
                            overflow: hidden;
                            background: rgba(243, 243, 243, 1);
                            p {
                                padding: 5px 0;
                                color: rgba(159, 159, 159, 1);
                            }
                            p.title {
                                font-size: 14px;
                                font-weight: bold;
                                line-height: 19px;
                                color: #000;
                            }
                            p:last-child {
                                width: 100px;
                                height: 25px;
                                border: 1px solid @theme-color;
                                text-align: center;
                                line-height: 25px;
                                padding: 0;
                                color: @theme-color;
                                margin-top: 20px;
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

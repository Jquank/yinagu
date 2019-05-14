<template>
  <div class="commodity">
    <div class="commodity-wrapper">
      <div class="nav">
        <p class="all-categories">所有分类</p>
        <ul ref="ulItem">
          <li @click="handleClickCategories(index,item)" v-for="(item,index) in categories" :key="item.text">
            <a href="javascrpt:void(0)">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="commodity-content">
        <div class="title">
          <span class="all-text">全部（268件）</span>
          <div class="sort" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave">
            <span>排序</span>
            <img :src="sortSrc">
          </div>
          <div v-if="sortShow" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave" class="hover-wrapper">
            <p>
              <i class="el-icon-sort-down"></i>
              价格从高到低
            </p>
            <p>
              <i class="el-icon-sort-up"></i>
              价格从低到高
            </p>
          </div>
        </div>
        <div class="content">
          <div class="content-wrapper" v-insert-div:margin-left:11px>
            <div v-for="item in list" :key="item" class="item-wrapper">
              <div class="img-wrapper">
                <img :src="item.src" class="response-img" @click="routerToDetail(item)">
              </div>
              <p class="text-wrapper">
                <span @click="routerToDetail(item)">YINAGU 2019气质连衣裙1111111111</span>
                <span>¥ 299</span>
              </p>
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
                    text: '上衣'
                },
                {
                    text: '连衣裙 \\ 套装'
                },
                {
                    text: '单裙'
                },
                {
                    text: '单裤'
                },
                {
                    text: '外套'
                },
                {
                    text: '呢外套'
                },
                {
                    text: '羽绒服'
                }
            ],
            list: [
                { src: require('./more_products-1.png') },
                { src: require('./more_products0101.png') },
                { src: require('./more_products0102.png') },
                { src: require('./more_products0103.png') },
                { src: require('./more_products0104.png') },
                { src: require('./more_products0105.png') },
                { src: require('./more_products0106.png') },
                { src: require('./more_products0107.png') }
            ],
            sortSrc: require('./d-sort.png'),
            sortShow: false
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.ulItem.children[0].className = 'li-active'
        })
    },
    methods: {
        routerToDetail(item) {
            this.$router.push({
                path: `/goodsDetail/123`
            })
        },
        sortMouseEnter() {
            console.log(123)
            this.sortShow = true
            this.sortSrc = require('./sort.png')
        },
        sortMouseLeave() {
            console.log(456)
            this.sortShow = false
            this.sortSrc = require('./d-sort.png')
        },
        handleClickCategories(index, item) {
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
.item-wrapper {
    margin-left: 11px;
}
.commodity {
    .commodity-wrapper {
        display: flex;
        flex-wrap: wrap;
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
        .commodity-content {
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
                margin-top: 40px;
                .content-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-left: -11px;
                    .item-wrapper {
                        margin-left: 11px;
                        .img-wrapper {
                            width: 320px;
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
                            height: 75px;
                            line-height: 55px;
                            padding: 0 5px;
                            display: flex;
                            justify-content: space-between;
                            & > span:first-child {
                                cursor: pointer;
                                width: 230px;
                                padding-right: 8px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-size: 16px;
                            }
                            & > span:last-child {
                                text-align: right;
                                color: @theme-color;
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
    .pagination {
        padding: 10px 0 50px;
        text-align: center;
    }
}
</style>

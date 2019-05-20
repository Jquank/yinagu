<template>
  <div class="commodity">
    <div class="commodity-wrapper">
      <div class="nav">
        <p class="all-categories">所有分类</p>
        <ul ref="ulItem">
          <li
            :class="index===0?'li-active':''"
            @click="handleClickCategories(index,item)"
            v-for="(item,index) in categories"
            :key="item.id"
          >
            <a href="javascrpt:void(0)">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="commodity-content">
        <div class="title">
          <span class="all-text">{{'全部（'+allCount+'件）'}}</span>
          <div class="sort" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave">
            <span>排序</span>
            <img :src="sortSrc">
          </div>
          <div v-if="sortShow" @mouseenter="sortMouseEnter" @mouseleave="sortMouseLeave" class="hover-wrapper">
            <p @click="sort(1)">
              <i class="el-icon-sort-down"></i>
              价格从高到低
            </p>
            <p @click="sort(2)">
              <i class="el-icon-sort-up"></i>
              价格从低到高
            </p>
          </div>
        </div>
        <div class="content">
          <div class="content-wrapper">
            <p v-if="!list.length" class="w-100 t-center">暂无数据 ...</p>
            <div v-for="(item,index) in list" :key="item.id +index" class="item-wrapper">
              <div class="img-wrapper">
                <img :src="'http://'+item.photo_path" class="response-img" @click="routerToDetail(item)">
              </div>
              <p class="text-wrapper">
                <span @click="routerToDetail(item)">{{item.goods_name}}</span>
                <span>{{'¥ '+ item.price}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        :page-sizes="[20, 30, 50]"
        :page-size="8"
        layout="total, prev, pager, next, jumper"
        :total="allCount"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            allCount: 0,
            categories: [],
            list: [],
            sortSrc: require('./d-sort.png'),
            sortShow: false,
            goodsKind: '',
            sortValue: ''
        }
    },
    created() {
        this._getAllCateList().then(res => {
            this.goodsKind = res[0].id
            this._getGoodsList(res[0].id)
        })
    },
    methods: {
        handleCurrentChange(val) {
            this._getGoodsList(this.goodsKind, this.sortValue, val)
        },
        sort(val) {
            this.sortValue = val
            this._getGoodsList(this.goodsKind, val)
        },
        _getGoodsList(cateId, sort, page = 1) {
            cateId = cateId || ''
            sort = sort || ''
            page = page || 1
            this.$jsonp(
                `/home/getGoodsList?cateId=${cateId}&sort=${sort}&page=${page}`,
                { name: 'callback1' },
                function(err, data) {
                    if (err) return err
                    this.list = data.datas.rAllGoodsList
                    this.allCount = data.datas.allCount
                }
            )
        },
        _getAllCateList() {
            return new Promise((resolve, reject) => {
                this.$jsonp('/home/allCateList', function(err, data) {
                    if (err) return err
                    this.categories = data.datas
                    this.categories.unshift({ id: '', name: '全部' })
                    resolve(this.categories)
                })
            })
        },
        routerToDetail(item) {
            this.$router.push({
                path: `/goodsDetail/${item.id}`
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
            this.goodsKind = item.id
            let children = this.$refs.ulItem.children
            for (let i = 0; i < children.length; i++) {
                const li = children[i]
                if (index === i) {
                    li.className = 'li-active'
                } else {
                    li.className = ''
                }
            }
            this._getGoodsList(this.goodsKind, this.sortValue)
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
                .content-wrapper::after {
                    content: '';
                    flex: auto;
                }
                .content-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-left: -11px;
                    .item-wrapper {
                        margin-left: 11px;
                        .img-wrapper {
                            width: 320px;
                            max-height: 450px;
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

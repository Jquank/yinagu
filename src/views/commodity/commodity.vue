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
            <a href="javascript:void(0)">{{item.name}}</a>
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
          <div class="content-wrapper" ref="contentWrapper">
            <p v-if="!list.length" class="w-100 t-center">暂无数据 ...</p>
            <div v-for="(item,index) in list" :key="item.id +index" class="item-wrapper">
              <div class="img-wrapper">
                <img :src="'http://'+item.photo_path" class="response-img" @click="routerToDetail(item)">
              </div>
              <div class="text-wrapper">
                <p @click="routerToDetail(item)">{{item.goods_name}}</p>
                <p>¥ {{item.price | priceFormat}}</p>
              </div>
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
        layout="total, prev, pager, next"
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
            this.sortShow = false
            this.sortSrc = require('./d-sort.png')
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
        .nav {
            .all-categories {
                line-height: 44px;
                color: #fff;
                background: @theme-color;
                padding-left: 15px;
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                padding: 15px;
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
        .commodity-content {
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
                    margin-left: -15px;
                    .item-wrapper {
                        margin-left: 15px;
                        width: calc(~'50% - 15px');
                        .img-wrapper {
                            overflow: hidden;
                            img {
                                height: 230px;
                            }
                        }
                        .text-wrapper {
                            padding: 10px 5px 20px;
                            font-size: 12px;
                            font-family: Microsoft YaHei;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            p {
                                padding: 5px 0;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
    }
    .pagination {
        padding: 0 0 30px;
        text-align: center;
    }
}
</style>

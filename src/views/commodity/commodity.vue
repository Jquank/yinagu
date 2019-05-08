<template>
  <div class="commodity">
    <div class="nav">
      <p class="all-categories">所有分类</p>
      <ul>
        <li v-for="item in categories" :key="item.text">
          <a href="#">{{item.text}}</a>
        </li>
      </ul>
    </div>
    <div class="commodity-wrapper">
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
        <div class="content-wrapper">
          <div v-for="item in list" :key="item" class="item-wrapper">
            <div class="img-wrapper">
              <img src="./a01.png" class="response-img">
            </div>
            <p class="text-wrapper">
              <span>YINAGU 2019气质连衣裙...</span>
              <span>¥ 299</span>
            </p>
          </div>
        </div>
      </div>
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
            list: 10,
            sortSrc: require('./d-sort.png'),
            sortShow: false
        }
    },

    methods: {
        sortMouseEnter() {
            console.log(123)
            this.sortShow = true
            this.sortSrc = require('./sort.png')
        },
        sortMouseLeave() {
            console.log(456)
            this.sortShow = false
            this.sortSrc = require('./d-sort.png')
        }
    }
}
</script>
<style lang='less' scoped>
.commodity {
    display: flex;
    margin-top: 50px;
    padding-right: 80px;
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
            border-bottom: 1px solid rgba(216, 216, 216, 1);
            & > a {
                display: inline-block;
                width: 300px;
                height: 50px;
                line-height: 50px;
            }
        }
    }
    .commodity-wrapper {
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
                background: rgba(154, 134, 88, 1);
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
                    }
                    .text-wrapper {
                        height: 75px;
                        line-height: 55px;
                        padding: 0 5px;
                        display: flex;
                        justify-content: space-between;
                        & > span:first-child {
                            flex: 1;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 16px;
                        }
                        & > span:last-child {
                            width: 80px;
                            text-align: right;
                            color: #9a8658;
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>

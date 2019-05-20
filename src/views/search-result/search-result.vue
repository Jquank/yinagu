<template>
    <div class="search-result">
        <div class="commodity-wrapper">
            <div class="commodity-content">
                <div class="title">
                    <span class="all-text">{{'"'+keyWord||$keyWord+'"'}} 的搜索结果</span>
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
import { eventBus } from '@/main.js'
export default {
    data() {
        return {
            allCount: 0,
            categories: [],
            list: [],
            sortSrc: '',
            sortShow: false,
            goodsKind: '',
            sortValue: '',
            keyWord: '',
            page: 1
        }
    },
    created() {
        eventBus.$on('getSearch', () => {
            this.keyWord = this.$route.query.keyWord
            this._getSearchData(this.keyWord)
        })
    },
    methods: {
        _getSearchData(value, page = 1) {
            this.$jsonp(
                '/home/searchGoodsList?key=' + value + '&page=' + page,
                function(err, data) {
                    if (err) return err
                    this.list = data.datas.rAllGoodsList
                    this.allCount = data.datas.allCount
                }
            )
        },
        handleCurrentChange(val) {
            this.page = val
            this._getSearchData(this.keyWord, val)
        },
        routerToDetail(item) {
            this.$router.push({
                path: `/goodsDetail/${item.id}`
            })
        }
    }
}
</script>
<style lang='less' scoped>
.item-wrapper {
    margin-left: 11px;
}
.search-result {
    .commodity-wrapper {
        flex-wrap: wrap;
        padding: 50px 80px;
        min-height: 500px;
        .commodity-content {
            // padding: 20px 70px;
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

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
                <span>全部（268件）</span>
                <div class="sort">
                    <span>排序</span>
                    <img src="./sort.png" alt="">
                </div>
            </div>
            <div class="content"></div>
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
            ]
        }
    },

    methods: {}
}
</script>
<style lang='less' scoped>
.commodity {
    display: flex;
    margin-top: 50px;
    .nav {
        flex: 0 0 300px;
        width: 300px;
        margin:0 80px 0 100px;
        .all-categories {
            height: 19px;
            font-weight: 400;
            line-height: 19px;
            color: rgb(159, 159, 159);
            padding: 0 0 22px 18px;
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
    .commodity-wrapper{
        flex: 1;
    }
}
</style>

<template>
    <div class="footer">
        <div class="f-logo">
            <img src="./footer.png">
        </div>
        <div class="f-nav">
            <ul>
                <li v-for="item in navList" :key="item.ch">
                    <a href="#">{{item.ch}}</a>
                </li>
            </ul>
        </div>
        <div class="f-info">
            <p>公司电话: 0731-89600627</p>
            <p>合作邮箱：124817821qq.com</p>
            <p>地址：湖南省长沙市开福区新河街道湘江北路三段1500号北辰时代广场</p>
        </div>
        <div class="f-copyright">
            <div>
                <p>版权所有</p>
                <p>杭州意芙实业有限公司</p>
                <p>© Copyright 2008 - 2013.EIFINI伊芙丽.</p>
                <p>All Rights Reserved.</p>
                <p>浙ICP备12014589号</p>
            </div>
        </div>
    </div>
</template>

<script>
import navList from 'views/m-header/config.js'
export default {
    data() {
        return {
            navList: navList
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.footer {
    // height: 390px;
    background: rgb(42, 42, 42);
    .f-logo {
        text-align: center;
        padding-top: 60px;
        margin: 0 auto;
    }
    .f-nav {
        margin-top: 60px;
        ul {
            display: flex;
            justify-content: center;
            li {
                margin-right: 70px;
                a {
                    display: block;
                    height: 19px;
                    line-height: 19px;
                    color: rgb(216, 216, 216);
                }
            }
        }
    }
    .f-info {
        height: 72px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        color: rgb(119, 119, 119);
        font-size: 12px;
    }
    .f-copyright {
        margin-top: 50px;
        border-top:1px solid rgb(78,78,78);
        & > div {
            display: flex;
            justify-content: space-between;
            width: 785px;
            margin: 0 auto;
            font-size: 12px;
            color: #777777;
            height: 28px;
            line-height: 28px;
        }
    }
}
</style>

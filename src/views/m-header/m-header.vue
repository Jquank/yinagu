<template>
    <div class="m-header">
        <div class="logo">
            <img src="./logo.png">
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in navList" :key="item.en" @mouseenter="mouseEnter(index)" @mouseleave="mouseLeave(index)" ref="liItem">
                    <router-link
                        tag="div"
                        :to="item.to"
                        :style="{'width': item.width+'px'}"
                        class="router-tab"
                        :class="$route.path===item.to?'router-tab-active':''"
                    >{{$route.path===item.to || isMouseEnter===index?item.ch:item.en}}</router-link>
                </li>
            </ul>
        </div>
        <div class="search">
            <div>
                <div class="search-input"></div>
            </div>
            <img src="./search-icon.png" class="search-icon">
        </div>
    </div>
</template>

<script>
import navList from './config.js'
export default {
    data() {
        return {
            navList: navList,
            isMouseEnter: -1
        }
    },
    methods: {
        mouseEnter(index) {
            console.log(index)

            this.$refs.liItem[index].setAttribute('class', 'router-tab-active')
            this.isMouseEnter = index
        },
        mouseLeave(index) {
            this.$refs.liItem[index].setAttribute('class', '')
            this.isMouseEnter = -1
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.m-header {
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 60px;
    padding: 0 70px;
    color: #2a2a2a;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
    .nav {
        & > ul {
            display: flex;
        }
        .router-tab {
            text-align: center;
            cursor: pointer;
        }
        .router-tab-active {
            color: #fff;
            background: rgba(154, 134, 88, 1);
        }
    }
    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 220px;
    }
}
</style>

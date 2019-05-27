<template>
  <div class="m-header">
    <div class="logo">
      <img src="./logo.png">
    </div>
    <div class="nav">
      <div ref="navIcon" class="nav-icon" @click="navShow">
        <img :src="navIconSrc">
      </div>
      <ul v-if="isNavShow">
        <li
          v-for="(item,index) in navList"
          :key="item.en"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave(index)"
          ref="liItem"
          :class="$route.path===item.to?'router-tab-active':''"
        >
          <router-link
            @click.native="routerlinkjump(item.to)"
            tag="div"
            :to="item.to"
            class="router-tab"
          >{{$route.path===item.to || isMouseEnter===index?item.en:item.ch}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navList from './config.js'
export default {
    watch: {
        $route() {
            this.isNavShow = false
        }
    },
    data() {
        return {
            navList: navList,
            isMouseEnter: -1,
            isSearch: true,
            inputValue: '',
            count: 0,
            isNavShow: false,
            navIconSrc: require('./nav-icon1.png')
        }
    },
    methods: {
        routerlinkjump(to) {
            this.count++
            this.isNavShow = false
            this.$refs.navIcon.style.background = ''
            this.navIconSrc = require('./nav-icon1.png')
        },
        navShow() {
            this.count++
            if (this.count % 2 === 1) {
                this.isNavShow = true
                this.$refs.navIcon.style.background = 'rgba(154, 134, 88, 0.8)'
                this.navIconSrc = require('./nav-icon.png')
            } else {
                this.isNavShow = false
                this.$refs.navIcon.style.background = ''
                this.navIconSrc = require('./nav-icon1.png')
            }
        },
        mouseEnter(index) {
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
    color: #2a2a2a;
    // border-bottom: 1px solid rgb(216, 216, 216);
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
    .logo {
        margin-top: 6px;
    }
    .nav {
        position: relative;
        .nav-icon {
            width: 60px;
            height: 60px;
            text-align: center;
            & > img {
                margin-top: 15px;
            }
        }
        & > ul {
            position: absolute;
            top: 100%;
            right: 0;
            width: 145px;
            color: #fff;
            background: rgba(154, 134, 88, 0.8);
            & > li {
                padding: 0 15px;
                height: 44px;
                line-height: 44px;
                box-sizing: border-box;
            }
            li:not(:last-child) .router-tab {
                border-bottom: 1px solid rgba(181, 166, 130, 1);
            }
            .router-tab {
                width: 100%;
                height: 100%;
                cursor: pointer;
                box-sizing: border-box;
            }
            .router-tab-active {
                background: rgba(116, 96, 51, 0.6);
            }
        }
    }
}
</style>
<style lang="less">
.m-header .search {
    .el-input {
        .el-input__inner {
            border-radius: 18px;
            width: 166px;
            height: 36px;
        }
        .el-input.is-active .el-input__inner,
        .el-input__inner:focus {
            border-color: @theme-color;
            outline: 0;
        }
        .el-input__icon .el-icon-search {
            cursor: pointer !important;
        }
    }
}
</style>

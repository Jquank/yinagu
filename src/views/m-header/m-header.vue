<template>
  <div class="m-header">
    <div class="logo">
      <img src="./logo.png">
    </div>
    <div class="nav">
      <div class="nav-icon" @click="navShow">
        <img src="./nav-icon1.png">
      </div>
      <ul v-if="isNavShow">
        <li
          v-for="(item,index) in navList"
          :key="item.en"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave(index)"
          ref="liItem"
        >
          <router-link
            @click.native="routerlinkjump"
            tag="div"
            :to="item.to"
            class="router-tab"
            :class="$route.path===item.to?'router-tab-active':''"
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
            isNavShow: false
        }
    },
    methods: {
        routerlinkjump() {
            this.count++
        },
        navShow() {
            this.count++
            this.count % 2 === 1 ? (this.isNavShow = true) : (this.isNavShow = false)
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
            .router-tab {
                width: 100%;
                text-align: center;
                cursor: pointer;
                background: @theme-color;
            }
            .router-tab-active {
                background: rgba(116, 96, 51, 0.9);
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

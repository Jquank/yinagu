<template>
  <div class="m-header">
    <div class="logo">
      <img src="./logo.png">
    </div>
    <div class="nav">
      <ul>
        <li
          v-for="(item,index) in navList"
          :key="item.en"
          @mouseenter="mouseEnter(index)"
          @mouseleave="mouseLeave(index)"
          ref="liItem"
        >
          <router-link
            tag="div"
            :to="item.to"
            :style="{'width': item.width+'px'}"
            class="router-tab"
            :class="$route.path===item.to?'router-tab-active':''"
          >{{$route.path===item.to || isMouseEnter===index?item.en:item.ch}}</router-link>
        </li>
      </ul>
    </div>
    <div class="search">
      <div v-if="isSearch"></div>
      <div>
        <div v-if="isSearch" class="search-input">
          <!-- <img src="./search-icon.png" alt>
          <input type="text" placeholder="请输入搜索内容">-->
          <el-input
            ref="searchInput"
            v-model="inputValue"
            suffix-icon="el-icon-search"
            @keydown.enter.native="search"
            placeholder="请输入搜索内容"
          ></el-input>
        </div>
      </div>
      <img v-if="!isSearch" src="./search-icon.png" class="search-icon c-pointer" @click="handleSearchIcon">
    </div>
  </div>
</template>

<script>
import navList from './config.js'
import { eventBus } from '@/main.js'
import { setTimeout } from 'timers'
export default {
    data() {
        return {
            navList: navList,
            isMouseEnter: -1,
            isSearch: true,
            inputValue: ''
        }
    },
    mounted() {
        let el = document.querySelector('.el-icon-search')
        el.addEventListener('click', () => {
            this.search()
        })
    },
    methods: {
        search() {
            setTimeout(() => {
                eventBus.$emit('getSearch', this.inputValue)
            }, 500)
            this.$router.push({
                path: `/search`,
                query: { keyWord: this.inputValue }
            })
        },
        mouseEnter(index) {
            this.$refs.liItem[index].setAttribute('class', 'router-tab-active')
            this.isMouseEnter = index
        },
        mouseLeave(index) {
            this.$refs.liItem[index].setAttribute('class', '')
            this.isMouseEnter = -1
        },
        handleSearchIcon() {
            // this.isSearch = true
            this.$nextTick(() => {
                this.$refs.searchInput.$el.children[0].focus()
                this.$refs.searchInput.$el.children[1].addEventListener('click', () => {
                    this.search()
                })
            })
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
    border-bottom: 1px solid rgb(216, 216, 216);
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .logo {
        padding-left: 70px;
    }
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
        padding-right: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 220px;
        text-align: right;
        position: relative;
        // .search-input {
        //     input {
        //         height: 36px;
        //         border-radius: 18px;
        //         outline: none;
        //     }
        // }
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

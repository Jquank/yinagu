<template>
  <div class="horizontal-nav">
    <div class="nav-wrapper">
      <ul class="nav-ul">
        <li
          v-for="(item, index) in navMenu"
          :key="index"
          @mouseenter="mouseenter($event, item.router)"
          @mouseleave="mouseleave"
        >
          <router-link :to="item.router" tag="div" class="li-link">
            <div class="text-wrapper">
              <div class="li-text">{{item.title}}</div>
            </div>
          </router-link>
          <drop-down :menuData="menuData" v-if="index===0" v-show="menuShow"></drop-down>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DropDown from './drop-down'
import { navMenu } from './config.js'
export default {
  data() {
    return {
      navMenu: navMenu,
      menuData: '',
      menuShow: false
    }
  },
  methods: {
    mouseenter(e, value) {
      if (e.fromElement && e.fromElement.className !== 'text-wrapper') {
        this.menuData = value
      }
      this.menuShow = true
    },
    mouseleave() {
      this.menuShow = false
    }
  },
  components: {
    DropDown
  }
}
</script>

<style scoped lang="less">
.horizontal-nav {
  position: relative;
  background: @bgcolor-header;
  .nav-wrapper {
    .nav-ul {
      display: flex;
      justify-content: space-between;
      padding: 0 50px 0 200px;
      & > li {
        cursor: pointer;
        .li-link {
          .text-wrapper {
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            .li-text {
              display: inline-block;
              line-height: 1.8;
            }
          }
        }
      }
    }
  }
}
</style>

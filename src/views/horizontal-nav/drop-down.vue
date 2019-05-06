<template>
  <div class="nav-drop-down">
    <div class="left-menu">
      <ul>
        <li class="menu-item">
          <b>商品分类</b>
        </li>
        <li v-for="(item, index) in dropDownMenu[menuData]" :key="index" class="menu-item c-pointer">{{item}}</li>
      </ul>
    </div>
    <div class="right-img t-center">
      <div class="inline-block">
        <div>
          <img src="https://www.katespade.cn/images/slideshow/2019-04/18d33798-e687-4c78-9985-525f12efdacb..png">
        </div>
        <div class="inline-block border-line mt-10">
          <span>明媚谙动</span>
        </div>
      </div>
      <div class="inline-block ml-20">
        <div>
          <img src="https://www.katespade.cn/images/slideshow/2019-04/18d33798-e687-4c78-9985-525f12efdacb..png">
        </div>
        <div class="inline-block border-line mt-10">
          <span>明媚谙动</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dropDownMenu } from './config.js'
export default {
  props: {
    menuData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dropDownMenu: dropDownMenu
    }
  },
  methods: {
    getChildMenu() {}
  },
  components: {}
}
</script>

<style scoped lang="less">
.nav-drop-down {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  height: 300px;
  background: #f8baca;
  z-index: 100;
  padding: 20px 210px;
  cursor: auto;
  .left-menu {
    .menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>

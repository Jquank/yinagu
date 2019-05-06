<template>
  <div class="vertical-nav">
    <ul class="nav-ul">
      <!-- <li>{{$route.meta.text}}</li> -->
      <li>全部</li>
      <li v-for="(item, index) in dropDownMenu[$route.path]" :key="index">
        <!-- <router-link :to="item.router" tag="div" class="li-link">
          <div class="text-wrapper">
            <div class="li-text">{{item.title}}</div>
          </div>
        </router-link>-->
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import { dropDownMenu } from '../horizontal-nav/config.js'

export default {
  data() {
    return {
      dropDownMenu: dropDownMenu
    }
  },
  created() {
    console.log(this.$route)
  },
  components: {}
}
</script>

<style scoped lang="less">
.vertical-nav {
  font-size: 12px;
  font-weight: bold;
  position: fixed;
  top: 150px;
  left: 50px;
  .nav-ul {
    & > li {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>

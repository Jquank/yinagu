<template>
  <div id="app">
    <m-header></m-header>
    <div class="router-wrapper">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from '@/views/m-header/m-header'
import MFooter from '@/views/m-footer/m-footer'

export default {
    name: 'app',
    components: {
        MHeader,
        MFooter
    }
}
</script>

<style lang="less" scoped>
#app {
    .router-wrapper {
        margin-top: 60px;
    }
}
</style>

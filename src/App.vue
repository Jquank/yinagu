<template>
  <div id="app">
    <m-header></m-header>
    <div>
      <router-view></router-view>
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
</style>

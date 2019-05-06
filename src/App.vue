<template>
  <div id="app">
    <m-header></m-header>
    <section class="section">
      <router-view/>
    </section>
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

<style lang="less">
#app {
  height: 100%;
  .section {
    min-height: 100%;
  }
}
</style>

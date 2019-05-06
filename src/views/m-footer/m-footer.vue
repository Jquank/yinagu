<template>
  <div class="footer">
    <div class="f-info">
      <div class="left">
        <ul>
          <li>全部商品</li>
          <li>新品</li>
          <li>新品</li>
          <li>新品</li>
        </ul>
        <ul>
          <li>关于我们</li>
          <li>关于我们</li>
          <li>关于我们</li>
          <li>关于我们</li>
        </ul>
        <ul>
          <li>店铺查询</li>
          <li>店铺查询</li>
          <li>店铺查询</li>
        </ul>
      </div>
      <div class="right">
        <div class="weixin">二维码</div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ee: ''
    }
  },
  components: {}
}
</script>

<style scoped lang="less">
.footer {
  height: 400px;
  background: red;
  .f-info {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

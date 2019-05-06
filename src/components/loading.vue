<template>
  <div class="loading">
    <img src="../common/img/loading.gif">
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="less">
.loading {
  text-align: center;
  margin: 10px 0;
  & > img {
    width: 80px;
    height: 80px;
  }
}
</style>

<template>
  <div class="mall">
    <div class="mall-tab">
      <span @click="tab('tm')" ref="tm" class="active">天猫旗舰店</span>
      <span @click="tab('jd')" ref="jd">京东旗舰店</span>
    </div>
    <div class="iframe-container">
      <iframe :src="src" frameborder="0" width="100%" height="1000" scrolling="no"></iframe>
    </div>
  </div>
</template>

<script>
import { toggleClass } from 'common/js/dom/dom.js'
export default {
    data() {
        return {
            src: 'https://baidu.com'
        }
    },
    methods: {
        tab(data) {
            toggleClass(this.$refs[data], 'active')
            if (data === 'jd') {
                this.src = 'http://www.google.cn'
            } else {
                this.src = 'https://baidu.com'
            }
        }
    }
}
</script>

<style scoped lang="less">
.mall {
    .mall-tab {
        // height: 80px;
        background: @theme-color;
        display: flex;
        justify-content: center;
        align-items: center;
        & > span {
            width: 160px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            color: #fff;
            cursor: pointer;
        }
        .active {
            background: rgb(109, 92, 55);
        }
    }
    .iframe-container {
        min-height: 700px;
    }
}
</style>

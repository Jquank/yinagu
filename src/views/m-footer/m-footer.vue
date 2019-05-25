<template>
  <div class="footer">
    <div class="text-wrapper">
      <p>
        <span>版权所有</span>
        <span>杭州意芙实业有限公司</span>
        <span>© Copyright 2008 -</span>
      </p>
      <p>
        <span>2013.EIFINI伊芙丽</span>
        <span>All Rights Reserved</span>
      </p>
      <p>
        <span>浙ICP备12014589号</span>
      </p>
    </div>
    <div class="phone-wrapper">
      <p class="phone" @click="handleClickPhone">
        <img src="./phone.png">&nbsp;&nbsp;电话
      </p>
      <p class="add">
        <img src="./add.png">&nbsp;&nbsp;加盟
      </p>
    </div>
    <div class="model" ref="model" @click="hiddenModel($event)">
      <div class="call">
        <p class="el-icon-phone-outline">&nbsp;&nbsp;0731-89600627</p>
        <p>
          <a href="tel:0731-89600627">呼叫</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleClickPhone() {
            this.$refs.model.style.display = 'block'
            document.body.style.overflow = 'hidden'
        },
        hiddenModel(e) {
            if (e.target.className !== 'model') {
                return
            }
            this.$refs.model.style.display = 'none'
            document.body.style.overflow = 'auto'
        }
    }
}
</script>

<style scoped lang="less">
.footer {
    border-top: 1px solid rgba(197, 197, 197, 1);
    .text-wrapper {
        padding: 10px 15px;
        font-size: 10px;
        font-family: Microsoft YaHei;
        line-height: 20px;
        color: rgba(159, 159, 159, 1);
        p {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            span {
                margin-left: 15px;
            }
        }
    }
    .phone-wrapper {
        display: flex;
        .phone,
        .add {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 45px;
            text-align: center;
            line-height: 45px;
            background: rgba(43, 43, 43, 1);
            box-sizing: border-box;
            font-size: 14px;
            line-height: 24px;
            color: rgba(255, 255, 255, 1);
        }
        .phone {
            border-right: 1px solid #fff;
        }
    }
    .model {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        z-index: 200;
        .call {
            z-index: 300;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            text-align: center;
            width: 80%;
            margin: 0 auto;
            background: rgba(255, 255, 255, 1);
            opacity: 1;
            border-radius: 12px;
            p::before {
                font-size: 20px;
            }
            p {
                width: 100%;
                height: 55px;
                line-height: 55px;
                font-size: 16px;
                color: #000;
                font-family: Microsoft YaHei;
            }
            p:first-child {
                border-bottom: 1px solid rgba(197, 197, 197, 1);
                color: @theme-color;
            }
        }
    }
}
</style>

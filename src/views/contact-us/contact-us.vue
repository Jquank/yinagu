<template>
  <div class="contact-us">
    <div class="img-wrapper">
      <img src="./contact01.png" class="response-img">
    </div>
    <div class="contact">
      <div class="content">
        <p>联系我们</p>
        <p>CONTACT US</p>
        <p>长沙市伊那古品牌管理有限公司</p>
        <p>地址：湖南省长沙市开福区新河街道湘江北路三段1500号北辰时代广场D1区3栋</p>
        <p>公司电话: 0731-89600627</p>
        <p>合作邮箱：124817821qq.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped lang="less">
.contact-us {
    display: flex;
    flex-wrap: wrap;
    .img-wrapper {
        flex: 1;
        min-height: 500px;
        min-width: 500px;
    }
    .contact {
        flex: 1;
        display: flex;
        align-items: center;
        padding-right: 10px;
        box-sizing: border-box;
        .content {
            margin-left: 100px;
            padding: 0 10px 60px 30px;
            max-width: 600px;
            background: @theme-color;
            color: rgb(255, 255, 255);
            & > p:first-child {
                font-size: 24px;
                font-weight: bold;
                line-height: 30px;
            }
            & > p:nth-child(2n) {
                margin-top: 6px;
            }
            & > p:nth-child(2n + 1) {
                margin-top: 30px;
            }
        }
    }
}
</style>

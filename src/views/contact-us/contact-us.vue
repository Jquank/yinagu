<template>
  <div class="contact-us">
    <div class="img-wrapper">
      <img src="./contact01.png" class="response-img">
      <div class="bg-wrapper"></div>
    </div>
    <section-title title="联系我们" subtitle="CONTACT US"></section-title>
    <div class="contact">
      <div class="content">
        <p>长沙市伊那古品牌管理有限公司</p>
        <p>地址：湖南省长沙市开福区新河街道湘江北路三段1500号北辰时代广场D1区3栋</p>
        <p>公司电话：0731-89600627</p>
        <p>合作邮箱：124817821qq.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from 'components/section-title/section-title'
export default {
    data() {
        return {}
    },
    components: {
        SectionTitle
    }
}
</script>

<style scoped lang="less">
.contact-us {
    .img-wrapper {
        position: relative;
        img {
            width: 100%;
        }
        .bg-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('./contact02.png') rgba(0, 0, 0, 0.3) no-repeat center center;
        }
    }
    .contact {
        padding: 15px 20px;
        border-top: 1px solid rgba(197, 197, 197, 1);
        .content {
            padding: 15px 10px;
            background: @theme-color;
            color: rgb(255, 255, 255);
            p {
                line-height: 24px;
                font-family: Microsoft YaHei;
            }
            p:nth-child(3) {
                margin-top: 20px;
            }
        }
    }
}
</style>

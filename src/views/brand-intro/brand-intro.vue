<template>
  <div class="brand-intro">
    <div class="img-wrapper">
      <img src="./bg-brand.png" class="response-img">
      <div class="intro-text">
        <p class="en-title">Brand introduction</p>
        <p class="t-title">伊那古</p>
        <p class="b-title">品牌介绍</p>
      </div>
    </div>
    <div class="text">
      <p>YINAGU伊那古，品牌成立于2017年3月1日，总部坐落于美丽的“娱乐之城”长沙，公司目前拥有广州、杭州两大服装研发与生产基地。</p>
      <b>
        <i></i>
        <span>公司历史</span>
      </b>
      <p>YINAGU伊那古女装品牌仅一年的时间，便在各省市主流商圈突破100家分店，现已发展成为一个集研发、生产、品牌销售于一体的服装企业。</p>
      <b>
        <i></i>
        <span>品牌理念</span>
      </b>
      <p>YINAGU伊那古女装品牌一直致力于对时尚的不断追求，秉承着突破传统，精益求精的原则，力求在产品采购、研发上追求“快”节奏的同时，也让每一位女性消费者从视听至感受都享受到“时尚与舒适”伊那古女装为18-40岁时尚女性找到了适合她们的品牌服饰，东西方元素完全相融的设计，精挑细选的布料，细致入微的做工，为每一件产品都赋予了生命的灵魂。</p>
      <b>
        <i></i>
        <span>品牌风格</span>
      </b>
      <p>
        YINAGU伊那古品牌设计师团队长期以来与香港时尚设计师团队紧密合作，拥有灵敏的时尚嗅觉，演绎自信、优雅的时尚品味。
        坚持设计应该给予服装足够的搭配空间来满足现代都市女性注重独立的人格，追求品质的生活，关注新鲜与时尚的事物，在简约中表现积极向上的生活方式。主要的风格类型有：都市风情、怀旧复古、田园浪漫型。
      </p>
      <b>
        <i></i>
        <span>品牌推广</span>
      </b>
      <p>YINAGU伊那古公司本着不断壮大，紧跟潮流的理念，不断引进人才，为公司注入新的血液，活力。以真诚的合作，共同发展为宗旨，实现所有合作伙伴的互利共赢。在此，诚邀有志之士携手步入新的未来！</p>
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
<style lang='less' scoped>
.brand-intro {
    margin-top: -1px;
    .img-wrapper {
        position: relative;
        overflow: hidden;
        & > img {
            width: 100%;
        }
        .intro-text {
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            color: rgb(255, 255, 255);
            .en-title {
                padding: 0 0 15px;
            }
            .t-title {
                font-size: 36px;
            }
            .b-title {
                font-size: 26px;
                line-height: 44px;
            }
        }
    }
    .text {
        padding: 20px 15px;
        p {
            font-family: Microsoft YaHei;
            line-height: 24px;
            color: rgba(0, 0, 0, 1);
        }
        b {
            display: flex;
            align-items: center;
            margin: 25px 0 15px;
            span {
                font-size: 18px;
                line-height: 25px;
                color: @theme-color;
            }
            i {
                width: 5px;
                height: 25px;
                color: @theme-color;
                background-color: @theme-color;
                margin: 0 10px 5px 0;
            }
        }
    }
}
</style>

<template>
  <div class="brand-intro">
    <div class="img-wrapper">
      <img @load="loadImg" src="./bg-brand.png" class="response-img">
      <div class="intro-text">
        <p class="en-title">Brand introduction</p>
        <p class="t-title">伊那古</p>
        <p class="b-title">品牌介绍</p>
        <div class="text" ref="introText">
          <div class="left">
            <p class="mb-10">YINAGU伊那古，品牌成立于2017年3月1日，总部坐落于美丽的“娱乐之城”长沙，公司目前拥有广州、杭州两大服装研发与生产基地。</p>
            <b>公司历史</b>
            <p class="mb-10">YINAGU伊那古女装品牌仅一年的时间，便在各省市主流商圈突破100家分店，现已发展成为一个集研发、生产、品牌销售于一体的服装企业。</p>
            <b>品牌理念</b>
            <p>YINAGU伊那古女装品牌一直致力于对时尚的不断追求，秉承着突破传统，精益求精的原则，力求在产品采购、研发上追求“快”节奏的同事，也让每一位女性消费者从视听至感受都享受到“时尚与舒适”伊那古女装为18-40岁时尚女性找到了适合她们的品牌服饰，东西方元素完全相融的设计，精挑细选的布料，细致入微的做工，为每一件产品都赋予了生命的灵魂。</p>
          </div>
          <div class="right">
            <b>品牌风格</b>
            <p class="mb-10">
              YINAGU伊那古品牌设计师团队长期以来与香港时尚设计师团队紧密合作，拥有灵敏的时尚嗅觉，演绎自信、优雅的时尚品味。
              坚持设计应该给予服装足够的搭配空间来满足现代都市女性注重独立的人格，追求品质的生活，关注新鲜与时尚的事物，在简约中表现积极向上的生活方式。主要的风格类型有：都市风情、怀旧复古、田园浪漫型。
            </p>
            <b>品牌推广</b>
            <p>YINAGU伊那古公司本着不断壮大，紧跟潮流的理念，不断引进人才，为公司注入新的血液，活力。以真诚的合作，共同发展为宗旨，实现所有合作伙伴的互利共赢。在此，诚邀有志之士携手步入新的未来！</p>
          </div>
        </div>
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
        loadImg() {
            setTimeout(() => {
                this.$refs.introText.style.top = '231px'
            }, 500)
        }
    }
}
</script>
<style lang='less' scoped>
.brand-intro {
    margin-top: -1px;
    .img-wrapper:hover {
        & > img {
            transform: scale(1.2);
        }
    }
    .img-wrapper {
        position: relative;
        overflow: hidden;
        & > img {
            transition: all 0.6s;
        }
        & > img:hover {
            transform: scale(1.2);
        }
        & > img {
            min-height: 750px;
            width: 100%;
        }
        .intro-text {
            position: absolute;
            top: 130px;
            right: 0;
            left: 0;
            bottom: 0;
            color: rgb(255, 255, 255);
            padding-right: 50px;
            width: 1340px;
            margin: auto;
            .en-title {
                height: 60px;
                font-size: 24px;
                line-height: 31px;
            }
            .t-title {
                font-size: 88px;
            }
            .b-title {
                font-size: 62px;
            }
            .text {
                display: flex;
                margin-top: 60px;
                line-height: 24px;
                background: rgba(0, 0, 0, 0.4);
                border: 2px solid rgba(255, 255, 255, 0.3);
                padding: 0 30px 30px 0;
                box-sizing: border-box;
                position: absolute;
                top: calc(~'-100% - 190px');
                left: 0;
                transition: all 0.8s cubic-bezier(0.3, 0.5, 0.8, 1.35);
                b {
                    font-size: 24px;
                    overflow: hidden;
                    display: inline-block;
                    padding: 20px 0 5px;
                }
                b::before {
                    content: '.';
                    display: inline-block;
                    width: 8px;
                    height: 25px;
                    color: #fff;
                    background-color: #fff;
                    margin: 2px 10px 0 0;
                }
                .left {
                    margin-right: 100px;
                    width: 50%;
                    padding: 0 30px;
                    p:first-child {
                        padding-top: 20px;
                    }
                }
                .right {
                    width: 50%;
                    padding-left: 30px;
                    b:first-child {
                        padding-top: 20px;
                    }
                }
            }
        }
    }
}
</style>

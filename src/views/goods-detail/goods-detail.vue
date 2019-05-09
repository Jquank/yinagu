<template>
  <div class="goods-detail">
    <div class="bread-title">
      <p>所有分类 > MAXRIENY 2019夏季新...</p>
    </div>
    <div class="gallery">
      <div class="left">缩略图</div>
      <div class="center">
        <img
          ref="smallImg"
          @mousemove="mousemove"
          @mouseleave="mouseleave"
          src="https://www.katespade.cn/images/thumbs/000/0005248_andi-_490.jpeg"
        >
      </div>
      <div class="right">
        <div ref="bigImgWrapper" class="big-img" v-show="showBigImg">
          <img ref="bigImg" src="https://www.katespade.cn/images/thumbs/000/0005248_andi-_490.jpeg">
        </div>
        <div class="top border-line">
          <h3 class="title">sylvia 小号野花图案轻便双折钱夹</h3>
          <div>RMB {{price | priceFormat}}</div>
        </div>
        <div class="middle border-line">
          <h4>颜色</h4>
          <div>查找店铺</div>
          <div>加入收藏</div>
        </div>
        <div class="bottom">分享到</div>
      </div>
    </div>
    <div class="introduce"></div>
    <div class="recommend-wrapper">
      <h3 class="t-center">您可能还会喜欢</h3>
      <div class="recommend">
        <div v-for="(item, index) in recommendList" :key="index" class="item">
          <!-- <goods-show></goods-show> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: 1100,
            recommendList: [1, 2, 3, 4],
            showBigImg: false
        }
    },
    mounted() {},
    methods: {
        mousemove(e) {
            this.showBigImg = true
            let x = e.clientX - this.$refs.smallImg.getBoundingClientRect().left
            let y = e.clientY - this.$refs.smallImg.getBoundingClientRect().top
            if (x < 0) x = 0
            if (y < 0) y = 0
            this.$refs.bigImg.style.left = -x + 'px'
            this.$refs.bigImg.style.top = -y + 'px'
        },
        mouseleave() {
            this.showBigImg = false
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.goods-detail {
    padding: 0 100px;
    .bread-title {
        height: 40px;
        padding-left: 17px;
        margin: 100px 0 60px;
        border-bottom: 1px solid rgb(216, 216, 216);
    }
    .gallery {
        display: flex;
        .left {
        }
        .center {
            width: 400px;
            margin: 0 8%;
            & > img {
                width: 100%;
                height: auto;
                display: inline-block;
            }
        }
        .right {
            flex: 1;
            position: relative;
            .big-img {
                position: absolute;
                width: 400px;
                height: 100%;
                overflow: hidden;
                & > img {
                    width: 800px;
                    height: auto;
                    display: inline-block;
                    position: relative;
                    // bottom: 0;
                    // right: 0;
                }
            }
            .top {
                padding-bottom: 15px;
            }
            .bottom {
                padding-top: 25px;
            }
        }
    }
    .recommend-wrapper {
        & > h3 {
            font-size: 24px;
            font-weight: 400;
        }
        .recommend {
            display: flex;
            justify-content: space-between;
            .item {
                width: 23%;
            }
        }
    }
}
</style>

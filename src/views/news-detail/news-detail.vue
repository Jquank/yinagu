<template>
  <div class="news-detail">
    <div class="detail">
      <p class="title">{{newsDetailData.title}}</p>
      <p class="time">发布时间：{{newsDetailData.date}}</p>
      <div class="content-wrapper">
        <!-- <div class="content" v-html="newsDetailData.content"> -->
        <div class="content" v-html="newsDetailData.content||'<p>暂无数据</p>'">
          <!-- <p class="top-text">{{newsDetailData.content[0]}}</p>
          <div class="img-wrapper">
            <img src="" class="response-img">
          </div>
          <p class="bottom-text">{{newsDetailData.content[1]}}</p>-->
        </div>
        <div class="pre-next">
          <p class="pre">上一条： 1212伊芙丽跨界巴黎欧莱雅为“ME时代”发声</p>
          <p class="next">下一条： 少女力满满！吴倩代言少女品牌SEIFINI诗凡黎，诠释清新少女力</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newsId: '',
            newsDetailData: {}
        }
    },
    created() {
        this.newsId = window.location.href.split('/').pop()
        this._getNewssDetail()
    },
    methods: {
        _getNewssDetail() {
            this.$jsonp('/home/getArticleDetails?artId=' + this.newsId, function(err, data) {
                if (err) return err
                this.newsDetailData = data.datas
            })
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.news-detail {
    background-color: #f3f3f3;
    .detail {
        max-width: 1200px;
        margin: 0 auto;
        .title {
            font-size: 28px;
            font-weight: bold;
            padding: 65px 0 30px;
        }
        .time {
            color: rgb(159, 159, 159);
            padding-bottom: 30px;
        }
        .content-wrapper {
            padding: 50px;
            background-color: #fff;
            .content {
                padding-bottom: 50px;
                border-bottom: 1px solid rgb(216, 216, 216);
                .img-wrapper {
                    margin: 20px 0;
                }
                .top-text,
                .bottom-text {
                    text-indent: 30px;
                    line-height: 30px;
                }
            }
            .pre-next {
                padding: 20px 0;
                & > p {
                    line-height: 24px;
                    color: rgb(159, 159, 159);
                    cursor: pointer;
                }
                & > p:hover {
                    color: #000;
                }
            }
        }
    }
}
</style>

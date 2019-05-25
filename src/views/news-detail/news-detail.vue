<template>
  <div class="news-detail">
    <div class="detail">
      <p class="title">{{newsDetailData.title}}</p>
      <p class="time">{{newsDetailData.date}}</p>
      <div class="content-wrapper">
        <div class="content" v-html="newsDetailData.content||'<p>暂无数据</p>'"></div>
      </div>
    </div>
    <div class="pre-next">
      <p @click="routerTo('pre')" class="pre">上一条： {{recArtList[0]?recArtList[0].title:'暂无数据'}}</p>
      <p @click="routerTo('next')" class="next">下一条： {{recArtList[0]?recArtList[0].title:'暂无数据'}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'newsDetail',
    data() {
        return {
            newsId: '',
            newsDetailData: {},
            recArtList: []
        }
    },
    created() {
        this.newsId = window.location.href.split('/').pop()
        this._getNewssDetail()
    },
    methods: {
        routerTo(type) {
            if (type === 'pre' && this.recArtList[0]) {
                this.$router.push({
                    path: `/newsDetail/${this.recArtList[0].id}`
                })
            }
            if (type === 'next' && this.recArtList[1]) {
                this.$router.push({
                    path: `/newsDetail/${this.recArtList[1].id}`
                })
            }
        },
        _getNewssDetail() {
            this.$jsonp('/home/getArticleDetails?artId=' + this.newsId, function(err, data) {
                if (err) return err
                this.newsDetailData = data.datas
                this.recArtList = data.datas.recArtList
            })
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.news-detail {
    .detail {
        padding: 20px 15px;
        .title {
            font-size: 18px;
            font-weight: bold;
        }
        .time {
            color: rgb(159, 159, 159);
            margin-top: 15px;
        }
        .content-wrapper {
            margin-top: 20px;
            background-color: #fff;
            line-height: 19px;
            overflow: hidden;
            .content {
                img {
                    width: 100%;
                    height: auto;
                    display: inline-block;
                }
                .top-text,
                .bottom-text {
                    text-indent: 30px;
                    line-height: 30px;
                }
            }
        }
    }
    .pre-next {
        padding: 20px 15px;
        margin-top: 20px;
        border-top: 1px solid rgba(216, 216, 216, 1);
        & > p {
            font-size: 12px;
            line-height: 24px;
            color: rgb(159, 159, 159);
            font-family: Microsoft YaHei;
            cursor: pointer;
        }
    }
}
</style>

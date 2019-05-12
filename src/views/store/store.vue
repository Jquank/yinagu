<template>
  <div class="store">
    <div class="img-wrapper">
      <img src="./store01.png" class="response-img">
      <div class="store-wrapper">
        <p class="title">STORES</p>
        <div class="sel-city">
          <el-select v-model="province" placeholder="选择省份">
            <el-option label="广东省" value="1"></el-option>
            <el-option label="湖北省" value="2"></el-option>
            <el-option label="湖南省" value="3"></el-option>
          </el-select>
          <el-select v-model="city" placeholder="选择城市">
            <el-option label="广东省" value="1"></el-option>
            <el-option label="湖北省" value="2"></el-option>
            <el-option label="湖南省" value="3"></el-option>
          </el-select>
        </div>
        <div class="store-list">
          <template v-if="storeList.length">
            <div class="store-info" v-for="item in storeList" :key="item">
              <p>万家丽广场伊那古专柜</p>
              <p>长沙市芙蓉区万家丽广场</p>
              <p>0731-89600627</p>
            </div>
          </template>
          <template v-if="!storeList.length">
            <div class="store-info">
              <p>万家丽广场伊那古专柜</p>
              <p>长沙市芙蓉区万家丽广场</p>
              <p>0731-89600627</p>
            </div>
            <div class="store-img">
              <img src="./store02.png" class="response-img">
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            province: '',
            city: '',
            storeList: []
        }
    },

    methods: {}
}
</script>
<style lang='less' scoped>
.store {
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
            min-height: 882px;
            width: 100%;
        }
        .store-wrapper {
            position: absolute;
            top: 165px;
            left: 50%;
            transform: translateX(-50%);
            width: 520px;
            text-align: center;
            z-index: 10;
            .title {
                font-size: 68px;
                color: #fff;
            }
            .sel-city {
                width: 450px;
                margin: 20px auto 0;
                display: flex;
                justify-content: space-between;
            }
            .store-list {
                max-height: 500px;
                overflow: auto;
                background-color: #fff;
                margin-top: 80px;
                text-align: center;
                .store-info:not(:last-child) {
                    border-bottom: 1px solid rgb(216, 216, 216);
                }
                .store-info {
                    padding: 30px 0;
                    & > p:first-child {
                        font-size: 24px;
                        font-weight: bold;
                        line-height: 30px;
                    }
                    & > p:nth-child(2) {
                        line-height: 24px;
                        color: rgb(159, 159, 159);
                    }
                    & > p:last-child {
                        line-height: 24px;
                        color: rgb(159, 159, 159);
                    }
                }
                .store-img {
                    height: 310px;
                    overflow: hidden;
                    padding: 20px;
                }
            }
        }
    }
}
</style>

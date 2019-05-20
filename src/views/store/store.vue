<template>
  <div class="store">
    <div class="img-wrapper">
      <img src="./store01.png" class="response-img">
      <div class="store-wrapper">
        <p class="title">STORES</p>
        <div class="sel-city">
          <el-select v-model="province" placeholder="选择省份" @change="provinceChange">
            <el-option v-for="p in provinceList" :key="p.id" :label="p.region_name" :value="p.id"></el-option>
          </el-select>
          <el-select v-model="city" placeholder="选择城市" @change="cityChange">
            <el-option v-for="p in cityList" :key="p.id" :label="p.region_name" :value="p.id"></el-option>
          </el-select>
        </div>
        <div class="store-list">
          <template v-if="cid">
            <div v-if="!storeList.length" class="store-info">暂无相关门店</div>
            <div class="store-info" v-for="item in storeList" :key="item.id">
              <div class="img-wrapper">
                <img :src="'http://'+item.photo_path" class="response-img">
              </div>
              <div class="text-wrapper">
                <p>{{item.title}}</p>
                <p>{{item.address}}</p>
                <p>{{item.phone}}</p>
              </div>
            </div>
          </template>
          <template v-if="!cid">
            <div class="store-info1">
              <p>{{storeList[0].title}}</p>
              <p>{{storeList[0].address}}</p>
              <p>{{storeList[0].phone}}</p>
            </div>
            <div class="store-img">
              <img :src="'http://'+storeList[0].photo_path" class="response-img">
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
            provinceList: '',
            city: '',
            cityList: '',
            storeList: [],
            pid: '',
            cid: ''
        }
    },
    created() {
        this._getProvince()
        this._getStoreList()
    },
    methods: {
        cityChange(cid) {
            this.cid = cid
            this._getStoreList(this.pid, cid)
        },
        provinceChange(pid) {
            this.pid = pid
            this._getCity(pid)
        },
        _getStoreList(pid, cid) {
            pid = pid || ''
            cid = cid || ''
            this.pid = pid
            this.$jsonp(`/home/getStoresList?province_id=${pid}&city_id=${cid}`, { name: 'callback2' }, function(
                err,
                data
            ) {
                if (err) return err
                this.storeList = data.datas
                console.log(data)
            })
        },
        _getProvince() {
            this.$jsonp('/home/getProvinceList', function(err, data) {
                if (err) return err
                this.provinceList = data.datas
            })
        },
        _getCity(pid) {
            this.$jsonp('/home/getCityList?province_id=' + pid, { name: 'callback1' }, function(err, data) {
                if (err) return err
                this.cityList = data.datas
            })
        }
    }
}
</script>
<style lang='less' scoped>
.store {
    margin-top: -1px;
    // .img-wrapper:hover {
    //     & > img {
    //         transform: scale(1.2);
    //     }
    // }
    & > .img-wrapper {
        position: relative;
        overflow: hidden;
        // & > img {
        //     transition: all 0.6s;
        // }
        // & > img:hover {
        //     transform: scale(1.2);
        // }
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
                .store-info:not(:last-child) {
                    border-bottom: 1px solid rgb(216, 216, 216);
                }
                .store-info {
                    padding: 30px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .img-wrapper {
                        width: 100px;
                        height: 80px;
                        overflow: hidden;
                        margin-right: 20px;
                    }
                    .text-wrapper {
                        // flex: 1;
                        text-align: left;
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
                }
                .store-info1 {
                    padding: 30px 20px;
                    text-align: center;
                    border-bottom: 1px solid rgb(216, 216, 216);
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
                    max-width: 480px;
                    max-height: 310px;
                    overflow: hidden;
                    padding: 20px;
                }
            }
        }
    }
}
</style>

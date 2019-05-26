<template>
  <div class="store">
    <div class="img-wrapper">
      <img src="./store01.png" class="response-img">
      <div class="store-wrapper">
        <div class="model">
          <p class="title">STORES</p>
          <div class="sel-city">
            <el-select v-model="province" placeholder="选择省份" @change="provinceChange">
              <el-option v-for="p in provinceList" :key="p.id" :label="p.region_name" :value="p.id"></el-option>
            </el-select>
            <el-select class="ml-10" v-model="city" placeholder="选择城市" @change="cityChange">
              <el-option v-for="p in cityList" :key="p.id" :label="p.region_name" :value="p.id"></el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
    <div class="store-list">
      <template>
        <div v-if="!storeList.length" class="store-info">暂无相关门店</div>
        <div class="store-info" v-for="item in storeList" :key="item.id">
          <div class="img-wrapper">
            <img :src="'http://'+item.photo_path" class="response-img">
          </div>
          <div class="text-wrapper">
            <p>{{item.title}}</p>
            <p>{{item.address}}</p>
            <p>电话：{{item.phone}}</p>
          </div>
        </div>
      </template>
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
    & > .img-wrapper {
        position: relative;
        overflow: hidden;
        & > img {
            width: 100%;
        }
        .store-wrapper {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.4);
            .model {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                z-index: 10;
                width: 80%;
            }
            .title {
                font-size: 36px;
                color: #fff;
            }
            .sel-city {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
            }
        }
    }
    .store-list {
        background-color: #fff;
        min-height: 300px;
        .store-info:not(:last-child) {
            border-bottom: 1px solid rgb(216, 216, 216);
        }
        .store-info {
            padding: 20px 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            .img-wrapper {
                overflow: hidden;
                margin-right: 20px;
                img {
                    width: 100px;
                    height: 80px;
                }
            }
            .text-wrapper {
                // flex: 1;
                text-align: left;
                & > p:first-child {
                    font-size: 18px;
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
    }
}
</style>

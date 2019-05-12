<template>
  <div class="recruitment">
    <div class="img-wrapper">
      <img src="./r01.png" class="response-img">
    </div>
    <div class="r-wrapper">
      <p class="r-title">RECRUIT</p>
      <div class="jobs">
        <ul>
          <li v-for="item in jobList" :key="item">
            <img src="./icon01.png">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="content">
        <p class="c-title">人才招聘</p>
        <p class="c-subtitle">CAMPUS RECRUITMENT</p>
        <p class="welcome">
          如果才华横溢的你想要加入我们，你可以用任何方式介绍自己，同时附上你近期的生活照，使我们更快的认识你、了解
          你，欢迎您的到来！
        </p>
        <p class="send-email">
          区域经理、督导、店长、店助、导购、商品专员、统计请发送email至
          <span class="red">1319258@qq.com</span>
        </p>
        <p class="c-title">招聘流程</p>
        <p class="c-subtitle">RECRUITMENT PROCESS</p>
        <div class="interview-process">
          <div v-for="(pro, index) in processList" :key="pro.text" class="pro-wrapper">
            <div>
              <img :src="pro.src">
              <p>{{pro.text}}</p>
            </div>
            <div v-if="index !== processList.length-1" class="rung"></div>
          </div>
        </div>
        <div class="website">
          <div>
            <a href="https://mkt.51job.com/tg/sem/pz_2018.html?from=baidupz" target="_blank" class="hidden-div">51job</a>
            <a href="https://mkt.51job.com/tg/sem/pz_2018.html?from=baidupz" target="_blank" class="f-div">51job</a>
          </div>
          <div>
            <a href="http://landing.zhaopin.com/register" target="_blank" class="hidden-div">智联招聘</a>
            <a href="http://landing.zhaopin.com/register" target="_blank" class="f-div">智联招聘</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobList: [
                '区域经理',
                '督导',
                '店长',
                '店助',
                '导购',
                '商品专员',
                '统计'
            ],
            processList: [
                {
                    src: require('./pro01.png'),
                    text: '投递简历'
                },
                {
                    src: require('./pro02.png'),
                    text: '简历筛选'
                },
                {
                    src: require('./pro03.png'),
                    text: '电话沟通'
                },
                {
                    src: require('./pro04.png'),
                    text: '初试'
                },
                {
                    src: require('./pro05.png'),
                    text: '复试'
                },
                {
                    src: require('./pro06.png'),
                    text: '录用'
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
.recruitment {
    position: relative;
    & > .img-wrapper {
        height: 1354px;
        & > img {
            width: 100%;
        }
    }
    .r-wrapper {
        position: absolute;
        top: 165px;
        left: 50%;
        transform: translateX(-50%);
        width: 1340px;
        text-align: center;
        .r-title {
            font-size: 68px;
            line-height: 90px;
            color: rgb(255, 255, 255);
        }
        .jobs {
            width: 906px;
            margin: 80px auto;
            & > ul {
                display: flex;
                justify-content: space-between;
                & > li {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    background: rgba(255, 255, 255, 1);
                    border-radius: 20px;
                    padding: 0 20px 0 15px;
                    span {
                        margin-left: 10px;
                    }
                }
            }
        }
        .content {
            background-color: #fff;
            .c-title {
                padding-top: 60px;
                font-size: 24px;
                font-weight: bold;
                line-height: 30px;
            }
            .c-subtitle {
                font-size: 18px;
                font-weight: bold;
                line-height: 24px;
                color: rgb(204, 194, 171);
                margin: 10px 0 60px;
            }
            .welcome,
            .send-email {
                width: 728px;
                margin: 0 auto;
                line-height: 24px;
                color: #9f9f9f;
            }
            .send-email {
                margin-top: 20px;
            }
            .interview-process {
                text-align: center;
                color: @theme-color;
                padding: 0 115px;
                .pro-wrapper {
                    display: inline-block;
                    & > div {
                        display: inline-block;
                    }
                    p {
                        font-size: 18px;
                        font-weight: bold;
                        margin-top: 24px;
                    }
                    .rung {
                        width: 55px;
                        border-top: 2px dashed @theme-color;
                        padding-top: 105px;
                        margin: 0 8px;
                    }
                }
            }
            .website {
                width: 364px;
                margin: 0 auto;
                padding: 80px 0 140px;
                & > div:hover {
                    .hidden-div {
                        width: 150px;
                        color: #fff;
                        background-color: @theme-color;
                    }
                }
                & > div {
                    margin-right: 30px;
                    display: inline-block;
                    position: relative;
                    .hidden-div {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: inline-block;
                        width: 0;
                        height: 50px;
                        box-sizing: border-box;
                        line-height: 50px;
                        overflow: hidden;
                        transition: all 0.3s;
                    }
                    .f-div {
                        display: inline-block;
                        width: 150px;
                        height: 50px;
                        box-sizing: border-box;
                        line-height: 50px;
                        border: 1px solid rgba(204, 194, 171, 1);
                    }
                }
            }
        }
    }
}
</style>

<template>
  <div class="recruitment">
    <div class="img-wrapper">
      <img src="./r01.png" class="response-img">
      <div class="title-wrapper">
        <p class="r-title">RECRUIT</p>
      </div>
    </div>
    <div class="r-wrapper">
      <div class="jobs">
        <ul>
          <li v-for="item in jobList" :key="item">
            <img src="./icon01.png">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="separate-line"></div>
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
          <div v-for="pro in processList" :key="pro.text" class="pro-wrapper">
            <div>
              <img :src="pro.src">
              <p>{{pro.text}}</p>
            </div>
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
            jobList: ['督导', '店长', '店助', '商品专员', '区域经理', '导购', '统计'],
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
    & > .img-wrapper {
        position: relative;
        & > img {
            width: 100%;
        }
        .title-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            & > .r-title {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 100%;
                text-align: center;
                font-size: 36px;
                color: rgb(255, 255, 255);
            }
        }
    }
    .r-wrapper {
        text-align: center;
        .jobs {
            padding: 20px 15px;
            & > ul {
                display: flex;
                flex-wrap: wrap;
                & > li {
                    display: flex;
                    align-items: center;
                    height: 36px;
                    background: rgba(255, 255, 255, 1);
                    border: 1px solid rgba(204, 194, 171, 1);
                    opacity: 1;
                    border-radius: 20px;
                    padding: 5px 15px;
                    margin: 10px 10px 0 0;
                    span {
                        margin-left: 8px;
                    }
                }
            }
        }
        .content {
            background-color: #fff;
            padding: 0 15px 20px;
            .c-title {
                font-size: 18px;
                font-weight: bold;
                margin-top: 20px;
            }
            .c-subtitle {
                font-weight: bold;
                color: rgb(204, 194, 171);
                margin-top: 10px;
            }
            .welcome,
            .send-email {
                line-height: 24px;
                color: #9f9f9f;
                font-family: Microsoft YaHei;
                margin-top: 15px;
            }
            .send-email {
                margin-top: 20px;
            }
            .interview-process {
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                color: @theme-color;
                .pro-wrapper {
                    margin-top: 20px;
                    width: 33.3%;
                    img {
                        width: 74px;
                        height: 74px;
                    }
                    p {
                        font-weight: bold;
                        margin-top: 10px;
                    }
                }
            }
            .website {
                display: flex;
                justify-content: space-around;
                margin: 30px auto 10px;
                // & > div:hover {
                //     .hidden-div {
                //         width: 120px;
                //         color: #fff;
                //         background-color: @theme-color;
                //     }
                // }
                & > div {
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
                        height: 50px;
                        width: 120px;
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

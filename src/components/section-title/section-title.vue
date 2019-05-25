<template>
  <div class="more-title-wrapper">
    <div class="more-title-box">
      <div class="title-wrapper">
        <p class="subtitle">{{subtitle}}</p>
        <div class="title">
          <p>{{title}}</p>
          <slot name="more"></slot>
        </div>
      </div>
    </div>
    <!-- <div class="more-text">more ></div> -->
  </div>
</template>

<script>
export default {
    props: {
        subtitle: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped lang="less">
.more-title-wrapper {
    margin: 30px 0 8px;
    padding-left: 15px;
    .more-title-box {
        .title-wrapper {
            .subtitle {
                font-size: 22px;
                line-height: 30px;
            }
            .title {
                display: flex;
                justify-content: space-between;
                padding-right: 15px;
                p {
                    line-height: 20px;
                }
            }
        }
    }
}
</style>

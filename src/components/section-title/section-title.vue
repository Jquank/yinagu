<template>
  <div class="more-title-wrapper">
    <div class="more-title-box">
      <div class="title-wrapper">
        <p class="subtitle">{{subtitle}}</p>
        <p class="title">{{title}}</p>
      </div>
    </div>
    <slot name="more"></slot>
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
    position: relative;
    margin-bottom: 60px;
    .more-title-box {
        width: 180px;
        height: 80px;
        border: 2px solid rgb(112, 112, 112);
        text-align: center;
        margin: auto;
        .title-wrapper {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            .subtitle {
                line-height: 19px;
            }
            .title {
                font-size: 30px;
                font-weight: 400;
                line-height: 40px;
            }
        }
    }
}
</style>

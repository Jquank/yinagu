const loadingMixin = {
  data() {
    return {
      loadingShow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.myScrollFunc)
  },
  destroyed() {
    window.removeEventListener('scroll', this.myScrollFunc)
  },
  methods: {
    myScrollFunc() {
      let h = Math.abs(
        document.documentElement.clientHeight -
          this.$refs.goodsList.getBoundingClientRect().bottom
      )
      if (h < 350 && h > 80) {
        this.loadingShow = true
      } else {
        this.loadingShow = false
      }
    }
  }
}
export default loadingMixin

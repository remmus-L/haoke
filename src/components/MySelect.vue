<template>
  <div>
    <div class="header">
      <div class="left">
        <span class="txt" @click="$router.push('/citylist')">上海</span
        ><i class="iconfont icon-xiala"></i>&nbsp;&nbsp;&nbsp;&nbsp;|
        <van-icon name="search" size="15" color="#9c9fa1" class="sear" />
        请输入小区或地址
      </div>
      <div class="right">
        <i class="iconfont icon-ditu"></i>
      </div>
    </div>
    <!-- 弹出层内容 -->
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      isShowCity: false
      // indexList: ['A', 'B']
    }
  },
  methods: {
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  position: fixed;
  top: 40px;
  left: 40px;
  display: flex;
  justify-content: space-between;
  width: 690px;
  height: 68px;
  // background-color: pink;
  .left {
    width: 610px;
    height: 68px;
    background-color: #fff;
    border-radius: 4px;
    line-height: 68px;
    color: #9c9fa1;
    font-size: 26px;
    .txt {
      font-size: 28px;
      color: #333;
      padding-right: 10px;
      padding-left: 12px;
    }
    .sear {
      padding-left: 30px;
    }
  }
  .right {
    width: 68px;
    height: 68px;
    line-height: 68px;
    text-align: center;
    // background-color: blue;
  }
}
.icon-ditu {
  font-size: 0.6rem;
  color: #fff;
}
.icon-xiala {
  color: #333;
}
// .nbar {
//   position: sticky;
//   top: 0;
//   left: 0;
// }
// .van-index-bar__index {
//   position: sticky;
//   top: 50px;
//   right: 10px;
// }
</style>

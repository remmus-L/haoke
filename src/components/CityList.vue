<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow fixed class="cityhd" />
    <van-index-bar :index-list="indexList" class="citylt">
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor  index="热">热门城市</van-index-anchor>
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <div v-for="(item, index) in dataList" :key="index">
        <van-index-anchor :index="item" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </div>

      <!-- <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="C" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="D" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="E" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="F" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      ... -->
    </van-index-bar>
  </div>
</template>

<script>
export default {
  created () {
    this.indexList = ['#', '热']
    for (let i = 65; i <= 90; i++) {
      // 这是右边得那个索引
      this.indexList.push(String.fromCharCode(i))
      // 左边的A-Z
      this.dataList.push(String.fromCharCode(i))
    }
  },
  data () {
    return {
      indexList: [], // 右侧列表

      dataList: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.cityhd {
  z-index: 999;
}
.citylt {
  padding-top: 90px;
}
.van-index-bar__index {
  padding-bottom: 30px !important;
}
</style>

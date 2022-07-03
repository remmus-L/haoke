<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="gray">
      <van-swipe-item v-for="item in swiperPic" :key="item.id"
        ><img
          class="lbpic"
          :src="'http://liufusong.top:8080' + item.imgSrc"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <MySelect></MySelect>
    <ul class="zufang">
      <li>
        <img src="@/assets/整租.png" alt="" />
        <p>整租</p>
      </li>
      <li>
        <img src="@/assets/合租.png" alt="" />
        <p>合租</p>
      </li>
      <li>
        <img src="@/assets/地图找房.png" alt="" />
        <p>地图找房</p>
      </li>
      <li>
        <img src="@/assets/去出租.png" alt="" />
        <p>去出租</p>
      </li>
    </ul>
    <div class="group">
      <h3 class="group-title">
        租房小组
        <span class="more">更多</span>
      </h3>
      <div class="am-grid">
        <div class="am-grid-item" v-for="item in groupList" :key="item.id">
          <img src="../../assets/合租.png" alt="" class="left" />
          <div class="right">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MySelect from '@/components/MySelect.vue'
import { getHomeGroup, getSwiper } from '@/api/home'
export default {
  created () {
    this.getHomeGroup()
    this.getSwiper()
  },
  data () {
    return {
      groupList: [],
      swiperPic: []
    }
  },
  methods: {
    async getHomeGroup () {
      try {
        const res = await getHomeGroup()
        // console.log('res', res)
        this.groupList = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async getSwiper () {
      try {
        const res = await getSwiper()
        console.log('轮播图', res)
        this.swiperPic = res.data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MySelect }
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 424px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
/deep/.van-swipe__indicator {
  width: 16px;
  height: 16px;
  background-color: #666;
}
.lbpic {
  width: 100%;
}
.zufang {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    height: 240px;
    padding: 20px 0;
    img {
      width: 120px;
      height: 120px;
      margin-bottom: 20px;
    }
    p {
      font-size: 28px;
    }
  }
}
.group {
  background-color: #f6f5f6;
  overflow: hidden;
  padding: 0 20px;
  height: 376px;
  .group-title {
    font-size: 30px;
    padding-left: 20px;
    margin: 25px 0 25px 0px;
  }
  .more {
    color: #787d82;
    position: absolute;
    right: 20px;
    font-size: 28px;
    font-weight: 400;
  }
  .am-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .am-grid-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 345px;
      height: 120px;
      background-color: #fff;
      margin-bottom: 20px;
      .left {
        width: 80px;
        height: 80px;
      }
      .right {
        font-size: 28px;
        margin-right: 60px;
      }
    }
  }
}
</style>

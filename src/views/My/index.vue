<template>
  <div>
    <!-- 登录成功后的 -->
    <div class="afterlogin" v-if="user && user.token">
      <img src="@/assets/avatar.png" class="bg1" alt="" />
      <div class="My_info1">
        <!-- <div class="My_name"></div> -->
        <div class="My_icon1">
          <img src="@/assets/合租.png" alt="" />
        </div>
        <div class="My_user1">
          <div class="My_name1">游客</div>

          <div class="myself">
            编辑个人资料<i class="iconfont icon-xiangyou"></i>
          </div>
          <van-button
            type="primary"
            class="My_edit1"
            size="normal"
            v-if="user && user.token"
            @click="logout"
            >退出</van-button
          >
        </div>
      </div>
    </div>
    <!-- 去登录 -->
    <div class="gologin" v-else>
      <img src="@/assets/bg.png" class="bg" alt="" />
      <div class="My_info">
        <!-- <div class="My_name"></div> -->
        <div class="My_icon">
          <img src="@/assets/合租.png" alt="" />
        </div>
        <div class="My_user">
          <div class="My_name">游客</div>
          <van-button
            type="primary"
            class="My_edit"
            size="normal"
            @click="$router.push('/login')"
            >去登录</van-button
          >
        </div>
      </div>
    </div>

    <!-- <van-grid :column-num="3" :border="false">
      <van-grid-item text="文字"><i class="iconfont icon-shoucang"></i></van-grid-item>
      <van-grid-item text="文字"></van-grid-item>
      <van-grid-item text="文字"></van-grid-item>
      <van-grid-item text="文字"></van-grid-item>
      <van-grid-item text="文字"></van-grid-item>
      <van-grid-item text="文字"></van-grid-item>
    </van-grid> -->

    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <i class="iconfont icon-shoucang"></i>
        <span class="downtext">我的收藏</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-geren"></i>
        <span class="downtext">我的出租</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-shijian"></i>
        <span class="downtext">看房记录</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-qianyuequerenqianyuedianziqianyue"></i>
        <span class="downtext">成为房主</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-geren"></i>
        <span class="downtext">个人资料</span>
      </van-grid-item>
      <van-grid-item>
        <i class="iconfont icon-yuwolianxi"></i>
        <span class="downtext">联系我们</span>
      </van-grid-item>
    </van-grid>
    <div class="downpic"><img src="@/assets/join.png" alt="" /></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () { },
  data () {
    return {}
  },
  methods: {
    async logout () {
      try {
        // 这是vant中弹出框
        await this.$dialog.confirm({ message: '确定退出吗' })
        // 如果确认退出,就让token值清空
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.gologin {
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: 15px;
  // background-color: pink;
  .bg {
    width: 100%;
  }
  .My_info {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    // margin: 50px auto 0;
    // padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .My_icon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .My_user {
      padding-top: 10px;
      .My_name {
        margin-top: -30px;
        margin-bottom: 10px;
        font-size: 28px;
      }
      .My_edit {
        background-color: #21b97a;
        font-size: 12px;
        margin-top: 20px;
        font-size: 26px;
        padding: 0 15px;
        width: 120px;
        height: 60px;
        border-radius: 8px;
      }
    }
  }
}
.afterlogin {
  position: relative;
  width: 100%;
  height: 75 0px;
  margin-bottom: 15px;
  // background-color: pink;
  .bg1 {
    width: 100%;
  }
  .My_info1 {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    // margin: 50px auto 0;
    // padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .My_icon1 {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 140px;
      height: 140px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .My_user1 {
      padding-top: 10px;
      .My_name1 {
        margin-top: -50px;
        margin-bottom: 10px;
        font-size: 28px;
      }
      .My_edit1 {
        background-color: #21b97a;
        font-size: 12px;
        // margin-top: 20px;
        font-size: 26px;
        padding: 0 15px;
        width: 120px;
        height: 60px;
        border-radius: 60px;
        margin-top: 30px;
      }
      .myself {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
        .icon-xiangyou {
          color: #333;
        }
      }
    }
  }
}
.iconfont {
  font-size: 48px;
  color: #333;
}
.downtext {
  font-size: 28px;
}
.icon-xiangyou {
  font-size: 14px;
  color: #999 !important;
}
.downpic {
  width: 690px;
  height: 100%;
  padding-left: 50px;
}
</style>

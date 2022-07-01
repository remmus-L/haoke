<template>
  <div>
    <!-- 去登录 -->
    <div class="gologin">
      <img src="@/assets/bg.png" class="bg" alt="" />
      <div class="My_info">
        <!-- <div class="My_name"></div> -->
        <div class="My_icon">
          <img src="@/assets/合租.png" alt="" />
        </div>
        <div class="My_user">
          <div class="My_name">游客</div>
          <van-button type="primary" class="My_edit" size="normal"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <!-- 登录成功后的 -->
    <div class="afterlogin">
      <img src="@/assets/avatar.png" class="bg1" alt="" />
      <div class="My_info1">
        <!-- <div class="My_name"></div> -->
        <div class="My_icon1">
          <img src="@/assets/合租.png" alt="" />
        </div>
        <div class="My_user1">
          <div class="My_name1">游客</div>
          <van-button type="primary" class="My_edit1" size="normal"
            >退出</van-button
          >
          <div class="myself">
            编辑个人资料<i class="iconfont icon-xialajiantou"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
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
      }
      .myself {
        color: #999;
        font-size: 12px;
        margin-top: 20px;
      }
    }
  }
}
</style>

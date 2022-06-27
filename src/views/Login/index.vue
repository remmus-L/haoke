<template>
  <div>
    <van-nav-bar title="账号登录">
      <template v-slot:left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <div class="blanck"></div>
    <van-form @submit="onSubmit">
      <van-field
        class="user"
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请输入账号' },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            message: '用户名格式5-8位的数字和字母',
          },
        ]"
      />
      <van-field
        class="psd"
        v-model="code"
        type="password"
        name="code"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请输入密码' },
          {
            pattern: /^[a-zA-Z0-9]{5,12}$/,
            message: '密码格式5-12位的数字和字母',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="tijiao"
          >登 录</van-button
        >
      </div>
    </van-form>
    <div class="qzc"><a href="">还没有账号，去注册~</a></div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      username: '哈哈哈嘻嘻', // 手机号
      code: '123456789' // 短信验证码
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
.blanck {
  height: 40px;
}
.user {
  height: 120px;
  line-height: 100px;
  font-size: 34px;
}
.psd {
  height: 120px;
  line-height: 100px;
  font-size: 34px;
}
.tijiao {
  width: 690px;
  height: 100px;
  border-radius: 2px;
  margin-top: 50px;
  background-color: rgb(33, 185, 122);
  border-color: rgb(33, 185, 122);
  font-size: 36px;
}
.qzc {
  text-align: center;
  font-size: 28px;
  margin-top: 50px;
  a {
    color: #666;
  }
}
</style>

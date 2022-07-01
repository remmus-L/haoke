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
      />
      <van-field
        class="psd"
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
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
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: '' // 短信验证码
    }
  },
  methods: {
    async onSubmit (values) {
      const a = /^[a-zA-Z0-9]{5,8}$/
      const b = /^[a-zA-Z0-9]{5,12}$/
      // console.log('submit', values)
      if (this.username === '' || this.password === '') {
        this.$toast('用户名或者密码不能为空')
      } else if (!new RegExp(a).test(this.username)) {
        this.$toast('用户名格式不对')
      } else if (!new RegExp(b).test(this.password)) {
        this.$toast('密码格式不对')
      } else {
        // 这里加我等下截图给你的方法
        try {
          // const res = await login({ username: this.username, password: this.password })
          const res = await login(values)
          console.log(res)
          console.log(values)
          this.$store.commit('setUser', res.data.data)
          this.$toast('登录成功')
          this.$router.push({ name: 'my' })
        } catch (err) {
          console.log(err)
        }
      }
    }

    // qdl () {
    //   if (this.username === '' || this.code === '') {
    //     return this.$toast('用户名或者密码不能为空')
    //   } else if (this.username.length < 5 || this.username.length > 8) {
    //     return this.$toast('用户名格式不对')
    //   } else if (this.code.length < 5 || this.code.length > 12) {
    //     return this.$toast('密码格式不对')
    //   }
    // }
  }
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

<template>
  <div id="register">
    <h4>用户注册</h4>
    <label>*</label><input placeholder="用户名" v-model="username" type="text" /><br/>
    <label>*</label><input placeholder="邮箱" v-model="email" type="text" /><br/>
    <label>*</label><input placeholder="别名" v-model="nickname" type="text" /><br/>
    <label>*</label><input placeholder="密码" v-model="password" type="password" /><br/>
    <label>*</label><input placeholder="确认密码" v-model="password2" type="password" /><br/>
    <button @click="register">注册</button>
  </div>
</template>

<script>
import { getRegisterView } from 'network/login.js'

export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      email: '',
      nickname: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    register() {
      if (this.password != this.password2) {
        alert("密码错误！！！")
        return
      }
      let data = {
        username: this.username,
        email: this.email,
        nickname: this.nickname,
        password: this.password,
        password2: this.password2
      }
      getRegisterView(data).then(res => {
        if (res.key === 'success') {
          this.$router.push({path: '/login'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
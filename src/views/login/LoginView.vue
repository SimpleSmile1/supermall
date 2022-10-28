<template>
  <div id="login">
    <h4>用户登录</h4>
    <input placeholder="输入用户名" v-model="username" type="text" />
    <input placeholder="输入用户密码" v-model="password" type="password" /><br/>
    <button @click="login">登录</button>
    <button @click="register">请注册</button>
  </div>
</template>

<script>
import { getLoginView } from 'network/login.js'
export default {
  name: 'LoginView',
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let data = {
        username: this.username,
        password: this.password
      }
      getLoginView(data).then(res => {
        if (res.key === 'success') {
          this.$router.push({path: '/home'})
        }
      }).catch(error => {
        console.log(error)
      })
    },
    register() {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>

</style>
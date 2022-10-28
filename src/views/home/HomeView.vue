<template>
  <div id="home">
    <!-- <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <home-swiper :banner="banner" />
    <recommend-view :recommend="recommend" /> -->
    <button @click="searchBtn">汽车维修检索一览</button>
    <button @click="loginBtn">汽车维修登录</button>
  </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NavBar.vue'
// import HomeSwiper from './childComponents/HomeSwiper.vue'
// import RecommendView from './childComponents/RecommendView.vue'

import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'HomeView',
  components: {
    // NavBar,
    // HomeSwiper,
    // RecommendView
  },
  data () {
    return {
      banner: [],
      recommend: []
    }
  },
  created () {
    // getHomeMultidata().then(res => {
    //   this.banner = res.data.banner.list
    //   this.recommend = res.data.recommend.list
    // })
  },
  methods: {
    searchBtn: function() {
      this.$router.push({path: '/carRepairSearch'})
    },
    loginBtn: function() {
      this.$router.push({path: '/carRepairLogin'})
    }
  }
}
</script>

<style scoped>
  .home-nav {
    background: rgb(109, 171, 109);
    font-size: 22px;
  }
</style>

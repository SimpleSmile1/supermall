<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:tabbar-img>
          <img src="~assets/img/img_5.png" />
        </template>
        <template v-slot:tabbar-text>
          <div>首页</div>
        </template>
        <template v-slot:tabbar-text-active>
          <div class="red">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:tabbar-img>
          <img src="~assets/img/img_2.png" />
        </template>
        <template v-slot:tabbar-text>
          <div>分类</div>
        </template>
        <template v-slot:tabbar-text-active>
          <div class="red">分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:tabbar-img>
          <img src="~assets/img/img_3.png" />
        </template>
        <template v-slot:tabbar-text>
          <div>购物车</div>
        </template>
        <template v-slot:tabbar-text-active>
          <div class="red">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:tabbar-img>
          <img src="~assets/img/img_4.png" />
        </template>
        <template v-slot:tabbar-text>
          <div>我的</div>
        </template>
        <template v-slot:tabbar-text-active>
          <div class="red">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  .red {
    color: rgb(222, 62, 62);
  }
</style>

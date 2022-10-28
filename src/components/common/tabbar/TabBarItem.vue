<template>
    <div class="tabbar-item" :onclick="itemClick">
      <slot name="tabbar-img"></slot>
      <div v-if="!isActive">
        <slot name="tabbar-text"></slot>
      </div>
      <div v-else>
        <slot name="tabbar-text-active"></slot>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  components: {
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style>
    .tabbar-item {
        height: 49px;
        flex: 1;
        text-align: center;
    }
    .tabbar-item img {
        height: 24px;
        vertical-align: middle;
    }
</style>

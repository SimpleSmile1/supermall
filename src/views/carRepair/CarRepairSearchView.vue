<template>
  <div>
    <label>车牌号</label><input v-model="carNum" type="text" />
    <button @click="search">检索</button>
  </div>
</template>

<script>
export default {
  name: 'CarRepairSearchView',
  data() {
    return {
      carNum: ''
    }
  },
  methods: {
    search: function() {
      this.$store.commit('setCarNum',this.carNum);
      this.$router.push({path: '/carRepairNote'})
    }
  }
}
</script>

<style scoped>

</style>
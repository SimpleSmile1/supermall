<template>
  <div>
    <button @click="download">录入汽车维修信息</button>
  </div>
</template>

<script>
export default {
  name: 'ProFile',
  components: {
  },
  methods: {
    download() {
      this.$router.push({path: '/carRepairLogin'})
    }
  }
}
</script>

<style scoped>

</style>

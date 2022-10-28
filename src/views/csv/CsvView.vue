<template>
  <div id="csv">
    <label>时间</label><div><input type="text" /></div><label>驾驶员</label><div><input type="text" /></div>
    <label>车号</label><div><input type="text" /></div><label>车型</label><div><input type="text" /></div>
    <label>维修地点</label><div><input type="text" /></div>
    <label>维修经费</label><div><input type="text" /></div>
    <label>维修项目</label><div><input type="text" /></div>
    <label>维修意见</label><div><input type="text" /></div>
    <label>领导审批</label><div><input type="text" /></div>
    <label>备注</label><div><input type="text" /></div>
    <button @click="csvload">csv</button>
  </div>
</template>

<script>
export default {
  name: 'CsvView',
  methods: {
    csvload() {
      
    }
  }
}
</script>

<style scoped>

</style>
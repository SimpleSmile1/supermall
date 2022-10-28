<template>
  <div id="csv">
    <!--
    <h4>驾驶员姓名</h4><div>{{driver}}</div>
    <h4>手机号</h4><div>{{phoneNum}}</div>
    <h4>车号</h4><div>{{carNum}}</div>
    <h4>车型</h4><div>{{carModel}}</div>
    <h4>维修时间</h4><div>{{repairTime}}</div>
    <h4>维修地点</h4><div>{{repairPlace}}</div>
    <h4>维修经费</h4><div>{{repairFunds}}</div>
    <h4>维修项目</h4><div>{{repairProject}}</div>
    <h4>维修意见</h4><div>{{repairOpinion}}</div>
    <h4>领导审批</h4><div>{{leaderApproval}}</div>
    <h4>备注</h4><div>{{remarks}}</div>
    -->
    <table border="1">
      <tr class="th">
        <th>选择</th>
        <th>驾驶员姓名</th>
        <th>手机号</th>
        <th>车号</th>
        <th>车型</th>
        <th>维修时间</th>
        <th>维修地点</th>
        <th>维修经费</th>
        <th>维修项目</th>
        <th>维修意见</th>
        <th>领导审批</th>
        <th>备注</th>
      </tr>
      <tr v-for="item in carRepairInfo" :key="item.id">
        <td class="td_1"><input type="radio" :value="item.id" v-model="carId"/></td>
        <td>{{item.driver}}</td>
        <td>{{item.phoneNum}}</td>
        <td>{{item.carNum}}</td>
        <td>{{item.carModel}}</td>
        <td>{{item.repairTime}}</td>
        <td>{{item.repairPlace}}</td>
        <td>{{item.repairFunds}}</td>
        <td>{{item.repairProject}}</td>
        <td>{{item.repairOpinion}}</td>
        <td>{{item.leaderApproval}}</td>
        <td>{{item.remarks}}</td>
      </tr>
    </table>
    <button @click="csvload">CSV</button>
    <button @click="pdfload">PDF</button>
    <button @click="updateInfo">更新</button>
  </div>
</template>

<script>
import { getCarRepairInfo, csvInfoLoad, pdfInfoLoad } from 'network/carRepair.js'

export default {
  name: 'CarRepairNoteView',
  data() {
    return {
      carRepairInfo: {},
      carId: ''
    }
  },
  methods: {
    csvload: function() {
      csvInfoLoad(this.carId).then(res => {
        if (res.result == 'success') {
          alert("下载成功！")
        }
      }).catch(err => {

      })
    },
    pdfload: function() {
      pdfInfoLoad(this.carId).then(res => {
        if (res.result == 'success') {
          alert("下载成功！")
        }
      }).catch(err => {
        
      })
    },
    updateInfo: function() {
      this.$router.push({path: '/carRepairLogin',query:{carId: this.carId}})
    }
  },
  created() {
    let carNum = this.$store.state.carNum
    getCarRepairInfo({carNum: carNum}).then(res => {
      if (res != '') {
        this.carRepairInfo = res
      }
    })
  }
}
</script>

<style scoped>
.th {
  background: rgb(185, 183, 183);
}
.td_1 {
  text-align: center;
}
</style>
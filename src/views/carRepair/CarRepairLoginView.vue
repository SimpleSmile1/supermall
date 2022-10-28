<template>
  <div id="csv">
    <div class="div_1">驾驶员姓名</div><div><input v-model="carInfo.driver" type="text" /></div>
    <div class="div_1">手机号</div><div><input v-model="carInfo.phoneNum" type="text" /></div>
    <div class="div_1">车牌号</div><div><input v-model="carInfo.carNum" type="text" /></div>
    <div class="div_1">车型</div><div><input v-model="carInfo.carModel" type="text" /></div>
    <div class="div_1">维修时间</div><div><input v-model="carInfo.repairTime" type="text" /></div>
    <div class="div_1">维修地点</div><div><input v-model="carInfo.repairPlace" type="text" /></div>
    <div class="div_1">维修经费</div><div><input v-model="carInfo.repairFunds" type="text" /></div>
    <div class="div_1">维修项目</div><div><input v-model="carInfo.repairProject" type="text" /></div>
    <div class="div_1">维修意见</div><div><input v-model="carInfo.repairOpinion" type="text" /></div>
    <div class="div_1">领导审批</div><div><input v-model="carInfo.leaderApproval" type="text" /></div>
    <div class="div_1">备注</div><div><input v-model="carInfo.remarks" type="text" /></div>
    <input type="hidden" v-model="carInfo.carId" />
    <button @click="loginCarRepairInfo" :disabled="insertAlive">新规登录</button>
    <button @click="updateCarRepairInfo" :disabled="updateAlive">更新</button>
  </div>
</template>

<script>
import { loginCarRepairInfo,updateCarRepair,getCarRepairInfoById } from 'network/carRepair.js'

export default {
  name: 'CarRepairLoginView',
  data() {
    return {
      carInfo: {
        carId: '',
        driver: '',
        phoneNum: '',
        carNum: '',
        carModel: '',
        repairTime: '',
        repairPlace: '',
        repairFunds: '',
        repairProject: '',
        repairOpinion: '',
        leaderApproval: '',
        remarks: ''
      },
      insertAlive: false,
      updateAlive: false
    }
  },
  created() {
    let carid = ''
    if (this.$route.query.carId != undefined) {
      carid = this.$route.query.carId
    }
    if (carid != '') {
      this.insertAlive = true
      this.updateAlive = false
      let data = {carId: carid}
      getCarRepairInfoById(data).then(res => {
        this.carInfo.carId = carid,
        this.carInfo.driver = res.driver,
        this.carInfo.phoneNum = res.phoneNum,
        this.carInfo.carNum = res.carNum,
        this.carInfo.carModel = res.carModel,
        this.carInfo.repairTime = res.repairTime,
        this.carInfo.repairPlace = res.repairPlace,
        this.carInfo.repairFunds = res.repairFunds,
        this.carInfo.repairProject = res.repairProject,
        this.carInfo.repairOpinion = res.repairOpinion,
        this.carInfo.leaderApproval = res.leaderApproval,
        this.carInfo.remarks = res.remarks
      }).catch(err => {

      })
    } else {
      this.insertAlive = false
      this.updateAlive = true
    }
  },
  methods: {
    loginCarRepairInfo() {
      let data = {
        driver: this.carInfo.driver,
        phoneNum: this.carInfo.phoneNum,
        carNum: this.carInfo.carNum,
        carModel: this.carInfo.carModel,
        repairTime: this.carInfo.repairTime,
        repairPlace: this.carInfo.repairPlace,
        repairFunds: this.carInfo.repairFunds,
        repairProject: this.carInfo.repairProject,
        repairOpinion: this.carInfo.repairOpinion,
        leaderApproval: this.carInfo.leaderApproval,
        remarks: this.carInfo.remarks
      }
      loginCarRepairInfo(data).then(res => {
        if (res.key == 'success') {
          this.$router.push({path: '/carRepairSearch'})
        }
      }).catch(err => {

      })
    },
    updateCarRepairInfo: function() {
      let data = {
        carId: this.carInfo.carId,
        driver: this.carInfo.driver,
        phoneNum: this.carInfo.phoneNum,
        carNum: this.carInfo.carNum,
        carModel: this.carInfo.carModel,
        repairTime: this.carInfo.repairTime,
        repairPlace: this.carInfo.repairPlace,
        repairFunds: this.carInfo.repairFunds,
        repairProject: this.carInfo.repairProject,
        repairOpinion: this.carInfo.repairOpinion,
        leaderApproval: this.carInfo.leaderApproval,
        remarks: this.carInfo.remarks
      }
      updateCarRepair(data).then(res => {
        if (res.key == 'success') {
          this.$router.push({path: '/carRepairSearch'})
        }
      }).catch(err => {

      })
    }
  }
}
</script>

<style scoped>
.div_1{
  background-color: rgb(185, 179, 179);
  border-color: rgb(185, 179, 179);
  width: 186px;
}
</style>
import { createStore } from 'vuex'

export default createStore({
  state: {
    carNum: ''
  },
  getters: {
  },
  mutations: {
    setCarNum(state, carNum){
      state.carNum = carNum
    }
  },
  actions: {
  },
  modules: {
  }
})

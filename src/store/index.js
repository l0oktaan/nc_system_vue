import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nc_levels: [
      {value: 1,text: 'Major'},
      {value: 2,text: 'Minor'},
      {value: 3,text: 'Observe'},
      {value: 4,text: 'OFI'},
    ],
  },
  getters: {
    nc_levels (state){
      return state.nc_levels
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

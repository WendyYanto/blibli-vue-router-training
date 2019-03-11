import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userData: {}
}

const mutations = {
  setUserData (state, value) {
    state.userData = value
  }
}

const getters = {
  userData (state) {
    return state.userData
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store

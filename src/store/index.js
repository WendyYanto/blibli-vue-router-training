import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '@/api/users'
import membersApi from '@/api/members'

Vue.use(Vuex)

const state = {
  userData: {},
  members: {},
  memberDetail: {}
}

const mutations = {
  setUserData (state, value) {
    state.userData = value
  },
  setMembers (state, value) {
    state.members = value
  },
  setMemberDetail (state, value) {
    state.memberDetail = value
  }
}

const actions = {
  getUserData ({commit}) {
    userApi.getUser().then((resp) => {
      commit('setUserData', resp.data)
    })
  },
  getMembers ({commit}) {
    membersApi.getMembers().then((resp) => {
      commit('setMembers', resp.data)
    })
  },
  getMemberDetail ({commit}, {id}) {
    membersApi.getMemberByID(id).then((resp) => {
      commit('setMemberDetail', resp.data)
    })
  }
}

const getters = {
  userData (state) {
    return state.userData
  },
  members: state => state.members,
  memberDetail: state => state.memberDetail
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store

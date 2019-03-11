import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '@/api/users'
import membersApi from '@/api/members'

Vue.use(Vuex)

let state = {
  userData: {},
  members: [],
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
  },
  setLatestMembers (state, value) {
    let latestMembers = state.members.filter(data =>
      data.id !== value.id
    )
    state.members = latestMembers
  },
  setUpdatedMemberDetail (state, value) {
    let index = state.members.findIndex(curr => curr.id === value.id)
    state.members[index] = value
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
  },
  deleteMemberDetail ({commit}, {id}) {
    membersApi.deleteMemberByID(id).then((resp) => {
      commit('setLatestMembers', resp.data)
    })
  },
  updateMemberDetail ({commit}, {data}) {
    let id = data.id
    membersApi.updateMemberByID(id, data).then((resp) => {
      commit('setUpdatedMemberDetail', resp.data)
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

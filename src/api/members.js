import axios from 'axios'

export default {
  getMembers () {
    return axios.get('/api/members')
  },
  createMember (data) {
    return axios.post('/api/members', data)
  },
  getMemberByID (id) {
    return axios.get('/api/members/' + id)
  },
  deleteMemberByID (id) {
    return axios.delete('/api/members/' + id)
  },
  updateMemberByID (id, data) {
    return axios.put('/api/members/edit/' + id, data)
  }
}

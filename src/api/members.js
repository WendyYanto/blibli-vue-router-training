import axios from 'axios'

export default {
  getMembers () {
    return axios.get('/api/members')
  },
  getMemberByID (id) {
    return axios.get('/api/members/' + id)
  },
  deleteMemberByID (id) {
    return axios.delete('/api/members/' + id)
  }
}
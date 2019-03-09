import Vue from 'vue'
import Router from 'vue-router'
import RegisterPage from '@/pages/RegisterPage'
import MemberPage from '@/pages/MemberPage'
import UpdateMemberPage from '@/pages/UpdateMemberPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/members',
      name: 'Member',
      component: MemberPage
    },
    {
      path: '/member/edit/:id',
      name: 'UpdateMember',
      component: UpdateMemberPage
    }
  ],
  mode: 'history'
})

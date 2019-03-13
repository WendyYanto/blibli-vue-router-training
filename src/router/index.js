import Vue from 'vue'
import Router from 'vue-router'
import RegisterPage from '@/pages/RegisterPage'
import MemberPage from '@/pages/MemberPage'
import HomePage from '@/pages/HomePage'
import MemberDetail from '@/components/members/MemberDetail'

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
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/members/:id',
      name: 'MemberDetail',
      component: MemberDetail
    }
  ],
  mode: 'history'
})

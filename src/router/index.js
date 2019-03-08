import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUsPage from '@/pages/ContactUsPage'
import MemberPage from '@/pages/MemberPage'
import UpdateMemberPage from '@/pages/UpdateMemberPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUsPage
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

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: () => import('../components/contacts/v-contact-list')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/contacts/v-contact-user-info')
    },
    {
      path: '/chats',
      name: 'chats',
      component: () => import('../components/users/v-user-list')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../components/users/chat/v-user-chat'),
      props: true
    }
  ]
})

export default router

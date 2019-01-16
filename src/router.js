import Vue from 'vue'
import Router from 'vue-router'

import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/', redirect: '/login'
    }
  ]
})

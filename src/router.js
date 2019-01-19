import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: () => import('./views/BookDetail.vue')
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

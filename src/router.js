import Vue from 'vue'
import Router from 'vue-router'

import localStorage from '@/services/localStorage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/sign-up',
      name: 'signUp',
      component: () => import('./views/SignUp.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getSessionData()
  const isRootPath = to.path === '/'
  debugger
  if ((to.meta.requiresAuth || isRootPath) && !isLogged) {
    next({ path: '/login' })
  } else if ((!to.meta.requiresAuth || isRootPath) && isLogged) {
    next({ path: '/dashboard' })
  }
  next()
})

export default router

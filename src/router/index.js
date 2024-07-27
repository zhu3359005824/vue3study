import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true } // 添加需要登录验证的标记
  },{
    path:'/test',
   component: ()=>import('../views/TestView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

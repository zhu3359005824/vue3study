import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import TestView from '../views/TestView.vue'


const routes = [
 /* {
    path: '/',
    name: 'LoginView',
    component: LoginView//设置初始界面为LoginView界面
  },*/
  {
    path:'/',
    component:TestView//设置初始界面为TestView界面
  },
  {
    path:'/login',
    component:LoginView
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

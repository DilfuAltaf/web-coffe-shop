import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/home page/HomePage.vue'
import LoginPage from '@/components/login/LoginPage.vue'
import RegisterKomponen from '@/components/register/RegisterKomponen.vue'
import OrderNow from '@/components/Order/OrderNow.vue'
import BuyKomponen from '@/components/buy now/BuyKomponen.vue'
import Chart from '@/components/buy now/chart/Chart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterKomponen,
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/OrderNow',
      name: 'OrderNow',
      component: OrderNow,
    },
    {
      path: '/buy/:id',
      name: 'buy',
      component: BuyKomponen,
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
    },
  ],
})

export default router

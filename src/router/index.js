import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/menu/DropdownMenu.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('../views/TreeChart.vue')
    }
  ]
})

export default router

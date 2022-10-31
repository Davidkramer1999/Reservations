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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/selectCryptoView',
      name: 'selectCryptoView',
      component: () => import('../views/SelectCryptoView.vue')
    },
    {
      path: '/accommodationView',
      name: 'accommodationView',
      component: () => import('../views/AccommodationView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SavedPasswordsView from '@/views/SavedPasswordsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/savedpasswords',
      name: 'Saved Passwords',
      component: SavedPasswordsView
    }
  ]
})

export default router

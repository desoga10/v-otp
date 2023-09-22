import { createRouter, createWebHistory } from 'vue-router'
import PhoneNumber from '../views/PhoneNumber.vue'

const routes = [
  {
    path: '/',
    name: 'phonenumber',
    component: PhoneNumber
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

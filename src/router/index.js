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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

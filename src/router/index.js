import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'error',
    meta: {layout:'empty'},
    component: () => import('@/views/Error.vue'),
  },
  {
    path: '/',
    name: 'home',
    meta: {layout:'main'},
    component: Home,
  },
  {
    path: '/cars',
    name: 'cars',
    meta: {layout:'main'},
    component: () => import('@/views/Cars.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error404 from '../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'error',
    meta: {layout:'empty'},
    component: Error404,
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

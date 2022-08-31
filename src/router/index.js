import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import('../views/Platform')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/Map')
  },
  {
    path: '/space',
    name: 'space',
    component: () => import('../views/Space')
  },
  {
    path: '/expression',
    name: 'expression',
    component: () => import('../views/Expression')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/Business')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

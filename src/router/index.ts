import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: '/tabs/home',
        component: () => import('@/views/tabs/Home.vue')
      },
      {
        path: '/tabs/gallery',
        component: () => import('@/views/tabs/Gallery.vue')
      },
      {
        path: '/tabs/settings',
        component: () => import('@/views/tabs/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

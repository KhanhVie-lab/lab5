import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bai1View from '../views/Bai1View.vue'
import Bai2View from '../views/Bai2View.vue'
import Bai3View from '../views/Bai3View.vue'
import Bai4View from '../views/Bai4View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bai1',
      name: 'bai1',
      component: Bai1View,
    },
    {
      path: '/bai2',
      name: 'bai2',
      component: Bai2View,
    },
    {
      path: '/bai3',
      name: 'bai3',
      component: Bai3View,
    },
    {
      path: '/bai4',
      name: 'bai4',
      component: Bai4View,
    },
  ],
})

export default router

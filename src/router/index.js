import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppVue from '../layout/App.vue'
import AppInsights from '../views/Insights/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: AppVue,
      children: [{ path: '/', name: 'landing', component: AppInsights }]
    },
    {
      path: '/about',
      name: 'aboutPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AppVue,
      children: [
        { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') }
      ]
    }
  ]
})

export default router

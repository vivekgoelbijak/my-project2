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
      path: '/queries',
      name: 'queriesPage',
      component: AppVue,
      children: [
        { path: '/queries', name: 'queries', component: () => import('../views/AboutView.vue') }
      ]
    },
    {
      path: '/trial-signups',
      name: 'trialSignupsPage',
      component: AppVue,
      children: [
        {
          path: '/trial-signups',
          name: 'trail-signups',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/data',
      name: 'dataPage',
      component: AppVue,
      children: [
        { path: '/data', name: 'data', component: () => import('../views/Data/index.vue') }
      ]
    },
    {
      path: '/invoice-generation',
      name: 'invoicePage',
      component: AppVue,
      children: [
        {
          path: '/invoice-generation',
          name: 'invoice-generation',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/question-bank',
      name: 'questionsPage',
      component: AppVue,
      children: [
        {
          path: '/question-bank',
          name: 'question-bank',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/assets',
      name: 'assetsPage',
      component: AppVue,
      children: [
        { path: '/assets', name: 'assets', component: () => import('../views/AboutView.vue') }
      ]
    },
    {
      path: '/faqs',
      name: 'faqsPage',
      component: AppVue,
      children: [{ path: '/faqs', name: 'faqs', component: () => import('../views/AboutView.vue') }]
    },
    {
      path: '/access-management',
      name: 'accessPage',
      component: AppVue,
      children: [
        {
          path: '/access-management',
          name: 'access-management',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/access-management2',
      name: 'accessPage2',
      component: AppVue,
      children: [
        {
          path: '/access-management2',
          name: 'access-management2',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router

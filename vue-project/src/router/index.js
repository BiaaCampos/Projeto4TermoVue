import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Person from '../views/Person.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('../views/Person.vue')
    },
    {
      path: '/species',
      name: 'species',
      component: () => import('../views/SpeciesView.vue')
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('../views/FilmesView.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/PersonagensView.vue')
    },
    {
      path: '/people/:id',
      name: 'personagem-detalhes',
      component: () => import('../views/DetailsPersonagem.vue')
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('../views/FilmesView.vue')
    },
    {
      path: '/films/:id',
      name: 'filmsDetails',
      component: () => import('../views/FilmsDetails.vue')
    },
    {
      path: '/planet',
      name: 'PlanetView',
      component: () => import('../views/PlanetView.vue')
    },
    {
      path: '/planet/:id',
      name: 'PlanetDetails',
      component: () => import('../views/PlanetDetails.vue')
    }

  ]
})

export default router

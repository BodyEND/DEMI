import { createRouter, createWebHistory } from 'vue-router'
import uzivatelView from '../views/uzivatelView.vue'
import produktyView from '../views/produktyView.vue'
import objednavkyView from '../views/objednavkyView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/uzivatel',
      alias:'/',
      name: 'uzivatel',
      component: uzivatelView,
    },
    {
      path: '/objednavky',
      alias:'/',
      name: 'objednavky',
      component: objednavkyView,
    },
    {
      path: '/produkty',
      alias:'/',
      name: 'produkty',
      component: produktyView,
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login.vue'),
    },
  ],
})

export default router

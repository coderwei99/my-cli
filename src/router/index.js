import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/home.vue'
import About from '../components/about.vue'
const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
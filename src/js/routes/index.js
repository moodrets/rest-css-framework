import { createWebHistory, createRouter } from 'vue-router/dist/vue-router.esm-browser'
import Home from '../pages/Home.vue'
import Borders from '../pages/Borders.vue'
import Colors from '../pages/Colors.vue'

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/borders",
    name: "Borders",
    component: Borders,
  },
  {
    path: "/colors",
    name: "Colors",
    component: Colors,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Main from '../views/Main.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/main', name: 'Main', component: Main },
  { path: '/about', name: 'About', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

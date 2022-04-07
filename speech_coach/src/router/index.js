import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Record from '../views/Record.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/record', name: 'Record', component: Record },
  { path: '/about', name: 'About', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import LoginPage from '../src/components/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name:'LoginPage',
    component: LoginPage,
    path:'/login'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
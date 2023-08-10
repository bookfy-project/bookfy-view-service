import HomePage from '../src/components/HomePage.vue';
import LoginPage from '../src/components/LoginPage.vue';
import SingUpPage from '../src/components/SingUpPage.vue';
import AddNewBookPage from '../src/components/AddNewBookPage.vue';
import UpdateBookPage from '../src/components/UpdateBookPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name:'HomePage',
    component: HomePage,
    path:'/'
  },
  {
    name:'LoginPage',
    component: LoginPage,
    path:'/login'
  },
  {
    name: 'SingUpPage',
    component: SingUpPage,
    path: '/signup'
  },
  {
    name:'AddNewBookPage',
    component: AddNewBookPage,
    path:'/add-new-book'
  },
  {
    name:'UpdateBookPage',
    component: UpdateBookPage,
    path:'/update-books/:id'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

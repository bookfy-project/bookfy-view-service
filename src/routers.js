import { createRouter, createWebHistory } from 'vue-router';
import AddNewBookPage from './components/AddNewBookPage.vue';
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import SingUpPage from './components/SingUpPage.vue';
import UpdateBookPage from './components/UpdateBookPage.vue';

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

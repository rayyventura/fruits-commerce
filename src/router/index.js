import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import Products from '../views/Products.vue';
import PastOrders from '../views/PastOrders.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/past-orders',
    name: 'past-orders',
    component: PastOrders,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Client/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('@/views/Client/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('@/views/Client/Product.vue'),
      },
      {
        path: 'carts',
        component: () => import('@/views/Client/Carts.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Admin/Index.vue'),
      },
      {
        path: 'login',
        component: () => import('@/views/Admin/Login.vue'),
      },
      {
        path: 'products',
        component: () => import('@/views/Admin/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('@/views/Admin/Orders.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;

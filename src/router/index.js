import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Client/Products.vue'),
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
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

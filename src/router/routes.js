
const routes = [
  {
    path: '/',
    component: () => import('pages/wrapper/LandingPage.vue')
  },
  {
    path: '/login',
    component: () => import('pages/outter/LoginSection.vue')
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/main/DashboardSection.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
]

export default routes

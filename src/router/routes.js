
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
    path: '/panel',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: 'material', component: () => import('src/pages/main/MaterialStudio.vue') },
      { path: 'clases', component: () => import('src/pages/main/RoomClases.vue') },
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

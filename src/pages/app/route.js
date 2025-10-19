export default ({ extension }) => {
  return {
    path: '/',
    name: 'app',
    redirect: { name: 'home' },
    component: () => import('@/pages/app/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/app/home.vue'),
      },
      {
        path: '/team',
        name: 'team',
        component: () => import('@/pages/app/team.vue'),
      },
      {
        path: '/privacy',
        name: 'privacy',
        component: () => import('@/pages/app/privacy.vue'),
      },
    ],
  };
};

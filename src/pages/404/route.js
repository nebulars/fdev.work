export default () => {
  return {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404/index.vue'),
  };
};

export default [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'chat',
    },
  },
];

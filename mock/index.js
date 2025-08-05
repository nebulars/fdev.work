export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: '张三',
          age: 25,
        },
      };
    },
  },
];

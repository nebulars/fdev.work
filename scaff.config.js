module.exports = {
  main: {
    app: `App.vue`,
    mount: `#app`,
  },

  registry: {
    host: true,
  },

  extract: {
    apis: '/registry/apis.js',
    util: '/utils/*.js',
  },

  theme: {
    colorPrimary: '#3c3c3c',
    /*
    colorSuccess: '#669933',
    colorInfo: '#6699cc',
    colorWarning: '#cccc99',
    colorError: '#cc9999',
    */
  },

  lessVariables: '/variables.module.less',

  // 构建时插件
  // plugins: [],

  // 依赖拓展
  // extensions: [],
};

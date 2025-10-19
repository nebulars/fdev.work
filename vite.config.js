// Use Config from Vite
import { defineConfig, loadEnv } from 'vite';

// Plugin Vue
import vue from '@vitejs/plugin-vue';

// Plugin Scaff
import scaff from '@scaff/vite-plugin-node';

// Plugin Mock
import { viteMockServe } from 'vite-plugin-mock';

// Plugin Visualizer
import { visualizer } from 'rollup-plugin-visualizer';

// Unplugin Vite
import Components from 'unplugin-vue-components/vite';

// Unplugin Resolvers
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// Set Scaff Conf
const vueScaffConf = {};

// Load Env for Development
const env = loadEnv('development', process.cwd());

/**
 * docs: https://vitejs.dev/config/
 * ========== ========== ==========
 */
export default defineConfig({
  plugins: [
    vue(),

    scaff(vueScaffConf),

    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
          resolveIcons: true,
        }),
      ],
    }),

    viteMockServe({
      mockPath: 'mock', // mock 文件夹目录
      localEnabled: true, // 开发环境开启
    }),

    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
  ],

  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },

  server: {
    // Host for VPC
    host: '127.0.0.1',

    // Chat Port
    port: 4986,

    // Proxy
    proxy: {
      '/api': {
        target: env.VITE_API_HOST,
        ws: true,
      },
    },
  },

  plugin: {
    'postcss-pxtorem': {
      // Conversion Ratio
      rootValue: 14,

      // All Props Needs to Transform
      propList: ['*'],

      // Exclude Public
      exclude: /public/i,

      // Minify Pixel not Transform
      minPixelValue: 4,
    },
  },

  optimizeDeps: {
    exclude: [`@scaff/vite-plugin-node`, `@scaff/vite`],
  },
});

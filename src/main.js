// Import Main
import Main from '@/scaff';

// Import Scaff
import Scaff from '@scaff/vite';

/**
 * Issue: https://github.com/vitejs/vite/issues/3033
 * `vite` 版本目前尚属于实验阶段，请勿删除或修改 `main.js` 文件
 * ========= ========== ==========
 */
try {
  // Create App use Scaff
  new Scaff(Main);
} catch (e) {
  console.log('捕获全局报错:', e);
}

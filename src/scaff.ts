// Use Antv
import * as Antv from './antv';

// Use Antv Icons
import * as AntvIcons from './antv-icons';

// Use Animation
import { Animation, QRCode } from '@nebulars/forage';

/**
 * Scaffold by Joenix
 * ========== ========== ==========
 */
export default ({ app, util, route, store, style, i18n, $http, md }, next) => {
  // Get Util
  const { ant } = util.get();

  // Bind i18n on Util
  util.proxy.extension = instance => {
    instance.i18n = i18n.get()[navigator.language](util.get());
    return instance;
  };

  // Extension Antv
  ant.init(app, Antv, { message: Antv.message });
  ant.icon(app, AntvIcons);

  // Extension Animation
  app.use(Animation);

  // Extension QRCode
  app.use(QRCode);

  // [Un] Http Interceptor Request
  $http.interceptor.request = async request => {
    // Get Token from Storage
    const token = localStorage.getItem('token');

    // Auth Token
    if (token) {
      // Add Accept into Headers
      request.headers.set('Accept', 'application/json, text/plain, */*');

      // Set Token from Storage
      request.headers.set('X-Auth-Token', token);

      // Stop
      return;
    }

    // No Token
    location.href = '/';
  };

  // [Un] Http Interceptor Result
  $http.interceptor.resultParse = async result => {
    // Success if Status is 200
    if (result.status === 200) {
      return result.data;
    }

    // Errors
    Antv.message.error(result.message);

    // Any
    return result;
  };

  // Running
  next();

  // Special Console
  console.log(`🅅🅄🄴 ­­🅂🄲🄰🄵🄵`);
};

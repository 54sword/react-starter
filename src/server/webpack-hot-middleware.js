// webpack热更新
export default (app) => {

  // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/server.js
  const webpack = require('webpack');
  const clientConfig = require('../../config/webpack/client.dev');
  // const serverConfig = require('../../config/webpack/server.dev');

  // clientConfig.output.hotUpdateMainFilename = '../../dist/client/[hash].hot-update.json';
  // clientConfig.output.hotUpdateChunkFilename = '../../dist/client/[id].[hash].hot-update.js';

  const clientCompiler = webpack(clientConfig);

  app.use(require("webpack-dev-middleware")(clientCompiler, {
    noInfo: true,
    publicPath: clientConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(clientCompiler));

  /*
  app.use(require("webpack-hot-middleware")(clientCompiler, {
    log: console.log,
    path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
  */

  /*
  const serverConfig = require('../../config/webpack/server.dev');
  const serverCompiler = webpack(serverConfig);

  app.use(require("webpack-dev-middleware")(serverCompiler, {
    noInfo: true, publicPath: serverConfig.output.publicPath
  }));

  app.use(require("webpack-hot-middleware")(serverCompiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
  */

}

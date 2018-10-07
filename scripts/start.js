const webpack = require('webpack');
const express = require('express');
const nodemon = require('nodemon');
const rimraf = require('rimraf');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/server.js


const clientConfig = require('../config/webpack/client.dev');
const serverConfig = require('../config/webpack/server.dev');

const compilerPromise = (compiler) => {
    return new Promise((resolve, reject) => {
        compiler.plugin('done', (stats) => {
            if (!stats.hasErrors()) {
                return resolve();
            }
            return reject('Compilation failed');
        });
    });
};


const app = express();
const WEBPACK_PORT = 4001;

const start = async () => {

  rimraf.sync('./dist');


  clientConfig.entry.app.unshift(`webpack-hot-middleware/client?path=http://localhost:${WEBPACK_PORT}/__webpack_hmr`);

  clientConfig.output.hotUpdateMainFilename =  `[hash].hot-update.json`;
  clientConfig.output.hotUpdateChunkFilename = `[id].[hash].hot-update.js`;

  clientConfig.output.publicPath = `http://localhost:${WEBPACK_PORT}/`;
  serverConfig.output.publicPath = `http://localhost:${WEBPACK_PORT}/`;

  const clientCompiler = webpack([clientConfig, serverConfig]);

  const _clientCompiler = clientCompiler.compilers[0];
  const _serverCompiler = clientCompiler.compilers[1];

  const clientPromise = compilerPromise(_clientCompiler);
  const serverPromise = compilerPromise(_serverCompiler);


  const watchOptions = {
      // poll: true,
      ignored: /node_modules/,
      stats: {
        cached: false,
        cachedAssets: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        timings: true,
        version: false,
      }
  };

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    return next();
  });

  app.use(webpackDevMiddleware(_clientCompiler, {
      publicPath: clientConfig.output.publicPath
  }));

  app.use(webpackHotMiddleware(_clientCompiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

  app.use(express.static('../dist/client'));

  app.listen(WEBPACK_PORT);

  _serverCompiler.watch(watchOptions, (error, stats) => {
      if (!error && !stats.hasErrors()) {
          console.log(stats.toString(serverConfig.stats));
          return;
      }

      if (error) {
          console.log(error, 'error');
      }

      if (stats.hasErrors()) {
          const info = stats.toJson();
          const errors = info.errors[0].split('\n');
          console.log(errors[0], 'error');
          console.log(errors[1], 'error');
          console.log(errors[2], 'error');
      }
  });

  await serverPromise;
  await clientPromise;

  const script = nodemon({
    script: `./dist/server/server.js`,
    ignore: ['src', 'scripts', 'config', './*.*', 'build/client'],
  });

  script.on('restart', () => {
    console.log('Server side app has been restarted.', 'warning');
  });

  script.on('quit', () => {
    console.log('Process ended');
    process.exit();
  });

  script.on('error', () => {
    console.log('An error occured. Exiting', 'error');
    process.exit(1);
  });

}

start();

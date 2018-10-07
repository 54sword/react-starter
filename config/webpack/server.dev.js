const baseConfig = require('./server.base');
const webpack = require('webpack');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

const config = {
  ...baseConfig,
  plugins: [
    new WriteFileWebpackPlugin(),
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
};

// config.entry.app.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')

module.exports = config;

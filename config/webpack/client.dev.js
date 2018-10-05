const baseConfig = require('./client.base');
const webpack = require('webpack');

const config = {
  ...baseConfig,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...baseConfig.plugins
  ],
  mode: 'development',
  devtool: 'cheap-module-inline-source-map'
};

config.entry.app.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')

module.exports = config;

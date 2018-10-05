const baseConfig = require('./client.base');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  ...baseConfig,
  plugins: [
    // 清空打包目录
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../../'),
      verbose: true,
      dry: false
    }),
    ...baseConfig.plugins
  ],
  mode: 'production'
}

module.exports = config;

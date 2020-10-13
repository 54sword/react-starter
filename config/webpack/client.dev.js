const baseConfig = require('./client.base')
const webpack = require('webpack')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')

const config = {
  mode: 'development',
  ...baseConfig,
  plugins: [new WriteFileWebpackPlugin(), new webpack.HotModuleReplacementPlugin(), ...baseConfig.plugins],
  devtool: 'cheap-module-inline-source-map'
}

module.exports = config

const baseConfig = require('./server.base')
const webpack = require('webpack')
const WriteFileWebpackPlugin = require('write-file-webpack-plugin')

const config = {
  mode: 'development',
  ...baseConfig,
  plugins: [new WriteFileWebpackPlugin(), ...baseConfig.plugins, new webpack.HotModuleReplacementPlugin()]
}

module.exports = config

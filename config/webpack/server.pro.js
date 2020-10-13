const baseConfig = require('./server.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
  mode: 'production',
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    // 清空打包目录
    new CleanWebpackPlugin()
  ]
}

module.exports = config

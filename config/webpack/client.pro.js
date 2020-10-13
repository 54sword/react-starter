const baseConfig = require('./client.base')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfig = {
  mode: 'production',
  ...baseConfig,
  plugins: [
    // 清空打包目录
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/static/img/favicon.png', to: 'favicon.png' }]
    }),

    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css\.*(?!.*map)/g, // 注意不要写成 /\.css$/g
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        // 避免 cssnano 重新计算 z-index
        safe: true,
        // cssnano 集成了autoprefixer的功能
        // 会使用到autoprefixer进行无关前缀的清理
        // 关闭autoprefixer功能
        // 使用postcss的autoprefixer功能
        autoprefixer: false
      },
      canPrint: true
    }),
    new OfflinePlugin({
      autoUpdate: 1000 * 60 * 5,
      ServiceWorker: {
        publicPath: '/sw.js'
      },
      // 排除不需要缓存的文件
      excludes: ['../server/index.ejs']
    }),
    ...baseConfig.plugins
  ]
}

module.exports = webpackConfig

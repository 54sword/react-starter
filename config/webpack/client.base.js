const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const chalk = require('chalk')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const config = require('../index')
const devMode = process.env.NODE_ENV === 'development'

/**
 * 配置 autoprefixer 各浏览器前缀
 * postcss-flexbugs-fixes 检查flex错误
 *  */
const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        browsers: ['last 2 versions'] // https://browserl.ist/?q=last+2+version
      })
    ]
  }
}

module.exports = {
  name: 'client',
  target: 'web',

  entry: {
    app: ['@babel/polyfill', './src/client/index.js']
  },

  output: {
    path: path.resolve(__dirname, '../../dist/client'),
    filename: devMode ? '[name].bundle.js' : '[name].[hash].js',
    publicPath: config.publicPath + '/'
  },

  resolve: {
    alias: {
      '@': path.resolve('src'),
      Config: path.resolve('config/index')
    }
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /(\.css|\.scss)$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      // js 文件解析
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: `css`,
            options: {
              modules: true,
              localIdentName: config.class_scoped_name,
              minimize: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: `sass`
          },
          { ...postcssConfig }
        ]
      },

      // css 解析
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: `css`
          },
          { ...postcssConfig }
        ]
      },

      // 小于8K的图片，转 base64
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192'
      },

      // 小于8K的字体，转 base64
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?limit=8192'
      }
    ]
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery"
    // }),

    new webpack.DefinePlugin({
      __SERVER__: 'false',
      __CLIENT__: 'true'
    }),

    // 提取css插件
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css'
    }),

    // 创建视图模版文件，给server使用
    // 主要是打包后的添加的css、js静态文件路径添加到模版中
    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/server/index.ejs'),
      template: 'src/views/index.html',
      metaDom: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>',
      head: config.head,
      analysis_script: config.analysis_script
      // inject: false
    }),

    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    })

    // serviceworker 还在研究中
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'client/sw.js'),
    // })
  ]
}

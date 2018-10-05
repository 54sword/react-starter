const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const config = require('../index');

module.exports = {

  mode: 'development',
  name: 'client',
  target: 'web',

  devtool: 'cheap-module-inline-source-map',

  entry: {
    app: [
      'babel-polyfill',
      'bootstrap/dist/css/bootstrap.min.css',
      './src/client/index',
      // 开发环境下的热更新
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ],
    // 一些主要依赖打包在一起
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'react-document-meta',
      'axios',
      'jquery',
      'popper.js',
      'bootstrap/dist/js/bootstrap.min.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, '../../dist/client'),
    filename: '[name].bundle.js',
    publicPath: config.public_path + "/"
  },

  resolveLoader: {
    moduleExtensions: ["-loader"]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /(\.css|\.scss)$/,
          chunks: 'all',
          enforce: true
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
        loader: 'babel',
        query: {
          cacheDirectory: false,
          plugins: [
            // http://technologyadvice.github.io/es7-decorators-babel6/
            'transform-decorators-legacy'
          ],
          presets: ['es2015', 'react', 'stage-0']
        }
      },

      // scss 文件解析
      {
        test: /\.scss$/,
        // use: extractSass.extract({
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: `css`,
              options: {
                modules: true,
                localIdentName: config.class_scoped_name
                // minimize: true,
                // sourceMap: false
              }
            },
            {
              loader: `sass`,
            }
            // {
              // loader: 'postcss-loader'
            // }
          ]
          // fallback: "style"
        // })
      },

      /*
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'style-loader',
              },
              {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 1,
                  }
              },
              {
                  loader: 'postcss-loader'
              }
          ]
      },
      */

      // 支持
      {
        test: /\.css$/,
        // use: extractSass.extract({
          use: [
            { loader: MiniCssExtractPlugin.loader },
            { loader: `css` }
            // {
              // loader: 'postcss-loader'
            // }
          ]
          // fallback: "style"
        // })
      },

      // 小于8K的图片，转 base64
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },

      // 小于8K的字体，转 base64
      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file?limit=8192" }

    ]
  },

  plugins: [
    // 提取css插件
    new MiniCssExtractPlugin({}),
    // 讲moduels 设置到window
    // new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery"
    // }),
    // 创建视图模版文件，给server使用
    // 主要是打包后的添加的css、js静态文件路径添加到模版中
    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/server/index.ejs'),
      template: 'src/view/index.html',
      headMeta: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>'
    }),

    // 开发环境下的热更新
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin()

    // serviceworker 还在研究中
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'client/sw.js'),
    // })

  ]
}

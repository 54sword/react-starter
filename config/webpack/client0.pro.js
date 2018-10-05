const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const config = require('../index');

module.exports = {

  mode: 'production',
  name: 'client',
  target: 'web',

  entry: {
    app: [
      'babel-polyfill',
      'bootstrap/dist/css/bootstrap.min.css',
      './src/client/index',
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
    filename: '[name].[hash].js',
    publicPath: config.public_path + "/"
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

  resolveLoader: {
    moduleExtensions: ["-loader"]
  },

  module: {

    rules: [

      // js 文件解析
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
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
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: `css`,
            options: {
              modules: true,
              localIdentName: config.class_scoped_name,
              minimize: true,
              sourceMap: false
            }
          },
          {
            loader: `sass`,
          }
          // {
          //   loader: 'postcss-loader'
          // }
        ]
      },

      // 支持
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: `css` }
          // {
          //   loader: 'postcss-loader'
          // }
        ]
      },

      // 小于8K的图片，转 base64
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },

      // 小于8K的字体，转 base64
      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file?limit=8192" }

    ]
  },


  plugins: [

    // 清空打包目录
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    }),
    
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].[hash].css",
      // chunkFilename: '[id].[hash].css',
      // allChunks: false
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),

    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/server/index.ejs'),
      template: 'src/view/index.html',
      headMeta: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>'
    })
  ]
}

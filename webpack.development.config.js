const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const config = require('./config');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: true
})

module.exports = {

  mode: 'production',

  devtool: 'source-map',

  entry: {
    app: [
      './src/client/index',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ],
    // 一些主要依赖打包在一起
    vendors: [
      'react',
      'react-dom',
      'react-router',
      'babel-polyfill',
      'redux',
      'react-redux',
      'react-document-meta',
      'axios',
      'bootstrap/dist/css/bootstrap.min.css',
      'jquery',
      'popper.js',
      'bootstrap/dist/js/bootstrap.min.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: config.public_path + "/"
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
        loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0',
      },

      // scss 文件解析
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: `css`,
              options: {
                modules: true,
                localIdentName: config.class_scoped_name,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: `sass`,
            }
          ],
          fallback: "style"
        })
      },

      // 支持
      {
        test: /\.css$/,
        use: extractSass.extract({
          use: [{ loader: `css` }],
          fallback: "style"
        })
      },

      // 小于8K的图片，转 base64
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' },

      // 小于8K的字体，转 base64
      { test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file?limit=8192" }

    ]
  },

  plugins: [

    // 定义环境变量
    // new webpack.DefinePlugin({
    //   // 是否是生产环境
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    //   },
    //   // 是否是 Node
    //   '__NODE__': JSON.stringify(process.env.__NODE__),
    //   // 是否是开发环境
    //   '__DEV__': JSON.stringify(process.env.NODE_ENV == 'development')
    // }),

    extractSass,
    /*
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.bundle.js'
    }),
    */

    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.ejs'),
      template: 'src/view/index.html',
      meta: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>'
    }),

    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),

    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'client/sw.js'),
    // })

  ]
}

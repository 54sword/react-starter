const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = require('./config');



/*
const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: true,
  allChunks: true
})
*/

module.exports = {

  mode: 'development',
  name: 'server',
  target: 'node',

  // devtool: 'source-map',

  entry: {
    app: [
      // '@babel/polyfill',
      // 'bootstrap/dist/css/bootstrap.min.css',
      // 'jquery',
      // 'popper.js',
      // 'bootstrap/dist/js/bootstrap.min.js',
      './src/server/index',
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ]
    /*
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
    */
  },


  externals: [
      nodeExternals({
          // we still want imported css from external files to be bundled otherwise 3rd party packages
          // which require us to include their own css would not work properly
          whitelist: /\.css$/,
      }),
  ],

  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'server.js',
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
        // use: extractSass.extract({
          use: [
            // { loader: MiniCssExtractPlugin.loader },
            {
              loader: `css-loader/locals`,
              options: {
                // modules: true,
                // localIdentName: config.class_scoped_name,
                // minimize: true,
                // sourceMap: true

                camelCase: true,
                importLoaders: 1,
                modules: true,
                localIdentName: config.class_scoped_name
              }
            },
            { loader: `sass` },
            // { loader: 'style' },
            // { loader: 'postcss-loader' }
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
            // { loader: MiniCssExtractPlugin.loader },
            { loader: `css` },
            // { loader: 'style' },
            // { loader: 'postcss-loader' }
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

    // require('precss'),
    // require('autoprefixer'),

    /*
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    */

    // new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery"
    // }),

    // 定义环境变量
    new webpack.DefinePlugin({
      // 是否是生产环境
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      // 是否是 Node
      '__NODE__': JSON.stringify(process.env.__NODE__),
      // 是否是开发环境
      '__DEV__': JSON.stringify(process.env.NODE_ENV == 'development')
    })

    // extractSass,

    /*
    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.ejs'),
      template: 'src/view/index.html',
      headMeta: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>'
    })
    */

    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()

    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'client/sw.js'),
    // })

  ]
}

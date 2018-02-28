var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')

var config = require('./config')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  allChunks: true,
  // disable: true,
  ignoreOrder: true
})

module.exports = {

  // devtool: 'source-map',

  entry: {
    app: [
      'babel-polyfill',
      './client/index'
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
      // 'webpack-hot-middleware/client?noInfo=true&reload=true'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: config.public_path + "/"
  },

  resolveLoader: {
    moduleExtensions: ["-loader"]
  },

  module: {


    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0',
      },

      /*
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract('style-loader',
          `css-loader?modules&localIdentName=${config.class_scoped_name}!sass-loader`),
        include: path.resolve(__dirname, 'src')
      }
      */

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            use: [{
                loader: `css`,
                options: {
                  // css module
                  modules: true,
                  localIdentName: config.class_scoped_name,
                  // If you are having trouble with urls not resolving add this setting.
                  // See https://github.com/webpack-contrib/css-loader#url
                  // url: false,
                  // 压缩css
                  minimize: true,
                  // sourceMap: true
                }
            }, {
                loader: "sass"
            }],
            // use style-loader in development
            fallback: "style"
        })

        /*
        use: extractSass.extract({
            use: [{
                loader: `css-loader?modules&localIdentName=${config.class_scoped_name}`
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
        */

      },

      // 支持解析css
      {
        test: /\.css$/,
        use: extractSass.extract({
            use: [{
              loader: `css`
            }],
            // use style-loader in development
            // fallback: "style-loader"
        })
      },

      /*
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract('style',
          `css?modules&importLoaders=1&localIdentName=${config.class_scoped_name}!resolve-url!sass`),
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
      */
    ]


    /*
    loaders: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0',
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract('style',
          `css?modules&importLoaders=1&localIdentName=${config.class_scoped_name}!resolve-url!sass`),
        include: path.resolve(__dirname, 'src')
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=40000' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
    */
  },

  optimization: {
    splitChunks:{
        name: 'common'
        // filename: 'common.bundle.js'
    },
    minimize: true
    // runtimeChunk: {
    //
    // }
  },

  plugins: [

    // 清空打包目录
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    }),


    // 定义环境变量
    new webpack.DefinePlugin({
      // 是否是生产环境
      // 'process.env': {
      //   NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      // },
      // 是否是 Node
      '__NODE__': JSON.stringify(process.env.__NODE__),
      // 是否是开发环境
      '__DEV__': JSON.stringify(process.env.NODE_ENV == 'development')
    }),

    // new ExtractTextPlugin({
    //   filename: "[name].[hash].css"
    // }),

    extractSass,

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   filename: 'common.bundle.js'
    // }),


    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.ejs'),
      template: 'src/view/index.html',
      // public_path: config.public_path + '/',
      // cdn: config.qiniu.url + '/',
      // meta: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>'
    }),
    //
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    //
    // new ServiceWorkerWebpackPlugin({
    //   entry: path.join(__dirname, 'client/sw.js'),
    // })

  ]
}

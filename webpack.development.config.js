var webpack = require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var config = require('./config')


// let extractCSS = new ExtractTextPlugin('[name].[hash].css');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    // disable: true
});

// console.log(process.env.__NODE__);

module.exports = {

  devtool: 'source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },

  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './client/index'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: config.assets_path + "/"
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

        /*
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
        */


        use: extractSass.extract({
            use: [{
                loader: `css-loader?modules&localIdentName=${config.class_scoped_name}`
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })

        /*
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: `css-loader?modules&localIdentName=${config.class_scoped_name}`
        }, {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: ["src"]
            }
        }]
        */



      }

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

  plugins: [

    extractSass,

    // 清空打包目录
    // new CleanWebpackPlugin(['dist'], {
    //   root: path.resolve(__dirname),
    //   verbose: true,
    //   dry: false
    // }),
    //



    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),

    // new ExtractTextPlugin('styles.css', {
    //   allChunks: true
    // }),

    // new ExtractTextPlugin("common.css"),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      '__NODE__': JSON.stringify(process.env.__NODE__)
    }),

    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.ejs'),
      template: 'src/view/index.html',
      // public_path: config.public_path + '/',
      // cdn: config.qiniu.url + '/',
      // meta: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>'
    }),

    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}

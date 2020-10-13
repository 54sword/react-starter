const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WebpackBar = require('webpackbar')
const LoadablePlugin = require('@loadable/webpack-plugin')

const config = require('../index')
const devMode = process.env.NODE_ENV === 'development'

/**
 * 配置 autoprefixer 各浏览器前缀
 * postcss-flexbugs-fixes 检查flex错误
 *  */
const postcssConfig = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: ['postcss-flexbugs-fixes', 'autoprefixer']
    }
  }
}

module.exports = {
  name: 'client',
  target: 'web',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('src/app'),
      'react-dom': '@hot-loader/react-dom',
      Config: path.resolve('config/index')
    }
  },

  entry: {
    app: ['@babel/polyfill', './src/client/index']
  },

  output: {
    path: path.resolve(__dirname, '../../dist/client'),
    filename: devMode ? '[name].bundle.js' : '[name].[hash].js',
    publicPath: config.public_path + '/'
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  optimization: {
    // namedModules: true,
    // noEmitOnErrors: true,
    minimize: !devMode,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            // 关键代码
            warnings: true,
            drop_debugger: true,
            drop_console: true
          }
        }
      })
    ],
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
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        // test: /\.(sa|sc|c)ss$/,
        use: [
          'css-hot',
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: `css`,
            options: {
              modules: {
                localIdentName: config.class_scoped_name
              },
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: `sass`,
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                fiber: false
              },
              additionalData: '@import "~@/pages/variables.scss";'
            }
          },
          { ...postcssConfig }
        ]
      },

      // css 解析
      {
        test: /\.css$/,
        use: [
          'css-hot',
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
        test: /\.(png|jpe?g|gif|bmp|svg)$/,
        use: [
          {
            loader: 'url',
            options: {
              // 配置图片编译路径
              limit: 8192, // 小于8k将图片转换成base64
              name: '[name].[hash:8].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'fonts/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: 'false',
      __CLIENT__: 'true'
    }),

    // 提取css插件
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      allChunks: true,
      ignoreOrder: true
    }),

    new WebpackBar(),
    new LoadablePlugin(),

    // 创建视图模版文件，给server使用
    // 主要是打包后的添加的css、js静态文件路径添加到模版中
    new HtmlwebpackPlugin({
      filename: path.resolve(__dirname, '../../dist/server/index.ejs'),
      template: `src/app/views/index${devMode ? '_dev' : ''}.html`,
      metaDom: '<%- meta %>',
      htmlDom: '<%- html %>',
      reduxState: '<%- reduxState %>',
      head: config.head
      // inject: false
    })
  ]
}

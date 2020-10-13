const webpack = require('webpack')
const path = require('path')
const chalk = require('chalk')
const nodeExternals = require('webpack-node-externals')
const WebpackBar = require('webpackbar')
const TerserPlugin = require('terser-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

const config = require('../index')
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  name: 'server',
  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('src/app'),
      'react-dom': '@hot-loader/react-dom',
      Config: path.resolve('config/index')
    }
  },

  entry: {
    app: ['./src/server/index']
  },

  externals: [
    nodeExternals({
      // we still want imported css from external files to be bundled otherwise 3rd party packages
      // which require us to include their own css would not work properly
      allowlist: /\.css$/
    })
  ],

  output: {
    path: path.resolve(__dirname, '../../dist/server'),
    filename: 'server.js',
    publicPath: config.publicPath + '/'
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  optimization: {
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
    ]
  },

  module: {
    rules: [
      // js 文件解析
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel'
      },

      // scss 文件解析
      {
        test: /\.scss$/,
        // test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: `css`,
            options: {
              modules: {
                localIdentName: config.classScopedName,
                exportOnlyLocals: true
              }
              // onlyLocals: true // 只映射，不打包CSS
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
          }
        ]
      },

      // css 文件解析
      {
        test: /\.css$/,
        use: [
          {
            loader: `css`,
            options: {
              modules: {
                exportOnlyLocals: true // 只映射，不打包CSS
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: 'true',
      __CLIENT__: 'false'
    }),
    new WebpackBar(),
    new LoadablePlugin()
  ]
}

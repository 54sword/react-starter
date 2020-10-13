var config = require('./config')

module.exports = function (api) {
  api.cache.forever()

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow'
      // '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-export-namespace-from',
      'react-hot-loader/babel',
      '@loadable/babel-plugin',
      [
        '@dr.pogodin/react-css-modules',
        {
          exclude: 'node_modules',
          generateScopedName: config.class_scoped_name,
          webpackHotModuleReloading: true,
          filetypes: {
            '.scss': {
              syntax: 'postcss-scss',
              plugins: ['postcss-nested']
            }
          }
        }
      ]
    ]
  }
}

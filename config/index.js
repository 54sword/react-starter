
let config = {
  debug: false,
  host: 'localhost',
  port: 4000,
  // 静态资源路径
  assets_path: '//localhost:4000',
  class_scoped_name: '[hash:base64:3]',
}

// 开发环境配置
if (process.env.NODE_ENV == 'development') {
  config.debug = true
  config.class_scoped_name = '[name]_[local]__[hash:base64:5]'
}

module.exports = config

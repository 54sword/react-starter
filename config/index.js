
// 生产环境配置
let config = {
  // 正式环境
  debug: false,

  // 域名
  host: 'localhost',

  //  服务端口
  port: 4000,

  // 登录token，cookie 的名称
  auth_cookie_name: 'signin-cookie',

  // https://github.com/css-modules/css-modules
  class_scoped_name: '[hash:base64:8]',

  // 前端打包后，静态资源路径前缀
  // 生成效果如：//localhost:4000/app.bundle.js
  public_path: '//localhost:4000',
}

// 开发环境配置
if (process.env.NODE_ENV == 'development') {
  config.debug = true
  config.class_scoped_name = '[name]_[local]__[hash:base64:5]'
}

module.exports = config

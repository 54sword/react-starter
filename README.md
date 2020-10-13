# ⚛️ React 同构脚手架

Web 前端世界日新月异变化太快，为了让自己跟上节奏不掉队，总结出了自己的一套 React 脚手架，方便日后项目可以基于此快速上手开发。

## 特点

- 🖥 支持首屏服务端渲染，支持 SEO
- ✂️ 按页面将代码分片，然后按需加载
- 🌈 支持 CSS Modules，避免 CSS 全局污染
- ⚙️ 支持流行 UI 框架 Bootstrap 4
- 🔄 开发环境支持热更新
- 🎛 内置登录、退出、页面权限控制、帖子列表获取、帖子详情获取等功能
- 🚧 内置用户访问页面时，301、404 状态相应的处理逻辑

## 开始

**_没有在 windows 机器上测试过，可能会报错_**

```
$ git clone git@github.com:54sword/react-starter.git
$ cd react-starter
$ npm install or yarn
$ npm run start or yarn start
```

浏览器打开 [http://localhost:4000](http://localhost:4000)

## 相关命令说明

### 开发环境

```
npm run start org yarn start
```

### 生产环境测试

```
npm run pro or yarn pro
```

### 查看包大小

```
npm run analyzer or yarn analyzer
```

## 部署到服务器

1、打包项目

```
npm run dist or yarn dist
```

2、将项目上传至你的服务器  
3、启动服务

Node 启动服务

```
node ./dist/server/server.js
```

或使用 pm2 启动服务

```
pm2 start ./dist/server/server.js --name "react-starter" --max-memory-restart 400M
```

## 更新

### 2020 年 10 月 13 日

- 所有页面使用 `hooks` 重构
- 优化 `redux` 写法
- 所有依赖包升级到最新,除 `webpack` 没有升级到 5.0
- `react-loadable` 替换成 `@loadable/component`
- 增加了 `react-hot-loader` react 热更新
- 增加了全局 CSS 变量 `additionalData: '@import "~@/pages/variables.scss";'`，见 webpack 配置文件
- 更多自己 clone 下来和老的对比下。

### 2020 年 08 月 31 日

- `progress-bar-webpack-plugin`替换成`WebpackBar`
- `node-sass`替换成`dart-sass`

### 2018 年 12 月 7 日

- 增加 webpack-bundle-analyzer 查看模块大小
- 增加 postcss 的 autoprefixer 浏览器前缀的插件
- 增加 webpack aliases 别名 @ = 指向 src 目录，Config = 指向 config/index
- 增加 progress-bar-webpack-plugin 打包进度
- 把 actions 和 reducers 放入 store 目录，统一管理
- 升级 react-css-modules 为 babel-plugin-react-css-modules 简化 CSSmodules
- 更新前

```
import CSSModules from 'react-css-modules';
import styles from './style.scss';
@CSSModules(styles)
```

- 使用方法

```
<div styleName="class"></div>
```

- 更新后

```
import './style.scss';
```

- 使用方法一样

### 2018 年 10 月 7 日

- 升级 webpack 4，以及 webpack 配置优化
- 升级 babel 7
- 升级 React 以及相关依赖到最新版本

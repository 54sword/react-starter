# ⚛️ React 同构脚手架
Web前端世界日新月异变化太快，为了让自己跟上节奏不掉队，总结出了自己的一套React脚手架，方便日后项目可以基于此快速上手开发。


## 特点
 + 🖥 支持首屏服务端渲染，支持SEO
 + ✂️ 按页面将代码分片，然后按需加载
 + 🌈 支持 CSS Modules，避免CSS全局污染
 + ⚙️ 支持流行UI框架 Bootstrap 4
 + 🔄 开发环境支持热更新
 + 🎛 内置登录、退出、页面权限控制、帖子列表获取、帖子详情获取等功能
 + 🚧 内置用户访问页面时，301、404 状态相应的处理逻辑  


## 开始

***没有在windows机器上测试过，可能会报错***

```
$ git clone git@github.com:54sword/react-starter.git
$ cd react-starter
$ npm install
$ npm run start
```
浏览器打开 [http://localhost:4000](http://localhost:4000)

## 相关命令说明

### 开发环境  

```
npm run start
```

### 生产环境测试

```
npm run pro
```

## 部署到服务器
1、打包项目

```
npm run dist 
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
### 2018年10月7日
- 升级 webpack 4，以及 webpack 配置优化
- 升级 babel 7
- 升级 React 以及相关依赖到最新版本 
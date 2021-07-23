# coderzy-cli
# 一个帮助你快速搭建一个react app的脚手架

## 此脚手架集成了React+React-Router+antd+Typescript+Mobx+less+按需引入antd样式

如何安装？

``` js
npm install coderzy-cli -g
```
## 创建项目
react项目模块已经帮你配置
* 常用目录结构
* config-overrides.js(其中配置了名 ps:别名不是'@',而是'src',以及跨域代理配置)
* dev-api-host.js文件中导出你需要跨域请求的域名
* axios(已封装到src/api中)
* react-router(src\Pages\routes.tsx中配置路由)
* mobx

创建项目

``` js
coderzy create your-project-name
```

自动拉取项目模板、安装项目依赖、自动启动项目

后续会持续更新脚手架

脚手架地址：https://github.com/coderzy1998/coderzy-cli

react项目模板地址：https://github.com/coderzy1998/coderzy-react-temp
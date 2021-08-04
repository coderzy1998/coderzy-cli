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

选择语言模板

* JavaScript(default)
* TypeScript

选择包管理工具

* yarn
* npm(default)

自动拉取项目模板、安装项目依赖、自动启动项目

后续会持续更新脚手架

脚手架地址：https://github.com/coderzy1998/coderzy-cli

## 项目开发

项目开发目前支持以下功能

* 创建React+Mobx的页面

#### 创建React页面

``` js
coderzy addpage YourPageName // 例如coderzy addpage Home
coderzy addpage YourPageName -d src/Views  // 也可以指定文件夹
```

默认会创建src/Pages/Home文件夹,并且创建以下三个文件: Home.tsx,index.ts,store.ts

``` js
// Home.tsx
import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'

import Store from './store'

const Home: FC = () => {
  const [store] = useState(new Store())

  return (
    <div>
      Home
    </div>
  )
}

export default observer(Home)
```

``` js
// store.ts
import { makeAutoObservable } from 'mobx'

export default class HomeStore {
  constructor() {
    makeAutoObservable(this)
  }
}
```

``` js
// index.ts
import { lazy } from 'react'

export default lazy(() => import('./Home'))
```

ps: 创建完页面后需要自己在src/Pages/routes.tsx文件中添加路由
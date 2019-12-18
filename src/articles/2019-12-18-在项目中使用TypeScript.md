---
path: "/article/BFE1A715482A3D29"
date: "2019-12-18"
title: "在项目中使用TypeScript"
excerpt: "前端分享会的内容"
tags: ['TypeScript']
---

## TypeScript是什么
> TypeScript是JavaScript的一个超集,主要提供了`类型系统`和对`ES6`的支持,可编译成纯JavaScript。
> 它由Microsoft开发，代码开源在[GitHub](https://github.com/Microsoft/TypeScript)上。


## 为什么选择TypeScript

### TypeScript 增加了代码的可读性和可维护性
- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
- 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等

### TypeScript 非常包容
- TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可
- 即使不显式的定义类型，也能够自动做出类型推论
- 可以定义从简单到复杂的几乎一切类型
- 即使 TypeScript 编译报错，也可以生成 JavaScript 文件
- 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取

### TypeScript 拥有活跃的社区
- 大部分第三方库都有提供给 TypeScript 的类型定义文件
- Google 开发的 Angular2 就是使用 TypeScript 编写的
- TypeScript 拥抱了 ES6 规范，也支持部分 ESNext 草案的规范

### TypeScript 的缺点 
任何事物都是有两面性的，我认为 TypeScript 的弊端在于：

- 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
- 短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
- 集成到构建流程需要一些工作量
- 可能和一些库结合的不是很完美

## 在前端项目中使用TypeScript
以下只列举一些开发中用到的功能，详细的TS指南可以查看[官方文档](https://www.tslang.cn/)

### 对api模块的改造
下面是对一个api模块的改造，对原有的接口入参和返回做了类型定义，这样在进行开发和维护时，只要查看这些类型定义，就可以快速的获取该接口返回的正确数据类型。方便下一步的本地数据使用和业务逻辑处理。

改造前
```js
import { http } from '@plugin/http'
export default {
  /**
   * 获取可配置的权限列表
   */
  getConfigurablePermissionList (companyId = null) {
    return http('/menu/getMenu', { companyId })
  }
}
```
改造后
```ts
import { http } from '@plugin/http'
import { PermissionData } from '@type/response'

interface IBaseResponse {
  code: number,  
  data: PermissionData,
  msg: string | nulls
}

export default {
  /**
   * 获取可配置的权限列表
   */
  getConfigurablePermissionList (companyId: number | null)
  : Promise<IBaseResponse>
  {
    return http('/menu/getMenu', { companyId })
  }
}

```

### 对组件及业务的类型校检进行改造
对函数进行参数校验，对参数和变量进行了强类型约束，在编码阶段就能获得对应的类型提示，避免了很多在运行时才能发现的类型错误。

改造前
```js
const STATE = {
  TO_BE_DONE: 0,
  DOING:1,
  DONE: 2
}

function useState (state) {
  if (state && state.DOING && state.DOING === 1) {
    // 进行业务代码的编写...
  }
}

useState(STATE.DOING)
```

改造后
```ts
// 定义枚举
const enum STATE {
  TO_BE_DONE = 0,
  DOING = 1,
  DONE = 2
}

function useState (state: STATE): void {
  if (state === STATE.DOING) {
    // 直接进行业务代码的编写...
  }
}

useState(STATE.DOING)
```

其它常见的问题就是涉及严格的空值检查，即使用属性来构造或尝试调用可能为 null 或 undefined 的内容，在编码阶段就能获得IDE的警告。
另一种是变量类型不匹配的问题，当我们尝试使用彼此不匹配的类型时,同样在开发阶段TypeScript就会提示我们，从而在上线之前减少这类bug的出现。

## 写在最后

目前Vue（2.x）与TS的契合度不够好，如果只是练手不建议直接在生产中使用。Vue 3.x出来之后将会更好的支持TS（尤小佑说的），可以在3.x出来前在自己的小项目里多玩玩`TS` 和 `React hooks` 。

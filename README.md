# vue3-typescript-framework
vue3 + typescript 项目框架
> 可以快速搭建框架，直接使用，不用每次都从零开始搭建框架

## 项目依赖安装
```
yarn install
```

### 启动开发环境
```
yarn dev
```

### 构建测试环境
```
yarn test
```

### 构建预发布环境
```
yarn beta
```

### 构建生产环境
```
yarn prod
```

### 已搭建功能
+ vue3 框架
+ TypeScript 静态类型检查
+ vue-router 路由处理
+ git commit 提交前的 eslint 校验
+ eslint 规则
+ sass
+ axios 的封装
+ loading,message,rotatePhone等基础组件
+ pxtorem px 转 rem 的处理，默认 192，移动端可以改为 37.5等， vue.config.js 文件中修改
+ reset.css 重置初始样式
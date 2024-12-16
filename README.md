# vue-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### 问题记录

vue： 1.开启 setup，vue 做了什么？ 2.选项式和组合式的区别？(选项式基于组合式 API 基础上实现) 3.
当根组件没有设置 template 选项时，Vue 将自动使用容器的 innerHTML 作为模板(官网)
我现在遇到的场景是：根组件没有设置 template 选项时，Vue 也没有自动使用容器的 innerHTML 作为模板；
挂载错误节点反而会显示？ 刷新页面会先渲染容器的 innerHTML，再渲染根组件的 template 内容
4.app.config.errorHandler 都能处理哪些类型的错误？ 5.确保在挂载应用实例之前完成所有应用配置，如果再实例挂载之后再进行应用配置会怎么样？
6.createApp 方法可以创建多个应用实例并挂载到不同的节点上，那多个实例之间有必要进行通信吗？如果有，如何进行通信？ 7.模板语法与 JSX 语法的区别？二者编译时优化的等级？
8.ref 与 reactive、shallowRef 的区别
9.data 函数返回的对象的顶层属性会被代理到组件实例上，是如何代理的？非顶层属性为什么不代理？非顶层属性是怎么处理的？不在 data 上定义的属性如何成为响应式对象($set)？ 10.调用生命周期钩子时，Vue 会自动将回调函数注册到当前正被初始化的组件实例上。这意味着这些钩子应当在组件初始化时被同步注册。如果异步注册，会怎么样？
生命周期钩子调用不一定在 setup 或者<script></script>内的词法上下文中，它也可以在一个外部函数中调用，只要调用栈是同步的，且最终起源自 setup() 就可以，那 Vue 是如何找到该生命周期钩子的？
11.ref 声明的响应式属性在哪些情况下会被浅层解包？
setup 返回
this 访问
template 模板中 12.为什么不能在 setup 中访问 this，这么做的目的是？
13.setup 应该同步返回一个对象，唯一可以使用 async setup 的情况是该组件是 Suspense 的后裔，如何使用？、 14.如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在 onBeforeUpdate 生命周期钩子中编写相关逻辑，这个钩子是干嘛的
15.watch 的第三个参数的所有配置项？
16.watchEffect 是怎么做到自动追踪的？watch 与 watchEffect 的区别？

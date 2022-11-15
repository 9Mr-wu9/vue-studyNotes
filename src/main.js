import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
const app = createApp(App);
app.config.unwrapInjectedRef = true



// 通过 createApp 创建应用实例，传入的对象是个组件(根组件)；可以创建多个应用实例
app.mount("#app"); // 应用实例必须在调用了 .mount() 方法后才会渲染出来。
// 该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
// 应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。
// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。
// 不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
